(function (win, doc, docElem) {

	"use strict";
	/*global window, document */
	/*global APP, util */

	win.APP = win.APP || {};

	function BattleController() {

		this.unitCounter = 0;
		this.units = {};
		this.buildings = {};
		this.unitsRIP = {};
		this.map = {};
		this.view = {};
		this.lifeAfterDeadLimit = 3;
		this.unitAvailableActions = {};

		////////////////
		this.players = [
			{
				id: 1,
				name: 'Vasya',
				type: 'human',
				gold: 700
			},
			{
				id: 2,
				name: 'Petya',
				type: 'cpu',
				gold: 1000
			}
		];

		this.activePlayer = null;

	}

	BattleController.prototype = {

		setMap: function(map) {
			this.map = util.createCopy(map);
		},

		setView: function(view) {
			this.view = view;
		},

		setMapForView: function() {
			this.addUnitsToControllerAndView();
			this.addBuildingsToControllerAndView();
		},
		addUnitsToControllerAndView: function() {

			// get units
			var units = this.map.units;

			units.forEach(function(unit){
				var newUnit = this.appendUnit(unit); // to controller
				this.view.appendUnit(newUnit);
			}, this);

		},
		addBuildingsToControllerAndView: function() {
			var buildings = this.map.buildings;

			buildings.forEach(function(build){
				var newBuild = this.appendBuilding(build); // to controller
				this.view.appendBuilding(newBuild);
			}, this);

		},
		appendUnit: function(data) {
			var unit = new APP.units[data.type](data),
				unitId = this.unitCounter;

			unit.id = unitId;

			this.units[unitId] = unit;

			this.unitCounter += 1;

			return unit;
		},
		appendBuilding: function(build) {
			this.buildings['x' + build.x + 'y' + build.y] = build;
			return build;
		},

		hideAllActions: function() {
			this.view.hideAvailablePath();
			this.view.highlightUnit();
			this.view.hideUnitsUnderAttack();
			this.view.hideGetBuilding();
		},

		createAvailableActions: function(unit) {

			var actions = {};

			this.hideAllActions();

			unit.availableActions.forEach(function(action){

				var availablePath, availableAttack, unitX, unitY, units, key, itemUnit, building;

				unitX = unit.x;
				unitY = unit.y;

				switch (action) {

					case 'move':

						if (!unit.wasMove) {

							availablePath = unit.getAvailablePath(this);
							availablePath.forEach(function(xy){
								actions['x' + xy.x + 'y' + xy.y] = 'move';
							}, this);

							// remove other units coords

							units = this.units;

							for (key in units) {
								if (units.hasOwnProperty(key)) {
									itemUnit = units[key];
								}
							}

							this.view.highlightPath({ path: availablePath, color: unit.color });

						}


						break;

					case 'attack':

						if (!unit.wasAttack) {

							availableAttack = unit.findUnitsUnderAttack(this.units) || [];
							availableAttack.forEach(function(xy){
								actions['x' + xy.x + 'y' + xy.y] = 'attack';
							}, this);

							this.view.showUnitsUnderAttack(availableAttack);


						}


						break;

					case 'getBuilding':

						if (!unit.wasGetBuilding) {

							building = this.buildings['x' + unitX + 'y' + unitY];

							if (
								building &&
								building.playerId !== unit.playerId &&
								util.has(unit.availableBuildingsType, building.type)
								) {
								actions['x' + unitX + 'y' + unitY] = 'getBuilding';
								this.view.showGetBuilding(unit);
							}

						}

						break;




				}


			}, this);


			return actions;

		},

		getUnitAction: function(x, y) {
			return this.unitAvailableActions['x' + x + 'y' + y];
		},

		endAction: function() {

			var x, y;
			x = this.focusedUnit.x;
			y = this.focusedUnit.y;
			this.focusedUnit = false;
			this.unitAvailableActions = {};
			this.onClick({x: x, y: y});

		},

		onClick: function(coordinates) {

			var units, unit, x, y, unitAction;

			x = coordinates.x;
			y = coordinates.y;

			units = this.getUnitsByCoordinates(coordinates);
			unit = units[0];

			unitAction = this.getUnitAction(x, y);

			if (unitAction) {

				switch (unitAction) {
					case 'move':
						this.focusedUnit.moveTo(coordinates, this);
						this.view.moveUnit(this.focusedUnit);

						this.endAction();
						break;

					case 'attack':
						this.attackUnit(this.focusedUnit, unit);
						this.view.hideUnitsUnderAttack();

						this.endAction();
						break;

					case 'getBuilding':

						this.focusedUnit.getBuilding(this);

						this.view.hideGetBuilding();
						this.endAction();
						break;

				}


			} else {

				this.focusedUnit = false;
				this.unitAvailableActions = {};

				if (unit) {
					this.focusedUnit = unit;
					if (unit.playerId === this.activePlayer.id) {
						this.unitAvailableActions = this.createAvailableActions(unit);
						this.view.highlightUnit(unit);
						// detect - no available action of unit
						if (!Object.keys(this.unitAvailableActions).length) {
							this.view.showEndUnitTurn(unit);
						}
					} else {
						this.view.highlightPath({ path: unit.getAvailablePath(this), color: unit.color });
						this.view.highlightUnit(unit);
					}

					this.view.showUnitInfo(unit);

				} else {
					this.focusedUnit = false;
					this.unitAvailableActions = {};
					this.hideAllActions();

					this.view.showPlaceInfo({
						map: this.map,
						coordinates: coordinates
					});

				}
			}
			



			//return;

//			var unitForInfo = unit || this.activeSelectedUnit;
//			if (unitForInfo) {
//				this.view.showUnitInfo(unitForInfo);
//			} else {
//			}

		},

//		getBuildingToOccupied: function(unit) {
//
//			var build = this.buildings['x' + unit.x + 'y' + unit.y];
//
//			if (!build) {
//				return false;
//			}
//
//			if (build.playerId === unit.playerId) {
//				return false;
//			}
//
//			unit.canGetBuilding = util.has(unit.canBuildings, build.type);
//
//			if (unit.canGetBuilding) {
//				this.view.showUnitCanGetBuilding(unit);
//				return build;
//			}
//
//			return false;
//
//		},

//		buildingChangeOwner: function(unit) {
//
//			var build = this.buildings['x' + unit.x + 'y' + unit.y];
//
//			build.playerId = unit.playerId;
//			build.color = unit.color;
//
//			this.view.setBuildingColor(build);
//
//		},
//
//		defaultStateToOccupied: function() {
//			var allUnits = this.units,
//				key;
//
//			for (key in allUnits) {
//				if (allUnits.hasOwnProperty(key)) {
//					allUnits[key].canGetBuilding = false;
//				}
//			}
//
//			this.view.hideUnitCanGetBuilding();
//
//		},

		attackUnit: function(active, passive) {
			active.attackTo(passive);

			if (passive.health <= 0) {
				this.killUnit(passive);
			}

			if (active.health <= 0) {
				this.killUnit(active);
			}

			this.view.redrawHealthUnit(active);
			this.view.redrawHealthUnit(passive);

		},

		killUnit: function(unit) {
			this.appendRIP(unit);
			this.view.drawRIP(unit);

			delete this.units[unit.id];
		},

		appendRIP: function(unit) {
			unit.lifeAfterDeadLength = 0;
			this.unitsRIP[unit.id] = unit;
			return unit;

		},

		updateRIPs: function() {
			var RIPs = this.unitsRIP,
				key, unit;
			for (key in RIPs) {
				if (RIPs.hasOwnProperty(key)) {
					unit = RIPs[key];
					unit.lifeAfterDeadLength += 1;

					if (unit.lifeAfterDeadLength >= this.lifeAfterDeadLimit) {
						this.view.removeRIP(unit);
						delete RIPs[key];
					}

				}
			}

		},

//		getUnitsUnderAttack: function(unit) {
//			var  unitsIsAvailableToAttack = unit.findUnitsUnderAttack(this.units);
//			if (unitsIsAvailableToAttack) {
//				this.view.showUnitsUnderAttack(unitsIsAvailableToAttack);
//			} else {
//				this.view.hideUnitsUnderAttack();
//			}
//
//			return unitsIsAvailableToAttack;
//
//		},

		getUnitsByCoordinates: function(coordinates) {
			var key,
				units = [],
				allUnits = this.units,
				unitForTest;

			for (key in allUnits) {
				if (allUnits.hasOwnProperty(key)) {

					unitForTest = allUnits[key];

					if (unitForTest.x === coordinates.x && unitForTest.y === coordinates.y) {
						units.push(unitForTest);
					}

				}
			}

			return units;

		},

		startBattle: function() {
//			this.endTurn();
			this.step();
		},
		step: function() {
			this.setActivePlayer();
			this.updateRIPs();
		},
		setActivePlayer: function() {
			// set active player
			var index,
				players = this.players;
			if ( this.activePlayer ) {
				index = players.indexOf(this.activePlayer);
				this.activePlayer = players[index + 1] || players[0];
			} else {
				this.activePlayer = players[0];
			}


			this.view.showPlayerInfo(this.activePlayer);


		},
		endTurn: function() {

			// set default properties all units
			var units = this.units,
				unit,
				key;

			for (key in units) {
				if (units.hasOwnProperty(key)) {
					unit = units[key];
					unit.setDefaultProperties();
				}
			}

			this.focusedUnit = false;
			this.unitAvailableActions = {};

			this.hideAllActions();

			this.step();

		}



	};

	APP.BattleController = BattleController;

}(window, document, document.documentElement));