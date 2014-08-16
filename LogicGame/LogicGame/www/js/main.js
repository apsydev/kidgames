(function (win) {

	"use strict";
	/*global window */
	/*global templateMaster, lang, Backbone, APP, info */

	lang.push('ru');

	window.APP = window.APP || {};

	var Router;

	Router = Backbone.Router.extend({
		routes: {
			'': 'title',
			'section/:id': 'section',
			'question': 'question'
		},
		title: function () {
			APP.titleView = new win.APP.TitleView();
		},
		section: function (id) {
			APP.sectionView = new win.APP.SectionView({id: id});
		},
		question: function () {
			APP.questionView = new win.APP.QuestionView();
		}
	});

	APP.router = new Router();

	// start of app here
	function main() {
		templateMaster.init();
		Backbone.history.start();

		function back() {
			if (window.location.hash) {
				Backbone.history.history.back();
				win.setTimeout(back, 200);
			}
		}

		back();
	}

	function resize() {
		return APP.titleView && APP.titleView.setStyles();
	}

	win.addEventListener('load', main, false);
	win.addEventListener('resize', resize, false);

	// other data here

}(window));