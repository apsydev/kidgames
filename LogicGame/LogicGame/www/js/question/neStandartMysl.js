(function (win) {

	"use strict";
	/*global window */

	win.sections = win.sections || {};

	win.sections.neStandartMysl = {
		name: 'Задачи для нестандартно мыслящих',
		questions: [
			{
				title: 'Средство от бессонницы',
				image: '',
				text: 'Мужчина долго ворочался и не мог заснуть... Потом он взял телефон, набрал чей-то номер, послышались длинные гудки, и он тут же положил трубку и заснул. Вопрос: почему он не мог заснуть?',
				hint: '',
				answer: 'За стеной громко храпел сосед. Мужчина позвонил, и сосед проснулся'
			},
			{
				title: 'Мэри',
				image: '',
				text: 'Один человек пришел домой в очень нетрезвом состоянии. Ему очень хотелось пить. На кухню в таком состоянии идти затруднительно. Он нашел воду прямо в комнате и напился вдоволь. На утро проснулся и увидел что его любимая Мэри умерла. Кто такая Мэри и почему она умерла?',
				hint: '',
				answer: 'Мэри - это рыбка, у которой случилось алкогольное отравление, пока он пил воду из банки, в которой Мэри находилась. Другой вариант: рыбка умерла, т.к. он выпил всю воду'
			},
			{
				title: 'Попугай',
				image: '',
				text: '- Ручаюсь, - сказал продавец в зоомагазине, - что этот попугай будет повторять любое услышанное им слово. Обрадованный покупатель приобрел чудо-птицу, но, придя домой, обнаружил, что попугай нем как рыба. Тем не менее, продавец не лгал. Как такое возможно?',
				hint: '',
				answer: 'Этот попугай был глухим'
			},
			{
				title: 'Странный бармен',
				image: '',
				text: 'В бар вошел человек и попросил у бармена стакан воды. Они никогда раньше не встречались. Бармен достал из-под стойки ружье и направил его на человека. Тот сказал "спасибо" и ушел. Что произошло?',
				hint: '',
				answer: 'У этого человека была икота. Бармен понял это по его разговору и достал ружье для того, чтобы напугать этого человека. Это сработало. Икота прошла, поэтому человек был благодарен бармену (и ему больше не нужна была вода)'
			},
			{
				title: 'Ветчина',
				image: '',
				text: 'Почему человек, который не любит ветчину, всегда берет с собой большой кусок, когда едет в командировку, и выбрасывает его, как только приезжает на место?',
				hint: '1. Ветчина в этой поездке служила для определенной цели, но не еды, <br> 2. Человек всегда клал в чемодане ветчину на самый верх, <br> 3. Есть люди, у которых ветчина вызывает отвращение',
				answer: 'Человек ездил в командировку в мусульманскую страну, где был запрещен алкоголь. Он клал небольшую бутылку виски под упаковку ветчины, прекрасно зная, что если работники таможни в аэропорту откроют чемодан и увидят ветчину, то они не станут ее трогать (поскольку свинину мусульмане также не должны употреблять), и, стало быть, виски будет в безопасности'
			},
			{
				title: 'Головоломка Пентагона',
				image: '',
				text: 'Штаб-квартира американского военного министерства находится в Пентагоне в Арлингтоне, штат Вирджиния. Почему в здании имеется в два раза больше туалетов, чем требуется?',
				hint: 'Причина относится к тому периоду, когда здание Пентагона было построено',
				answer: 'Пентагон был построен в 40-е годы, когда в штате Вирджиния были жесткие законы о сегрегации, требующие, чтобы белые и черные граждане пользовались разными туалетами'
			},
			{
				title: 'Расстроенные полицейские',
				image: '',
				text: 'Полиция Венесуэллы несколько раз пыталась арестовать известного бандита. Они знали, где он живет. Иногда, получив ордер на его арест, они отправлялись к нему домой. Но как только они входили в дом, он запирался в спальне. Полицейским ничего не оставалось делать, кроме как уйти ни с чем. Почему так получалось?',
				hint: '',
				answer: 'Его дом стоял на границе Венесуэлы и Колумбии. Хотя входная дверь и пол дома были расположены на территории Венесуэлы, спальня была расположена на территории Колумбии. Венесуэльская полиция не имела юрисдикции в Колумбии, поэтому полицейские не могли его арестовать, пока он находился в спальне'
			},
			{
				title: 'Ничего не случилось',
				image: '',
				text: 'Немного выпивший мужчина возвращался домой. Он шел по середине песчаной проселочной дороги. Дорогу не освещал лунный свет, и на ней не было ни одного фонаря. Мужчина был одет в черное. Внезапно на дороге появилась машина с незажженными фарами. В последний момент шофер увидел мужчину и свернул. Как он смог его увидеть?',
				hint: '',
				answer: 'Дело было днём'
			},
			{
				title: 'Строго прямо',
				image: '',
				text: 'При строительстве нового шоссе N было строго указано, что каждый десятый километр должен быть абсолютно прямым. Зачем?',
				hint: 'Прямые отрезки проектировались для использования в экстремальных ситуациях',
				answer: 'Абсолютно прямые участки дороги были нужны для того, чтобы использовать их в качестве посадочных полос для самолетов на случай войны'
			},
			{
				title: 'Исследователи',
				image: '',
				text: 'Два исследователя рассматривали найденные минералы. Они уже приготовились собрать образцы, когда были атакованы дикими хищниками. Исследователи немедленно прекратили работу, чтобы возвратиться на базу. Один из них отступал чрезвычайно медленно, постоянно глядя на хищников. Другой - запаниковал и быстро вернулся на базу. Тот, кто запаниковал и смог оторваться от преследователей, умер, как только достиг базы, в то время как его коллега выжил. Объясните, почему.',
				hint: 'Значение имеет скорость, с которой они возвращались на базу',
				answer: 'Эти исследователи были аквалангистами, которые осматривали дно в поисках ценных материалов. Они ныряли на глубину 100 метров, где воздух в его естественной пропорции становится опасным. Во время подъема в крови аквалангиста могут образовываться пузырьки азота (кровь вскипает), которые вызывают фатальную закупорку капилляров (кессонная болезнь). Чтобы декомпрессия была безопасной, подъем должен быть очень медленным (до нескольких часов). Несколько первопроходцев, в том числе Арн Зеттерстром из Швеции, погибли, поднимаясь слишком быстро'
			},
			{
				title: 'Парижская ярмарка',
				image: '',
				text: 'Кэтрин и ее брат Пауль прибыли из Нью-Йорка в Париж перед официальным открытием Всемирной ярмарки. Они зарегистрировались в гостинице «Ритц». Пауль разместился в 13-м номере, а Кэтрин в 25-м, этажом выше. Уставшие после длинной поездки, они все же решили пообедать в гриль-баре, перед тем как отправиться в номер. Но Пауль так устал, что едва держался на ногах, и отправился в свой номер, когда Кэтрин доедала десерт.<br> Кэтрин проснулась в полдень следующего дня. Она второпях оделась, поскольку у них с Паулем была договоренность посетить церемонию открытия ярмарки, назначенную на час дня, а затем попросила оператора соединить ее с номером 13. Последовало минутное молчание, а затем оператор ответил: «Мадам, в этой гостинице такого номера нет». Кэтрин нахмурилась. Неужели она ошиблась номером комнаты?<br> Она спустилась к консьержке, снова спросила о номере 13, и получила тот же самый ответ: <br> - Вы знаете, мадам, люди такие суеверные.	<br> - Хорошо, но в каком номере остановился мой брат?<br> - Ваш брат? Но прошлым вечером вы прибыли одна.<br> Консьержка открыла книгу регистрации, и Кэтрин увидела, что о ней запись есть, а о Пауле ни слова.	<br> К тому времени Кэтрин была в панике и обратилась к менеджеру. Вместе с ним она прошла весь первый этаж. Действительно, номера 12 и 14 были, а номер 13 отсутствовал.<br> Эта история действительно имела место. Можете ли вы сказать, что случилось?',
				hint: '1. Управляющий и консьержка были проинструктированы кем-то, чтобы ввести в заблуждение Кэтрин, <br>2. Пауль был перемещен для собственной безопасности, а также безопасности других людей',
				answer: 'Ночью Пауль почувствовал себя очень плохо, было обнаружено, что у него тиф. Чтобы не вызвать панику, которая грозит срывом Всемирной ярмарки, администрация гостиницы поместила Пауля в инфекционную больницу при монастыре и запечатала номер 13, чтобы скрыть тот факт, что Пауль когда-либо был здесь. (Это реальная история, которая легла в основу книги и кинофильма.)'
			},
			{
				title: 'Убийство',
				image: '',
				text: 'Было оживленное нью-йоркское утро. На террасе пятого этажа ссорились двое мужчин. Толпа на улице наблюдала эту сцену с нездоровым интересом.	Внезапно один из мужчин схватил за ноги другого и перекинул его через ограду. С глухим стуком жертва упала на мостовую и вскоре умерла. Странно, что в конечном итоге был обвинен не человек, который напал на жертву, а один из зрителей. Почему?',
				hint: 'Обвиняемый был виновен в халатности',
				answer: 'Киностудия снимает сцену из триллера. Один из двух мужчин, находящихся на террасе, - каскадер. Предполагалось, что, будучи сброшенным, он должен был упасть в страховочную сеть. Но человек, отвечающий за безопасность, не сделал свою работу должным образом, и каскадер разбился. Этот человек, ответственный за безопасность, был обвинен в грубой халатности'
			},
			{
				title: 'Любитель кофе',
				image: '',
				text: 'В ресторане один из посетителей пожаловался официанту, что у него в кофе плавает муха. Официант забрал чашку и пообещал принести другую. Он вернулся через несколько мгновений. Человек попробовал кофе и сказал, что это тот же кофе, из которого достали муху.<br> Вопрос: Как он узнал об этом?',
				hint: '',
				answer: 'Он уже добавил сахар в ту чашку, где была муха. Таким образом, попробовав кофе, он понял, что это та же чашка'
			},
			{
				title: 'Объясните ситуацию',
				image: '',
				text: 'С приближением сезона праздников начальник полиции издал распоряжение об усилении борьбы с пьяными водителями. В соответствии с этим распоряжением два офицера дежурили у единственного клуба в центре городка. Они увидели, как один из клиентов, сильно покачиваясь, вышел из дверей клуба и упал на снег. Через несколько секунд он поднялся, уткнулся в свой автомобиль и начал возиться с ключами. Наконец он смог завести свой автомобиль. По дороге он поехал зигзагами. Полицейские остановили его и попросили подышать в трубку. Результат был отрицательным. Очевидно, что-то не так было с прибором, поскольку от человека сильно пахло алкоголем. Полицейские забрали его в отделение для повторного анализа. Результат повторился и после анализа крови. Полиция была обескуражена. Попробуйте объяснить ситуацию.',
				hint: '',
				answer: 'Пока полицейские возятся с трезвым отвлекателем, его пьяные друзья разъезжаются по домам'
			}
		]

	};

}(window));