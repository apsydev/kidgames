(function (win) {

	"use strict";
	/*global window */

	win.sections = win.sections || {};

	win.sections.wwwProblem = {
		name: 'WWW-задачи (на знание и эрудицию)',
		lang: 'ru', // ru || en
		//вЂ™
		questions: [
			{
				title: 'Непокоренный',

				text: 'Почему еще никто не покорил самый крупный из известных потухших вулканов?',

				answer: 'Самый крупный из известных потухших вулканов находится на Марсе'

			},
			{
				title: 'Войти в себя',

				text: 'Чему потребовалось 19 лет, чтобы войти в себя?',

				answer: 'Книга рекордов Гиннеса после 19 лет публикаций стала второй по популярности книгой в мире и таким образом попала сама в себя'

			},
			{
				title: 'Другой номер',

				text: 'Древние считали самыми большими четвертый, седьмой или одиннадцатый. Мы же, благодаря картине великого русского художника, называем другой номер. Какой?',

				answer: 'Девятый (вал)'

			},
			{
				title: 'Алекс Фергюсон',

				text: 'В начале 90-х годов прошлого века Алекс Фергюсон стал тренером "Манчестер Юнайтед" - самого знаменитого профессионального футбольного английского клуба. До этого он был успешным тренером в Шотландии. Он мог быть успешным менеджером в любой стране мира, за исключением Сингапура. Почему?',

				answer: 'Алекс Фергюсон непрерывно жует жевательную резинку во время футбольных игр. Продажа и употребление жевательной резинки запрещены на территории Сингапура'

			},
			{
				title: 'Комплименты',

				text: 'Почти во все мире принято говорить женщинам комплименты. Однако в государстве Того мужчины подходят к этому очень осторожно и осмотрительно и комплименты говорят крайне редко, видимо следуя поговорке "Слово не воробей..." А почему?',

				answer: 'Потому что после этого он обязан на ней жениться'

			},
			{
				title: 'Вода',

				text: '"В его докладе много воды", "Он льет воду". Объясните происхождение этих выражений',

				answer: 'Они родились в эпоху, когда время измерялось водяными часами'

			},
			{
				title: 'Про шарик',

				text: 'В воду бросили железный шарик. Он тонул больше часа.<br>Почему?',

				answer: 'Шарик тонул в Марианской впадине'

			},
			{
				title: 'Коктейль',

				text: 'В элитных американских барах существует некий коктейль, представляющий из себя жидкость зеленого цвета. Его особенность заключается в том, что пить этот напиток следует через специальный предмет, который заранее проходит очистку ультрафиолетом. Что за предмет?',

				answer: 'Этот коктейль называется Рокфеллер. И его зелёный цвет связан с названием, которое в свою очередь ассоциируется с американской "зелёной" валютой. Поэтому и пьют этот напиток, используя скрученную стодолларовую купюру'

			},
			{
				title: 'Диагор',

				text: 'Греческому философу Диагору, прозванному Безбожником, показали изображения людей, которые молились богам и спаслись при кораблекрушении. Что на это ответил Диагор?',

				answer: 'А где изображения тех, кто молился, но все-таки утонул?'

			},
			{
				title: 'Что общего',

				text: 'Что объединяет слова "говядо" (ср. церк. крупная рогатая скотина, бык, воль или корова.) и "шляпа" (ж. мужская головная покрышка, из твердого припаса; кожаная, бумажная, валяная, поярковая, соломенная и пр.) с точки зрения словаря Даля?',

				answer: 'В словаре Даля только к этим двум словам прилагаются рисунки'

			},
			{
				title: 'Чья цитата?',

				text: 'Догадайтесь, чья это цитата:<br>За всю свою профессиональную жизнь я ни разу не попадал ни в какую хоть сколько-нибудь серьезную аварию... Я не видел крушения, не переживал крушения, не оказывался в ситуации, которая грозила катастрофой',

				answer: 'Э. Дж. Смит, капитан "Титаника"'

			},
			{
				title: 'Химия',

				text: 'Большинство химических элементов были названы в честь населённых пунктов, стран, частей света.И только одна страна была названа в честь химического элемента. Что это за страна?',

				answer: 'Аргентина'

			},
			{
				title: 'Туристическая',

				text: 'Во многих немецких турагенствах можно увидеть такое объявление: "У нас вы можете приобрести путевки в любые страны от Египта до Кипра". Почему именно эти страны выбраны в Германии?',

				answer: 'от Aegypten (Египта) до Zypern (Кипра)... от A до Z, первых и последних букв немецкого алфавита'

			},
			{
				title: 'Что лишнее?',

				text: 'В каждой группе все, за исключением одного, названия предметов, инструментов, произведений, фамилии учёных, писателей и т.д. выбраны по какому-то определённому признаку. Установите для каждой группы объединяющий признак и укажите, что ему не соответствует. Пример: гранит, мрамор, кварц, полевой шпат, торф...В этой группе всё, за исключением торфа, камни. По такому же принципу необходимо сделать выбор.<br><br>1. Амперметр, арифмометр, манометр, электрический счетчик, штангенциркуль.<br>2. Овца, свинья, верблюд, лошадь, олень, бегемот, жираф.<br>3. Скрипка, флейта, виолончель, арфа, балалайка.<br>4. Паганини, Сарасате, Шопен, Крейслер, Сигетти,<br>5. Петрография, кристаллография, тектоника, стратиграфия, вулканология, топология.<br>6. Волга, Рейн, Нил, Сена, Дунай.<br>7. Чебышев, Тургенев, Моцарт, Лермонтов, Чайковский, Берлиоз.<br>8. Слон, лошадь, ехидна, лось, тигр, лев.<br>9. Фланец, вентиль, карбюратор, тройник, патрубок.<br>10. "Песнь о вещем Олеге", "Бесы", Буря мглою небо кроет", Выхожу один я на дорогу", "К морю", "Послание в сибирь", "Утопленник".<br>11. Бром, Ртуть, вода, спирт, хлор, ацетон.<br>12. Цинк, барий, магний, алюминий',

				answer: '1. Все, за исключением арифмометра, измерительные приборы.<br>2. Все, за исключением лошади, парнокопытные животные.<br>3. Все, за исключением флейты, струнные инструменты.<br>4. Все, за исключением Шопена, скрипачи.<br>5. Все науки, за исключением топологии, относятся к наукам, изучающим Землю.<br>6. Все, за исключением Нила, европейские реки.<br>7. Все, за исключением Моцарта, жили в 19 веке.<br>8. Все, за исключением ехидны, живородящие животные.<br>9. Все детали, за исключением карбюратора, относятся к деталям трубопровода.<br>10. Все стихотворения, за исключением "Выхожу один я на дорогу", написаны А.С. Пушкиным.<br>11. Все вещества, за исключением хлора, в нормальных условиях жидкости.<br>12. Все элементы, за исключением алюминия, двухвалентны'

			},
			{
				title: 'Авторское право',

				text: 'Как защищают свои издания от пиратов, которые хотели бы их скопировать, издатели словарей и атласов?',

				answer: 'Обычно издатели включают в словарь несуществующее слово, а в атлас помещают несуществующий остров. Если они обнаруживаются в каком-то другом издании, факт копирования становится несомненным'

			},
			{
				title: 'Пушкин',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1458.jpg_!_Не все знают, что А.С. Пушкин - автор по крайней мере одной научной гипотезы.<br>Всё многообразие ЧЕГО, по предположению Пушкина, произошло из одной простой фигуры?',

				answer: 'Это цифры.<br>«…Форма цифров арабских составлена из следующей фигуры... Римские цифры составлены по тому же образцу» (А. С. Пушкин).<br>Как из фигуры Пушкина можно получить каждую цифру: см. на иллюстрации из статьи А. Г. Егурнова "Пушкинская гармония цифр":_!_http://www.smekalka.pp.ru/sites/default/files/1458_2.jpg'

			},
			{
				title: 'Знак',

				text: 'Во Франции и Германии - ЭТО ноль (по отношению к человеку может считаться оскорбительным)<br>В Японии - деньги<br>В Бразилии - неприличный жест<br>В Тунисе - угроза смерти<br>В Сирии - разрыв отношений<br>А что означает ЭТО в России и США?',
				hint: 'Это знак, который показывается пальцами',
				answer: 'ОК_!_http://www.smekalka.pp.ru/sites/default/files/1462.jpg'

			},
			{
				title: 'Почему',

				text: 'Почему при умножении Андре Мари на Георга Симона получается Алессандро?',

				answer: 'Ампер*Ом = Вольт'

			},
			{
				title: 'Преступление',

				text: 'В некоторых штатах США наказуемо одно преступление. Людей, которые пытаются его совершить, сажают в тюрьму, но людей, которые успешно совершили его никогда не наказывают. Что это за преступление?',

				answer: 'Это преступление - самоубийство. Те, кто его успешно совершили, не могут быть наказаны'

			},
			{
				title: 'Двухвершковый конь',

				text: 'В начале романа "Тихий Дон" М. Шолохов описывает военные сборы казаков. В частности, можно встретить такое предложение: "... В бричку после первой же кормежки запрягли двухвершкового Христониного коня и Степанового вороного..." Если же заглянуть в справочник, то сразу возникнет вопрос, ведь 1 вершок равен всего лишь 4,445 см. Соответственно, двухвершковый конь должен быть ниже 10 см',

				answer: 'В царскую армию казак обязан был явиться со своим конем не ниже двух аршин и полвершка. Соответственно, два аршина были "нулевой отметкой"'

			},
			{
				title: 'Историческая картина',

				text: 'http://www.smekalka.pp.ru/sites/default/files/1470.jpg_!_X + Y + Z = 102.<br>Определите значение X, Y и Z',
				hint: 'Один из мужчин, изображенных на картине - Бенджамин Франклин',
				answer: ' 100+2+0 = 102. На картине Франклин, Джефферсон и Адамс готовят Декларацию независимости. На денежных купюрах "засветились" только двое: Франклин - $100; Джефферсон - $2'

			},
			{
				title: 'Что между ними?',

				text: 'В начале - колокол, шторы, телевизор, тигр, жираф, слон, лошадь, петух, медведь. В конце - кровать, книга, месяц, радуга, лошадь, слон, перо, птица, карусель, звёзды, шторы.<br>А что между ними?',

				answer: 'Передача "Спокойной ночи, малыши"'

			},
			{
				title: 'Запрет для левшей',

				text: 'Вы, возможно, думаете, что сейчас, во времена равных возможностей для всех, предубеждение против левшей - дело далекого прошлого?<br>Однажды человеку, который очень хотел сделать кое-что, запретили это по соображениям безопасности. Мотивировали отказ тем, что он левша, а все, кто делал это, были правшами.<br>Тогда он собрал еще семерых левшей, которые попали в точно такую же ситуацию, и все вместе они смогли сделать то, что хотели.<br>Что же так хотел сделать этот человек?',

				answer: 'По соображениям безопасности левшам не разрешается играть в поло. Это делается из-¬за опасения столкновения клюшек, если люди, держащие клюшки в правой и левой руках, будут ехать рядом. Но, собрав две команды левшей, можно спокойно сыграть в поло'

			},
			{
				title: 'Здоровые люди',

				text: 'В начале 20 века многим людям были сделаны операции по медицинским показаниям, которых на самом деле не было. Почему?',

				answer: 'Людей обследовали с помощью недавно изобретенной рентгеноскопии. До этого времени сведения о расположении внутренних органов человека получали в основном и результате вскрытий, когда тело лежит горизонтально. Рентгеноскопические же исследования проводили на людях, которые стояли вертикально. При этом формы и положения многих внутренних органов оказывались иными. Врачи принимали это за патологию, которой на самом деле не было'

			},
			{
				title: 'Королевский устав',

				text: 'Французский королевский устав предписывал : при встрече двух офицеров первым честь отдаёт тот, чьё звание ниже. А что гласит указ о ситуации, когда встречаются два офицера с равными воинскими званиями? Кто должен отдавать честь первым?',

				answer: 'Тот, кто лучше воспитан'

			},
			{
				title: 'Почему так?',

				text: 'Почему у велосипеда цепь справа? ',

				answer: 'Традиция размещать цепь справа пришла из верховой езды, где посадка слева так же распространена, так как шпага, носимая у левого бедра, затрудняла посадку справа'

			},
			{
				title: 'Лада Калина',

				text: 'Автомобиль "Лада Калина" ("Lada Kalina") имеет изменённое экспортное название для Финляндии - "Lada 119". Почему?',

				answer: '"Kalina" по-фински - "лязг", "стук", "бряцание", "звон". Вряд ли кто-то стал бы покупать машину с таким "говорящим" названием'

			},
			{
				title: 'Измерения',

				text: 'Задача, решение которой люди искали несколько веков и сейчас думают, что оно найдено. Причем, думая об одном и том же, многие люди все еще приводят разные варианты решения, которые, в свою очередь, дают разные результаты. А надо всего лишь найти расстояние от одной точки до другой. Это расстояние огромно. И в то же время очень мало. Все зависит от того, как к этому относиться. История показывает, что задача эта решается разными способами.<br><br>Один немец, измерив это расстояние, сказал, что оно равно 180. Узнав это, один француз провел свои измерения и заявил, что расстояние равно 80. Ему возразил швед и привел в доказательство свои измерения, утверждая, что расстояние равно 100. В конце концов в спор вмешался английский барон и, опираясь на природные данные, предложил другой метод измерения этого расстояния, по которому оно все равно осталось равным 100.<br><br>Большинство из нас до сих пор верят шведу, но некоторые упрямые ретрограды продолжают проповедовать учение немца. И лишь немногие следуют за англичанином, хотя он лишь подтвердил слова шведа.<br><br>Всего три вопроса. О чем спорили эти люди? Кто они? В чем заключается задача?',

				answer: 'Немец - Фаренгейт, француз - Реомюр, швед - Цельсий, английский барон - Кельвин, а измеряли они температурный интервал от таяния льда до кипения воды'

			},
			{
				title: 'Крылатое выражение',

				text: 'Все знают это крылатое выражение. Однако на самом деле оно представляет собой лишь первую часть классического латинского изречения, которое заканчивается словами "редкая удача". А как оно звучала полностью?',

				answer: 'В здоровом теле здоровый дух - редкая удача!<br>Вот еще один пример того, как может исказиться первоначальный смысл поговорки. Фраза "пьяному море по колено" в полном варианте звучит так "пьяному море по колено, а лужа по уши". Как видите, смысл становится совершенно другой'

			},
			{
				title: 'Песня',

				text: 'Эта песня широко известна во всем мире, ее многочисленным "продолжениям" и пародиям на нее посвящен даже научный труд. Но в январе 1945 года по просьбе генерала А.И.Нестеренко сам автор написал ее своеобразное продолжение - новую интерпретацию песни. Что же это за песня?',

				answer: 'Пуританам он советуем прикрывать фиговыми листками свои глаза'

			},
			{
				title: 'Самая смертоносная война',

				text: 'Как вы, вероятно, знаете, в Библии содержится множество историй о болезнях, войнах и разрушениях.<br>Кому, согласно Библии, единственному из всех, удалось уничтожить четверть населения Земли?',

				answer: 'Каин, убивший Авеля. В то время на земле было всего четыре человека (двумя другими были их родители Адам и Ева)'

			},
			{
				title: 'Простуда',

				text: 'Хитрый Рэг взял еще один носовой платок и высморкался.<br>«Такое ощущение, что ты сильно простудился», — сказал Застенчивый Алан.<br>«Да, — сказал Рэг, — я ездил в Антарктиду, чтобы сделать там фотографии. Это замечательное незагрязненное место, идеально подходящее для съемок. Мы провели там три недели, снимая горные кряжи и льдины в одном месте около Южного полярного круга.<br>Но вторая неделя была не слишком удачной — я обморозил себе ноги и простудился. Сейчас у меня самая тяжелая стадия простуды. Спасибо за твою заботу о моем здоровье».<br>Отличная история, но что же в ней не так?',

				answer: 'В Антарктиде зимой не бывает простудных заболеваний, так как воздух там настолько холодный, что абсолютно стерилен.<br>Отличная история, но что же в ней не так?'

			},
			{
				title: 'Домино',

				text: 'Перед вами список стран. Но одна-единственная страна в этом списке явно лишняя. Какая именно?<br><br><br>• Алжир<br>• Буркина Фасо<br>• Венесуэла<br>• Вьетнам<br>• Гренада<br>• Индия<br>• Кабо-Верде<br>• Камерун<br>• Китай<br>• Куба<br>• Марокко<br>• Пакистан<br>• Панама<br>• Северная Корея<br>• Сирия<br>• Соединенные Штаты Америки<br>• Сомали<br>• Тунис<br>• Турция<br>• Филиппины<br>• Чили<br>• Эфиопия',

				answer: 'Индия. На флагах всех остальных стран есть хотя бы одна звезда'

			},
			{
				title: 'Векторная литература',

				text: 'В каком произведении русской литературы сумма трёх векторов равна 0?',

				answer: 'Басня Крылова "Лебедь, рак и щука"'

			},
			{
				title: 'Волокна хлопка',

				text: 'Волокнами хлопка издавна пользуется человече¬ство для своих нужд. А для какой цели тонкое шелковистое волокно хлопчатника служит самому растению?',

				answer: 'Длинные, легкие как пух волокна хлопка, служат для семеч¬ка хлопчатника своеобразным парашютом. Ветер, подхватывая эти волокна с прикрепленным на конце семенем, разносит их далеко вокруг'

			},
			{
				title: 'Растение',

				text: 'Назовите сельскохозяйственную культуру, которая на 90% сгорает, а на 10% выбрасывается',

				answer: 'Табак'

			},
			{
				title: 'Шарик',

				text: 'На практике при движении по кривой этот шарик делает 5000 оборотов в минуту, а при движении по прямой более 20000 оборотов в минуту. Где этот шарик находится?',

				answer: 'В шариковой ручке'

			},
			{
				title: 'Командир корабля',

				text: 'Известно, что на Военно-морском флоте командир корабля является единоначальником на корабле. В гражданском флоте существует аналогичная должность - капитан судна. А на каких мирных кораблях не капитаны, а командиры?',

				answer: 'На космических'

			},
			{
				title: 'Перелетные птицы',

				text: 'Почему птицы для отлета осенью выбирают холодный день, а весной прилетают обязательно в теплый?',

				answer: 'Выбирают попутный ветер'

			},
			{
				title: 'Пьедестал',

				text: 'Какое животное занимает второе место после человека по количеству изображений на пьедесталах?',

				answer: 'Лошадь'

			},
			{
				title: 'Вопрос для знатоков географии',

				text: 'Какие два острова, расположенные в одном море, принадлежат к разным частям света?',

				answer: 'Кипр и Крит'

			},
			{
				title: 'Где это место?',

				text: 'Где на земном шаре в обозримом времени не шел, не идет и никогда не пойдет дождь?',

				answer: 'На полюсах. Ответ "в пустыне ..." не подходит - даже там иногда случается дождь'

			},
			{
				title: 'Редкий металл',

				text: 'Какой металл встречается в природе реже чем платина или уран, однако до последнего времени был почти в каждом доме?',

				answer: 'Ртуть в термометре'

			},
			{
				title: 'На эрудицию',

				text: 'В Австралии это пустыня, в Африке это водопад. А в сражении это что?',

				answer: 'Виктория, т.е. победа'

			},
			{
				title: 'Домашние насекомые',

				text: 'Какие насекомые одомашнены человеком?',

				answer: 'Пчёлы'

			},
			{
				title: 'Туалеты в Зимбабве',

				text: 'В 2008 году в Зимбабве государственные власти запретили ДЕЛАТЬ ЭТО в общественных туалетах. Какие два слова заменены на ДЕЛАТЬ ЭТО?',

				answer: 'Подтираться деньгами. В 2008 году в Зимбабве была гиперинфляция. На 1 миллиард зимбабвийских долларов нельзя было купить даже туалетную бумагу, поэтому дешевле было подтираться деньгами. Разумеется, государству не понравилось такое отношение к национальной валюте'

			},
			{
				title: 'Сор из избы',

				text: 'Всем известно, что "нельзя выносить сор из избы". А что все-таки с ним полагалось делать, если выносить нельзя?',

				answer: 'Сжигать'

			}
		]

	};

}(window));