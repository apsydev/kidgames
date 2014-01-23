(function (win) {

	var timer;
	timer = {
		init: function(){
			this.node = $('.js-timer-wrapper', main.wrapper);

			if (!info.timerIsActive && this.node) {
				this.node.style.display = 'none';
				return;
			}

			this.isActive = true;
			this.isPause = false;
			this.countValue = 0;
			setTimeout(this.count.bind(this), 1000);
			console.log('timer is run');

		},
		count: function(){

			this.countValue += this.isPause ? 0 : 1;
			var countValue = this.countValue;
			var minutes = Math.floor(countValue / 60);
			var seconds = countValue % 60;
			if (seconds <= 9) {
				seconds = '0' + seconds;
			}

			var timerNode = $('.js-timer-wrapper', main.wrapper);
			if (timerNode) {
				timerNode.innerHTML = minutes + ':' + seconds;
				setTimeout(this.count.bind(this), 1000);
			} else {
				this.stop();
			}

		},
		stop: function(){
			this.isActive = false;
			console.log('timer is stopped');
		},
		pause: function(needPause){
			this.isPause = needPause === undefined || needPause === true;
			console.log('timer - pause is - ' + this.isPause);
		}


	};


	win.timer = timer;



}(window));