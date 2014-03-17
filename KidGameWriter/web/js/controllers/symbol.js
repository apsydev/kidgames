(function (win, doc, docElem) {

	"use strict";
	/*global window, document, console, alert, $, $$, statusBar, main, symbols, info */

	var log = console.log.bind(console);

	function Group(index, polygon) {

		this.index = index;
		this.polygon = polygon;
		this.isActive = false;

		this.points = [];
		// init group
		this.createPoints(polygon);

	}

	function Point(index, polygon) {
		var mainObj = symbol;

		this.index = index;
		this.polygon = polygon;

		this.isActive = true;

		this.x = mainObj.svg.scale * parseFloat(polygon.getAttribute('cx')) + mainObj.svg.offset.left;
		this.y = mainObj.svg.scale * parseFloat(polygon.getAttribute('cy')) + mainObj.svg.offset.top;

	}

	Group.prototype.createPoints = function (gNode) {
		var polygons = $$('*', gNode);
		polygons.forEach(function (polygon, index) {
			var point = new Point(index, polygon);
			this.points.push(point);
		}, this);
	};

	Group.prototype.deactivate = function() {
		this.isActive = false;
		this.points.forEach(function(point){
			var zIndex = +point.node.style.zIndex - 1000;
			point.node.style.zIndex = zIndex;
		});
	};

	Group.prototype.clear = function() {
		this.points.forEach(function(point){
			point.clear();
		});

		delete this.points;
		delete this.polygon;

	};

	Point.prototype.addNode = function (node) {
		this.node = node;
	};

	Point.prototype.defaultSize = 40;

	Point.prototype.size = 40;

	Point.prototype.getPathLength = function (x1, y1, x2, y2) {
		return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
	};

	Point.prototype.isCoordinateInPoint = function (x, y) {
		return this.getPathLength(this.x, this.y, x, y) < this.size / 2;
	};

	Point.prototype.deactivate = function() {
		this.isActive = false;
		this.node.style.opacity = 0.5;
	};

	Point.prototype.clear = function() {
		delete this.node;
		delete this.polygon;
	};

	var symbol = {
		handleEvent: function () {

		},
		start: function () {

			this.getData();
			this.createGroups();
			this.createPointsNode();
			this.createEventHunter();
			console.log(this);

		},
		getData: function () {

			this.symbol = Object.create(symbols.number['5']);
			// get and set all coordinates and size
			this.coordinates = {
				offsetTop: statusBar.wrapper.clientHeight,
				offsetLeft: 0,
				x: 0,
				y: 0
			};

			var viewportNode = $('.symbol-page', main.wrapper),
				tempNode = document.createElement('div'),
				svgNode, svg;
			this.viewport = {
				node: viewportNode,
				width: viewportNode.clientWidth, // add reduce by padding
				height: viewportNode.clientHeight // -"-
			};
			this.viewport.aspectRatio = this.viewport.width / this.viewport.height;


			tempNode.innerHTML = this.symbol.points;
			svgNode = $('svg', tempNode);
			svg = {
				original: {
					width: parseInt(svgNode.getAttribute('width'), 10),
					height: parseInt(svgNode.getAttribute('height'), 10)
				},
				offset: {
					top: 0,
					left: 0
				}
			};
			svg.svgAspectRatio = svg.original.width / svg.original.height;
			if (svg.svgAspectRatio > this.viewport.aspectRatio) {
				svg.scale = this.viewport.width / svg.original.width;
			} else {
				svg.scale = this.viewport.height / svg.original.height;
			}

			svg.width = svg.original.width * svg.scale;
			svg.height = svg.original.height * svg.scale;

			svg.offset.left = (this.viewport.width - svg.width) / 2;
			svg.offset.top = (this.viewport.height - svg.height) / 2;

			Point.prototype.size = Point.prototype.defaultSize * svg.scale;

			this.svg = svg;

		},
		createGroups: function () {

			// add svg
			var tempNode = doc.createElement('div'),
				groupNodes;
			tempNode.innerHTML = this.symbol.points;
			groupNodes = $$('svg g', tempNode);

			// clear groups
			if (this.groups) {
				this.groups.forEach(function(group){
					group.clear();
				});
			}

			// create groups
			this.groups = [];
			groupNodes.forEach(function (g, index) {
				var group = new Group(index, g);
				this.groups.push(group);
			}, this);

			// activate first group
			this.groups[0].isActive = true;
			this.activeGroup = this.groups[0];

		},
		createPointsNode: function () {
			this.groups.forEach(function (group) {
				group.points.forEach(function (point) {
					var node = doc.createElement('div'),
						style = node.style;
					node.className = 'point';
					style.left = point.x - point.size / 2 + 'px';
					style.top = point.y - point.size / 2 + 'px';
					style.zIndex = -group.index;
					style.width = point.size + 'px';
					style.height = point.size + 'px';
					point.addNode(node);
					this.viewport.node.appendChild(node);
				}, this);
			}, this);
		},
		createEventHunter: function () {
			var node = doc.createElement('div'),
				that = this;
			node.className = 'event-hunter';

			node.addEventListener(info.evt.down, function () {

				that.coordinates.x = info.evt.touchMove.x - that.coordinates.offsetLeft;
				that.coordinates.y = info.evt.touchMove.y - that.coordinates.offsetTop;

				// find point in activeGroup
				var firstPoint = that.activeGroup.points[0];

				if (!firstPoint.isCoordinateInPoint(that.coordinates.x, that.coordinates.y)) {
					log('touch is not in first point');
					return;
				}

				if (!firstPoint.isActive) {
					log('first points is not active');
					return;
				}

				firstPoint.deactivate();

			}, false);

			node.addEventListener(info.evt.move, function () {

				if (!info.evt.isActive) {
					return;
				}

				that.coordinates.x = info.evt.touchMove.x - that.coordinates.offsetLeft;
				that.coordinates.y = info.evt.touchMove.y - that.coordinates.offsetTop;
				var activePoint = that.getActivePoint(that.coordinates.x, that.coordinates.y),
					nextActiveGroup;

				if (!activePoint) {
					log('active point was not found');
					return;
				}

				if (!activePoint.isActive) {
					log('active points is not active');
					return;
				}

				if (!activePoint.index) { // activePoint.index === 0
					log('this is first point');
					return;
				}

				if (that.activeGroup.points[activePoint.index - 1].isActive) {
					log('previous point is passed');
					return;
				}

				activePoint.deactivate();

				// try to deactivate group
				if (that.activeGroup.points.length === (activePoint.index + 1)) {
					that.activeGroup.deactivate();

					// try to activate next group
					nextActiveGroup = that.groups[that.activeGroup.index + 1];
					if (nextActiveGroup) {
						that.activeGroup = nextActiveGroup;
						that.activeGroup.isActive = true;
					} else {
						console.log('DONE');
					}

				}

			}, false);

			this.viewport.node.appendChild(node);

		},
		getActivePoint: function(x, y) {
			var i, len;
			for (i = 0, len = this.activeGroup.points.length; i < len; i += 1) {
				if (this.activeGroup.points[i].isCoordinateInPoint(x, y)) {
					return this.activeGroup.points[i];
				}
			}

			return false;

		}

	};

	win.symbol = symbol;

}(window, document, document.documentElement));
