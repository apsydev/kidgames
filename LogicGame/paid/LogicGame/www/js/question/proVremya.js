(function (win) {

	"use strict";
	/*global window */

	win.sections = win.sections || {};

	win.sections.proVremya = {
		name: 'Загадки про время',
		lang: 'ru',
		questions: [
			{
				title: 'Когда наступит этот день?',

				text: 'Это случится в тот день, послезавтра которого станет вчерашним днем для того сегодня, которое будет настолько же далеко от воскресенья, как от него тот день, который был сегодняшним, а позавчерашний - завтрашним...<br>Когда это случится?',
				hint: '',
				answer: 'Заветное событие состоится в воскресенье. Процесс решения головоломки следует разбить на два этапа, как это показано на рисунке:_!_http://www.smekalka.pp.ru/sites/default/files/answer_time_02_1.gif_!_<br>На первом этапе ("Это случится в тот день, послезавтра которого станет вчерашнем днем для того сегодня, которое будет настолько же далеко от воскресенья..."), двигаясь от ВОСКРЕСЕНЬЯ "вперед", мы через три дня добираемся до СРЕДЫ. На втором этапе ("...как далеко от него тот день, который был сегодняшним, в позавчерашний завтрашним"), двигаясь от ВОСКРЕСЕНЬЯ "назад", мы через три дня попадаем на ЧЕТВЕРГ. Заветным днем окажется, конечно же, тот, который единственным назван в загадке "по имени"'

			},
			{
				title: 'Прямой угол',

				text: 'Сколько раз в сутки часовая и минутная стрелки образуют прямой угол?',
				hint: '',
				answer: 'В сутки часовая стрелка делает 2 оборота , а минутная - 24 . Отсюда минутная стрелка обгоняет часовую 22 раза и каждый раз с часовой стрелкой образуется по два прямых угла, т.е. ответ - 44'

			},
			{
				title: 'Песочные часы',

				text: 'Зависит ли вес песочных часов от того, течет в них песок, или нет?',
				hint: '',
				answer: 'Нет. Для пояснения привожу отрывок из книги Я.И. Перельмана "Знаете ли вы физику?":<br>Песочные часы с 5-минутным "заводом" поставлены в бездействующем состоянии на чашку чувствительных весов и уравновешены гирями. Часы перевернули. Что произойдет с весами в течение ближайших пяти минут?<br>Песчинки, не касаясь во время падения дна сосуда, не оказывают на него давления. Можно думать поэтому, что в течение тех пяти минут, пока длится пересыпание песка, чашка с часами должна быть легче и подняться вверх. Опыт покажет, однако, другое. Чашка с часами качнётся вверх только в первое мнгновение, но затем в течение пяти минут весы будут сохранять равновесие до последнего момента, когда чашка с часами качнётся вниз и весы снова прийдут в равновесие.<br>Почему же весы останутся пять минут в равновесии, насмотря на то, что часть песка, падая, не оказывает на дно сосуда никакого давления? Прежде всего отметим, что в течение каждой секунды столько же песчинок покидает шейку часов, столько их достигает дна. Значит каждую секунду становятся "невесомыми" столько же песчинок, сколько ударяются о дно сосуда. Каждой песчинке, делающейся невесомой, отвечает удар песчинки о дно.<br>Только в первый и последний моменты пятиминутного промежутка времени равновесие весов (если они достаточно чувствительны) нарушится. В первый момент потому, что некоторые песчинки уже покинут верхний сосуд часов, сделаются невесомыми, но ни одна не успеет еще удариться в дно нижнего сосуда: чашка с весами качнется вверх. К концу пятиминутного промежутка равновесие снова нарушится на мгновение: все песчинки уже покинули верхний сосуд, новых невесомых песчинок нет, а удары о дно нижнего сосуда еще происходят: чашка с часами качнется вниз. Затем снова наступит равновесие, на этот раз окончательно'

			},
			{
				title: 'Проблема с нулевым годом',

				text: 'Некий грек родился 10 марта в 40 году до нашей эры и умер 10 марта в 40 году новой эры. Сколько лет он прожил?',
				hint: '',
				answer: 'С момента рождения грека до отметки "ноль лет" прошло 39 лет 9 месяцев и 21 дней; с момента "ноль лет" до смерти этого грека прошло 39 лет 2 месяца и 10 дней. Нетрудно заметить, что сумма неполных лет обоих половин его жизни равняется ровно один год. Таким образом, продолжительность его жизни равна 39+39+1 лет = 79 лет'

			},
			{
				title: '28 дней',

				text: 'Сколько месяцев в году имеют 28 дней?',
				hint: '',
				answer: 'Все 12, т.к. если в месяце 30 дней, то и 28 среди них есть'

			},
			{
				title: 'Бикфордов шнур',

				text: 'Известно, что бикфордов шнур горит неравномерно, но сгорает ровно за 1 минуту. Можно ли при помощи двух таких шнуров отмерить ровно 45 секунд? Как? Просьба соблюдать технику безопасности',
				hint: '',
				answer: 'Подожжем один из шнуров с обоих концов и одновременно второй - с одного конца. Первый шнур сгорит через 30 секунд; в этот момент подожжем второй шнур со второго конца.<br>Альтернативные варианты ответов:<br>A1: Расплести один шнур, к ниточке пpивязать коpобок, будет маятник. Отмеpить сколько колебаний за полчаса, и отсчитать еще сколько нужно...<br>A2: Подвесить один шнур, а второй уложить ровно в его тень. В результате вращения Земли за 45 минут тень сместится относительно второго шнура на заранее известный угол (что-то около 11 градусов получается)'

			},
			{
				title: 'О размножении микробов',

				text: 'В банку попал 1 микроб, и через 35 минут банка была наполнена микробами, причем известно, что количество микробов ежеминутно удваивалось. За сколько минут банка была наполнена микробами на половину?',
				hint: '',
				answer: 'За 34 минуты, т. к. за 35 минут банка будет уже заполнена'

			},
			{
				title: 'Что поразило священника?',

				text: 'Проходя мимо надгробия, преподобный отец невольно замедлил шаг: что-то смутило его в надписи, выбитой на памятнике:<br>Светлой памяти мистера Эдварда Фонтена почившего 28 октября 1823 года в возрасте 66 лет, а также его вдовы миссис Сары Фонтен, почившей 23 сентября 1812 года в возрасте 82 лет.<br>Догадайтесь, что так поразило священника?',
				hint: '',
				answer: 'Сара Фонтен не может быть вдовой Эдварда Фонтена, т.к. она умерла раньше него, а вдова - это женщина, у которой умер муж'

			},
			{
				title: 'Год за три',

				text: 'Позавчера Феде было 17 лет. В следующем году ему будет 20 лет. Как такое может быть?',
				hint: '',
				answer: 'Утверждение сделано 1 января. День рождения Феди - 31 декабря. Позавчера ему было 17. Вчера ему исполнилось 18. В этом году будет 19, а в следующем - ровно 20'

			},
			{
				title: 'Когда часы 12 бьют',

				text: 'Часы с боем отбивают 6 часов за 5 секунд. За какое время они пробьют 12 часов?',
				hint: '',
				answer: 'За 11 секунд'

			},
			{
				title: 'Месяц февраль',

				text: 'Известно, что в каждом из трех идущих подряд месяцев оказалось четыре воскресенья. Докажите, что один из этих месяцев - февраль',
				hint: '',
				answer: 'Если бы среди рассматриваемых месяцев не было февраля, то общее число дней было не менее 91 = 7 * 13. Значит, общее число воскресений было бы не менее 13, что противоречит условию'

			},
			{
				title: 'Парадокс Льюиса Кэрролла',

				text: 'Вот задача, предложенная Льюисом Кэрроллом: какие часы точнее показывают время: те, которые отстают на минуту в сутки, или те, которые вовсе не идут?',
				hint: '',
				answer: 'Кэрролл считал, что точными являются стоящие часы. Вот как он это обосновывал. Часы, отстающие на минуту в сутки, показывают точное время один раз в два года, в то время как стоящие часы показывают точное время два раза в сутки'

			},
			{
				title: 'Счастливый год',

				text: 'Когда наступит ближайший год без пятниц тринадцатого числа?',
				hint: '',
				answer: 'Никогда не наступит такой год, в котором нет хотя бы одной пятницы, приходящейся на 13-е число месяца.<br>Чтобы убедиться в этом, достаточно составить порядковый перечень 13-х чисел всех месяцев года с указанием дня недели, начиная с 13-го января. Учтем, что длительность года зависит от того, будет ли он високосным. В течение года порядковые номера 13-х чисел месяца будут следующими: 1(1), 32(32), 61(60), 92(91), 122(121), 153(152), 183(182), 214(213), 245(244), 275(274), 306(305), 336(335), где номера в скобках относятся к невисокосному году. Соотнесем номера с днями недели, условно приняв 13 января за первый день недели, хотя можно выбрать и любой другой. В високосном году: 1, 4, 5, 1, 3, 6, 1, 4, 7, 2, 5, 7, в невисокосном году: 1, 4, 4, 7, 2, 5, 7, 3, 6, 1, 4, 7. Анализ списков показывает, что в любом году, независимо от того, какой день недели будет 13 января, на тринадцатые числа месяцев не менее одного раза приходятся все дни недели с 1-го по 7-й. Это означает, что сочетание "пятница тринадцатое" неизбежно возникнет от одного до трех раз в каждом году'

			},
			{
				title: 'Отмерить 15 минут',

				text: 'Как отмерить 15 мин. при помощи пары песочных часов, отмеряющих соответственно 7 и 11 мин?',
				hint: '',
				answer: 'Запустим часы одновременно. Через 7 мин. начнем отсчет времени. Как только упадет последняя песчинка в 11-минутных часах, перевернем их и отмерим еще 11 мин'

			},
			{
				title: 'Что было вчера?',

				text: 'Какой день недели был вчера, если четверг был за 4 дня до послезавтра',
				hint: '',
				answer: 'Вчера была пятница: четверг, вчера, сегодня, завтра, послезавтра'

			},
			{
				title: 'Три пятницы',

				text: 'Три пятницы некоторого месяца пришлись на четные даты. Какой день недели был восемнадцатого числа этого месяца?',
				hint: '',
				answer: 'Воскресенье.<br>Способ первый. Решаем методом исключения. Допустим, на восемнадцатое число пришелся понедельник. Тогда двадцать второе число - пятница. Остальные пятницы будут 1-го, 5-го, 15-го и 29-го. Четная дата всего одна - 22-е. Т.е. понедельник отбрасываем. Аналогично перебираем остальные дни недели.<br>Есть другое, более элегантное решение, которое прислал Артем Сафронов:<br>Способ второй. Очевидно, что минимальный интервал между двумя чётными пятницами - две недели, а между первой и третьей - 28 дней. Значит, в месяце поместятся три чётных пятницы, только если первая пятница приходится на 2-е число. Значит, 18-е - воскресенье'

			},
			{
				title: 'Пять дней',

				text: 'Назовите пять дней, не называя чисел (напр., 1, 2, 3,..) и названий дней (напр., понедельник, вторник, среда...)',
				hint: '',
				answer: 'Позавчера, вчера, сегодня, завтра, послезавтра'

			},
			{
				title: 'Какой будет день?',

				text: 'Если сегодня понедельник, какой будет день после дня, который будет перед днем, который будет перед завтрашним днем?',
				hint: '',
				answer: 'Понедельник'

			},
			{
				title: 'Правильные часы',

				text: 'Часовому мастеру принесли трое часов и попросили выверить их ход. Мастер включил секундомер и посмотрел на часы № 1 и № 2. За 11 минут хода часов № 1 часы № 2 отсчитали 10 минут. Потом он сравнил часы № 2 и № 3: за 12,5 минуты хода часов № 2 часы № 3 прошли 12 минут. Посмотрев затем в течение 8,25 минуты на часы № 1, мастер остановил секундомер и впервые взглянул на него – он отсчитал ровно 30 минут. Определите, какие часы идут точно?',
				hint: '',
				answer: 'Точно идут часы №2.<br>Наверно, можно эту задачу решить "изящно", одними рассуждениями, но мне как-то проще решалось системой уравнений.<br>Итак, пусть x1, x2, x3 - кол-во минут, отсчитанных соответствующими часами за одну минуту "истинного" времени.<br>Тогда условие "за 11 минут хода часов № 1 часы № 2 отсчитали 10 минут" запишем как:<br>11*x1 = 10*x2<br>Условие "за 12,5 минуты хода часов № 2 часы № 3 прошли 12 минут" запишем как:<br>12,5*x2 = 12*x3<br>И условие "посмотрев затем в течение 8,25 минуты на часы № 1, мастер остановил секундомер и впервые взглянул на него – он отсчитал ровно 30 минут" как:	<br>8,25*x1 + 11*x1 + 12,5*x2 = 30<br>Получаем линейную систему из трех уравнений с тремя неизвестными.<br>Из первого уравнения имеем x2 = (11*x1)/10 и подставляем в третье:<br>8,25*x1 + 11*x1 + 12,5*1,1*x1 = 30<br>Получаем x1 = 10/11<br>Соответственно, x2 = 1, x3 = 12,5/12<br>Т.о., одна минута часов №2 соответствует "истинной" минуте, т.е. часы №2 идут точно'

			},
			{
				title: 'Кто первый?',

				text: 'У Андрея часы отстают на 10 минут, но он думает, что они на 5 минут спешат. Он договорился с Катей встретиться в 18 часов в условленном месте. У Кати часы на 5 минут спешат, но она думает, что они отстают на 10 минут. Кто первым придет к назначенному месту свидания?',
				hint: '',
				answer: 'Катя придет первой, а Андрей опоздает, так как он придет к тому времени, когда на его часах будет 18.05, а на самом еще на 10 минут больше - 18.15. Катя постарается прийти по своим часам к 17.50, а на самом деле это будет 17.45'

			},
			{
				title: 'Поздравления Мафусаила',

				text: 'Каждый Новый год, начиная с первого года нашей эры, Мафусаил, который жив и поныне, посылает поздравление своему лучшему другу, который, естественно, не раз менялся за века. Однако формула поздравления два тысячелетия оставалась неизменной. Она очень проста: "С Новым годом 1", "С Новым годом 2" "С Новым годом 3" и т.д., "С Новым годом 2007" "С Новым годом 2008". Какой цифррой Мафусаил пользовался до сих пор реже всего?',
				hint: '',
				answer: '1 по 999 год все цифры были бы использованы одинаковое количество раз, если бы первые годы Мафусаил записывал так: год 0001, год 0002... год 0999. Но он этого не делал, и цифра 0 была использована на 111 раз реже остальных. В дальнейшем дефицит этой цифры ликвидировать не удалось (хотя в начале 3го тысячеления она встречается чаще остальных).<br>Таким образом, реже всего Мафусаил использовал цифру 0 (а чаще всего, очевидно, цифру 1 - из-за 2-го тысячеления)'

			},
			{
				title: 'Дед и внук',

				text: '- То, о чем я скажу, происходило в 1932 г. Мне было тогда ровно столько лет, сколько выражают последние две цифры года моего рождения. Когда я об этом соотношении рассказал деду, он удивил меня заявлением, что с его возрастом выходит то же самое. Мне это показалось невозможным...<br>- Разумеется, невозможно, - вставил чей-то голос.<br>- Представьте, что вполне возможно. Дед доказал мне это. Сколько же лет было каждому из нас?',
				hint: '',
				answer: 'С первого взгляда может действительно показаться, что задача неправильно составлена: выходит как будто, что внук и дед одного возраста. Однако, требование задачи, как сейчас увидим, легко удовлетворяется.<br>Внук, очевидно, родился в XX столетии. Первые две цифры года его рождения, следовательно, 19: таково число сотен. Число, выражаемое остальными цифрами, будучи сложено с самим собою, должно составить 32. Значит, это число 16: год рождения внука 1916. и ему в 1932 г. было 16 лет.<br>Дед его родился, конечно, в XIX столетии; первые две цифры года его рождения 18. Удвоенное число, выражаемое остальными цифрами; должно составить 132. Значит, само это число равно половине 132, т. е. 66. Дед родился в 1866 г. и ему в 1932 году было 66 лет.<br>Таким образом, и внуку и деду в 1932 г. было столько лет, сколько выражают последние две цифры годов их рождения'

			},
			{
				title: 'Сплошные пятницы',

				text: 'Какое наибольшее число месяцев в году могут иметь 5 пятниц?',
				hint: '',
				answer: '5 месяцев. Для обычного года это произойдет, если 1 января пятница. Для високосного есть две возможности - 1 января - четверг или пятница'

			},
			{
				title: 'Когда состоится следующий урок?',

				text: 'Преподаватель логики повесил на дверь своего класса следующую записку: "Сегодняшний урок отменяется. Следующий урок состоится в час дня по прошествии трех дней со дня, который наступит на два дня раньше дня, который будет на день раньше завтра". Так когда же будет следующий урок?',
				hint: '',
				answer: 'На следующий день, т.е. завтра'

			},
			{
				title: 'Часы',

				text: 'Почему на часах стрелки ходят слева направо (по часовой стрелке), а не наоборот?',
				hint: '',
				answer: 'Именно так движется тень в самых первых часах - солнечных. А затем уже механические часы скопировали направление движения стрелок. Кстати, в Южном полушарии все наоборот - тень в солнечных часах движется против часовой стрелки'

			},
			{
				title: 'Восьмилетка',

				text: 'Первый раз девочка праздновала свой день рождения, когда ей исполнялось 8 лет. Почему?',
				hint: '',
				answer: 'Девочка родилась 29 февраля 1896 г., но 1900 г. не был високосным, так как годы, завершающие столетие, являются високосными только тогда, когда число столетий делится на 4. Поэтому первое после ее рождения 29 февраля выпало на 1904 г., когда девочке исполнилось 8 лет. В следующий день рождения ей исполнилось 12'

			},
			{
				title: 'Дворник',

				text: 'Дворник работает по вторникам, пятницам и нечетным числам. Какое наибольшее количество дней подряд он может работать?',
				hint: '',
				answer: '6 дней. Пример такой ситуации: 29-го (нечетное), 30-го (вторник), 31-го (нечетное), 1-го (нечетное), 2-го (пятница), 3-го (нечетное)'

			},
			{
				title: 'Календарь из кубиков',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1439.png_!_В окне одного магазина я увидел оригинальный настольный календарь. Дату указывали цифры на передних гранях двух кубиков. На каждой грани кубика стоит по одной цифре от 0 до 9. Переставляя кубики, можно изобразить на календаре любую дату от 01, 02, 03, ... до 31. Какие цифры скрыты на невидимых гранях кубиков?',
				hint: '',
				answer: 'Цифра 0 должна стоять на гранях каждого кубика. Действительно, если ноль будет только на одном кубике, то граней другого не хватит для цифр от 1 до 9, необходимых для составления первых девяти чисел: 01, 02, ... 09.<br>Также на каждом кубике должны присутствовать цифры 1 и 2, необходимые для составления чисел 11 и 22.<br>Из рисунке на гранях белого кубика видны цифры 3, 4, 5. Следовательно, на его невидимых гранях должны стоять цифры 0, 1, 2. Оставшиеся четыре цифры — 6, 7, 8 и 9 — должны стоять на гранях чёрного кубика. Но из шести граней чёрного кубика три уже заняты цифрами 1, 2 (видны на рисунке) и 0 (должна обязательно стоять на одной из невидимых граней). Задача была бы неразрешима, если бы цифру 6 нельзя было использовать дважды: в «прямом» виде — как шестёрку и в «перевёрнутом» — как девятку. Таким образом, на скрытых гранях чёрного кубика должны стоять цифры 0, 6 (она же 9), 7 и 8.'

			},
			{
				title: 'Дни недели',

				text: 'Сегодня не воскресенье, а завтра не среда. Вчера была не пятница, а позавчера был не понедельник. Завтра не воскресенье, и вчера было не воскресенье. Послезавтра не суббота и не воскресенье. Вчера был не понедельник, и не среда. Позавчера была не среда, а завтра не вторник. Да, и сегодня не среда. Какой же сегодня день недели, если учесть, что одно утверждение в списке - ложно?',
				hint: '',
				answer: 'Воскресенье'

			},
			{
				title: 'Песочные часы',

				text: 'Натали надо испечь яблочный пирог. Обычных часов у нее нет, но есть двое песочных часов. Одни рассчитаны на 7 минут , другие - на 11 минут.<br>Как ей точно отмерить 15 минут, необходимых для приготовления пирога?',
				hint: '',
				answer: 'Она должна их перевернуть одновременно; когда в часах №1 песок пересыпется, она должна поставить пирог в печь; в часах №2 песок продолжает пересыпаться на протяжении еще 4-х минут; спустя 4 минуты Натали снова переворачивает часы №2 и ждет, пока весь песок не пересыпется. Итого получаем 4+11 = 15 минут'

			},
			{
				title: 'Неправильные даты',

				text: 'В США дату 1 июля 2003 года записывают так: 7/1/2003, а в других странах: 1/7/2003. Если не знать, в каком формате записано чило, то сколько дат в году можно истолковать неправильно?',
				hint: '',
				answer: 'В каждом месяце 11 двусмысленных дат (такие даты, как 7/7/2003 в любом случае будут поняты правильно). Значит, в году таких дат 132'

			},
			{
				title: 'Коллекция календариков',

				text: 'У коллекционера есть архив календариков за последние 100 лет - всякие разные, за каждый год по несколько штук, еще его дедушка собирал по всему миру как сувениры. Если сейчас идёт N-ый год, то календарик из архива за какой год полностью актуален? <br>Актуальным для года N считается такой календарик, у которого соответствие всех чисел и дней недели точно как в году N',
				hint: '',
				answer: 'N-28. Каждые 4 года повторяется цикл из 1461 дня - 3 невисокосных и 1 високосный год. Чтобы совпали еще и дни недели, надо чтобы прошёл цикл дней, кратный 7, так как 1461 на 7 не делится, надо взять 1461*7 дней. Через это количество дней (=28 лет) год будет начинаться с того же дня недели и сохранит (не)високосность'

			},
			{
				title: 'Будильник',

				text: 'Мэри должна подниматься на работу в 7 часов утра, чтобы вовремя попасть на работу. Ее будильник за 3 дня отстает на 9 минут. В какое время сработает будильник во вторник утром, если она установит на нем правильное время в 11 вечера в воскресенье?',
				hint: '',
				answer: 'В 07:04 утра. Часы отстают на 3 минуты ежедневно, или на 1 минуту каждые 8 часов. Между 11 часами воскресного вечера 7 часами утра во вторник пройдет 24 + 8 часов. Следовательно, часы отстанут на 4 минуты'

			},
			{
				title: 'Отмерить время с помощью песочных часов',

				text: 'При помощи только 4- и 7-минутных песочных часов точно отмерьте девять минут',
				hint: '',
				answer: '1. Запустите 4- и 7-минутные часы одновременно<br>2. Когда в 4-минутных часах закончится песок, переверните их (итоговое время - 4 минуты)<br>3. Когда в 7-минутных часах закончится песок, их тоже переворачиваем. В этот момент в 4-минутных часах, в верхней половинке, осталось песка на 1 минуту (итоговое время - 7 минут)<br>4. Когда 4-минутные часы опустеют, переворачиваем 7-минутные, где в нижней половине песка на 1 минуту (итоговое время 8 минут)<br>5. Когда 7-минутные опустеют, прошло ровно 9 минут'

			},
			{
				title: 'Трудовая неделя',

				text: 'Ателье проката работает только по понедельникам, четвергам, а также всем нечетным числам.<br>Сколько дней максимально ателье может работать без выходных?',
				hint: '',
				answer: '6 дней.<br>Пример такой ситуации: 29-го (нечетное), 30-го (понедельник), 31-го (нечетное), 1-го (нечетное), 2-го (четверг), 3-го (нечетное)'

			},
			{
				title: 'Дни рождения',

				text: 'В одной семье есть двое близнецов, причем один родился на несколько минут раньше другого. Но иногда младший (по времени рождения) из близнецов празднует свой день рождения на два дня раньше старшего. Как такое может быть?',
				hint: '',
				answer: 'Близнецы родились на корабле, который пересекал линию перемены даты с запада на восток, причем пересечение линии произошло в краткий промежуток между рождениями близнецов, и год был невисокосный. Если старший (по времени рождения) из близнецов родился 1 марта, то у младшего день рождения попадает на 28 февраля. Соответственно, в високосный год младший празднует свой день рождения на два дня раньше'

			}

		]

	};

}(window));