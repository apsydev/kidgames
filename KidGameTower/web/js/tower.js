(function (win, doc, docElem) {

	"use strict";
	/*global console, alert, setTimeout, window, document */
	/*global bro */

	var tower, block, cssPre, jsPre, info;
	cssPre = '-webkit-';
	jsPre = 'webkit';
	// 7 * 14

	info = {
		squareSize: 20,
		w: 7,
		h: 14,
		maxFloor: 10
	};

	tower = {
		count: -1, // see lineLength
		wrapper: 0, // node wrapper
		blocks: [],
		isActive: true,
		lineLength: 3, // must be
		defaultLineLength: 3, // the same
		stepTime: 220,
		init: function() {
			this.wrapper.on('click', this.dropBlocks.bind(this));
		},
		dropBlocks: function() {

			// can drop

			var cantDrop = false;

			this.blocks.forEach(function(block){
				cantDrop = cantDrop || block.g || block.remove;
			});

			if (cantDrop) {
				return;
			}

			this.blocks.forEach(function(block){
				if (block.direction) {
					block.direction = 0;
					block.g = 1;
				}
			});

		},
		createBlock: function(direction) {

			var newBlock = Object.create(block);
			newBlock.init(direction);

			this.wrapper.append(newBlock.node);
			this.blocks.push(newBlock);

			return newBlock;

		},
		createLine: function() {

			var centerX = Math.round(info.w - 1.5) / 2,
				direction = Math.random() > 0.5 ? 1 : -1,
				block;

			switch (this.lineLength) {

				case 1:
					block = this.createBlock(direction);
					block.tower = this;
					block.x = centerX;
					break;

				case 2:
					block = this.createBlock(direction);
					block.tower = this;
					block.x = centerX;

					block = this.createBlock(direction);
					block.tower = this;
					block.x = centerX + 1;
					break;

				case 3:
					block = this.createBlock(direction);
					block.tower = this;
					block.x = centerX;

					block = this.createBlock(direction);
					block.tower = this;
					block.x = centerX + 1;

					block = this.createBlock(direction);
					block.tower = this;
					block.x = centerX - 1;
					break;

				default : // detect 0 and other
					console.log('end');
					this.isActive = false;
					break;

			}

			if (!this.isActive) {
				return;
			}

			this.stepTime *= 0.99;
			this.count += 1;

			bro('.js-count').html(this.count);

		},
		step: function() {

			if (!this.isActive) {
				this.endGame();
				return;
			}

			// remove extra block 1110111
			var bottomBlockCount = 0,
				createLine = true,
				maxFloor = info.h,
				removeBlock,
				ii, len,
				shiftCount = 0;

			this.blocks.forEach(function(block){
				if (block.y === info.h - 1) {
					bottomBlockCount += 1;
				}
			});

			if (bottomBlockCount === this.defaultLineLength * 2) {
				console.log('end');
				this.isActive = false;
				this.endGame();
				return;
			}

			this.blocks.forEach(function(block){

				if (block.y === 0) {
					createLine = false;
				}

				if (block.remove) {
					createLine = false;
				}

				if (block.g === 1 && block.direction === 0) {
					createLine = false;
				}

			});

			if (createLine) {
				// try to remove extra floors
				this.blocks.forEach(function(block){
					if (block.direction === 0 && block.g === 0) {
						maxFloor = Math.min(block.y, maxFloor);
					}
				});

				if (maxFloor !== info.h && maxFloor < info.maxFloor) {
					// down 3 blocks

					this.blocks.forEach(function(block){
						if (!block.direction && !block.g && block.y === info.h - 1) {
							shiftCount += 1;
						}
					});

					for (ii = 0, len = shiftCount; ii < len; ii += 1) {
						removeBlock = this.blocks.shift();
						removeBlock.killBlock();
					}

					this.blocks.forEach(function(block){
						block.y += 1;
						block.node.style[jsPre + 'Transition'] = 'all ease-out 0.3s';
						block.node.style[jsPre + 'Transform'] = 'translate(' + block.x * info.squareSize +  'px, ' + block.y * info.squareSize + 'px)';
					});
				}

				this.createLine();

			}

			this.blocks.forEach(function(block, index, arr){

				if (block.remove) {
					block.remove += 1;
					block.node.style.opacity = 1 - block.remove / 10;
				}

				if (block.remove > 9) {
					block.removeBlock();
					arr.splice(index, 1);
				}


			});

			// get current state and decide solve
			this.blocks.forEach(function(block){

				var before = {
					x: block.x,
					y: block.y
				};

				block.step();

				if (before.x === block.x && before.y === block.y) {
					return;
				}

				// detect changes
				block.node.style[jsPre + 'Transform'] = 'translate(' + block.x * info.squareSize +  'px, ' + block.y * info.squareSize + 'px)';

			});

			setTimeout(this.step.bind(this), this.stepTime);

		},
		endGame: function() {
			alert('your count is: ' + this.count);
			alert('end game, to restart refresh page');

		}
	};

	block = {
		x: 0,
		y: 0,
		direction: 1, // 1 to right, -1 to left
		g: 0,
		init: function(direction) {
			this.node = bro('<div class="block"/>')[0];
			this.timeStamp = Date.now();
			this.direction = direction || 1;
		},
		step: function() {

			var canDown, remove;

			if (this.remove) {
				this.remove += 1;
				return;
			}

			if (this.direction) { // detect direction !== 0

				this.x += this.direction;

				if (this.x >= info.w - 1 && this.direction > 0) {
					this.direction = -this.direction;
				}

				if (this.x <= 0 && this.direction < 0) {
					this.direction = -this.direction;
				}

			}

			if (this.g) {

				// detect dropped block
				canDown = true;
				this.tower.blocks.forEach(function(block) {
					if (block.y === this.y + 1 && block.g === 0 && this.x === block.x) {
						canDown = false;
					}
				}, this);

				if (!canDown) {
					this.g = 0;
				}

				this.y += this.g;

				// detect floor
				if (this.y >= info.h) {
					this.y -= this.g;
					this.g = 0;
				}


				if (this.g === 0) {

					remove = 0;
					this.tower.blocks.forEach(function(block) {

						if ((block.g === 0) && (block.direction === 0)) {

							if (block.y < this.y) {
								remove = 1;
							}

							if ((this.tower.lineLength === 1) && (block.y <= this.y) && (block.timeStamp !== this.timeStamp)) {
								remove = 1;
							}

						}

					}, this);

					this.remove = remove;

				}

			}

		},
		removeBlock: function() {
			this.tower.lineLength -= 1;
			this.killBlock();
		},
		killBlock: function() {
			this.node.parentNode.removeChild(this.node);
			delete this.tower;
			delete this.node;
		}
	};

	// run game

	bro(win).on('load', function(){

		var towerObj = Object.create(tower);
		towerObj.wrapper = bro('.js-main-field');
		towerObj.createLine();

		towerObj.init();
		towerObj.step();


	});

}(window, document, document.documentElement));