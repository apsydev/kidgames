(function (win) {

	"use strict";
	/*global window, document */
	/*global APP, lang */

	win.APP = win.APP || {};
	APP.units = APP.units || {};

	APP.units.info = {
		unitList: ['soldier', 'archer', 'lizard', 'wizard', 'knight', 'wisp', 'golem', 'spider', 'catapult', 'wyvern', 'bones'],
		archer: {
			info: lang.units.archer,
			atk: 5,
			def: 1,
			mov: 4,
			cost: 250,
			attackRange: 2
		},
		bones: {
			info: lang.units.bones,
			atk: 4,
			def: 0,
			mov: 4,
			cost: 0,
			attackRange: 1,
			notInStore: true,
			notCreateGrave: true,
			canNotBePoisoned: true,
			canNotBeUnderWispAura: true
		},
		catapult: {
			info: lang.units.catapult,
			atk: 7,
			def: 2,
			mov: 3,
			cost: 700,
			attackRange: 7
		},
		golem: {
			info: lang.units.golem,
			atk: 6,
			def: 4,
			mov: 4,
			cost: 600,
			attackRange: 1,
			canNotBePoisoned: true,
			canNotBeUnderWispAura: true
		},
		knight: {
			info: lang.units.knight,
			atk: 6,
			def: 2,
			mov: 5,
			cost: 400,
			attackRange: 1,
			unitDefaultList: {
				wasGetBuilding: false
			},
			availableActions: ['getBuilding'],
			availableBuildingsType: ['farm', 'castle']
		},
		lizard: {
			info: lang.units.lizard,
			atk: 5,
			def: 0,
			mov: 3,
			cost: 300,
			attackRange: 1,
			runType: 'flow'
		},
		soldier: {
			info: lang.units.soldier,
			atk: 5,
			def: 1,
			mov: 4,
			cost: 150,
			attackRange: 1,
			unitDefaultList: {
				wasGetBuilding: false
			},
			availableActions: ['getBuilding'],
			availableBuildingsType: ['farm']
		},
		spider: {
			info: lang.units.spider,
			atk: 6,
			def: 2,
			mov: 5,
			cost: 600,
			attackRange: 1,
			canNotBePoisoned: true,
			canPoison: true
		},
		wisp: {
			info: lang.units.wisp,
			atk: 3,
			def: 2,
			mov: 4,
			cost: 500,
			attackRange: 1,
			auraRange: 2,
			canNotBeUnderWispAura: true,
			bonesAttackBonus: 5
		},
		wizard: {
			info: lang.units.wizard,
			atk: 4,
			def: 1,
			mov: 4,
			cost: 400,
			attackRange: 1,
			unitDefaultList: {
				wasUpBones: false
			},
			availableActions: ['upBones'],
			upBonesRange: 1
		},
		wyvern: {
			info: lang.units.wyvern,
			atk: 8,
			def: 3,
			mov: 7,
			cost: 1000,
			attackRange: 1,
			runType: 'fly'
		},
		poison: {
			reduce: {
				def: 2
			}
		},
		aura: {
			wisp: {
				attack: 1
			}
		}

	};

}(window));