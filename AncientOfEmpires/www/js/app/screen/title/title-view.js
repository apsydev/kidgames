(function (win) {

	"use strict";
	/*global window, document */
	/*global bingo, $, info, APP */

	win.APP = win.APP || {};

	APP.TitleView = APP.BaseView.extend({

		templates: ['title'],

		events: {
			'click .js-go-to-select-map': 'goToSelectMap',
			'click .js-create-map': 'goToCreateMap'
		},

		init: function() {

			this.$el = $(this.tmpl.title());

			this.$wrapper = $('.js-wrapper');

			this.$wrapper.html('');

			this.$wrapper.append(this.$el);

		},

		goToSelectMap: function() {
			APP.router.navigate('maps', { trigger: true });
		},

		goToCreateMap: function() {
			APP.router.navigate('create-map', { trigger: true });
		}









	});

}(window));