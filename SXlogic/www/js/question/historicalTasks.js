(function (win) {

	"use strict";
	/*global window */

	win.sections = win.sections || {};

	win.sections.historicalTasks = {
		name: 'Исторические задачи',
		lang: 'ru', // ru || en
		//вЂ™
		questions: [
			{
				title: 'Вот так телефонистки!',
				
				text: 'В советские времена у телефонисток на коммутаторе висел лозунг, из которого следовало, что они все ратуют за свободные сексуальные отношения. Что это был за лозунг?',
				
				answer: '«За связь без брака!»'

			},
			{
				title: 'Одна миля',
				
				text: 'Если вы посмотрите в атласе на западную часть Южной Дакоты, где она граничит с Монтаной, вы увидите прямую линию с изгибом в одном месте длиною в милю. Во всех остальных местах линия совершенно прямая. Этот изгиб не связан ни с какими местными владениями и не затрагивает интересы других штатов. Почему же там этот изгиб?',
				
				answer: 'Когда изначально замеряли эту границу, то на западную территорию Южной Дакоты отправили два отряда. Один начал свою работу с юга, а другой - с севера. И они промахнулись! В итоге границу штата было легче сделать с изгибом, чем организовывать все расчеты заново'

			},
			{
				title: 'Часы',
				
				text: 'Почему на часах стрелки ходят слева направо (по часовой стрелке), а не наоборот?',
				
				answer: 'Именно так движется тень в самых первых часах - солнечных. А затем уже механические часы скопировали направление движения стрелок. Кстати, в Южном полушарии все наоборот - тень в солнечных часах движется против часовой стрелки'

			},
			{
				title: 'Первый блин',
				
				text: 'Всем известна поговорка "Первый блин комом". К какому животному имела отношение эта поговорка во времена, когда она появилась?',
				
				answer: 'К медведю - в древнеславянском языке комой называли именно медведя. А поскольку славяне медведей почитали, то просыпающемуся мишке несли первый блин, т.е. первый блин не как? (комОм), а кому? (комАм). Отсюда появилось и название праздника - комоедица, который церковь впоследствии переименовала в Масленицу'

			},
			{
				title: 'Головоломка Пентагона',
				
				text: 'Штаб-квартира американского военного министерства находится в Пентагоне в Арлингтоне, штат Вирджиния. Почему в здании имеется в два раза больше туалетов, чем требуется?',
				hint: 'Причина относится к тому периоду, когда здание Пентагона было построено',
				answer: 'Пентагон был построен в 40-е годы, когда в штате Вирджиния были жесткие законы о сегрегации, требующие, чтобы белые и черные граждане пользовались разными туалетами'

			},
			{
				title: 'Служебный жетон',
				
				text: 'В 20-е годы сотрудники уголовного розыска при оперативной работе использовали вместо удостостоверений так называемые "знаки скрытого ношения". Они состояли из служебного и маскировочного жетонов. Служебный жетон был скрыт под лацканом пиджака. На маскировочном жетоне, который привинчивался с лицевой стороны лацкана, могло быть три различных рисунка: охотник, стреляющий в утку, всадник, преодолевающий препятствие, или ... Назовите третий, самый распространенный вид рисунка',
				
				answer: 'Легавая собака (и охотник). Отсюда и небезызвестное оскорбление работников милиции'

			},
			{
				title: 'Изобретение святейшей инквизиции',
				
				text: 'Первый такой механизм был изготовлен испанскими механиками по заданию святейшей инквизиции, и не один грешник испытывал на себе его действие. Дожил он почти в неизмененном виде до наших дней, и все вы наверняка испытывали его действие и на себе. Что же это за механизм?',
				
				answer: 'Бормашина'

			},
			{
				title: 'Королевское изобретение',
				
				text: 'Король Георг IV родился в 1763 году. Он правил Англией с 1820г. до своей смерти в 1830г. Он был не сильно знаменит, но именно ему принадлежит нововведение в обуви. Его сапоги отличались от других. Мы пользуемся его изобретением и сейчас, но в то время оно было очень необычным. Что он изобрел?',
				
				answer: 'Он изобрел правый и левый сапог. До этого вся обувь могла одеваться на любую ногу'

			},
			{
				title: 'Из глубины веков',
				
				text: 'В Древней Греции ЭТО носили и мужчины, и женщины, заимствовав из Персии. Египтянам ЭТО было привычно издавна. У римлян ЭТО вошло в употребление на заре Империи, причем имперские модницы обожали получать ЭТО из Германии. А во Франции ЭТО впервые начал широко использовать Людовик XIII в 1624 году. Какая его характерная черта этому способствовала?',
				
				answer: 'Лысина, ибо речь идет о париках (из Германии получали парики из волос блондинок)'

			},
			{
				title: 'ТРИДЦАТЬ ПЕРВЫЙ',
				
				text: 'В послевоенном Ленинграде на "Ленфильме" проходили необыкновенно пышные по тем временам съемки. У 37-летней актрисы был ТРИДЦАТЬ ПЕРВЫЙ и она легко получила роль, на которую также претендовала 16-летняя балерина. А что за роль?',
				
				answer: 'Главную роль в фильме "Золушка". Тридцать первый - это был размер ее ноги'

			},
			{
				title: 'Автохарактеристика',
				
				text: 'Юрий Олеша, страдавший в преклонном возрасте хроническим безденежьем, характеризовал сам себя с помощью произведения нобелевского лауреата. Правда, добавляя в конец названия слово "долгов". Воспроизведите эту характеристику',
				
				answer: 'Старик и море долгов'

			},
			{
				title: 'Неосторожные грузчики',
				
				text: 'Работники фирмы "Рено" констатировали, что 3% ветровых стекол доходят с заводов разбитыми. Причина - неосторожное обращение грузчиков, несмотря на предупреждающие надписи на таре. После срочных действий фирмы бой уменьшился в несколько раз. Какие это были действия?',
				
				answer: 'Сделали прозрачную упаковку'

			},
			{
				title: 'Идите так',
				
				text: 'Австралиец Джон Харлингер установил мировой рекорд, пройдя 1400 км от Вены до Парижа за 55 дней. Он двигался со средней скоростью 2.4 км/ч и сделал это в 1900 году, но его рекорд держится до сих пор. Что в нем особенного?',
				
				answer: 'Он прошел этот путь на руках и таким образом установил мировой рекорд по ходьбе на руках'

			},
			{
				title: 'Стандарт по Бетховену',
				
				text: 'Вот ещё одно подтверждение того, что неверно делить мир на физиков и лириков. Ведь именно тот факт, что продолжительность Девятой Симфонии Бетховена в любимом исполнении одного высокопоставленного физика один час и четырнадцать минут и девять секунд лёг в основу одного сугубо технического стандарта.<br>Какого?',
					
		answer: 'Максимальная длительность звучания компакт-диска была установлена в 74 минуты и 9 секунд. Упомянутый физик - это Акио Морита, тогдашний глава Сони'

			},
			{
				title: 'Что зашить?',
				
				text: 'В 1685 году было решено написать портрет герцога Монмутского. Однако нитки и иголка потребовались раньше, прежде чем художник начал свою работу. С одеждой герцога все было в порядке, так зачем же понадобились нитка и иголка?',
				
				answer: 'Джеймс, герцог Монмутский, был обезглавлен 15 июля 1685 года, после поражения в битве у Сейджмура, что прекратило его посягательства на трон короля Джеймся II. После казни было решено написать портрет несчастного. Голову пришили к туловищу, и тогда художник мог начать работу'

			},
			{
				title: 'Лорд Страталлен',
				
				text: 'Лорд Страталлен был известным шотландским дворянином, привыкшим получать то, что он хотел. Однажды в 1746 году он приказал принести немного еды и питья, хотя не был голоден и не испытывал жажды. То, что он просил, найти не удалось, и ему предложили виски и овсяное печенье. Он с удовольствием отведал и то, и другое. Почему?',
				
				answer: 'Лорд Страталлен был смертельно ранен в битве при Куллодене 16 апреля 1746 года, когда шотландцы под предводительством принца Чарльза потерпели поражение от герцога Камберлендского, тем самым положив конец якобитскому восстанию 1745 года. Лорд Страталлен был католиком и просил причащения перед смертью. Священник не смог найти вино и хлеб, поэтому использовал виски и овсяное печенье'

			},
			{
				title: 'Странный театр',
				
				text: 'В 1594 году в Падуе наконец-то открылся этот театр со всеевропейской славой. Построен он был в форме овального помещения с несколькими ярусами для зрителей. Хотя любознательные зрители охотно посещали его, ни один из корифеев европейской сцены не стремился на его подмостки - скорей наоборот. Почему?',
				
				answer: 'Это был анатомический театр'

			},
			{
				title: 'Смерть сенатора',
				
				text: 'В правление Цезаря Нерона репрессии обрушивались на головы инакомыслящих римских аристократов, казавшихся опасными императору. Никого не удивила гибель сенатора Цезония Руфа, консула Корнелия Сабина, Децима Помпея. И только смерть богача Ваттия удивила многих. А почему?',
				
				answer: 'В эти времена он ухитрился умереть своей смертью'

			},
			{
				title: 'Изобретатель воды',
				
				text: 'В 1709 году житель одного немецкого города по фамилии Фарина изобрел и изготовил эту воду. Но немцы не стали ее пить, как и французы, давшие ей имя, под которым она известна у нас. Зато в России ее пьют весьма охотно. В каком же городе жил ее изобретатель Фарина?',
				
				answer: 'В Кельне - это одеколон, по-французски "кельнская вода"'

			},
			{
				title: 'Пародия',
				
				text: 'В неком журнальном цикле пародий на любовную лирику читатели увидели в списке пародируемых и имя известного поэта, соавтора Гимна СССР Гарольда Эль-Регистана. Стояло оно вот под каким текстом:<br><br>Синий-синий вечер,<br>Бледно-лунный свет,<br>Худенькие плечи,<br>Восемнадцать лет.<br>Слезы на ресницах,<br>Ждет меня в саду.<br>Мне уже за тридцать.<br>Лучше не пойду.<br>Дальше писалось, что по совместной вине пародиста и пародируемого автора здесь допущена большая ошибка. Какая?',
				
		answer: 'Вместо пародии на Эль-Регистана помещено его настоящее стихотворение'

			},
			{
				title: 'Французское шампанское',
				
				text: 'Однажды в беседе с Гиляровским один купец, большой любитель ночных кутежей в ресторанах, уверял, что всем другим предпочитает французское шампанское марки "Мумм", давая этому вполне логичное, с его точки зрения, объяснение. В чем оно заключалось?',
				
				answer: 'Напиваясь до бесчувствия, этот купец на вопрос официанта "Чего еще изволите?" обычно был в состоянии произнести только мычащий звук, после чего получал очередную бутылку "Мум"'

			},
			{
				title: 'Оторванная рука',
				
				text: 'Брат знаменитого Осипа де Рибаса - Эммануил де Рибас также служил в русской армии. Он храбро сражался во многих баталиях, штурмовал Очаков и Измаил, много раз был ранен. Во время штурма Измаила турецким ядром ему оторвало руку. Это его, конечно, расстроило, но не слишком сильно. Почему его так мало огорчила потеря руки?',
				
				answer: 'Настоящую (а не искусственную) руку ему оторвало еще под Очаковом'

			},
			{
				title: 'Касторка',
				
				text: 'Однажды заболевший Чехов послал посыльного в аптеку за касторкой. Аптекарь выдал две огромные капсулы. Рассердившийся писатель отослал посыльного обратно с гневной запиской: "Я не лошадь!". В ответ аптекарь выдал шесть маленьких капсул в коробочке. Почему же он не поступил так сразу?',
				
				answer: 'Он желал получить чеховский автограф'

			},
			{
				title: 'Японские автобусы',
				
				text: 'На Дальнем востоке очень много японских легковых автомобилей, внедорожников, немало микроавтобусов. Однако японских автобусов практически нет. И вовсе не потому, что у них руль справа. А почему?',
				
				answer: 'Из-за пассажирских дверей слева'

			},
			{
				title: 'Корейские обычаи',
				
				text: 'В Корее их насчитывалось семь: бесплодие, прелюбодеяние, ревность, злоязычие, непочтительность к родителям мужа, болезнь и болтливость. К чему они могли привести их обладательницу?',
				
				answer: 'Семь пороков - необходимое и достаточное условие для развода'

			},
			{
				title: 'Монета',
				
				text: 'В 1987 году на Кубе была выпущена юбилейная монета. Какой корабль был на ней изображен?',
				
				answer: 'Крейсер "Аврора". Был же юбилей Октябрьской революции'

			},
			{
				title: 'Письмена',
				
				text: 'Японские тексты, как известно, читаются сверху вниз, европейские - слева направо, арабские и еврейские - справа налево, а в текстах протоиндийской цивилизации присутствовал бустрофедон (буквально "ход быка"). Каким образом следовало читать такие письмена?',
				
				answer: 'Так, как ходит бык по пашне: дойдя до ее края, поворачивает в обратном направлении'

			},
			{
				title: 'Быстрая мобилизация',
				
				text: 'Галльские жрецы нашли безотказный способ быстрой мобилизации воинов в случае войны. Для этого они приносили в жертву только одного человека. Какого?',
				
				answer: 'Пришедшего последним'

			},
			{
				title: 'Мудрость',
				
				text: 'Китайские мастера боевых искусств говорили, что драка - для дураков, для умных - победа. А что, по их мнению - для мудрых?',
				
				answer: 'Мир. Мудрый найдет способ не ввязываться в драку'

			},
			{
				title: 'Рождество',
				
				text: 'У католиков принято, отмечая Рождество, ставить на стол дополнительный прибор для случайного гостя. Этот обычай стараются соблюдать все, кроме обитателей одного учреждения, где его принципиально не ставят. Назовите учреждение',
				
				answer: 'Тюрьма'

			},
			{
				title: 'Рождество-2',
				
				text: 'Скандинавам знакома формула счастья. Именно поэтому они бьют в новогоднюю ночь о двери чужих домов посуду. О чем судят поутру хозяева, считая осколки?',
				
				answer: 'Чем больше осколков, чем больше людей пришло пожелать счастья. Т.е. косвенно можно судить о количестве друзей'

			},
			{
				title: 'Библиотечный вопрос',
				
				text: 'В инвентарях библиотеки французского короля Карла V рядом с названием книг, кроме имени автора и переводчика, если такой был, ставилось имя ещё одного человека. Что сделал этот человек?',
				
				answer: 'В то время книги переписывались вручную. В книге ставилось имя переписчика'

			},
			{
				title: 'Снег',
				
				text: 'Однажды в парк столицы Малайзии Куала-Лумпур привезли снег. Чтобы он не растаял, власти запретили прикасаться к нему руками. Для кого сделали исключение?',
				
				answer: 'Для слепых'

			},
			{
				title: 'Что это?',
				
				text: 'Сейчас она несправедливо считается символом зла. В США и Великобритании лет 100 назад она украшала тысячи ювелирных изделий, латунных пуговиц, почтовых открыток. Покупатели таковых были уверены, что она состоит из света, из жизни, из любви и из удачи. О чем идет речь? Объясните свой ответ',
				
				answer: 'Свастика. Лучи ее представляют собой четыре буквы L - light, life, love, luck'

			},
			{
				title: 'Усовершенствованное оружие',
				
				text: 'В 1938 году в Нью-Йоркской полиции для уточнения отчетности на вооружение был принят револьвер, синхронизированный с неким устройством. С каким?',
				
				answer: 'С фотоаппаратом. Назначение было точно такое же, как и в наше время - фиксировать, при каких обстоятельствах был произведен выстрел_!_http://www.smekalka.pp.ru/sites/default/files/1301.jpg '

			},
			{
				title: 'Средневековая архитектура',
				
				text: 'Есть одна историческая закономерность. Архитекторы средних веков при строительстве замков проектировали в них винтовые лестницы. Причем в большинстве случаев направление закрутки лестницы было следующим: идешь вверх - заворачиваешь направо, идешь вниз - заворачиваешь налево. Было это не случайно.<br>Почему винтовые лестницы в замках строились таким образом?',
				
		answer: 'При защите замка от нападения защищающиеся часто укрывались в башнях.<br>В таких случаях противники атаковали снизу вверх, т.е. по винтовым лестницам поднимались, все время поворачивая направо.<br>При этом солдат, как правило в левой руке держал щит, а в правой меч. Следовательно, для защиты от защитников замка он был вынужден прикрывать щитом правую часть своего тела, что было неудобно и мешало атаковать'

			},
			{
				title: 'Эйфелева башня',
				
				text: 'При строительстве Эйфелевой башни в Париже многие были против этого проекта, так как считали, что она испортит неповторимый стиль столицы, складывающийся на протяжении веков. Известно, что Ги де Мопассан был одним из подписавших петицию, где башня характеризуется как «бесполезная и чудовищная», «смехотворная башня, доминирующая над Парижем, как гигантская фабричная дымовая труба», «на протяжении 20 лет мы будем вынуждены смотреть на отвратительную тень ненавистной колонны из железа и винтов, простирающейся над городом, как чернильная клякса!»<br>Тем не менее тот же Ги де Мопассан регулярно обедал на первом этаже башни. На резонный вопрос, зачем он это делает, Ги де Мопассан отвечал...<br>Что же он отвечал?',
				
		answer: 'Это единственное место во всём огромном Париже, откуда её не видно'

			},
			{
				title: 'Амбарные запасы',
				
				text: 'В прежние времена амбары строили на отшибе, подальше от жилищ. С какой целью?',
				
				answer: 'Чтобы пожар не уничтожил запасы продовольствия: жилье можно построить достаточно быстро, а вот нового урожая можно и не дождаться'

			},
			{
				title: 'Боевой камуфляж',
				
				text: 'http://www.smekalka.pp.ru/sites/default/files/1665.jpg_!_В Первой Мировой войне для кораблей, главным образом в британском и американском флотах, широко применялся специальный камуфляж — судно раскрашивали в обрывочные, пересекающиеся полосы или узоры контрастных цветов. На первый взгляд, такая раскраска скорее привлекает внимание, чем маскирует корабль. Так зачем же она использовалась?',
				
				answer: 'Такая раскраска использовалась, чтобы с помощью визуальных дальномеров было как можно сложнее определить тип, размер, скорость и направление движения корабля. Изобретение радара в значительной степени "обесценило" такую раскраску'

			},
			{
				title: 'Редкая болезнь',
				
				text: 'У великого Гиппократа спросили: "Правда ли, что гениальность – это болезнь?" "Безусловно, – ответил Гиппократ, – но очень редкая." Какое еще свойство этой болезни отметил с сожалением Гиппократ?',
				
				answer: 'Эта болезнь незаразная'

			},
			{
				title: 'Президенты',
				
				text: 'У 22-го и 24-го президентов США были общий отец и общая мать, но эти президенты не были братьями. Как это могло быть?',
				
				answer: 'Кливленд Стивен Гровер был 22-м и 24-м президентом США в 1885-1889 и в 1893-1897 г.г. Т.к. он сам себе не брат, то условие загадки выполняется'

			},
			{
				title: 'Можно-нельзя',
				
				text: 'После смерти великого русского химика Д.И. Менделеева в его халате нашли записку, где было всего четыре быквы: "э", "м", "м", "н". Вначале предположили, что это зашифрованное имя тайной возлюбленной, но все оказалось гораздо прозаичнее. Что же стоит за этими буквами, если первая "м" означает можно, а "н" - нельзя?',
				
				answer: 'Этиловый можно, метиловый нельзя. В 19 веке выдающийся русский химик Д.И. Менделеев разработал теоретическую основу водочной отрасли'

			}
		]

	};

}(window));