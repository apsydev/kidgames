(function (win) {

	"use strict";
	/*global window */

	win.sections = win.sections || {};

	win.sections.vzveshivanieIPerelivanie = {
		name: 'Задачи на взвешивание и переливание',
		lang: 'ru',
		questions: [
			{
				title: 'Где фальшивые монеты?',

				text: 'На столе лежит десять пронумерованных шляп. В каждой шляпе лежит по десять золотых монет. В одной из шляп находятся фальшивые монеты. Настоящая весит 10 граммов, а поддельная только 9. В помощь даны весы со шкалой в граммах. Как определить в какой из шляп находятся фальшивые монеты, используя весы только для одного взвешивания? Весы могут взвешивать не более 750 грамм.',
				hint: '',
				answer: 'Легко! Из первой шляпы берем 1 монету, из второй - 2, из третьей - 3 и т.д. Все это взвешиваем и отнимаем результат от идеального веса (в нашем случае 55*10=550 грамм). Получившееся число будет совпадать с номером шляпы с фальшивыми монетами'
			},
			{
				title: '13 монет',

				text: 'Имеется 13 монет, из них ровно одна фальшивая, причем неизвестно, легче она настоящих или тяжелее. Требуется найти эту монету за три взвешивания. Весы - стандартные для задач этого типа: две чашечки без гирь.',
				hint: '',
				answer: 'Отложим в сторону тринадцатую монету, а остальные обозначим следующим образом: FAKE MIND CLOT.<br>Теперь взвешиваем одну четверку против другой по такой схеме:<br>3 монеты принимают участие в трех взвешиваниях<br>3 - только в одном<br>6 - в двух.<br>Например: FANO - KECT, AKNC - FMDL, FKIL - ADOT.<br>Например, если результаты взвешивания будут такими: слева легче, равно, слева тяжелее, значит фальшивой будет монета, обозначенная буквой O. Причем, фальшивая монета будет легче настоящих.<br>А что если фальшивой окажется все-таки отложенная нами, тринадцатая монета? Все очень просто: в этом случае при всех трёх взвешиваниях весы будут сбалансированы. К сожалению в этом случае нам не узнать легче или тяжелее тринадцатая монета, но в условии такого требования и не было'
			},
			{
				title: 'Легче или тяжелее?',

				text: 'Среди 101 одинаковых по виду монет одна фальшивая, отличающаяся по весу. Как с помощью чашечных весов без гирь за два взвешивания определить, легче или тяжелее фальшивая монета? Hаходить фальшивую монету не требуется',
				hint: '',
				answer: 'Взвешиваем 50 и 50 монет:<br>1) Равенство:<br>Беpем оставшуюся монету и ставим ее в левую кучку вместо одной из имеющихся там<br>1.1 Левая кучка тяжелее => фальшивая монета тяжелее<br>1.2 Левая кучка легче => фальшивая монета легче<br>2) Hеpавенство:<br>Беpем более тяжелую кучку и разбиваем ее на две кучки по 25 монет.<br>2.1 Вес кучек одинаковый => фальшивая монета легче<br>2.2 Вес кучек неодинаковый => фальшивая монета тяжелее'
			},
			{
				title: 'Развесить чай',

				text: 'Как развесить 20 фунтов чая в 10 коробок по 2 фунта в каждой за девять развесов, имея только гири на 5 и на 9 фунтов? Используются обычные весы с двумя чашами - как у статуи Правосудия',
				hint: '',
				answer: '1) Hа одну чашу весов положить гирю в 5 фунтов, на другую гирю в 9 фунтов. Затем уравновесить весы, насыпав 4 фунта чая в чашу с гирей на 5 фунтов.<br>2) Убрать гири с чаш весов, оставить 4 фунта в одной чаше и уравновесить весы, насыпав во вторую еще 4 фунта.<br>3) Еще раз отвесить 4 фунта.<br>4) И еще раз 4 фунта. Таким образом, после четырех взвешиваний в остатке будет тоже 4 фунта.<br>5-9) Разделить 4 фунта пополам, уравновешивая чаши весов'

			},
			{
				title: 'Головоломка Саладина',

				text:  'Эта история случилась давным-давно, еще во времена крестовых походов. Один из рыцарей был захвачен мусульманами в плен и предстал перед их предводителем - султаном Саладином, который объявил, что освободит пленника и его коня, если получит выкуп в 100 тысяч золотых монет. "О, великий Саладин, - обратился тогда к султану рыцарь, у которого за душой не было ни гроша, - ты лишаешь последней надежды. У меня на родине мудрому и находчивому пленнику дается шанс выйти на свободу. Если он решит заданную головоломку, его отпускают на все четыре стороны, если нет - сумма выкупа удваивается!"<br>"Да будет так, - ответил Саладин, и сам обожавший головоломки. - Слушай же. Тебе дадут двенадцать золотых монет и простые весы с двумя чашками, но без гирь. Одна из монет фальшивая, однако неизвестно, легче она или тяжелее настоящих. Ты должен найти ее всего за три взвешивания. Hе справишься с задачей до утра - пеняй на себя!" А вы смогли бы выкрутиться?',
				hint: '',
				answer: 'Эта задача была блестяще разобрана К. Л. Стонгом в майском номере журнала Scientific American за 1955 год. Одно из ее решений (а их довольно много) связано с троичной системой. Сначала запишите все числа от 1 до 12 в троичной системе. Замените в каждом числе цифру 2 на 0, а 0 на 2 и запишите рядом результат. У вас получится три столбца чисел:<br>1 001 221	<br>2 002 220	<br>3 010 212	<br>4 011 211	<br>5 012 210	<br>6 020 202	<br>7 021 201	<br>8 022 200	<br>9 100 122	<br>10 101 121	<br>11 102 120	<br>12 110 112	<br>Внимательно изучив эти числа, вы обнаружите все числа, в которых встречаются сочетания 01, 12, 20. Каждой из двенадцати монет поставим в соответствие одно из этих чисел.<br>При первом взвешивании на левую чашу весов кладем четыре монеты, обозначенные числами, которые начинаются с 0, а на правую чашу весов кладем те четыре монеты, которым соответствуют числа, начинающиеся с 2. Если монеты уравновесят друг друга, вы можете утверждать, что число, которое отвечает фальшивой монете, начинается с 1. Если перевесит левая чашка, то искомое число начинается с 0, а если правая - то с 2.<br>Взвешивая монеты второй раз, их надо распределять в зависимости от средней цифры. Если в центре стоит 0, монета кладется на левую чашу, если 2 - на правую. Вторая цифра числа, обозначающего фальшивую монету, определяется точно так же, как определялась его первая цифра при первом взвешивании.<br>Производя последнее взвешивание, вы кладете налево те монеты, которые обозначены числами, оканчивающимися на 0, а монеты, соответствующие числам, имеющим на конце 2, вы кладете на правую чащу весов. Таким образом вы узнаете последнюю цифру нужного вам числа'

			},
			{
				title: 'Фальшивая монета',

				text:  'Имеется 8 с виду одинаковых монет. Одна из них фальшивая и известно, что она легче настоящей. Как с помощью всего лишь двух взвешиваний найти фальшивую монету? В Вашем распоряжении только лабораторные весы, которые показывают только больше-меньше',
				hint: '',
				answer: 'Делим монеты на две равные кучки. Из каждой кучки берем по 3 монеты, кладем на весы и взвешиваем. Если вес одинаковый то взвешиваем оставшиеся 1и 1 монеты и выявляем фальшивую (более легкую). Если же одна группа из трех монет легче другой, значит там есть фальшивая монета. Оставляем более легкую группу из трех монет и кладем на весы 1и 1 и действуем по предыдущему алгоритму: если вес одинаков, значит фальшива третья, а если нет то та которая легче'

			},
			{
				title: 'Точно в середине',

				text:  'Имеется 100 серебряных монет разных размеров и 101 золотая монета также разных размеров. Если у одной монеты размер больше, чем у другой, то она и больше весит, но это верно только для монет, сделанных из одного и того же металла. Все монеты можно легко упорядочить по размерам на глаз. Отличить золота от серебра можно тоже. Как за 8 взвешиваний определить, какая монета из всех 201 штук занимает по весу ровно 101-е место? Все 201 монеты также различны по весу. Весы с двумя чашками, как обычно',
				hint: '',
				answer: 'Раскладываем в два ряда все монеты в порядке возрастания размера: золотые отдельно, серебряные отдельно. Пyсть пеpвая по счетy в каждом pядy монета самая большая (и тяжелая).<br>Сpеднюю по весy монетy можно найти, последовательно взвешивая сpединные монеты каждой из оставшихся линеек.<br>1) взвешиваем 51-ю золотyю монетy и 50-ю сеpебpянyю. Если пеpвая тяжелее, то искомая монета находится где-то сpеди 52-101 золотой и 1-50 сеpебpяной. Если легче, то искомая монета находится где-то сpеди 1-51 золотой и 51-100 сеpебpяной. То есть, 51+50 монет. Остальные можно отложить.<br>2) взвешиваем опять сpединные монеты. Так как число ваpиантов pастет в геометpической пpогpессии, бyдy pассматpивать только итоги ;) Из 51+50 монет выбиpаем сpавниваем 25 и 26 монеты. Остается 26+25 монет.<br>3) Взвешиваем 13 и 13 монеты. Остается 13+13 или 13+12. Далее бyдy pассматpивать только слyчай 13+13, 13+12 аналогично.<br>4) Взвешиваем 7 и 7. Остается 7+7.<br>5) Взвешиваем 4 и 3. Остается 4+3.<br>6) Здесь могy поподpобнее, так как монет осталось мало ;) Пyсть остались золотые монеты 1234 и сеpебpяные ABC (все в порядке возрастания). Взвешиваем 2 и B. Если 2>B, то сpедняя монета какая-то из 34AB, если нет, то из 12C. Рассмотри первый сличай.<br>7) Взвешиваем 3 и A.<br>8а) если 3<br>8б) если 3>A, то взвешиваем 4 и A. Какая больше, та и искомая'

			},
			{
				title: 'Задача Второй Мировой',

				text:  'Еще известная задача такого уровня: (Скорее всего это легенда, но очень уж красивая)<br>Во времена Второй Мировой Войны, английские ученые подбросили немецким ученым, чтобы они не решали военные проблемы, а решали головоломки, следующую логическую задачу.<br>Кладоискатели нашли клад и записку в которой было написано: В этих 20 мешках с золотыми монетами есть один мешок с фальшивыми монетами. Известно, что фальшивая монета в два раза тяжелее настоящей.<br>Задача:<br>Как при помощи одного взвешивания определить в каком мешке находятся фальшивые монеты?<br>Примечание.<br>Взвешиванием называется тот момент, когда весы, типа коромысла, станут горизонтально, показывая, что на правой стороне весов и на левой стороне одинаковый вес.<br>И еще: англичане сделали приписку к задаче, что они потратили 10 тысяч человеко-часов для решения этой задачи',
				hint: '',
				answer: 'Итак, берем из первого мешка 2 монеты, из второго - 4, из третьего - 6 и т.д. Эту кучу монет бросаем на одну чашу весов, после чего уравновешиваем весы, насыпая на вторую чашу монеты из какого-нибудь одного, например первого мешка.<br>Если бы все монеты были настоящими, то чаша 1 весила бы 420 у.е. Но там-то у нас 2*х фальшивых монет, поэтому она весит 420+2*х у.е.<br>Предположим, что мешок 1, которым мы уравновешивали весы, содержит настоящие монеты, тогда количество монет, истраченных на равновесие, будет где-то между 422 и 460. Нам остаётся только найти х: х = (кол-во понадобившихся монет - 420)/2<br>Если же мешок, монетами из которого мы уравновешиваем весы, оказался фальшивым, то равновесие будет достигнуто где-то на между 211 и 230 монетами. Естественно мы тогда поймём, что что-то здесь не так'

			},
			{
				title: 'Бальзам',

				text:  'Три человека купили сосуд, полностью заполненный 24 унциями бальзама. Позже они приобрели три пустых сосуда объемом 5, 11 и 13 унций. Как они могли бы поделить бальзам на равные части используя эти четыре сосуда? Постарайтсь решить задачу за наименьшее количество переливаний',
				hint: '',
				answer: 'Сосуды могут содержать 24, 13, 11, и 5 унций соответственно:<br>Их начальное состояние 24, 0, 0, 0;<br>1 - 8, 0, 11, 5;<br>2 - 8, 11, 0, 5;<br>3 - 8, 13, 3, 0;<br>4 - 8, 8, 3, 5;<br>5 - 8, 8, 8, 0.'

			},
			{
				title: 'Ямайский ром',

				text:  'В одном порту моряк пришел в лавку с пустым бочонком на пять галлонов и попросил лавочника налить туда четыре галлона отборного ямайского рома. К несчастью, единственным сосудом для измерения был старый оловянный кувшин на три галлона. Как лавочник сумел точно отмерить четыре галлона с помощью этих двух емкостей?',
				hint: '',
				answer: 'Вот что сделал лавочник:<br>1) наполнил кувшин на три галлона и вылил из него ром в бочонок на пять галлонов;<br>2) снова наполнил кувшин на три галлона и вылил ром в бочонок до тех пор, пока тот не наполнится целиком;<br>3) в кувшине на три галлона остался один галлон; потом вылил ром из бочонка на пять галлонов обратно в большую бочку с ромом, а один галлон рома из кувшина вылил в бочонок моряка;<br>4) снова наполнил ромом кувшин на три галлона и вылил его содержимое в бочонок; теперь в бочонке - четыре галлона рома'

			},
			{
				title: 'Фальшивые монеты',

				text:  'Среди 100 одинаковых на вид монет есть несколько фальшивых. Все фальшивые монеты весят одинаково, все настоящие - тоже, фальшивая монета легче настоящей. Имеются также весы (с двумя чашами без стрелки), на каждой чашке умещается только по одной монете. При этом весы слегка испорчены: если монеты разного веса, перевешивает более тяжёлая монета, а если одинакового - перевесить может любая чашка. Как с помощью этих весов найти хотя бы одну фальшивую монету?',
				hint: '',
				answer: 'Разделим монетки на 33 кучки по 3 монетки + 1 монетка.<br>Каждое трио взвешиваем между собой, получим 3 неравенства, в результате которых увидим, либо каждая монетка будет по одному разу весить меньше от других двух, либо два раза будет весить меньше других двух.<br>1>2 (возможны такие варианты: н=н, ф=ф, 2-фальшивка)<br>1<3 (н=н, ф=ф, 1- фальшивка)<br>2>3 (н=н, ф=ф, 3- фальшивка)<br>такое возможно, если все три монетки имеют одинаковый вес вежду собой, то есть из них откладываем в сторонку любую одну<br>1<2(н=н,ф=ф,1-ф)<br>1<3(н=н,ф=ф,1-ф)<br>2>3(н=н,ф=ф,3-ф)<br>У 1 больше вероятностьть оказаться фальшивой, так что ее и откладываем.<br>И так проделываем с каждой из 33-х кучек, в результате отложим 11 монет +1, которая не попала ни в одну из кучек.<br>Эти 12 монет опять разделям на 4 кучки по 3 монетки, проделываем те же манипуляции, в результате получим 4 монетки, разделяем на 1 кучку+1, та монетка из кучки, которая окажется легче, вновь откладываем и сравниваем с одинокой монеткой. Та, которая легче и будет фальшивой'

			},
			{
				title: 'Точные весы',

				text:  'Имеется 9 одинаковых монет, одна из которых фальшивая и по этой причине легче остальных. Мы располагаем двумя весами без гирь, позволяющими сравнивать по весу любые группы монет. Однако одни из имеющихся весов являются грубыми, на них нельзя отличить фальшивую монету от настоящей. Их точность не позволяет уловить разницу в весе. Зато другие весы точные. Но какие весы грубые, а какие точные - неизвестно. Как в этой ситуации с помощью трех взвешиваний определить фальшивую монету?',
				hint: '',
				answer: 'Положим на весы №1 по четыре монеты на каждую чашку. Если одна группа монет перевесила, то остальное понятно - эти весы точные, и мы знаем 4 монеты, среди которых одна фальшивая. Пусть весы оказались в равновесии. Обозначим через А девятую монету и добавим к ней монеты В и С - по одной из каждой четверки. Оставшиеся две тройки монет положим на чаши весов №2. Худший вариант - вновь равновесие. Тогда на весах №2 сравниваем монеты В и С. В случае равновесия фальшивой будет монета А'

			},
			{
				title: 'Алюминиевые шарики',

				text:  'Среди 2000 внешне неразличимых шариков половина - алюминиевые, весом 10 г каждый, а вторая половина - дюралевые, весом 9.9 г каждый. Требуется выделить две кучки шариков так, чтобы количество шариков в кучках было одинаковым, а массы - разными. Каким наименьшим числом взвешиваний на чашечных весах без гирь это можно сделать?',
				hint: '',
				answer: 'Два. Делим на кучи (1) 666, (2) 666, (3) 666 и (4) 2. Взвешиваем (1)-(2), (2)-(3). Если в обоих случаях равенство, то оставшиеся 2 шарика разные'

			},
			{
				title: 'Сортировка по весу',

				text:  'Пять различных по весу предметов требуется расположить в порядке убывания их веса. Пользоваться можно только простейшими весами без гирь, которые позволяют лишь установить, какой из двух сравниваемых по весу предметов тяжелее.<br>Как следует действовать, чтобы решить задачу оптимальным образом, то есть так, чтобы число взвешиваний было минимальным? Сколько взвешиваний придется при этом произвести?',
				hint: '',
				answer: 'Первым взвешиванием сравним любые 2 из 5 данных предметов. Пусть A - более легкий, а B - более тяжелый предмет. Тогда результат первого взвешивания запишем в виде A<B (читается: «A легче В»).<br>Затем сравним два других предмета и обозначим более легкий D а более тяжелый - E: D<E.<br>Пятый предмет обозначим C.<br>Третьим взвешиванием сравним предметы B и E. Обе возникающие здесь возможности приводят к аналогичным рассуждениям, поэтому мы ограничимся рассмотрением случая B<E. В итоге после трех взвешиваний мы знаем, что A<B<E и D<E.<br>Четвертым взвешиванием сравним пятый предмет C с предметом B. Необходимо различать два случая:<br>а) B<C;<br>б) C<B.<br>В первом случае (B<C)<br>A<B<E, D<E и B<C.<br>Сравним (для этого понадобится пятое взвешивание) предметы C и E. Здесь также необходимо различать два возможных случая: E<C или C<E.<br>Если A<B<E<C, то место предмета D, более легкого, чем E, можно определить, сравнив A с D и B с D. Таким образом, для полного упорядочения пяти предметов по весу в этом случае необходимо произвести 7 взвешиваний.<br>В случае A<B<C<E для определения места D также достаточно произвести два взвешивания, а именно: сначала сравнить D с B, а затем в зависимости от результата взвешивания сравнить D либо с A либо с C. В итоге мы снова производим 7 взвешиваний.<br>Во втором случае (C<B)<br>A<B<E, C<B и D<E.<br>Сравним предметы A и C (пятое взвешивание). В обоих возможных случаях (A<C<B или C<A<B<E) для определения места предмета D, о котором уже известно, что он легче предмета E, достаточно двух взвешиваний. Следовательно, и в случае, когда C<B, семи взвешиваний достаточно, чтобы расположить предметы в порядке возрастания их веса.<br>Поскольку мы исчерпали все возможные случаи, то доказательство на этом заканчивается'

			},
			{
				title: 'Элементарное переливание',

				text:  'Винодел обычно продает свое вино по 30 и по 50 литров и использует для этого кувшины только такого размера. Один из покупателей захотел купить 10 литров. Как винодел отмерил ему 10 литров пользуясь своими кувшинами?',
				hint: '',
				answer: 'Сначала он наполнил 30-литровый кувшин и вылил его содержимое в 50-литровый. Потом опять наполнил 30-литровый и долил до полного заполнения в 50-литровый. В результате у него в кувшине останется 10 литров'

			},
			{
				title: 'Задача Пуассона',

				text:  'Как из полного сосуда ёмкостью в 12 л отлить половину, пользуясь двумя пустыми сосудами ёмкостью в 8 и 5 л?',
				hint: '',
				answer: 'Сначала наливаете 8 литров в 8л., потом из 8л. наливаете полный 5л., в результате получается, что в 12л. - 4 литра, в 8л - 3литра, а в 5л. - 5 литров.<br>Переливаете из 5л. в 12л. всю воду (или что там за жидкость), а из 8л. переливаете все 3 литра в 5л. В результате 9 литров в 12л, 0 литров в 8л., и 3 литра в 5л.<br>Переливаете из 12л. 8 литров в пустой 8л.,и в 12 л. остается 1 литр.<br>Из 8л. доливаете в 5л., пока 5л. не станет полным, (в 5л. было 3л., след. долили мы еще 2литра из 8л.) Тогда в 8л. как раз остается 6л'

			},
			{
				title: 'Где фальшивые монеты?-2',

				text:  'Есть 10 мешков по 10000 монет каждый. Несколько целиком забиты монетами на 1г. легче настоящих, в остальных монеты настоящие. Есть еще один мешок с настоящими монетами. За одно взвешивание на весах со стрелкой, показывающей разность весов на чашах определите все мешки с фальшивыми монетами',
				hint: '',
				answer: 'Т.к. задача является небольшим обобщением вот этой задачи, то и решение получается тоже небольшой модификацией:<br>из каждого мешка надо брать не 1, 2 и так далее монет, а, например, по степеням двойки, т.е. из первого мешка взяли 1 монету, из второго - 2, из третьего - 4, ... , из десятого - 29 = 512 монет.<br>В итоге, взвесив отобранные монеты и узнав разницу в весе, полученное число раскладываем по степеням двойки (фактически переводим в двочную систему счисления).<br>Например, если разница в граммах составила 65 = 64 + 1 = 1*20 + 0*21 + 0*22 + 0*23 + 0*24 + 0*25 + 1*26 + 0*27 + 0*28 + 0*29.<br>Т.е. фальшивые монеты были в первом и седьмом мешках'

			},
			{
				title: 'Взвесить слона',

				text:  'Сможете ли вы повторить действия, которые предпринял в одной древней легенде восточный мудрец? Попробуйте. Вот условие.<br>Когда за доброе дело правитель страны решил наградить умного человека, тот пожелал взять столько золота, сколько весит слон. Но как же взвесить слона? В те времена не было таких весов. Что бы в подобной ситуации смогли придумать вы?',
				hint: '',
				answer: 'Мудрец сделал так: он поместил слона в лодку, затем отметил по борту уровень воды. Когда слона вывели из лодки, осталось только поместить туда золото'

			},
			{
				title: 'Материя',

				text:  'Эта задачка хоть и совсем не про взвешивания, но принцип ее решения такой же, как и у других задач данного раздела. Итак.<br>Как от куска материи в 2/3 метра отрезать полметра без помощи каких-либо измерительных приборов?',
				hint: '',
				answer: 'Кусок материи в 2/3 метра надо сложить пополам. Образовавшаяся линия сгиба поделит его на две равные части по 1/3 метра. Затем надо сложить его еще раз пополам. Образовавшияся линии сгиба поделят кусок материи на четыре равные части по 1/6 метра. Три таких части - это 3/6 метра или искомая 1/2 метра'

			},
			{
				title: '80 монет',

				text:  'Имеется 80 монет, одна из которых фальшивая, причем она легче других. За какое наименьшее число взвешиваний на весах без гирь можно найти фальшивую монету?',
				hint: '',
				answer: 'Фальшивую монету можно определить за 4 взвешивания. Алгоритм следующий. Первое взвешивание: кладем на чаши по 27 монет. В случае равновесия фальшивая среди оставшихся 26. Если одна чаша легче, то фальшивая среди лежащих на ней 27. Второе взвешивание: кладем на обе чаши по 9 монет из числа "подозреваемых" и рассуждаем аналогично. В третьем взвешивании положим на чаши по 3 монеты, а в четвертом - по одной. Как видим, здесь деление не пополам, а на три по возможности равные части'

			},
			{
				title: '68 монет',

				text:  'Есть 68 монет, все они разные по весу. Как за 100 взвешиваний найти самую легкую и самую тяжелую?',
				hint: '',
				answer: 'Взвешиваем попарно все монеты, легкие откладываем в одну кучку, тяжелые - в другую, всего получается 34 взвешивания. В первой кучке взвешиваем по очереди все монеты с наиболее легкой на данный момент, т.е. если попадается более легкая, то следующие монеты взвешиваются уже с ней,  и так 33 раза. С правой кучкой - то же самое, но только выявляем наиболее тяжелую монету, также 33 взвешивания. Итого - ровно 100 взвешиваний'

			},
			{
				title: 'Взвешивание слив',

				text:  'Имеются стандартные весы с чашечками и две гири: 10 и 2 кг. Как с их помощью взвесить 3 кг слив?',
				hint: '',
				answer: 'Отвешиваем сначала 2 кг слив. Затем делим их поровну по чашам весов, чтобы весы уравновесились. 1 кг слив получен. Имя 1кг и гирю в 2 кг можно отмерить любое нужное количество, в том числе и 3 кг'

			},
			{
				title: 'Отмерить время с помощью песочных часов',

				text:  'При помощи только 4- и 7-минутных песочных часов точно отмерьте девять минут',
				hint: '',
				answer: '1. Запустите 4- и 7-минутные часы одновременно<br>2. Когда в 4-минутных часах закончится песок, переверните их (итоговое время - 4 минуты)<br>3. Когда в 7-минутных часах закончится песок, их тоже переворачиваем. В этот момент в 4-минутных часах, в верхней половинке, осталось песка на 1 минуту (итоговое время - 7 минут)<br>4. Когда 4-минутные часы опустеют, переворачиваем 7-минутные, где в нижней половине песка на 1 минуту (итоговое время 8 минут)<br>5. Когда 7-минутные опустеют, прошло ровно 9 минут'

			}

		]

	};

}(window));