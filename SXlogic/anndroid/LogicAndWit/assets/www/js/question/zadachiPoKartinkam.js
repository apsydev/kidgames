(function (win) {

	"use strict";
	/*global window */

	win.sections = win.sections || {};

	win.sections.zadachiPoKartinkam = {
		name: 'Задачи по картинкам',
		lang: 'ru',
		questions: [
			{
				title: 'Окружности',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1365_1.jpg_!_Представьте себе, что внутри большой окружности катится маленькая, диаметр которой ровно в два раза меньше. На маленькой окружности есть красная точка. Попробуйте в уме представить - по какой траектории она будет двигаться?',
				hint: '',
				answer: 'http://www.smekalka.pp.ru/sites/default/files/1365_2.gif'
			},
			{
				title: 'Что-то неверно',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1366.jpg_!_Что-то определенно неправильно в одном из элементов. Что?',
				hint: '',
				answer: 'Ошибка в первом (верхнем) элементе - вместо единицы должна быть буква Т. Все 5 элементов - это сложенные одна на другую игральные карты.<br>2- двойка бубен, 3 - тройка бубен, 4 - четвёрка бубен, 5 - пятёрка бубен. Карты перекрывают половину ромба, поэтому нам видны только треугольники. Тогда в первом элементе должен быть туз бубен'

			},
			{
				title: 'Необычный ребус',

				text: 'Какое слово здесь зашифровано?_!_http://www.smekalka.pp.ru/sites/default/files/1450.jpg',
				hint: 'В надписи из букв, где все буквы стоят вертикально, рядом с каждой буквой слева провели вертикальную ось, и начали быстро-быстро крутить каждую букву вокруг этих осей. В результате со стороны это стало выглядеть так',
				answer: 'Смекалка'

			},
			{
				title: 'Странное нечто',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1457.jpg_!_Что вы видите на этом рисунке?',
				hint: '',
				answer: 'Поверните голову на 90 градусов и увидите всего лишь свернувшуюся в клубок собаку'

			},
			{
				title: 'Что общего',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1478.jpg_!_Предметы на этой картинке объединяет одно слово. Какое?',
				hint: '',
				answer: 'На картинках избражены: Красная площадь, красный бык, красна девица, красное вино. Общее слово - красный'
			},
			{
				title: 'Верблюды',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1487.jpg_!_Фотография самая настоящая, без какой-либо обработки.<br>Под верблюдами - какие-то непонятные белые пятна. Что это?',
				hint: '',
				answer: 'Белые пятна - это и есть верблюды. А черные верблюды - это всего лишь тени'

			},
			{
				title: 'Равенство',

				text: 'Объясните равенство, показанное на рисунке:_!_http://www.smekalka.pp.ru/sites/default/files/1500.jpg',
				hint: '',
				answer: 'Достаточно перевернуть картинку и вы увидите EIGHT = 8'

			},
			{
				title: 'Тест на чувство композиции',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1515.jpg_!_Перед вами два изображения картины Анри Матисса "Лодка". Но одно из них правильное, а второе перевернуто вверх ногами. Ваше мнение, какое правильное, а какое нет?',
				hint: '',
				answer: 'Правильный рисунок слева. Кстати, эта картина была выставлена 17 октября 1961 года в Нью-Йоркском Музее современного искусства. И только 3 декабря кто-то обратил внимание, что картина висит вверх ногами'

			},
			{
				title: 'Звезда',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1631_1.gif_!_Можете ли вы обнаружить на приведенном здесь рисунке правильную пятиконечную звезду?',
				hint: '',
				answer: 'http://www.smekalka.pp.ru/sites/default/files/1631_2.gif'

			},
			{
				title: 'Задача на пространственное воображение',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1695.gif_!_Какая из четырех черных фигур в точности соответствует красной?',
				hint: '',
				answer: 'B'

			},
			{
				title: '9 точек',

				text: 'Проведите 4 прямые линии не отрывая ручки от листа бумаги так, чтобы они перечеркивали все 9 точек:_!_http://www.smekalka.pp.ru/sites/default/files/1701_1.gif',
				hint: '',
				answer: 'http://www.smekalka.pp.ru/sites/default/files/1702_2.gif'

			},
			{
				title: 'Задача на пространственное воображение-2',

				text: 'Какая из шести черных фигур в точности соответствует красной?_!_http://www.smekalka.pp.ru/sites/default/files/1704.gif',
				hint: '',
				answer: 'B и F. Никто ведь не утверждал, что ответ должен быть единственным'

			},
			{
				title: 'Задача на пространственное воображение-3',

				text: 'Какая из шести черных фигур в точности соответствует красной?_!_http://www.smekalka.pp.ru/sites/default/files/1712.gif',
				hint: '',
				answer: 'A, D и E'
			},
			{
				title: 'Задача на пространственное воображение-4',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1715.gif_!_Какая из шести черных фигур в точности соответствует красной?',
				hint: '',
				answer: 'B, D и E'
			},
			{
				title: 'Задача на пространственное воображение-5',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1718.gif_!_Какая из семи черных фигур в точности соответствует красной?',
				hint: '',
				answer: 'A, E и F'

			},
			{
				title: 'Развертка куба',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1726.gif_!_Развертка какого кубика приведена слева?',
				hint: '',
				answer: 'B'

			},
			{
				title: 'Развертка куба-2',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1732.gif_!_Развертка какого кубика приведена слева?',
				hint: '',
				answer: 'E и F'

			},
			{
				title: 'Развертка куба-3',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1737.gif_!_Развертка какого кубика приведена слева?',
				hint: '',
				answer: 'A'

			},
			{
				title: 'Развертка куба-4. Обратная задача',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1750_1.gif_!_Есть четыре изображения одного кубика с разных сторон. Необходимо правильно нарисовать его развертку',
				hint: '',
				answer: 'http://www.smekalka.pp.ru/sites/default/files/1750_2.gif'

			},
			{
				title: 'Вычислить вес детали',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1793.jpg_!_Из заготовки, имевшей форму правильного куба, была сделана деталь, показанная на рисунке. Не удастся ли вам вычислить, сколько весит деталь, если заготовка весила 250 граммов? Шесть отверстий на поверхностях детали — сквозные. Деталь симметрична, т.е. задняя (невидимая) часть выглядит аналогично передней',
				hint: '',
				answer: '178 грамм'

			},
			{
				title: 'Лишняя фигура',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1826.jpg_!_Какая фигура здесь лишняя?',
				hint: '',
				answer: 'Первая фигура лишняя.<br>Имеется четыре признака (отличия) каждой фигуры, каждый из которых может принимать одно из двух значений:<br>1. Форма: квадрат - круг<br>2. Цвет: красный - зеленый<br>3. Обводка: есть - нет<br>4. Размер: большой - маленький<br>Если имеет место первый вариант, ставим 0, если второй, ставим 1. Таким образом, совокупность признаков каждой фигуры можно записать следующим образом:<br>Фигура 1: 0000<br>Фигура 2: 0010<br>Фигура 3: 1000<br>Фигура 4: 0100<br>Фигура 5: 0001<br>Первая фигура отличается от остальных тем, что не обладает никаким из отличий. Остальные фигуры отличаются ровно одним из четырех вышеперечисленных признаков.<br>Поясняющая картинка:_!_http://www.smekalka.pp.ru/sites/default/files/1826_2.png'

			},
			{
				title: 'Квадраты',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1850.jpg_!_Найдите квадраты, которые не зацеплены ни с какими другими?<br>P. S. Знающие хоть немного английский язык могут в качестве подсказки прочитать, сколько квадратов нужно искать))',
				hint: '',
				answer: 'Квадраты под номерами 17, 19 и 23'

			},
			{
				title: 'Простая задача с карандашами',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1857.jpg_!_Сколько карандашей на этой фотографии?',
				hint: '',
				answer: '72 (18*4)'

			},
			{
				title: 'Сколько квадратов?',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1863.jpg_!_Сосчитайте, сколько квадратов на этом рисунке?',
				hint: '',
				answer: '17 квадратов.<br>Если принять сторону самого маленького квадрата за единицу, то на этом рисунке будет:<br>6 квадратов со стороной 1;<br>8 квадратов со стороной 2;<br>2 квадрата со стороной 3;<br>1 один квадрат со стороной 4'

			},
			{
				title: 'Шесть кругов',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1865.jpg_!_6 кругов разделены на части. Вам дается полминуты на то, чтобы решить, какие два круга разделены на наибольшее число частей. Если начать заниматься подсчетами, Вы не уложитесь в отведенное время. Единственный выход – оценивать на глаз',
				hint: '',
				answer: 'Круги под номерами 2 и 3<br>Число частей в кругах:<br>1) 10<br>2) 14<br>3) 13<br>4) 10<br>5) 10<br>6) 10'
			}

		]

	};

}(window));