(function (win) {

	"use strict";
	/*global window */

	win.sections = win.sections || {};

	win.sections.logikaIRassuzhdeniya = {
		name: 'Логика и рассуждения',
		lang: 'ru',
		questions: [
			{
				title: 'Как попасть в город?',
				
				text: 'В некотором городе ввели новый порядок. Теперь каждого, кто хочет попасть в город, на входе останавливали стражники и задавали один и тот же вопрос: "Зачем ты хочешь войти в город?" Если человек в ответ на этот вопрос говорил правду, то его топили в пруду, а если неправду - вешали на виселице. Долгое время никто не мог войти в город, пройдя через это испытание. Но нашелся такой человек, который сказал, что он сможет пройти, не будучи утопленным в пруду или повешенным на виселице. Похвастался и... прошел! Что же он сказал страже?',
				hint: '',
				answer: '"Я пришел, чтобы быть повешенным."'

			},
			{
				title: 'Как выбрать нужного парикмахера?',
				
				text: 'Будучи проездом в маленьком городке, один купец зашел перекусить в ресторанчик, а потом решил постричься. В городке было всего две парикмахерские, и в каждой - только один мастер, он же хозяин. В одной парикмахер был неопрятно побрит и плохо пострижен, а в другой - чисто выбрит и с отличной стрижкой. Купец решил стричься в первой парикмахерской. Как по-вашему, он сделал правильный выбор?',
				hint: '',
				answer: 'Купец верно рассудил, что что раз в городе всего два парикмахера, то они наверняка стригут друг друга. Значит, идти стричься надо к тому, у кого плохая стрижка'

			},
			{
				title: 'Торговцы и гончары',
				
				text: 'В одном городе все люди были торговцами или гончарами. Торговцы всегда говорили неправду, а гончары - правду. Когда все люди собрались на площади, каждый из собравшихся сказал остальным : "Вы все торговцы!" Сколько гончаров было в этом городе?',
				hint: '',
				answer: 'Гончар был один, т.к.: 1. Если бы гончаров не было, то торговцам пришлось бы сказать правду, что все остальные торговцы, а это противоречит условиям задачи. 2. Если бы гончаров было больше одного, то каждому гончару пришлось бы соврать, что остальные торговцы'

			},
			{
				title: 'Истина и ложь',
				
				text: 'На листе бумаги имеется тринадцать строчек текста, пронумерованных по порядку. В каждой строчке написано: "Ложными являются лишь столько утверждений, содержащихся на этом листе, каков номер данной строчки". Сколько истинных утверждений было на самом деле?<br>Как изменится ответ при замене слова "лишь" на сочетание "по крайней мере"?',
				hint: '',
				answer: 'Не более одного утверждения может оказаться истинным. Если бы все утверждения были ложными, то утверждение в строке 13 оказалось бы истинным, что противоречит самому этому утверждению. После аналогичной проверки других строк можно заключить, что только одно утверждение в строке по номером 12 истинно, а остальные ложны.<br>После замены слова ответ будет таким: только любые из 6 утверждений сверху листа могут быть истинными. Если истинных утверждений N (они идут подряд сверху листа), то все последующие окажутся ложными. Они стоят в строках с номерами от N+1 до 13, а всего их 13-N. Истинных утверждений не может быть больше, чем ложных. Значит, N < 13-N, откуда N < 6,5. Следовательно, только любые из первых 6 утверждений сверху листа имеют право быть истинными, все остальные ложные'

			},
			{
				title: 'Найди жену',
				
				text: 'Жил-был шах и было у него 12 визирей, а у каждого из визирей были жены, у одних - верные, у других - развратные. Развратные жены спали со всеми визирями, верные только со своими мужьями. Надоел шаху такой бардак и решил он доверить мудрым визирям самим убить всех неверных жен. Заточил он визирей с женами в тюремные камеры (каждый визирь со своей женой в отдельной камере и не может общаться с коллегами) и сказал:<br>"Пока все неверные жены не будут убиты, не выпущу".<br>Проходит первая ночь, на утро шах посылает доверенное лицо проверить камеры. После проверки он сообщает визирям, что ни одной жены убито не было. Проходит вторая ночь, после нее тоже ни одной жены убито не было. А на третью ночь все неверные жены были убиты, причем только неверные.<br>Вопрос: сколько было неверных жен и как визири определяли верна ему жена или нет?<br>Примечание. Визири мудры и полагаются на мудрость своих коллег. Каждый визирь знает, с кем он спал, он не знает только одного - верна ли ему его жена. Есть, как минимум, одна неверная жена',
				hint: '',
				answer: 'Решение методом математической индукции.<br>Предположим, что неверная жена только одна, в таком случае 11 визирей спали с двумя женами и только один спал с одной. В этом случае в первую ночь муж ее убьет. Но после первой ночи никто убит не был. Думаем дальше. Если неверных жен две, тогда 10 визирей спали с тремя и двое с двумя женами. Тогда на вторую ночь эти двое убивают своих жен. Но на вторую ночь тоже никто не был убит, поэтому идем дальше. Если неверных жен 3, то, следуя предыдущим рассуждениям, они будут убиты на третью ночь. Следовательно, было 3 неверных жены'

			},
			{
				title: 'Трудная головоломка',
				
				text: 'Если головоломка, которую вы разгадали перед тем, как вы разгадали эту, была труднее, чем головоломка, которую вы разгадали после того, как вы разгадали головоломку, которую вы разгадали перед тем, как вы разгадали эту, то была ли головоломка, которую вы разгадали перед тем, как разгадали эту, труднее, чем эта?',
				hint: '',
				answer: 'Да, была'

			},
			{
				title: 'Шляпы',
				
				text: '4 человека стоят в ряд. Каждый может видеть только стоящих перед ним, если ничего не мешает. Первый видит второго и третьего. Второй видит третьего. Третий никого не видит из-за стены. Четвертый тоже никого не видит. Они знают, что на них одеты шляпы, две черные и две белые. Но никто из них не знает шляпа какого цвета одета на нем самом. Перед ними поставлена задача узнать про цвет своей шляпы. На свою шляпу смотреть нельзя, назад смотреть тоже нельзя. Каждый, кто догадался о цвете своей шляпы, обязан вслух сказать об этом.<br>Вопрос: Кто из них в данной ситуации может узнать цвет своей шляпы?',
				hint: '',
				answer: 'Человек номер 2. Человек номер два знает, что, если на нем и на третьем одинаковые шляпы, то первый сразу поймет какая на нем самом. Так как выбор тогда остается только из одного цвета. Но так как человек номер один молчит, то человек под номером два понимает, что на нем и на третьем шляпы разных цветов. Так как на третьем одета черная шляпа, то на нем самом, соответственно, белая. Вот и все'

			},
			{
				title: 'Алиса, Лев и Единорог',
				
				text: 'Однажды Алиса повстречала Льва и Единорога, отдыхавших под деревом. Странные это были существа. Лев лгал по понедельникам, вторникам и средам и говорил правду во все остальные дни недели. Единорог же вел себя иначе: он лгал по четвергам, пятницам и субботам и говорил правду во все остальные дни недели. Они высказали следующие утверждения:<br>Лев:<br>- Вчера был один из дней, когда я лгу.<br>Единорог:<br>- Вчера был один из дней, когда я тоже лгу.<br>Из этих двух высказываний Алиса сумела вывести, какой день недели был вчера.<br>Что это был за день?',
				hint: '',
				answer: 'Лев мог сказать, что он лгал накануне, только в понедельник и в четверг. Единорог мог сказать, что он лгал накануне, только в четверг и в воскресенье. Следовательно, они оба могли утверждать, что лгали накануне, только в четверг, а вчера, соответственно, была среда'

			},
			{
				title: 'Поедание конвертов',
				
				text: 'Вы имеете 3 конверта, один из которых нужно немедленно съесть. В каждом конверте содержится листок с двумя утверждениями. В одном конверте оба утверждения истинны, в другом оба ложны, а в третьем одно ложно и одно истинно. Вот эти утверждения:<br>Конверт 1:<br>1. Этот конверт есть не надо<br>2. Обязательно нужно съесть второй конверт<br>Конверт 2:<br>1. Не нужно есть первый конверт<br>2. Ешьте третий конверт<br>Конверт 3.<br>1. Не стоит есть этот конверт<br>2. Смело съедайте первый конверт<br>Так какой конверт нужно съесть?',
				hint: '',
				answer: 'Нужно съесть третий конверт'

			},
			{
				title: 'Остаться в живых',
				
				text: 'В одной деспотичной стране король созвал всех придворных мудрецов (количество их не принципиально, поэтом без ограничения общности будем считать, что их 20 человек) и объявил им следующее:<br>Завтра их всех построят в одну колонну и завяжут глаза, затем каждому на голову наденут колпак черного или белого цвета и снимут повязки. Каждый сможет видеть цвет колпака стоящих впереди него, но не может видеть свой колпак и колпаки тех, кто сзади. Каждому в колонне зададут вопрос: Какого цвета на тебе колпак? Если мудрец ответит правильно, его оставят в живых. Если неправильно, значит он недостоин быть мудрецом и его казнят.<br>Какую стратегию надо избрать мудрецам, чтобы как можно больше из них остались в живых? На размышления и совещания им дается ровно одна ночь',
				hint: '',
				answer: 'Вот стратегия, которой надо придерживаться мудрецам: последний в колонне мудрец считает количество черных колпаков впереди себя. Если это количество четное, то он говорит, что на нем черный колпак, если нечетное, то говорит, что колпак белый. Точного ответа он все равно не знает, поэтому отвечает именно так (такая была выработана стратегия). Допустим, число было четным, и он сказал, что колпак черный. Если угадал - остался в живых, не угадал - значит, не повезло.<br>Предпоследний мудрец слышит этот ответ и считает количество черных колпаков впереди себя. Если количество осталось четным, значит, он точно знает, что на нем белый колпак.<br>Если количество нечетное, значит, колпак черный. Точно также поступают и остальные мудрецы.<br>В худшем будет казнен только один мудрец: тот, который отвечал первый. В лучшем - все останутся живы'

			},
			{
				title: 'Кошельки',
				
				text: 'Неизвестный спонсор премировал трех богатырей за отличную ратную службу - дал им 10 кошельков. Когда богатыри открыли эти кошельки, оказалось, что один кошелёк пуст, во 2-ом лежит одна монета, в 3-ем - две, и так далее, до десятого, в котором оказалось 9 монет. Илья Муромец взял себе два кошелька. Добрыня Никитич и Алёша Попович разделили между собой остальные кошельки так, что Добрыня Никитич, как более старший, получил бОльшую сумму. Но рассеянный Алёша Попович по дороге домой потерял 4 кошелька. У него осталось только 10 монет.<br>Какие кошельки взял себе Илья Муромец?',
				hint: '',
				answer: 'Илья Муромец взял себе 6-й и 8-й кошельки.<br>Алеша Попович должен был взять как минимум 6 кошельков (потому что 4 кошелька он потерял, а 10 монет у него должно было остаться).<br>Семь кошельков Алеша взять не мог: т.к. два взял Илья, то Добрыне Никитичу остается только один кошелек, в котором денег никак не может быть больше, чем у Алеши. Т.е. у Алеши Поповича шесть кошельков, в двух из которых в сумме десять монет.<br>В каких кошельках у Алеши было 10 монет? Варианты: 2-й и 10-й (1+9), 3-й и 9-й (2+8), 4-й и 8-й (3+7), 5-й и 7-й (4+6). В первых трех вариантах сумма всех монет у Алеши получается больше, чем у Добрыни, чего не может быть по условию. Значит, Алеша взял 5-й и 7-й кошельки (4+6) и четыре кошелька с наименьшим количеством монет (чтобы не "обойти" Добрыню): 1-й (0), 2-й (1), 3-й (2) и 4-й (3). Всего у Алеши получается 10+6 = 16 монет в шести кошельках.<br>Т. к. в условии сказано, что Илья Муромец взял два кошелька, то Добрыня Никитич взял тоже два. Чтобы у Добрыни было монет больше, чем у Алеши, он должен 9-й (8) и 10-й (9) кошельки (в сумме 17 монет).<br>Тогда для Ильи Муромца остаются только 6-й (5) и 8-й (7) кошельки с двенадцатью монетами'

			},
			{
				title: 'Шерлок Холмс',
				
				text: '- Доброе утро, Ватсон! Я вижу, вы уже читаете утреннюю "Таймс"? Что пишут интересного?<br>- Есть кое-что. Вот например: На кольцевой автостраде произошло довольно странное ДТП. Оба водителя доставлены в больницу в тяжелом состоянии. Интересно, что их машины не получили при этом никаких повреждений.<br>- Ну это элементарно, Ватсон. Есть еще что-нибудь?<br>- Холмс, для Вас все элементарно. А как на счет этого? Шахматисты - убийцы. В квартире на журнальном столике на трех ножках стояла шахматная доска и двое играли в шахматы, а третий смотрел. На минуту погас свет, а когда включился, третий лежал на полу с ножом в горле. Прибыла полиция. Первый сказал, что когда погас свет, он напряженно обдумывал очередной ход и ничего не слышал. Второй сказал, что когда погас свет, он нагнулся подложить бумажку под ножку стола, - он качался и мешал сосредоточиться - кровь прилила к голове, и он тоже ничего не слышал. Кто же из них убил третьего?<br>- Ватсон, это еще проще. Даже миссис Хадсон скажет Вам, кто убийца. Нет ли чего более интересного?<br>- Нет. Больше ничего нет, разве только самоубийство Джеральда Батчера, лондонский банкир, который был найден мертвым в своем кабинете.<br>- Ну ка, ну ка...<br>- Он лежал на столе, в руке пистолет, висок прострелен. Шторы были опущены, горела настольная лампа, тут же стоял магнитофон. Инспектор из Скотланд-Ярда нажал на кнопку воспроизведения и услышал последнее послание Батчера: - "Я не могу ждать банкротства, это - конец..." - а потом послышался звук выстрела. Под головой банкира было залитое кровью письмо из Налоговой полиции с извещением о проверке.<br>- Ну вот, Ватсон, а Вы говорите, что нет ничего интересного. А может мы займемся поисками убийцы банкира....<br>- Холмс, это же самоубийство...<br>- Это убийство Ватсон, убийство, и мы с вами займемся этим убийством...<br>Ну а Вы готовы проверить свои дедуктивные способности?<br>Тогда:<br>1. Опишите ДТП.<br>2. Укажите, кто из шахматистов убийца.<br>3. И почему самоубийство Джеральда Батчера на самом деле - это убийство',
				hint: '',
				answer: '1. Водители ехали навстречу друг другу, высунув голову на улицу через боковое стекло. И столкнулись головами.<br>2. Стол на трех ножках не может качаться (ситуацию с неровным полом не рассматриваем), т.е. один из шахматистов врет. Соответственно, он и есть убийца.<br>3. Это не самоубийство, т.к при нажатии на кнопку услышали запись, в конце которой - выстрел. Но кто-то ведь должен был перемотать пленку на начало записи. Очевидно, это был убийца'

			},
			{
				title: 'Мучительный выбор',
				
				text: 'Андрей является участником шоу-викторины. Главный приз спрятан в одном из ящиков. Андрей получает 4 подсказки:<br>1. Приз находится в синем или зелёном ящике.<br>2. Приз находится в красном или желтом ящике.<br>3. Приз находится в зелёном ящике.<br>4. В жёлтом ящике приза нет.<br>Три подсказки ошибочны и только одна правильная. Андрей поразмыслил и открыл правильный ящик. Ящик какого цвета он выбрал?',
				hint: '',
				answer: 'Жёлтый'

			},
			{
				title: 'Перетягивание каната',
				
				text: 'Андрей, Борис, Вадим и Геннадий заняли первые четыре места в соревновании по перетягиванию каната. На вопрос корреспондента, какое место занял каждый из них, было получено три ответа:<br>1) Андрей – первое, Борис – второе,<br>2) Андрей – второе, Геннадий – третье,<br>3) Вадим – второе, Геннадий – четвертое.<br>В каждом из этих ответов одна часть правдива, а вторая ложна. Кто занял какое место?',
				hint: '',
				answer: 'Приходится анализировать варианты. Это можно делать по-разному. Можно выяснить, возможно ли, чтобы в первом ответе первая часть была правдой, а вторая ложью и так далее. Однако удобнее проверить, возможно ли, чтобы тот или иной мальчик занял то или иное место. Чаще всего в ответах упоминаются Андрей и Геннадий. С любого из них и нужно начать. Начнем, например, с Андрея. Именно рассмотрим, мог ли Андрей занять первое место, мог ли второе, мог ли третье, мог ли четвертое.<br>Пусть Андрей занял первое место. Тогда в первом ответе первая часть – правда, а значит, вторая часть – неправда, то есть Борис – не второй (но и не первый, так как первый – Андрей), а третий или четвертый. Во втором ответе первая часть – неправда, так как Андрей – не второй, а первый. Значит, во втором ответе вторая часть – правда, откуда получается, что Геннадий – третий. Поэтому Борис – не третий, а четвертый, и мы получаем такое распределение:<br>Андрей – первый, Вадим – второй, Геннадий – третий, Борис – четвертый. Осталось с этой точки зрения просмотреть третий ответ. "Вадим – второй" – правда, "Геннадий – четвертый" – неправда. Все сходится. Но, быть может, Андрей мог быть и вторым? Нет, так как тогда первый ответ был бы полностью ложным.<br>Не мог быть Андрей и третьим, так как тогда полностью ложен второй ответ.<br>Не мог быть Андрей и четвертым, что доказать несколько труднее – нужно сопоставлять разные ответы. Из первого следует, что Борис – второй, из второго – что Геннадий – третий, но тогда полностью лжив третий ответ.<br>Ответ: Андрей – первый, Вадим – второй, Геннадий – третий, Борис – четвертый'

			},
			{
				title: 'Проколотые шины',
				
				text: 'Кто-то проколол шины на машине Ивана Петровича. Рядом с машиной в течение дня было замечено три мальчишки: Андрей, Боря и Вася. Галя, начинающий детектив из 14-й квартиры, задала ребятам несколько вопросов. Андрей сказал: - Это сделал Боря, я уверен.<br>Боря сказал:<br>- Ты что! Это не я!<br>Вася сказал:<br>- Это сделал кто-то из этих двоих, а я к этому непричастен!<br>Боря сказал:<br>- Это Вася как раз шины-то проткнул!<br>Андрей сказал:<br>- Мне кажется, ты ошибаешься.<br>Вася сказал:<br>- Похоже, это всё-таки Андрей. Отличник Дима, проходя мимо, заметил: - Один из этих мальчиков отвечал правду, другой всё время лгал, а третий один раз солгал, а другой раз сказал правду. Помогите Гале рассудить всё, если известно, что Дима сказал правду',
				hint: '',
				answer: 'Это сделал Боря. Андрей оба раза сказал правду, Боря оба раза солгал, а Вася был прав в первом высказывании и неправ во втором'

			},
			{
				title: '3 конверта',
				
				text: 'Вы имеете 3 конверта, один из которых нужно немедленно съесть. В каждом конверте содержится листок с двумя утверждениями. В одном конверте оба утверждения истинны, в другом оба ложны, а в третьем одно ложно и одно истинно. Вот эти утверждения:<br>Конверт 1:<br>1. Этот конверт есть не надо<br>2. Обязательно нужно съесть второй конверт<br>Конверт 2:<br>1. Не нужно есть первый конверт<br>2. Ешьте третий конверт<br>Конверт 3.<br>1. Не стоит есть этот конверт<br>2. Смело съедайте первый конверт<br>Так какой конверт нужно съесть?',
				hint: '',
				answer: 'Нужно съесть третий конверт'

			},
			{
				title: 'Шарики',
				
				text: 'На столе стоят три одинаковых ящика. В одном из них 2 черных шарика, в другом 1 черный и 1 белый шарик, в третьем 2 белых шарика. На ящиках написано: "2 белых", "2 черных", "черный и белый". При этом известно, что ни одна из записей не соответствует действительности. Как, вынув только один шарик, определить правильное расположение надписей?',
				hint: '',
				answer: 'Вынимаем шарик из коробки с надписью "черный и белый".<br>Возможны два варианта:<br>1) шарик белый;<br>тогда второй шарик в этой коробке тоже белый (иначе надпись была бы правильной);<br>третий белый шарик может находится либо в коробке "2 белых", либо в коробке "2черных", т.е. опять два варианта:<br>1а) белый и черный шарики находятся в коробке "2 белых";<br>тогда в коробке "2 черных" находятся 2 черных шарика - невозможный вараинт;<br>2б) белый и черный шарики находятся в коробке "2 черных";<br>тогда в коробке "2 белых" находятся 2 черных шарика - единственно возможный вариант<br>2) шарик черный<br>аналогично пункту 1)<br>Собственно ответ: Вытаскиваем шарик из коробки с надписью "белый и черный".<br>Если шарик белый, то:<br>в коробке "белый и черный" - 2 белых шарика;<br>в коробке "2 белых" - 2 черных шарика;<br>в коробке "2 черных" - белый и черный шарики<br>Если шарик черный:<br>в коробке "белый и черный" - 2 черных шарика;<br>в коробке "2 белых" - белый и черный шарики;<br>в коробке "2 черных" - 2 белых шарика'

			},
			{
				title: 'Поход в кино',
				
				text: 'В нашем классе 30 учащихся. На экскурсию в музей ходили 23 человека, в кино и в музей - 6 человек, а 2 человека не ходили ни в кино, ни в музей. Сколько человек нашего класса ходили в кино?',
				hint: '',
				answer: 'Найдем, сколько человек НЕ ходило в кино. Это количество складывается из тех, кто ходил только в музей, и кто не ходил никуда. Только в музей ходило 23-6 = 17 человек. Никуда не ходили 2 человека. Т.е. 17+2 = 19 человек не ходили в кино. Соответственно, 30-19 = 11 человек ходили в кино'

			},
			{
				title: 'Про школьников',
				
				text: 'В класе 35 учеников, из них 20 школьников занимаются в математическом круже, 11- в литературном, 10 ребят не посещают эти кружки. Сколько литераторов увлекаются математикой?',
				hint: '',
				answer: 'Всего 35 учеников. 10 кружки не посещают. Значит, посещают кружки 35-10=25 учеников.<br>25 учеников посещают кружки. 20 учеников занимаются в математическом кружке. Значит, только литературный кружок посещают 25-20=5 человек. В литературном кружке 11 человек. Лишь 5 из них посещают только литературный кружок.<br>Значит, 11-5 = 6 человек-литераторов посещают ещё и математический кружок'

			},
			{
				title: 'Тест без текста',
				
				text: 'Однажды прилежный студент готовился к тестированию. Для этого он разбирал варианты прошлогодних текстов. В каком-то тесте вопрос оказался плохо пропечатанным. Однако к нему имелись ответы:<br>а) все, что ниже<br>б) ничего из того, что ниже<br>в) все, что выше<br>г) одно из находящегося выше<br>д) ничего из того, что выше<br>е) ничего из вышерасположенного<br>Какой ответ правильный?',
				hint: '',
				answer: 'Только ответ д) может быть правильным.<br>Если утверждение а) правдиво, то правдиво и д) с указанием, что а) - нет. Следовательно, а) ложно. Если правдиво б), то в) ложно, а из него следует, что б) также ложно. Значит, б) ложно. Так как в) указывает, что б) правдиво, то из него вытекает, что в) ложно. Если г) правдиво, то правдивы а), или б), или в). Поскольку все они ложны, г) ложно. Если е) правдиво, то а), б), в), г), д) ложны, но это делает д) правдивым. Остается, что е) - ложно. В итоге только д) может оказаться правдивым, что не вызывает противоречий в системе ответов'

			},
			{
				title: 'Ангелы на елке',
				
				text: 'Четыре ангела сидели на рождественской елке среди украшений. У двоих нимбы были синего цвета, у двоих – желтого. Ангелы не знают, у кого какой нимб, но знают, кто кого может видеть (см. ниже). Ни один из них не может видеть сидящих над ним, но каждый может слышать друг друга. Ангел A, сидящий на самой верхней ветке, может видеть ангелов B и C, которые сидят ниже него. Ангел B может видеть ангела C, который сидит веткой ниже. Ангел C не может видеть никого, потому что ангел D спрятался за деревом так, что никто не может видеть его, но и он сам никого не может увидеть.<br>Кто из них может первым догадаться о цвете своего нимба и сказать об этом остальным?',
				hint: '',
				answer: 'Возможны 2 варианта:<br>а) B и C имеют одинаковый цвет нимба. Тогда A, который видит их обоих, сообразит, какой цвет у него.<br>б) B и C имеют нимбы разных цветов. Тогда A не сможет догадаться о своем нимбе и промолчит. А B по этому молчанию сделает вывод, что у него с C разные цвета. C он видит, поэтому свой цвет определит'

			},
			{
				title: 'Мудрецы развлекаются',
				
				text: 'Решили как-то пять мудрецов поразвлечься. Взяли они десять колпаков, причем разноцветных - шесть красных, два белых и два синих, позвали независимую персону, он каждому должен надеть на голову по колпаку. Естественно, все это происходит в кромешной тьме и никто из мудрецов даже не знает, какие колпаки оказались лишними. Затем они выходят на свет, смотрят друг на друга, и кто первый определит, какой на нем колпак, тот и победит. Кто станет победителем, если на трех участниках красные колпаки, на одном - синий и на одном - белый?',
				hint: '',
				answer: 'Победителем станет один из мудрецов с красным колпаком.<br>Для простоты будем называть мудрецов по цвету надетых на них колпаков.<br>Один из трех красных думает:<br>- Еслиб я был белый, тогда один из двух красных подумает "допустим, я синий,  тогда мой красный сосед сразу догадался бы, что он красный (видит два белых и два синих). Но так как он этого не делает, то я не синий. Но так как я вижу перед собой два белых, то следовательно я красный". Но эти два красных молчат, следовательно, я не белый. Точно также двое могли определить, что они красные, если бы я был синим. Но они все еще молчат, следовательно, я не синий тоже.<br>Отсюда вывод - я красный'

			},
			{
				title: '4 человека в шляпах',
				
				text: 'http://www.smekalka.pp.ru/sites/default/files/1410.jpg_!_На этом рисунке 4 человека, двое из них в черных шляпах и двое - в белых.<br>Перегородка - это стена, через которую ничего не видно.<br>Слева направо: 1-й человек видит 2-го и 3-го, 2-й видит 3-го, 3-й видит стенку, 4-й вообще ничего не видит.<br>Они знают, как они стоят, знают, что есть 2 черные и 2 белые шляпы.<br>Каждого из них спрашивают: "Знаешь ли ты, в какой ты шляпе?"<br>Допускается два варианта ответа: "Да, знаю, я в ... шляпе" либо "Нет. Не знаю"<br>Кто первым сможет ответить, в какой он шляпе?',
				hint: '',
				answer: 'Второй'

			},
			{
				title: 'Цветная задача',
				
				text: 'Представьте, что у вас есть три клетки с кроликами. В зеленой вдвое больше, чем в желтой. Вы продаете пять кроликов из клетки, которая слева от вас, а половину остальных пересаживаете в красную. Какого цвета клетка слева от вас?',
				hint: '',
				answer: '1. В зеленой вдвое больше, чем в желтой. Это значит, что в зелёной чётное количество кроликов.<br>2. Вы продаете пять кроликов из клетки, которая слева от вас, а половину остальных пересаживаете в красную. Это значит что (N-5) делится на два, следлвательно, N - нечётное число, значит эта клетка (в которой чётное) не зелёная.<br>3. А половину остальных пересаживаете в красную. Это значит что предыдущая клетка не красная, получается, что она желтая'

			},
			{
				title: 'Разноцветные карточки',
				
				text: 'Максим достает черные и красные карточки по одной и складывает их в две стопки. Класть карточку на другую карточку того же цвета запрещено. Десятая и одиннадцатая карточка были красные, а двадцать пятая - черная. Какого цвета была двадцать шестая карточка, если Максим смог сложить все карты в две стопочки не нарушая правил?',
				hint: '',
				answer: 'Перед 12-й карточкой обе стопки - одного (красного цвета). Перед 13-й - разного цвета. Перед 14-й снова одного (неизвестно какого). Т.е. перед четными - стопки одинакового цвета, перед нечетными - разного. 25-я была черной, следовательно, перед 26-й карточкой обе стопки были черными. Следовательно, 26-я карточка была красной'

			},
			{
				title: 'Дни недели',
				
				text: 'Сегодня не воскресенье, а завтра не среда. Вчера была не пятница, а позавчера был не понедельник. Завтра не воскресенье, и вчера было не воскресенье. Послезавтра не суббота и не воскресенье. Вчера был не понедельник, и не среда. Позавчера была не среда, а завтра не вторник. Да, и сегодня не среда. Какой же сегодня день недели, если учесть, что одно утверждение в списке - ложно?',
				hint: '',
				answer: 'Воскресенье'

			},
			{
				title: 'Лжецы и рыцари',
				
				text: 'На острове живут 100 рыцарей и 100 лжецов, у каждого из них есть хотя бы один друг. Рыцари всегда говорят правду, а лжецы всегда лгут. Однажды утром каждый житель произнес фразу «Все мои друзья - рыцари», либо «Все мои друзья - лжецы», причем каждую из фраз произнесло ровно 100 человек. Найдите наименьшее возможное число пар друзей, один из которых рыцарь, а другой - лжец',
				hint: '',
				answer: 'Заметим, что в паре рыцарь-лжец каждый должен сказать, что другой лжец: рыцарь скажет правду, а лжец соврёт, в паре рыцарь-рыцарь оба скажут правду, а в паре лжец-лжец оба скажут неправду. Значит фраза «Все мои друзья - лжецы» употребляется только в парах рыцарь-лжец. Минимальное кол-во пар рыцарь-лжец, когда фразу сказали 100 человек, это 50. Если пар будет меньше, то и фраз тоже будет меньше'

			},
			{
				title: 'Лживые и правдивые школьники',
				
				text: 'В одном классе ученики разделились на две группы. Одни должны были всегда говорить (и писать) только правду, а другие - только неправду. Все ученики класса написали сочинение на свободную тему, которое должно было заканчиваться фразой "Всё здесь написанное - правда" или "Всё здесь написанное - ложь". В классе было 17 правдолюбцев и 18 лжецов. Сколько получилось сочинений с утверждением о правдивости написанного?',
				hint: '',
				answer: 'Все 17 правдолюбцев обязаны закончить свои сочинения утверждениями "Всё здесь написанное, правда". 18 лжецов должны писать только ложь, поэтому, если бы они закончили свои сочинения фразой "Все здесь написанное, ложь", то они сказали бы правду, и значит, они должны закончить сочинения словами "Все здесь написанное, правда". Итого 17+18 = 35'

			},
			{
				title: 'Хамелеоны',
				
				text: 'На острове было 13 красных, 15 зеленых и 17 синих хамелеонов. Если встречаются два хамелеона разного цвета, то они одновременно меняют свой цвет на третий (например, синий и зеленый - меняются на красный).<br>Может ли случиться так, что через некоторое время все хамелеоны окажутся одного цвета?',
				hint: '',
				answer: 'Обозначим цвета хамелеонов: красный=0, зелёный=1, синий=2.<br>Тогда получается, что встречи хамелеонов описываются суммами их цветов:<br>0+1 → 2+2<br>1+2 → 0+0<br>0+2 → 1+1<br>Заметим, что при встрече хамелеонов всегда неизменной остаётся сумма их цветов, взятая по модулю 3 (то есть, остаток от деления суммы цветов на 3). В самом деле,<br>0+1 (остаток = 1) → 2+2 =4 (остаток = 1)<br>1+2 (остаток = 0) → 0+0 = 0 (остаток = 0)<br>0+2 (остаток = 2) → 1+1 = 2 (остаток = 2)<br>Это значит, что при любых встречах хамелеонов остаток от деления суммы всех цветов на 3 не изменится.<br>Изначально сумма цветов хамелеонов была равна 13*0 + 15*1 + 17*2 = 49.<br>49 mod 3 = 1, поэтому как бы ни меняли свой цвет хамелеоны, остаток от деления суммы их цветов на 3 останется 1.<br>В случае, если все хамелеоны стали бы одного цвета, остаток бы стал равен нулю (ведь 45*N всегда делится на три нацело), а значит, такого произойти не может.<br>Все хамелеоны никогда не станут одного цвета!'

			},
			{
				title: 'Шарики в коробочках',
				
				text: 'Перед Вами пять коробочек: белая, черная, красная, синяя и зелёная. Также есть по два шарика для каждого из цветов. В каждой коробочке лежит по два шарика, причём цвета коробочки и шариков могут не совпадать. Также известно, что:<br>1. Ни один шарик не лежит в коробочке того же цвета, что и он сам;<br>2. В красной коробочке нет синих шариков;<br>3. В коробочке нейтрального цвета (то есть белого или чёрного) лежит один красный и один зелёный шарик;<br>4. В чёрной коробочке лежат шарики холодных тонов (зелёный и синий цвета);<br>5. В одной из коробочек лежат один белый и один синий шарик;<br>6. В синей коробочки находится один чёрный шарик.<br>Какого цвета шарики лежат в каждой коробочке?',
				hint: '',
				answer: 'Белая коpобочка - кpасный и зеленый;<br>чеpная коpобочка - зеленый и синий;<br>зеленая коpобочка - белый и синий;<br>синяя коpобочка-  чеpный и кpасный;<br>кpасная коpобочка - белый и чеpный'

			},
			{
				title: 'Решение задачи',
				
				text: 'Иван утверждает, что ответ - число 9. Дмитрий считает, что ответом является простое число. Катерина с ними несогласна и утверждает, что ответ - чётное число. А у Елены получился ответ 15.<br>Учитель всем четверым дал подсказку: в каждой паре мальчиков и девочек допущена только одна ошибка.<br>Так какой же ответ правильный?',
				hint: '',
				answer: 'Ситуация, когда девочки и мальчики ошиблись по одному разу, возможна, только если ответом является простое и в то же время чётное число. То есть, ошиблись Иван и Лена. А простым и одновременно  четным является только одно число - 2'

			},
			{
				title: 'Верные высказывания',
				
				text: 'Ниже напечатаны десять высказываний. Сколько на этой странице верных высказываний?<br>1. Число неверных выражений - 1<br>2. Число неверных выражений - 2<br>3. Число неверных выражений - 3<br>4. Число неверных выражений - 4<br>5. Число неверных выражений - 5<br>6. Число неверных выражений - 6<br>7. Число неверных выражений - 7<br>8. Число неверных выражений - 8<br>9. Число неверных выражений - 9<br>10. Число неверных выражений - 10',
				hint: '',
				answer: 'Два высказывания верны. Высказывание номер 9 верно потому, что выражения от 1 до 10 (за исключением 9-го) неверны. Высказывание в условии задания о том, что ниже напечатаны десять высказываний, тоже верное'

			},
			{
				title: 'Шарики',
				
				text: 'Студенты пытаются угадать, сколько шариков жвачки набросали в аквариум. Предлагались варианты 45, 41, 55, 50 и 43, но никто не угадал. Предположения отличались от правильного ответа на 3, 7, 5, 7 и 2 (порядок изменён).<br>Сколько же шариков жвачки было в аквариуме?',
				hint: '',
				answer: '48 шариков. Мы знаем из условия, что два предположения отличались от правильного ответа на 7, и это были самые большие отличия. Самое маленькое и самое большое предполагаемые значения - это 41 и 55. Если прибавить 7 к первому или отнять 7 от второго, получим правильный ответ - 48'

			},
			{
				title: 'Аборигены и пришельцы',
				
				text: 'Перед судом стоят три человека, из которых каждый может быть либо аборигеном, либо пришельцем. Судья знает, что аборигены всегда отвечают на вопросы правдиво, а пришельцы всегда лгут. Однако судья не знает, кто из них абориген, а кто - пришелец. Он спрашивает первого, но не понимает его ответа. Поэтому он спрашивает сначала второго, а потом третьего о том, что ответил первый. Второй говорит, что первый говорил, что он абориген. Третий говорит, что первый назвал себя пришельцем. Кем были второй и третий подсудимые?',
				hint: '',
				answer: 'Второй – абориген, третий – пришелец'

			},
			{
				title: 'Порядок утверждения проектов',
				
				text: 'На предприятии есть три цеха – A, B, C, договорившиеся о порядке утверждения проектов, а именно:<br>1. Если цех B не участвует в утверждении проекта, то в этом утверждении не участвует и цех A.<br>2. Если цех B принимает участие в утверждении проекта, то в нем принимают участие цехи A и C.<br>Обязан ли при этих условиях цех C принимать участие в утверждении проекта, когда в утверждении принимает участие цех A?',
				hint: '',
				answer: 'Первое утверждение можно переформулировать следующим образом: если в утверждении участвует цех A, то цех B также должен участвовать. Тогда, согласно второму утверждению, цех C должен принимать участие в утверждении проекта'

			},
			{
				title: 'Депутаты',
				
				text: 'В одном парламенте депутаты разделились на консерваторов и либералов. Консерваторы говорили только правду по четным числам, а по нечетным они говорили только неправду. Либералы, наоборот, говорили только правду по нечетным числам, а по четным числам они говорили, только неправду. Каким образом с помощью одного вопроса, заданного любому депутату, можно точно установить, какое сегодня число: четное или нечетное? Ответы должны быть определенными: «да» или «нет»',
				hint: '',
				answer: 'Надо спросить любого депутата: «Вы консерватор?» Если он ответил «да», то сегодня четное число, а если «нет», то нечетное. По четным числам консерваторы скажут правдивое «да», а либералы, говоря неправду, тоже произнесут «да». По нечетным числам, наоборот, консерваторы, отвечая на вопрос, скажут «нет», но либералы, говорящие в эти дни только правду, тоже скажут «нет»'

			}
		]

	};

}(window));