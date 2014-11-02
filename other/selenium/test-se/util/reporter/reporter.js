(function () {

	"use strict";
	/*global console, alert, require, exports, process, mainConfig, module */

	var pathHere = __dirname,
		openHtml = require('open'),
		fs = require('fs'),
		EasyZip = require('easy-zip').EasyZip,
		util = require(mainConfig.getPath('util', pathHere) + 'util.js');

	function Reporter() {

		this.data = {
			args: null,
			argsHash: null,
			timeStart: new Date()
		};

		this.init();
		this.items = [];

	}

	Reporter.prototype = {
		newItem: function (data) {
			data.reporter = this;
			var item = new ReportItem(data);
			this.items.push(item);
			return item;
		},
		compile: function () {

			var that = this,
				dirName = this.dirName,
				pathToFolder = mainConfig.getPath('report', pathHere, 2) + dirName,
				pathToReport = pathToFolder + '/' + dirName + '.html',
				pathToZipReport = pathToFolder + '/../' + dirName + '.zip',
				html = this.template(this.reportTemplate)(this).replace('{{script}}', '<script type="text/javascript">' + this.reportJs + '	</script>');

			fs.writeFile(pathToReport, html, function (err) {
				var zip5;
				if (err) {
					console.log(err);
				} else {
					console.log("The report was saved in " + pathToReport);
					zip5 = new EasyZip();
					zip5.zipFolder(pathToFolder, function(){
						zip5.writeToFile(pathToZipReport, function(){

							if (that.data.argsHash.sendMail) {
								that.sendMail(pathToZipReport);
							}

						});
					});
					openHtml(pathToReport);
				}
			});

			// create report

		},
		init: function () {

			this.data.args = JSON.parse(JSON.stringify(process.argv)); // get string with arguments
			this.data.argsHash = util.getArguments();

			var date = new Date();

			this.date = [
				date.getFullYear(),
				date.getMonth() + 1,
				date.getDate(),
				date.getHours(),
				date.getMinutes(),
				date.getSeconds()].join('-').replace(/(-)(\d)(?!\d)/gi, function (match, p1, p2) {
					return p1 + '0' + p2;
				});

			this.dirName = 'Report-' + this.date;

			// create folders
			fs.mkdir(mainConfig.getPath('report', pathHere, 2) + this.dirName);
			fs.mkdir(mainConfig.getPath('report', pathHere, 2) + this.dirName + '/screenshot');
			fs.readFile(mainConfig.getPath('util', pathHere, 2) + 'reporter/html/report-template.html', "utf8", (function (err, data) {
				if (err) {
					return console.log(err);
				}
				this.reportTemplate = data;
			}.bind(this)));

			this.reportCss = '';

			fs.readFile(mainConfig.getPath('util', pathHere, 2) + 'reporter/css/reset.css', "utf8", (function (err, data) {
				if (err) {
					return console.log(err);
				}
				this.reportCss += data;
			}.bind(this)));

			fs.readFile(mainConfig.getPath('util', pathHere, 2) + 'reporter/css/report.css', "utf8", (function (err, data) {
				if (err) {
					return console.log(err);
				}
				this.reportCss += data;
			}.bind(this)));
			fs.readFile(mainConfig.getPath('util', pathHere, 2) + 'reporter/js/script.js', "utf8", (function (err, data) {
				if (err) {
					return console.log(err);
				}
				this.reportJs = data;
			}.bind(this)));

		},
		template:  function (str) {
			return new Function("obj",
					"var p=[];obj=obj||{};with(obj){p.push('" + str
					.replace(/[\r\t\n]/g, " ")
					.split("<%").join("\t")
					.replace(/((^|%>)[^\t]*)'/g, "$1\r")
					.replace(/\t=([\s\S]*?)%>/g, "',$1,'")
					.split("\t").join("');")
					.split("%>").join("p.push('")
					.split("\r").join("\\'") + "');} return p.join('');");
		},
		sendMail: function(path) {
			var nodemailer = require('nodemailer'),
				transporter, mailOptions;

			transporter = nodemailer.createTransport({
				service: 'Gmail',
				auth: {
					user: 'web.best.master@gmail.com',
					pass: 'colos_inc.'
				}
			});

			mailOptions = {
				from: 'node.js', // sender address
				to: 'dmitry.turovtsov@gmail.com', // list of receivers
				subject: 'Test report - ' + this.date, // Subject line
				text: 'Test report - ' + this.date, // plaintext body
				html: 'Test report - ' + this.date, // html body
				attachments: [
					{
						path: path
					}
				]
			};

			transporter.sendMail(mailOptions, function(error, info){
				return error ? console.log(error) : console.log('Message sent: ' + info.response);
			});

		}
	};


	function ReportItem(data) {

		this.data = {
			timeStart: 0,
			timeEnd: null,
			testFileName: data.testFileName,
			testInfo: require(mainConfig.getPath('test', pathHere) + data.testFileName).info || {},
			result: this.results.failed
		};

		this.reporter = data.reporter;
		this.driver = data.driver;
		this.items = [];

	}

	ReportItem.prototype = {
		results: {
			failed: 'failed',
			passed: 'passed'
		},
		setResult: function(result) {
			this.data.timeEnd = new Date();
			this.data.result = result;
		},
		getResult: function(){
			return this.data.result;
		},
		markStartTime: function() {
			this.data.timeStart = new Date();
		},
		addText: function (text) {
			this.items.push({
				type: 'text',
				text: text,
				timeStamp: new Date()
			});

			return this;

		},
		takeScreenShot: function (data) {

			var timeStamp = new Date(),
				item = {
					type: 'image',
					label: data.label || '',
					timeStamp: timeStamp,
					src: 'screenshot/screenshot-' + timeStamp.getTime() + '.png',
					screenShotSrc: mainConfig.getPath('report', pathHere, 2) + this.reporter.dirName + '/screenshot/screenshot-' + timeStamp.getTime() + '.png'
				};

			this.driver.takeScreenshot().then(function (image, err) {

				fs.writeFile(item.screenShotSrc, image, 'base64');

			});

			this.items.push(item);


		}
	};

	module.exports = Reporter;

}());