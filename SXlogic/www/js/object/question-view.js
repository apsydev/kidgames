(function (win) {

	"use strict";
	/*global window */
	/*global bingo, $, info, Backbone, APP */

	win.APP = win.APP || {};

	win.APP.QuestionView = win.APP.MainView.extend({
		templates: ['question'],
		events: {
			'click .js-set-question': 'setQuestion',
			'click .js-hint-button': 'showHint',
			'click .js-answer-button': 'showAnswer'
		},
//		hideAnswerButtonPeriod: 15 * 1000, // see css transition
		forceDraw: true,
		init: function() {

			if (info.hasOwnProperty('currentSectionName')  && info.hasOwnProperty('currentQuestionNumber')) {

				var question = win.sections[info.currentSectionName].questions[info.currentQuestionNumber];

				this.$el = $('<div class="question js-question"/>').html(this.tmpl.question(question));

				this.$wrapper = $('.js-wrapper');

				this.$wrapper.html('');

				this.$wrapper.append(this.$el);

			} else {

				Backbone.history.history.back();

			}

			win.scrollTo(0, 0);

//			clearTimeout(APP.showAnswerButtonTimeOut);
//
//			APP.showAnswerButtonTimeOut = setTimeout((function(){
//				this.$el.find('.js-answer-button').removeClass('button-is-disabled');
//				this.canShowAnswer = true;
//			}.bind(this)), this.hideAnswerButtonPeriod);

			this.$el.find('.button-progress').addClass('button-progress-to-0');

		},

		setQuestion: function(e) {

			var $this = $(e.currentTarget),
				direction = +$this.data('direction'),
				length = win.sections[info.currentSectionName].questions.length,
				currentQuestion = +info.currentQuestionNumber + direction;

			if (currentQuestion < 0) {
				currentQuestion = length - 1;
			}

			if (currentQuestion >= length) {
				currentQuestion = 0;
			}

			info.set('currentQuestionNumber', currentQuestion);

			APP.questionView = new win.APP.QuestionView();

		},
		showHint: function() {
			$('.js-hint-text').removeClass('hidden');
		},
		showAnswer: function() {

			var $progress = this.$el.find('.button-progress'),
				progress = !!$progress.prop('clientWidth');

			if (progress) {
				win.alert('Слишком рано, подумайте ещё.');
				return;
			}

			$('.js-answer-text').removeClass('hidden');

			var sections = info.get('sections') || {},
				sectionName = info.currentSectionName,
				questionNumber = info.currentQuestionNumber;

			sections[sectionName] = sections[sectionName] || {};

			sections[sectionName][questionNumber] = 1;

			info.set('sections', sections, true);

		}






	});


}(window));