(function () {	"use strict";	/*global window, document, console, alert */	window.lang = window.lang || {};	window.lang.ar = {		language: 'اللغه',		languageName: 'العربية',		score: 'مستوى',		digits: 'ارقام',		learn: 'تدريب',		test: 'اختبار',		addition: 'جمع',		subtraction: 'طرح',		doPreviousLevel: 'هذه المرحله مغلقه , من فضلك ,العوده الى المرحلة السابقه',		levelIsDone: 'مبروك!, اتممت المرحله .من فضلك تقدم الى المرحله القادمه',		sectionIsDone: 'مبروك!, اتممت الفرع.من فضلك تقدم الى الفرع القادمه',		settings: 'اعدادات',		level: '!!! do NOT USE or REPLACE this field !!!',		beginner: 'لاعب جديد' ,		expert: 'لاعب ماهر' ,		ball_many: 'كرات',		book_many: 'كتب',		chicken_many: 'صيصان',		cup_many: 'فناجين',		dog_many: 'كلاب',		leaf_many: 'اوراق',		mouse_many: 'فئران',		rabbit_many: 'ارانب',		snail_many: 'حلزونات',		squirrel_many: 'سناجب',		testBasicsQuestion: 'كم عدد المواد على الشاشه ؟؟',		youHaveDoneThisSection: 'مبروك!, اتممت الفرع.من فضلك تقدم الى الفرع القادمه',		youDontHaveEnoughPoints: 'انتا لا تملك نضارات الكافيه,لكي تفتح القسم , من فضلك , انتقل الى القسم السابق',		thanks: 'مفيد',		thanksForDe: 'Svetlana Dubinetskaya',		thanksForEs: 'Viktoriya Kostyuk',		shareUs: 'شارك'	};	for (var i = 0; i <= 9; i++) {		lang.ar['number-' + i] = 'sound/numbers/ar/' + i + '.mp3';	}}());