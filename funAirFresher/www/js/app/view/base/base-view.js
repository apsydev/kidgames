(function (win) {

	"use strict";
	/*global window, Backbone, $, templateMaster, setTimeout, APP, history */

	win.APP = win.APP || {};

	APP.BaseView = Backbone.View.extend({

		events: {
			'click [data-route]': 'routeTo',
			'click .js-back': 'routeBack'
		},

		direction: {
			forward: 'forward',
			back: 'back',
			showPopup: 'showPopup',
			hidePopup: 'hidePopup'
		},

		popupUrl: 'popup=true',

		transition: {
			duration: 200
		},

		selectors: {
			wrapper: '.js-wrapper'
		},

		baseConstructor: function() {

			var proto = APP.BaseView.prototype,
				events = $.extend( {}, proto.events, this.events );

			if (APP.info.isTouch) {
				$.each( events, function( key, value ) {

					var newKey = key.replace(/^click(?=\s+)/i, 'vclick');

					if (newKey !== key) {
						delete events[key];
						events[newKey] = value;
					}

				});

			}

			this.events = events;

			proto.constructor.apply(this, arguments);

		},

		initialize: function() {

			this.$el.addClass('js-page-wrapper page-wrapper');
			this.$el.attr('data-url', this.url);

			APP.$wrapper.append(this.$el);

			this.showDirectionAnimation();

		},

		showDirectionAnimation: function(data) {

			data = data || {};

			var direction = data.direction || this.detectDirection(),
				$wrappers = APP.$wrapper.find('.js-page-wrapper'),
				$prev = $wrappers.eq(0),
				$next = $wrappers.last(),
				fullClassList = 'left-position center-position right-position transition',
				transitionTime = this.transition.duration,
				smallStep = 10,
				count = $wrappers.length;


			if (direction === this.direction.hidePopup) {
				setTimeout((function(){
					$(this.selectors.wrapper + ' .js-popup-wrapper').removeClass('show');
					setTimeout((function(){
						$(this.selectors.wrapper + ' .js-popup-wrapper').remove();
					}.bind(this)), transitionTime + smallStep);
				}.bind(this)), smallStep);
			}

			if (direction === this.direction.showPopup) {

				setTimeout((function(){
					this.$el.addClass('show');
				}.bind(this)), smallStep);

			}

			if (count === 1) {
				$wrappers.removeClass(fullClassList).addClass('static');
				return;
			}

			if (direction === this.direction.forward) {
				$next.addClass('right-position');
				$wrappers.addClass('transition');

				setTimeout(function($prev, $next){
					$prev.remove();
					$next.removeClass(fullClassList).addClass('static');
					this.fixRoute($next.attr('data-url'));
				}.bind(this, $prev, $next), transitionTime + smallStep);

				setTimeout(function(){
					$next.removeClass('right-position').addClass('center-position');
					$prev.removeClass('center-position').addClass('left-position');
				}, smallStep);

			}

			if (direction === this.direction.back) {
				$next.addClass('left-position');
				$prev.removeClass('static');
				$wrappers.addClass('transition');

				setTimeout(function($prev, $next){
					$prev.remove();
					$next.removeClass(fullClassList).addClass('static');
					this.fixRoute($next.attr('data-url'));
				}.bind(this, $prev, $next), transitionTime + smallStep);

				setTimeout(function(){
					$next.removeClass('left-position').addClass('center-position');
					$prev.removeClass('center-position').addClass('right-position');
				}, smallStep);

			}

		},

		fixRoute: function(neededUrl) {
			// this bug might appear if user user do click 'any route button' and 'hard back button' too fast
			if (neededUrl === Backbone.history.fragment) {
				return;
			}

			this.routeByUrl(neededUrl, false);

		},

		detectDirection: function() {

			var router = APP.router,
				prevUrl = router.prevUrl,
				curUrl = Backbone.history.fragment,
				direction;

			// detect new page
			direction = curUrl.indexOf(prevUrl) !== 0 ? this.direction.back : this.direction.forward;

			// detect popup
			if ( (prevUrl + curUrl).indexOf(this.popupUrl) !== -1 ) {
				direction = curUrl.indexOf(this.popupUrl) !== -1 ? this.direction.showPopup : this.direction.hidePopup;
			} else {
				// do not track popup urls
				router.prevUrl = curUrl;
			}

			return direction;

		},

		navigate: function() { //url, options
			APP.router.navigate.apply(APP.router, arguments);
		},

		routeByUrl: function(route, options) {
			this.navigate(route, options);
		},

		routeTo: function(e) {

			if ( !this.isAvailableState() ) {
				return;
			}

			var $this = $(e.currentTarget),
				route = $this.data('route');

			this.navigate(route, true);

		},

		routeBack: function(e) {

			this.stopEvent(e);

			if ( !this.isAvailableState() ) {
				return;
			}

			if (Backbone.history.fragment) {
				Backbone.history.history.back();
			}

		},

		isAvailableState: function() {

			return !APP.$wrapper.find('.transition').length;

		},

		showPopup: function(data) {

			APP.popUp = new APP.PopUpView(data);

		},

		stopEvent: function(e) {

			if (e && e.preventDefault) {
				e.preventDefault();
				e.stopPropagation();
			}

		}



	});

}(window));