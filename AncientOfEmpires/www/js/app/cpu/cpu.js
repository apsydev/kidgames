(function (win) {

	"use strict";
	/*global console, alert, window, document */
	/*global APP*/

	function Cpu(data) {
		this.player = data.player;
		this.controller = data.controller;
		this.view = data.view;
	}

	function Scenario(data) {
		this.attr = {};
		this.extendSelf(data);
		this.rate();
	}

	Scenario.prototype = {
		extendSelf: function (data) {
			var key;
			for (key in data) {
				if (data.hasOwnProperty(key)) {
					this.attr[key] = data[key];
				}
			}

			return this;

		},

		rateCost: {

			getBuilding: {
				farm: 10,
				castle: 15
			},
			upBones: 9,
			q: {
				availableReceiveDamage: -0.5,
				availableGivenDamage: 1.5,
				availableResponseDamage: -0.5,
				placeArmor: 0.5,
				nearestNoPlayerBuilding: -1.5
			},
			withBuilding: 3

		},

		rate: function() {

			var rate = 0,
				key,
				value,
				data = this.get(),
				rateCost = this.rateCost;

			for (key in data) {
				if (data.hasOwnProperty(key)) {

					value = data[key];

					switch (key) {

						case 'availableReceiveDamage':
							rate += value * rateCost.q[key];
							break;

						case 'availableGivenDamage':
							rate += value * rateCost.q[key];
							break;

						case 'availableResponseDamage':
							rate += value * rateCost.q[key];
							break;

						case 'withBuilding':
							rate += value ? rateCost[key] : 0;
							break;

						case 'placeArmor':
							rate += value * rateCost.q[key];
							break;

						case 'nearestNoPlayerBuilding':
							rate += value.pathLength * rateCost.q[key];
							break;

						case 'getBuilding':

							rate += rateCost[key][value];

							break;

						case 'grave':
							rate += rateCost.upBones;

							break;

					}

				}
			}







			this.set('rate', rate);

		},

		set: function (key, value) {
			this.attr[key] = value;
			return this;
		},

		get: function (key) {
			return key !== undefined ? this.attr[key] : this.attr;
		},

		execute: function (unit, controller) {

			// move to xy
			var endX = this.get('x'),
				endY = this.get('y');

			if (unit.x !== endX || unit.y !== endY) {
				//console.log('move to', unit.type, unit.x, '->', endX, unit.y, '->', endY);
				unit
					.moveTo({
						x: endX, y: endY
					}, controller);

				controller.view.moveUnit(unit);
			}

			switch ( this.get('type') ) {

				case 'none':

					unit.setEndTurn();

					controller.wispAction();
					controller.view.showEndUnitTurn(unit);

					break;

				case 'attack':

					controller.attackUnit(unit, controller.getUnitBy({
						unitId: this.get('enemyUnitId'),
						playerId: this.get('enemyPlayerId')
					}));

					controller.view.hideUnitsUnderAttack();

					controller.wispAction();
					controller.view.showEndUnitTurn(unit);

					break;

				case 'getBuilding':

					unit.getBuilding(controller);

					controller.view.hideGetBuilding();

					controller.wispAction();
					controller.setStoreButtonStateForActivePlayer();

					unit.setEndTurn();
					controller.view.showEndUnitTurn(unit);

					break;

				case 'upBones':

					controller.upBonesFromGrave(unit, this.get('grave'));

					controller.wispAction();
					unit.setEndTurn();
					controller.view.showEndUnitTurn(unit);

					break;

			}


		},
		buildingTypeValue: {
			default: 0,
			farm: 5,
			castle: 10
		},
		getBuildingSortValue: function (buildingType) {
			return this.buildingTypeValue[buildingType] || 0; // see this this.buildingTypeValue.default
		}

	};


	Cpu.prototype = {
		run: function () {

			// 1
			// get all units
			// get player's units
			// get enemy units
			// 2
			// get all no player's farm
			// 3
			// detect action for every unit

			var controller = this.controller,
				player = this.player,
				playerId = player.id,
				util = win.util,
				playerUnits = [],
				availableGetBuilding = this.getAvailableGetBuilding({
					player: player,
					controller: controller
				}); // {x5y6: true, x2y10: true}

			console.log(availableGetBuilding);

			util.objForEach(controller.units, function(unit) {
				return unit.playerId === playerId && playerUnits.push(unit);
			});

			// 3
			// detect action for every unit
			playerUnits.forEach(function(unit) {

				// collect enemy units
				var enemyUnits = [];
				util.objForEach(controller.units, function(unit) {
					return unit.playerId !== playerId && enemyUnits.push(unit);
				});

				// collect building
				var playerBuildings = [],
					noPlayerBuildings = [];
				util.objForEach(controller.buildings, function(build) {
					return build.playerId === playerId ?
						playerBuildings.push(build) :
						noPlayerBuildings.push(build);
				});


				var startCoordinates = { x: unit.x, y: unit.y },
					// get available coordinate
					availablePath = unit.getAvailablePath(controller),
					// array for all scenarios
					scenarios = [],
					// available actions list
					availableActions = ['none'].concat(unit.availableActions);

				// add current coordinates
				availablePath.push(startCoordinates);

				// move to every availablePath
				availablePath.forEach(function(xy) {

					// main concept -> what to do on this xy

					availableActions.forEach(function(action) {

						unit.x = xy.x;
						unit.y = xy.y;

						var
							// building which can be owned
							building,
							// count probably received damage
							availableReceiveDamage = 0,
							// count probably given damage
							availableGivenDamage = 0,
							// count probably response damage from enemy attacked unit
							availableResponseDamage = 0,
							// is unit stay on build
							withBuilding = controller.getDefByBuilding(unit),
							// count armor by place type - include terrain type and building
							placeArmor = withBuilding || controller.getDefByTerrain(unit),
							nearestNoPlayerBuilding = unit.getNearestNoPlayerBuilding(controller);

						// get unit who can attack and count damage received by every units
						enemyUnits
							.forEach(function (enemyUnit) {
								if ( (enemyUnit.findUnitsUnderAttack(controller.units) || []).indexOf(unit) === -1 ) {
									return;
								}
								availableReceiveDamage += enemyUnit.getAvailableGivenDamage(unit, controller);
							});

						switch (action) {

							case 'none':

								scenarios.push(new Scenario({

									x: xy.x,
									y: xy.y,
									type: action,
									availableReceiveDamage: availableReceiveDamage,
									availableGivenDamage: availableGivenDamage,
									availableResponseDamage: availableResponseDamage,
									withBuilding: withBuilding,
									placeArmor: placeArmor,
									nearestNoPlayerBuilding: nearestNoPlayerBuilding
								}));

								break;

							case 'attack':

								(unit.findUnitsUnderAttack(controller.units) || []).forEach(function(enemyUnit) {

									availableGivenDamage = unit.getAvailableGivenDamage(enemyUnit, controller);

									if ( (enemyUnit.findUnitsUnderAttack(controller.units) || []).indexOf(unit) !== -1 ) {
										availableResponseDamage = enemyUnit.getAvailableGivenDamage(unit, controller, availableGivenDamage);
									}

									scenarios.push(new Scenario({
										enemyUnitId: enemyUnit.id,
										enemyPlayerId: enemyUnit.playerId,

										x: xy.x,
										y: xy.y,
										type: action,
										availableReceiveDamage: availableReceiveDamage,
										availableGivenDamage: availableGivenDamage,
										availableResponseDamage: availableResponseDamage,
										withBuilding: withBuilding,
										placeArmor: placeArmor,
										nearestNoPlayerBuilding: nearestNoPlayerBuilding
									}));

								});
								//

								//console.log(canAttackedUnits);


								break;

							case 'getBuilding':

								// get building by XY
								building = controller.buildings['x' + xy.x + 'y' + xy.y];

								if ( building && building.playerId !== unit.playerId && util.has(unit.availableBuildingsType, building.type) ) {

									scenarios.push(new Scenario({
										getBuilding: building.type,

										x: xy.x,
										y: xy.y,
										type: action,
										availableReceiveDamage: availableReceiveDamage,
										availableGivenDamage: availableGivenDamage,
										availableResponseDamage: availableResponseDamage,
										withBuilding: withBuilding,
										placeArmor: placeArmor,
										nearestNoPlayerBuilding: nearestNoPlayerBuilding
									}));

								}

								break;

							case 'upBones':

								(unit.findGravesForUp(controller.unitsRIP, controller.units) || []).forEach(function (grave) {

									scenarios.push(new Scenario({
										grave: {
											x: grave.x,
											y: grave.y,
											lifeAfterDeadLength: grave.lifeAfterDeadLength
										},

										x: xy.x,
										y: xy.y,
										type: action,
										availableReceiveDamage: availableReceiveDamage,
										availableGivenDamage: availableGivenDamage,
										availableResponseDamage: availableResponseDamage,
										withBuilding: withBuilding,
										placeArmor: placeArmor,
										nearestNoPlayerBuilding: nearestNoPlayerBuilding
									}));

								});

								break;

						}



					});

				});

				// set start state
				unit.x = startCoordinates.x;
				unit.y = startCoordinates.y;


				// ok
				// оценить каждый сцейнарий - сценарий сам себе даёт оценку при илициализации
				// к примеру, за захват здания давать 10 очков
				// поднять скилета - тоже 10 очков
				// также давать очки за то что ходит по защищённым клеткам
				// за наносимый дамаг - столько очков сколько дамага, тоже самое и для получаемого дамага
				// так же давайть очки за продвижение к не занятому зданию
				// так же очки за то что стал на здание

				// доп правила
				// 1 - если есть солдат который может занять сдание, и текущий воин НЕ может занят дание, то уйти со здания или не занимать здание;
				// засетить этому сценарию минус инфинити

				// 2 - если рядом есть враг (рацарь или солдат) который может захватить сдание, не уходить со здания
				// рассматривать только те сценарии где юнит не менят позицию

				// при принятии конечного решения, проверить, не противоречит сценарий какому либо из правил
				// если противоречит - то занизить рейтиг сценнария до нуля


				scenarios = scenarios.sort(function(a, b){
					return b.get('rate') - a.get('rate');
				});

				scenarios[0].execute(unit, controller);
				// only for test - end

				// rate better scenarios

			});


		},
		getAvailableGetBuilding: function (data) {

			var player = data.player,
				playerId = player.id,
				controller = data.controller,
				allUnits = controller.units,
				playerUnits = [],
				canGetBuildingUnits = [],
				canNotGetBuildingUnits = [],
				availableGetBuilding = {},
				key, unit,
				util = win.util;

			for (key in allUnits) {
				if (allUnits.hasOwnProperty(key)) {
					unit = allUnits[key];
					if (unit.playerId === playerId) {
						playerUnits.push(unit);
					}
				}
			}

			playerUnits.forEach(function (unit) {
				return unit.availableBuildingsType ? canGetBuildingUnits.push(unit) : canNotGetBuildingUnits.push(unit);
			});

			// 'remove' extra units from map
			canNotGetBuildingUnits.forEach(function (unit) {
				unit.cpuData = unit.cpuData || {};
				unit.cpuData.x = unit.x;
				unit.cpuData.y = unit.y;
				unit.x = -Infinity;
				unit.y = -Infinity;
			});

			canGetBuildingUnits.forEach(function (unit) {

				unit.getAvailablePath(controller).forEach(function (xy) {
					var buildingXY = 'x' + xy.x + 'y' + xy.y,
						building = controller.buildings[buildingXY];
					if ( building && building.playerId !== unit.playerId && util.has(unit.availableBuildingsType, building.type) ) {
						availableGetBuilding[buildingXY] = true;
					}
				});

			});

			canNotGetBuildingUnits.forEach(function (unit) {
				unit.x = unit.cpuData.x;
				unit.y = unit.cpuData.y;
			});

			return availableGetBuilding;

		}

	};

	APP.Cpu = Cpu;

}(window));