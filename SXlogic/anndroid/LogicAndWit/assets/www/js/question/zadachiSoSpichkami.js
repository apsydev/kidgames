(function (win) {

	"use strict";
	/*global window */

	win.sections = win.sections || {};

	win.sections.zadachiSoSpichkami = {
		name: 'Задачи со спичками',
		lang: 'ru',
		questions: [
			{
				title: 'Верное равенство',

				text: 'http://4brain.ru/blog/wp-content/uploads/2013/09/Arifmetika.png_!_Нужно переместить только одну спичку в выложенном спичками арифметическом примере «8+3-4=0» так, чтобы получилось верное равенство (можно менять и знаки, цифры) ',
				hint: '',
				answer: 'Эта классическая математическая спичечная головоломка решается несколькими способами. Как вы уже догадались спички нужно перемещать так, чтобы получились другие цифры.<br>Первый способ. Из восьмерки перемещаем нижнюю левую спичку в середину нуля. Получается: 9+3-4=8.<br>Второй способ. От цифры 8 убираем правую верхнюю спичку и ставим ее на верх четверки. В итоге верное равенство: 6+3-9=0.<br>Третий способ. В цифре 4 переворачиваем горизонтальную спичку вертикально и перемещаем ее в нижний левый угол четверки. И опять арифметическое выражение верно: 8+3-11=0.<br>Существуют и другие креативные способы решения этого примера по математике, например, с модификацией знака равно 0+3-4 ≠ 0, 8+3-4 > 0, но это уже нарушает условие_!_http://4brain.ru/blog/wp-content/uploads/2013/09/Arifmetika-OTVET.png '

			},
			{
				title: 'Развернуть рыбку',

				text: 'http://4brain.ru/blog/wp-content/uploads/2013/09/rybka.png_!_Переставьте три спички так, чтобы рыбка поплыла в обратном направлении. Другими словами, нужно повернуть рыбу на 180 градусов по горизонтали',
				hint: '',
				answer: 'Для решения задачи будем передвигать спички, которые составляют нижнюю часть хвоста и туловища, а также нижний плавник нашей рыбы. Переместим 2 спички наверх, а одну вправо, как показано на схеме. Теперь рыбка плывет не вправо, а влево._!_http://4brain.ru/blog/wp-content/uploads/2013/09/rybka-otvet.png'

			},
			{
				title: 'Подобрать ключ',

				text: 'http://4brain.ru/blog/wp-content/uploads/2013/09/Klyuch.png_!_В этой задаче из 10 спичек сложена форма ключа. Передвиньте 4 спички так, чтобы получилось три квадрата',
				hint: '',
				answer: 'Задача решается достаточно просто. Четыре спички, образующие ту часть ручку ключа, нужно переместить на стержень ключа, так чтобы 3 квадрата были выложены в ряд_!_http://4brain.ru/blog/wp-content/uploads/2013/09/otvet-na-klyuch.png'

			},
			{
				title: 'Поле для крестиков-ноликов',

				text: 'http://4brain.ru/blog/wp-content/uploads/2013/09/Krestiki-noliki.png_!_Необходимо переложить 3 спички так, чтобы получить ровно 3 квадрата',
				hint: '',
				answer: ' Чтобы получить ровно три квадрата в этой задаче необходимо переместить 2 нижних вертикальных спички вправо и влево соответственно, чтобы они замыкали боковые квадраты. А нижней центральной горизонтальной спичкой нужно замкнуть верхний квадрат_!_http://4brain.ru/blog/wp-content/uploads/2013/09/Krestiki-OTVET.png'

			},
			{
				title: 'Головоломка «бокал с вишенкой»',

				text: 'http://4brain.ru/blog/wp-content/uploads/2013/09/Vishnya.png_!_С помощью четырех спичек сложена форма бокала, внутри которого лежит вишня. Нужно передвинуть две спички так, чтобы вишня оказалась за пределами бокала. Разрешается менять положение бокала в пространстве, однако его форма должна оставаться неизменной',
				hint: '',
				answer: 'Решение этой достаточно известной логической задачи с 4 спичками основывается на том, что мы меняем положение бокала, переворачивая его. Самая левая спичка уходит вправо вниз, а горизонтальная – перемещается правее на половину своей длины._!_http://4brain.ru/blog/wp-content/uploads/2013/09/Vishnya-OTVET.png'

			},
			{
				title: 'Оставить два квадрата',

				text: 'http://4brain.ru/blog/wp-content/uploads/2013/09/9-kvadratov.png_!_Перед Вами девять маленьких квадратов, образованных двадцатью четырьмя спичками. Уберите 8 спичек, не трогая остальных, чтобы осталось всего лишь 2 квадрата',
				hint: '',
				answer: 'Ответ. Для этой задачи я нашел 2 способа решения.<br>Первый способ. Убрать спички так, чтобы остался только самый большой квадрат, образованный крайними спичками и самый маленький квадрат в центре, состоящий из четырех спичек.<br>Второй способ. Также оставить самый большой квадрат из 12 спичек, а также квадрат 2 на 2 спички. У последнего квадрата 2 стороны должны образовываться спичками большой квадрата, а 2 другие стороны должны быть в центре._!_http://4brain.ru/blog/wp-content/uploads/2013/09/Resheniye-1.png_!_http://4brain.ru/blog/wp-content/uploads/2013/09/Resheniye-2.png'

			},
			{
				title: 'Соприкасающиеся друг с другом спички',

				text: 'http://4brain.ru/blog/wp-content/uploads/2013/09/6-spichek.png_!_Необходимо разместить 6 спичек так, чтобы каждая спичка соприкасалась с остальными пятью',
				hint: '',
				answer: 'Это задание требует подключения ваших творческих способностей, и выход за рамки плоскости – ведь спички можно класть друг на друга. Верное решение выглядит следующим образом. На схеме все спички действительно соприкасаются друг с другом. Хочу отметить, онлайн нарисовать такую фигуры гораздо проще, чем выложить так настоящие спички_!_http://4brain.ru/blog/wp-content/uploads/2013/09/6-spichek-OTVET.png'

			},
			{
				title: 'Семь квадратов',

				text: 'http://4brain.ru/blog/wp-content/uploads/2013/09/Kvadrat-4.png_!_Переложите 2 спички так, чтобы образовать 7 квадратов',
				hint: '',
				answer: 'Чтобы решить эту достаточно сложную задачу нужно думать нешаблонно. Берем 2 любые спички, образующие угол самого большого внешнего квадрата и кладем их крест-накрест друг на друга в один из маленьких квадратов. Так мы получаем 3 квадрата 1 на 1 спичку и 4 квадрата со сторонами длиной в половину спички_!_http://4brain.ru/blog/wp-content/uploads/2013/09/Otvet-7-kvadratov.png'

			},
			{
				title: 'Оставить 1 треугольник',

				text: 'http://4brain.ru/blog/wp-content/uploads/2013/09/Domik.png_!_Передвиньте 1 спичку так, чтобы вместо 9 треугольников остался только один',
				hint: '',
				answer: 'Эта головоломка не разгадывается стандартным способом. Для решения поставленной задачи нужно немного исхитриться (снова использовать свое креативное мышление). Нам нужно избавиться от креста в середине. Берем нижнюю спичку креста, так чтобы она подняла и верхнюю одновременно. Поворачиваем крест на 45 градусов, так чтобы он образовывал в центре домика не треугольники, а квадраты._!_Стоит отметить, что за экраном компьютера онлайн эту задачу решить очень трудно. А вот если взять реальные спички, то головоломка разгадывается гораздо проще._!_http://4brain.ru/blog/wp-content/uploads/2013/09/Domik-otvet-.png'

			},
			{
				title: 'Квадраты и треугольники',

				text: 'Разместите 8 спичек таким образом, чтобы образовалось ровно 2 квадрата и 4 треугольника',
				hint: '',
				answer: 'http://www.smekalka.pp.ru/sites/default/files/1630.jpg'

			},
			{
				title: 'Домик из спичек',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1594_1.jpg_!_Переложите только 2 спички так, чтобы получить такой же домик, но в зеркальном отражении:',
				hint: '',
				answer: 'http://www.smekalka.pp.ru/sites/default/files/1594_2.jpg'

			},
			{
				title: 'Метр из спичек',

				text: 'Попробуйте составить из 13 спичек целый метр. Если что, длина одной спички 45мм',
				hint: '',
				answer: 'http://www.smekalka.pp.ru/sites/default/files/1581.jpg'

			},
			{
				title: 'Верное равенство',

				text: 'Переложите одну спичку, чтобы равенство стало верным (это можно сделать двумя способами):_!_http://www.smekalka.pp.ru/sites/default/files/answer_match_09_1.jpg',
				hint: '',
				answer: 'Надо воспользоваться тем, что в римской нумерации XI - это 11, а IX - это 9.<br>1-й способ:_!_http://www.smekalka.pp.ru/sites/default/files/answer_match_09_2.jpg_!_2-й способ:_!_http://www.smekalka.pp.ru/sites/default/files/answer_match_09_3.jpg'

			},
			{
				title: 'Из дюжины спичек',

				text: 'Из 12 спичек нужно составить фигуру, в которой было бы три одинаковых четырехугольника и два одинаковых треугольника. Как это сделать?',
				hint: '',
				answer: 'Это равносторонний шестиугольник (но не правильный, поскольку его углы не равны)_!_http://www.smekalka.pp.ru/sites/default/files/answer_match_07_1.jpg'

			},
			{
				title: 'Шесть четырехугольников',

				text: 'http://www.smekalka.pp.ru/sites/default/files/answer_match_06_1.jpg_!_В фигуре, представленной на рисунке, нужно так переложить 6 спичек с одного места на другое, чтобы образовалась фигура, составленная из 6 одинаковых четырехугольников.',
				hint: '',
				answer: 'http://www.smekalka.pp.ru/sites/default/files/answer_match_06_2.jpg'

			},
			{
				title: 'Оставить три квадрата',

				text: 'http://www.smekalka.pp.ru/sites/default/files/answer_match_04_1.jpg_!_В той же решетке так уберите 6 спичек, не перекладывая остальных, чтобы осталось всего 3 квадрата.',
				hint: '',
				answer: 'http://www.smekalka.pp.ru/sites/default/files/answer_match_04_2.jpg'

			},
			{
				title: 'Оставить четыре квадрата',

				text: 'http://www.smekalka.pp.ru/sites/default/files/answer_match_03_1.jpg_!_Из этой же фигуры так извлеките 8 спичек, не трогая других, чтобы оставшиеся спички составили 4 одинаковых квадрата.',
				hint: '',
				answer: 'http://www.smekalka.pp.ru/sites/default/files/answer_match_03_3.jpg'

			},
			{
				title: 'Оставить пять квадратов',

				text: 'http://www.smekalka.pp.ru/sites/default/files/answer_match_02_1.jpg_!_В решетке из спичек, представленной на рисунке, нужно так убрать 4 спички, не трогая остальных, чтобы осталось 5 квадратов.',
				hint: '',
				answer: 'http://www.smekalka.pp.ru/sites/default/files/answer_match_02_2.jpg'

			},
			{
				title: 'Из шести три',

				text: 'http://www.smekalka.pp.ru/sites/default/files/answer_match_01_1.jpg_!_Перед вами фигура, составленная из 17 спичек. Вы видите в ней 6 одинаковых квадратов. Задача состоит в следующем: нужно убрать 5 спичек, не перекладывая остальных, так, что осталось всего 3 квадрата.',
				hint: '',
				answer: 'http://www.smekalka.pp.ru/sites/default/files/answer_match_01_2.jpg'

			}

		]

	};

}(window));