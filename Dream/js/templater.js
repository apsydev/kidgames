(function () {

	"use strict";
	/*global window, document, console, alert */

	// example: var result = templater(html)(json);

	// str - innerHTML of template node
	window.templater = function (str) {
		return new Function("obj",
			"var p=[];" +
				// Introduce the data as local variables using with(){}
				"with(obj){p.push('" + str
				.replace(/[\r\t\n]/g, " ")
				.split("{{").join("\t")
				.replace(/((^|}})[^\t]*)'/g, "$1\r")
				.replace(/\t=(.*?)}}/g, "',$1,'")
				.split("\t").join("');")
				.split("}}").join("p.push('")
				.split("\r").join("\\'") + "');} return p.join('');");

	};





}());





