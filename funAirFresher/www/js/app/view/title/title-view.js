(function (win, doc, docElem) {

	"use strict";
	/*global console, alert, window, document */
	/*global APP, _ */

	APP.TitleView = APP.BaseView.extend({

		events: {
			'click span': 'alert'
		},

		constructor: function(){
			this.baseConstructor.apply(this, arguments);
		},

		alert: function() {
			console.log('alert');
		}

	});



}(window, document, document.documentElement));