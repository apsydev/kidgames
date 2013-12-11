(function (win) {

	"use strict";
	/*global window, document, console, alert, dataStorage, navigator */

	win.info = {
		pathToNumber:'img/number/',
		lang: 'en',
		availableLangs: ['en', 'ru', 'de', 'zh', 'es'],
		imgPathLevelPre: 'img/level/',
		isTouch: document.documentElement.hasOwnProperty('ontouchstart'),
		screenWidth: function() {
			return document.documentElement.clientWidth;
		},
		screenHeight: function() {
			return document.documentElement.clientHeight;
		},
		setCurrentLevel: function(params) {
			this.currentLevel = parseInt(params.level, 10);
		},
		availableImages: ['ball', 'book', 'chicken', 'cup', 'dog', 'leaf', 'mouse', 'rabbit', 'snail', 'squirrel'],
		bonus: {
			smallest: 1,
			small: 5,
			normal: 10,
			big: 15,
			biggest: 20,
			huge: 25
		},
		init: function() {
			var lang = dataStorage.getItem('curLang') || (navigator.language || navigator.userLanguage);
			lang = lang.split('-')[0];
			this.lang = (this.availableLangs.indexOf(lang) === -1) ? this.lang : lang;
		}
	};

	win.info.init();

	win.info.vendorPrefix = (function browserDetect(userAgent) {
		if (userAgent.indexOf('MSIE') !== -1) {
			return 'ms'; // only small letter "ms"
		}
		if (userAgent.indexOf('Gecko') !== -1) {
			return 'webkit'; // both can use - "webkit" and "Webkit"
		}
		if (userAgent.indexOf('Mozilla') !== -1) {
			return 'moz'; // need use Moz - capital "Moz"
		}
		if (userAgent.indexOf('Opera') !== -1) {
			return 'o'; // need use O - capital "O"
		}
		return 'webkit';
	}(window.navigator.userAgent));

}(window));