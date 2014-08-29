(function (win, doc) {

	"use strict";
	/*global window, document, navigator */

	var docElem, ls, isTouch, info;
	docElem = doc.documentElement;
	ls = win.localStorage;
	isTouch = docElem.hasOwnProperty('ontouchstart');

	info = {
		lang: 'ru', // current language
//		availableLangs: ['en', 'ru', 'de', 'zh', 'es', 'ar', 'it'],
		availableLangs: ['ru'],
		saveItem: 'zaggadki',
		isPhone: false,
		isTouch: isTouch,
		preCSS: '-webkit-',
		preJS: 'webkit',
		isAndroid: (/android/i).test(win.navigator.userAgent),
		canScroll: false,

		isAdsFree: false,
		adsFreeLinks: { // NO - ADs in app
			googlePlay: 'https://play.google.com/store/apps/details?id=com.statlex.logicandwitpro',
			appStore: ''
		},

		adsNonFreeLinks: { // YES - ADs in app
			googlePlay: 'https://play.google.com/store/apps/details?id=com.statlex.logicandwit',
			appStore: 'https://itunes.apple.com/us/app/logika-i-smekalka/id908979726?ls=1&mt=8'
		},

		getData: function () {
			var data = ls.getItem(this.saveItem) || '{}';
			return JSON.parse(data);
		},
		get: function (key) {
			return this[key];
		},
		set: function (key, value, toLS) {
			this[key] = value;

			if (!toLS) {
				return;
			}

			// save data to ls
			var data = this.getData();
			data[key] = value;
			data = JSON.stringify(data);
			ls.setItem(this.saveItem, data);
		},
		change: function (key, delta, toLS) {
			this.set(key, (this.get(key) || 0) + delta, toLS);
		},

		init: function () {

			this.getIsPhone();

			// set all fields from ls to info
			this.setDataFromLS();

			// try to get current language
			var lang = this.get('lang') || (navigator.language || navigator.userLanguage);
			lang = lang.split('-')[0];
			this.lang = (this.availableLangs.indexOf(lang) === -1) ? this.lang : lang;

		},
		setDataFromLS: function () {
			var data = this.getData(),
				key;
			for (key in data) {
				if (data.hasOwnProperty(key)) {
					this[key] = data[key];
				}
			}
		},
		getIsPhone: function () {
			var maxSize = (docElem.clientHeight > docElem.clientWidth) ? docElem.clientHeight : docElem.clientWidth;
			this.isPhone = maxSize < 700;
			return this.isPhone;
		}

	};

	info.init();

	win.info = info;

}(window, document));
