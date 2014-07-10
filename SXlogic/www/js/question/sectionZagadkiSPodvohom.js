(function (win) {

	"use strict";
	/*global window */

	win.sections = win.sections || {};

	win.sections.sectionZagadkiSPodvohom = {
		name: 'Задачи с подвохом',
		questions: [
			{
				title: 'Переправа',
				image: '',
				text: 'Двое одновременно подошли к реке. Лодка, на которой можно переправиться, выдерживает только одного человека. И все же без посторонней помощи каждый переправился на этой лодке на другой берег. Как им это удалось?',
				answer: 'Они подошли к разным берегам реки',
				hint: 'qwqers fadsf'
			},
			{
				title: 'Почему наказали часового?',
				image: '',
				text: 'Как-то утром, солдат, который перед этим был в ночном карауле, подошел к центуриону и сказал, что этой ночью он видел во сне как варвары сегодня вечером будут атаковать крепость с севера. Центурион не очень поверил в этот сон, но меры все-таки принял. Тем же вечером варвары действительно напали на крепость, но благодаря принятым мерам их атака была отбита. После боя центурион поблагодарил солдата за предупреждение, а затем приказал взять его под стражу. Почему?',
				hint: '',
				answer: 'Солдат видел сон, значит, он спал. А во время несения караула солдат не имеет права спать'
			},
			{
				title: 'Головоломка с ногами',
				image: '',
				text: 'В комнате было 12 цыплят, 3 кpолика, 5 щенят, 2 кошки, 1 петух и 2 курицы. Сюда зашёл хозяин с собакой. Сколько в комнате стало ног? ',
				hint: '',
				answer: 'Две (ноги хозяина). У животных лапы'
			},
			{
				title: 'Военная головоломка',
				image: '',
				text: 'В начале Первой мировой войны в униформу британских солдат входила коричневая матерчатая фуражка. Металлических касок у них не было. Через некоторое время командование армии было обеспокоено большим количеством ранений в голову. Было решено заменить фуражку металлической каской. Но вскоре командование было удивлено, узнав, что количество ранений в голову увеличилось. Необходимо заметить, что интенсивность сражений была примерно одинаковой до и после введения касок. Так почему же число ранений в голову увеличилось, когда солдаты стали надевать каски, а не фуражки?',
				hint: '',
				answer: 'Число зафиксированных ранений в голову увеличилось, но снизилась смертность. Ранее, если осколок шрапнели попадал солдату в голову, он пробивал фуражку, и человек, вероятнее всего умирал. Это фиксировалось как смерть, а не как ранение. После того, как было предписано носить каски, удар шрапнели не убивал солдата, а всего лишь ранил. Поэтому число ранений в голову увеличилось, а число смертей снизилось'
			},
			{
				title: 'Задача Моисея',
				image: '',
				text: 'Сколько животных каждого вида Моисей посадил на ковчег?',
				hint: '',
				answer: 'Ковчег строил Ной, а не Моисей'
			},
			{
				title: 'Помолвка после женитьбы',
				image: '',
				text: 'Где идет сначала женитьба, а уж потом помолвка?',
				hint: '',
				answer: 'В словаре, где слова отсортированы в алфавитном порядке'
			},
			{
				title: '6 стаканов',
				image: '',
				text: 'На столе в ряд стоят 6 стаканов. Первые три пустые, а последние три наполнены водой. Как сделать так, чтобы пустые стаканы и полные чередовались между собой, если касаться можно только одного стакана (толкать стакан стаканом нельзя)?',
				hint: '',
				answer: 'Взять пятый стакан, перелить его содержимое во второй и поставить стакан на место'
			},
			{
				title: 'Как купить ножницы?',
				image: '',
				text: 'Один глухонемой человек зашел в магазин канцтоваров, чтобы купить точилку для карандашей. Он воткнул себе палец в левое ухо и кулаком другой руки сделал вращательное движение около своего правого уха. Продавец сразу понял, о чем его просят.	Потом в тот же магазин вошел слепой человек. Как он объяснил продавцу, что хочет купить ножницы?',
				hint: '',
				answer: 'Он сказал продавцу: "Я хочу купить ножницы"'
			},
			{
				title: 'Сколько ног?',
				image: '',
				text: 'Игорь идет к лесному озеру. Ему навстречу движется класс из 25 учеников и два преподавателя. Родители 10 детей также принимают участие в прогулке. Пять матерей еще везут своих детей на колясках. Преподаватель ведет с собой собаку, а двое детей ведут двух крыс. Сколько ног идут по дороге к лесному озеру?',
				hint: '',
				answer: 'По дороге к лесному озеру идут только две ноги, ноги Игоря. Все, кого он встретил, возвращаются с озера'
			},
			{
				title: 'В больнице',
				image: '',
				text: 'Кирилл провел три дня в больнице. Он не был болен и не получил травму, но во время выписки его пришлось нести. Почему?',
				hint: '',
				answer: 'Он только что родился в этой больнице'
			},
			{
				title: 'Умеете ли Вы считать в уме?',
				image: '',
				text: 'Решая эту задачку, постарайтесь все вычисления делать быстро и в уме, ничего не пишите и не используйте калькулятор, и результат вас удивит. Возьмите 1000. Прибавьте 40. Прибавьте еще тысячу. Прибавьте 30. Еще 1000. Плюс 20. Плюс 1000. И плюс 10. Что получилось?',
				hint: '',
				answer: '4100'
			},
			{
				title: 'Карандаш',
				image: '',
				text: 'Карандаш положили на пол и попросили нескольких человек перепрыгнуть его. Но никто не смог этого сделать. Почему?',
				hint: '',
				answer: 'Его положили рядом со стеной (вплотную)'
			},
			{
				title: 'Смерть офицера',
				image: '',
				text: 'Один английский офицер, вернувшийся из Китая, заснул в церкви во время службы. Ему приснилось, что к нему подходит палач, чтобы саблей срубить голову. Когда сабля почти опустилась на шею офицера, к нему подошла жена и, чтобы разбудить, легонько стукнула веером по шее. Потрясение офицера было так велико, что он тут же умер от разрыва сердца. В этой истории, рассказанной вдовой офицера, что-то неладно. Но что же именно?',
				hint: '',
				answer: 'Если офицер умер во сне, то мы никак не могли узнать, что ему снилось'
			},
			{
				title: 'Остановки',
				image: '',
				text: 'Внимательно прочитайте условие, но только один раз, и попробуйте сразу же ответить на вопрос. На конечной остановке в автобус сели четырнадцать мужчин и две женщины. На первой остановке сошли двое мужчин и вошли две женщины. На следующей остановке вышли почти все мужчины (осталось только трое), а на следующей вошли пять женщин. Проехав с полкилометра, автобус остановился, и в него вошел еще один мужчина. Сколько всего было остановок на пути следования автобуса?',
				hint: '',
				answer: 'Всего 5 остановок (включая конечную)'
			},
			{
				title: 'Как поделить?',
				image: '',
				text: 'Как разделить 5 яблок между пятью лицами так, чтобы каждый получил по яблоку и одно яблоко осталось в корзине',
				hint: '',
				answer: 'Один человек берет яблоко вместе с корзиной'
			},
			{
				title: 'Сумма или произведение?',
				image: '',
				text: 'Что больше: сумма всех цифр или их произведение?',
				hint: '',
				answer: 'Больше сумма, так как произведение равно 0 (один из множителей - это цифра 0)'
			},
			{
				title: 'Трое сыновей',
				image: '',
				text: 'У матери Андреаса трое сыновей-близняшек. Она их очень любит и старается, чтобы всё всем доставалось поровну. Поэтому даже тарелочки для каши у каждого своя. Тарелочки подписаны именами детей - Пим, Пам, и... Как подписана третья тарелочка?',
				hint: '',
				answer: 'Андреас'
			},
			{
				title: 'Взломщики',
				image: '',
				text: 'Банда взломщиков собирается ограбить дом. Сообщники сообщили им, что заходить в помещение можно только при выключенном свете, если свет горит, то заходить в дом нельзя. Весь вечер свет в квартире то потухнет, то погаснет. Когда же взломщикам можно ограбить дом?',
				hint: '',
				answer: '"То потухнет, то погаснет" - то есть свет постоянно выключен. Забираться в дом можно в любое время'
			},
			{
				title: 'Без головы',
				image: '',
				text: 'Когда человек находится дома без головы?',
				hint: '',
				answer: 'Когда он выглядывает из форточки'
			},
			{
				title: 'Буквы',
				image: '',
				text: 'Изначально это слово состоит из 10 букв, но оно вполне записывается тремя буквами. Ранее записывали пятью буквами, а теперь - шестью. О чем речь?',
				hint: '',
				answer: 'В слове "изначально" - 10 букв, в слове "оно" - 3 буквы, в слове "ранее" - 5 букв, в слове "теперь" - 6 букв'
			},
			{
				title: '3 лягушки',
				image: '',
				text: 'Три лягушки сидели на берегу пруда. Одна из них решила прыгнуть в пруд. Сколько лягушек осталось на берегу?',
				hint: '',
				answer: 'На берегу остались три лягушки, потому что решение прыгнуть и прыжок – это не одно и то же'
			},
			{
				title: 'Самая высокая гора',
				image: '',
				text: 'Какая гора была самой высокой на Земле до открытия Эвереста?',
				hint: '',
				answer: 'Эверест. Просто он был еще не открыт'
			},
			{
				title: 'Пизанская башня',
				image: 'http://www.smekalka.pp.ru/sites/default/files/1791.jpg',
				text: 'Чем отличаются эти две фотографии Пизанской башни?',
				hint: '',
				answer: 'Ничем не отличаются, хоть в это и трудно поверить. Из-за особенностей восприятия правая башня только кажется наклонившейся под большим углом'
			},
			{
				title: 'Дома',
				image: '',
				text: 'Стоят богатый дом и бедный. Они горят. Какой дом первым будет тушить полиция?',
				hint: '',
				answer: 'С каких пор полиция занимается тушением?'
			}

		]

	};

}(window));