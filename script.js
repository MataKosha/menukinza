// Полная база данных меню KINZA из PDF-документа
const menuData = [
    // --- САЛАТЫ ---
    { id: 1, category: "salads", name: "Цезарь с курицей / Цезарь тауықпен", price: "2390 тг", desc: "айсберг, соус 'Цезарь', черри, перепелиное яйцо, сыр пармезан, куриное филе, сухарики", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&q=80" },
    { id: 2, category: "salads", name: "Цезарь с креветками / Цезарь асшаянмен", price: "2790 тг", desc: "айсберг, креветки, сыр пармезан, соус 'Цезарь', черри, перепелиное яйцо, сухарики", img: "https://images.unsplash.com/photo-1546793497-24b413cdbc4c?w=400&q=80" },
    { id: 3, category: "salads", name: "Гнездо глухаря / Глухар ұясы", price: "2090 тг", desc: "соленые огурцы, картофель пай, яйцо, куриное филе, майонез", img: "https://placehold.co/400x300/222/fff?text=Salad" },
    { id: 4, category: "salads", name: "Хрустящий баклажан / Қатылақ баклажан", price: "2590 тг", desc: "обжаренный баклажан, черри, кисло-сладкий соус, микс салата, грецкие орехи", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80" },
    { id: 5, category: "salads", name: "Руккола с креветками / Руккола асшаянмен", price: "2590 тг", desc: "руккола, сыр пармезан, креветки, помидоры черри", img: "https://placehold.co/400x300/222/fff?text=Salad" },
    { id: 6, category: "salads", name: "Руккола с говяжьим языком / Руккола сиыр тілмен", price: "2390 тг", desc: "руккола, говяжий язык, болгарский перец, горчично-майонезный соус, помидоры черри", img: "https://placehold.co/400x300/222/fff?text=Salad" },
    { id: 7, category: "salads", name: "Тёплый салат с говядиной и рукколой", price: "2490 тг", desc: "руккола, говядина, красная капуста, пекинская капуста, лист салата, черри, соевый соус, моцарелла", img: "https://placehold.co/400x300/222/fff?text=Warm+Salad" },
    { id: 8, category: "salads", name: "Ачи-чук", price: "1590 тг", desc: "помидоры, лук, перец чили", img: "https://placehold.co/400x300/222/fff?text=Achi-chuk" },
    { id: 9, category: "salads", name: "Малибу", price: "1990 тг", desc: "сухарики, огурцы, помидоры, сыр, кукуруза, майонез, копченая колбаса", img: "https://placehold.co/400x300/222/fff?text=Malibu" },
    { id: 10, category: "salads", name: "Тёплый салат с курицей / Жылы салат тауықпен", price: "2290 тг", desc: "картофель фри, зеленый горошек, куриное филе, шампиньоны, сливки", img: "https://placehold.co/400x300/222/fff?text=Salad" },
    { id: 11, category: "salads", name: "Салат «Kinza»", price: "2490 тг", desc: "свекла, груша, микс салата, кедровые орехи, сыр 'Кремета'", img: "https://placehold.co/400x300/222/fff?text=Kinza+Salad" },
    { id: 12, category: "salads", name: "Греческий", price: "2290 тг", desc: "огурцы, помидоры, сыр фета, оливковое масло, болгарский перец, лимон", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80" },
    { id: 13, category: "salads", name: "Французский", price: "2090 тг", desc: "краснокочанная капуста, говядина, морковь, огурцы, кукуруза, майонез, картофель пай", img: "https://placehold.co/400x300/222/fff?text=French" },
    { id: 14, category: "salads", name: "Тайский", price: "2390 тг", desc: "говядина, огурцы, помидоры, лук, болгарский перец, перец чили, соевый соус", img: "https://placehold.co/400x300/222/fff?text=Thai" },
    { id: 15, category: "salads", name: "Капрезе", price: "2390 тг", desc: "сыр моцарелла, помидор, масло оливковое, соус базилика", img: "https://placehold.co/400x300/222/fff?text=Caprese" },
    { id: 16, category: "salads", name: "Салат Пятница / Жұма салаты", price: "2690 тг", desc: "помидоры, шампиньоны, баклажаны, красный лук, брынза в панировке, кинза, кисло-сладкий соус", img: "https://placehold.co/400x300/222/fff?text=Friday" },
    { id: 17, category: "salads", name: "Мужской каприз / Ерлерге арналған салат", price: "2290 тг", desc: "картофель, морковь, куриное филе, соленый огурец, сыр, майонез", img: "https://placehold.co/400x300/222/fff?text=Mens" },
    { id: 18, category: "salads", name: "Арабский салат / Араб салаты", price: "2690 тг", desc: "куриное филе, финики, микс зелени, черри, хурма/апельсин, творожный сыр, апельсиновый соус", img: "https://placehold.co/400x300/222/fff?text=Arab" },
    { id: 19, category: "salads", name: "Тальята из утиного филе", price: "3090 тг", desc: "утиное филе обжаренное, микс зелени, черри, ягодный соус, мякоть апельсина", img: "https://placehold.co/400x300/222/fff?text=Tagliata" },
    { id: 20, category: "salads", name: "Салат семга с яблоком", price: "3190 тг", desc: "сёмга, руккола, шпинат, огурец, зеленое яблоко, черри, соус", img: "https://placehold.co/400x300/222/fff?text=Salmon" },

    // --- ХОЛОДНЫЕ ЗАКУСКИ ---
    { id: 21, category: "cold", name: "Разносолы / Тұздалған көкөністер", price: "2590 тг", desc: "корнишоны, капуста, патиссоны, опята, лук", img: "https://placehold.co/400x300/222/fff?text=Pickles" },
    { id: 22, category: "cold", name: "Ассорти по-кавказски / Кавказша ассорти", price: "2690 тг", desc: "огурцы, помидоры, болгарский перец, брынза, зелень, чеснок, редис, перец чили", img: "https://placehold.co/400x300/222/fff?text=Caucasian" },
    { id: 23, category: "cold", name: "Сельд по-русски / Орысша сельд", price: "2390 тг", desc: "соленые огурцы, сельдь, лук, картофель по-деревенски", img: "https://placehold.co/400x300/222/fff?text=Herring" },
    { id: 24, category: "cold", name: "Мясная нарезка / Ет тағамдарының ассортиі", price: "4690 тг", desc: "шужык, куриный рулет, копченое утиное филе, говяжий язык, копченая говядина", img: "https://placehold.co/400x300/222/fff?text=Meat" },
    { id: 25, category: "cold", name: "Фруктовая нарезка / Жеміс ассортиі", price: "3290 тг", desc: "яблоки, бананы, апельсины, виноград, киви, мандарины, груши", img: "https://placehold.co/400x300/222/fff?text=Fruits" },
    { id: 26, category: "cold", name: "Сырная нарезка / Ірімшік ассортиі", price: "3690 тг", desc: "маасдам, пармезан, фетакса, гауда, моцарелла, грецкий орех, мед", img: "https://placehold.co/400x300/222/fff?text=Cheese" },
    { id: 27, category: "cold", name: "Рыбная нарезка / Балық ассортиі", price: "4690 тг", desc: "семга, эскалар, скумбририя", img: "https://placehold.co/400x300/222/fff?text=Fish" },

    // --- СУПЫ ---
    { id: 28, category: "soups", name: "Шорпа по-узбекски / Өзбекше шорпа", price: "1790 тг", desc: "баранина, картофель, морковь, болгарский перец", img: "https://placehold.co/400x300/222/fff?text=Shorpa" },
    { id: 29, category: "soups", name: "Суп лапша с курицей", price: "1790 тг", desc: "лапша, морковь, лук, куриное филе", img: "https://placehold.co/400x300/222/fff?text=Noodle+Soup" },
    { id: 30, category: "soups", name: "Суйру лагман", price: "1890 тг", desc: "овощи, говядина, домашняя лапша", img: "https://placehold.co/400x300/222/fff?text=Lagman" },
    { id: 31, category: "soups", name: "Солянка", price: "2090 тг", desc: "соленые огурцы, копченая колбаса, копченая говядина, куриное филе, маслины, томаты", img: "https://placehold.co/400x300/222/fff?text=Solyanka" },
    { id: 32, category: "soups", name: "Нарын из конины", price: "1890 тг", desc: "традиционное мелко нарезное мясо конины с домашним тестом и бульоном", img: "https://placehold.co/400x300/222/fff?text=Naryn" },
    { id: 33, category: "soups", name: "Рамён с курицей", price: "1890 тг", desc: "наваристый азиатский бульон, лапша, куриное филе, яйцо, зелень", img: "https://placehold.co/400x300/222/fff?text=Ramen" },
    { id: 34, category: "soups", name: "Рамён с копченой говядиной", price: "1990 тг", desc: "азиатский бульон, домашняя лапша, ароматная копченая говядина", img: "https://placehold.co/400x300/222/fff?text=Beef+Ramen" },
    { id: 35, category: "soups", name: "Пельмени по-домашнему / Үй пельмениі", price: "1990 тг", desc: "домашние пельмени ручной лепки с сочным мясным фаршем", img: "https://placehold.co/400x300/222/fff?text=Pelmeni" },
    { id: 36, category: "soups", name: "Том-ям с морепродуктами и рисом", price: "3090 тг", desc: "кокосовое молоко, креветки, шампиньоны, мидии, сёмга, кинза, перец чили, паста 'Нам Прик Пао'", img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&q=80" },
    { id: 37, category: "soups", name: "Грибной суп-пюре", price: "1890 тг", desc: "нежные сливки, свежие шампиньоны, лук, гренки", img: "https://placehold.co/400x300/222/fff?text=Mushroom+Soup" },
    { id: 38, category: "soups", name: "Окрошка сезонная", price: "1690 тг", desc: "освежающий холодный суп на квасе или кефире", img: "https://placehold.co/400x300/222/fff?text=Okroshka" },
    { id: 39, category: "soups", name: "Чечевичный крем-суп", price: "1890 тг", desc: "протертая чечевица, пряные специи, лимон, гренки", img: "https://placehold.co/400x300/222/fff?text=Lentil+Soup" },

    // --- ГОРЯЧИЕ БЛЮДА ---
    { id: 40, category: "hot", name: "Куырдак из конины / Жылқы етінен қуырдақ", price: "2890 тг", desc: "печень, сердце, конина, обжаренный рубленый картофель, лук", img: "https://placehold.co/400x300/222/fff?text=Kuyrdak" },
    { id: 41, category: "hot", name: "Бешбармак", price: "2990 тг", desc: "тонкое домашнее тесто, сочная конина, казы, лук, картофель, туздык", img: "https://placehold.co/400x300/222/fff?text=Beshbarmak" },
    { id: 42, category: "hot", name: "Сахарная кость / Қант сүйек", price: "2090 тг", desc: "запеченная мозговая кость со специями и зеленью", img: "https://placehold.co/400x300/222/fff?text=Bone" },
    { id: 43, category: "hot", name: "Гуйру лагман", price: "1790 тг", desc: "домашняя лапша, говядина, овощи, фирменный густой соус", img: "https://placehold.co/400x300/222/fff?text=Lagman" },
    { id: 44, category: "hot", name: "Могуру лагман", price: "1890 тг", desc: "домашняя лапша, говядина, грибы, овощи, густой соус", img: "https://placehold.co/400x300/222/fff?text=Moguru" },
    { id: 45, category: "hot", name: "Цомян с курицей и грибами", price: "1990 тг", desc: "жареная домашняя лапша, овощи, курица, грибы", img: "https://placehold.co/400x300/222/fff?text=Tsomyand" },
    { id: 46, category: "hot", name: "Цомян классический", price: "2090 тг", desc: "домашняя лапша обжаренная, говядина, микс свежих овощей", img: "https://placehold.co/400x300/222/fff?text=Tsomyand" },
    { id: 47, category: "hot", name: "«Kinza» лагман", price: "2290 тг", desc: "фирменная лапша, нежная говядина, свежие овощи, брокколи, густой соус", img: "https://placehold.co/400x300/222/fff?text=Kinza+Lagman" },
    { id: 48, category: "hot", name: "Курица по-тайски / Тайша тауық еті", price: "2490 тг", desc: "куриное филе, овощи, перец чили, кисло-сладкий соус, гарнир рис", img: "https://placehold.co/400x300/222/fff?text=Thai+Chicken" },
    { id: 49, category: "hot", name: "Курица в кисло-сладком соусе", price: "2590 тг", desc: "куриное филе в авторском соусе, нежное картофельное пюре на гарнир", img: "https://placehold.co/400x300/222/fff?text=Chicken" },
    { id: 50, category: "hot", name: "Фри с мясом / Ет қосылған фри", price: "2190 тг", desc: "говядина, хрустящий картофель фри, овощи, обжаренное на сильном огне блюдо", img: "https://placehold.co/400x300/222/fff?text=Fries+Meat" },
    { id: 51, category: "hot", name: "Телятина с грибами в соусе", price: "2890 тг", desc: "мясо телятины, шампиньоны, лук, сливки, подается с рисом", img: "https://placehold.co/400x300/222/fff?text=Veal" },
    { id: 52, category: "hot", name: "Домашние котлеты из говядины", price: "1990 тг", desc: "две сочные домашние котлеты из говяжьего фарша", img: "https://placehold.co/400x300/222/fff?text=Cutlets" },
    { id: 53, category: "hot", name: "Домашние котлеты из курицы", price: "1790 тг", desc: "нежные легкие диетические котлетки из куриного филе", img: "https://placehold.co/400x300/222/fff?text=Chicken+Cutlets" },
    { id: 54, category: "hot", name: "Баранина на жаровне", price: "2990 тг", desc: "кусочки баранины, обжаренные с луком и специями, подаются шкворчащими", img: "https://placehold.co/400x300/222/fff?text=Mutton" },
    { id: 55, category: "hot", name: "Говядина на жаровне", price: "2990 тг", desc: "сочная говядина, приготовленная на раскаленной чугунной жаровне", img: "https://placehold.co/400x300/222/fff?text=Beef" },
    { id: 56, category: "hot", name: "Плов по-Ташкентски / Ташкентше палау", price: "1790 тг", desc: "рис лазер, нут, говядина, желтая и красная морковь, перепелиное яйцо, перец чили, изюм", img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400&q=80" },
    { id: 57, category: "hot", name: "Манты рубленые (5 шт)", price: "1890 тг", desc: "настоящее тонкое тесто, рубленая вручную говядина, сочный лук", img: "https://placehold.co/400x300/222/fff?text=Manty" },
    { id: 58, category: "hot", name: "Манты жареные (5 шт)", price: "1990 тг", desc: "рубленая говядина, лук, хрустящий панировочный кляр", img: "https://placehold.co/400x300/222/fff?text=Fried+Manty" },
    { id: 59, category: "hot", name: "Казан-кебаб по-уйгурски", price: "2690 тг", desc: "мелко рубленая говядина, лук, гарнир из рассыпчатого риса", img: "https://placehold.co/400x300/222/fff?text=Kazan+Kebab" },
    { id: 60, category: "hot", name: "Казан-кебаб по-узбекски", price: "2990 тг", desc: "нежная кусковая баранина, лук, гарнир из обжаренного золотистого картофеля", img: "https://placehold.co/400x300/222/fff?text=Kazan+Kebab" },
    { id: 61, category: "hot", name: "Куырдак из говядины", price: "2790 тг", desc: "кусочки говядины, обжаренный рубленый картофель, сочный лук", img: "https://placehold.co/400x300/222/fff?text=Kuyrdak" },
    { id: 62, category: "hot", name: "Цыпленок табака / Табаға қуырылған балапан", price: "4490 тг", desc: "цельный цыпленок, маринованный в пряных специях и обжаренный под прессом", img: "https://placehold.co/400x300/222/fff?text=Chicken" },
    { id: 63, category: "hot", name: "Жареха", price: "2990 тг", desc: "жареная говядина с крупными картофельными дольками и золотистым луком", img: "https://placehold.co/400x300/222/fff?text=Zhareha" },
    { id: 64, category: "hot", name: "Тай WOK", price: "3190 тг", desc: "телятина, болгарский перец, шампиньоны, стручковая фасоль, мини кукуруза, лук, чеснок, соевый соус", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80" },

    // --- БЛЮДА НА КОМПАНИЮ ---
    { id: 65, category: "company", name: "Бешбармак (на 12 человек)", price: "29 900 тг", desc: "огромное традиционное блюдо для больших праздников", img: "https://placehold.co/400x300/222/fff?text=Beshbarmak+12" },
    { id: 66, category: "company", name: "Хан-плов (на 12 человек)", price: "27 990 тг", desc: "праздничный плов в короне из хрустящего теста", img: "https://placehold.co/400x300/222/fff?text=Khan+Plov" },
    { id: 67, category: "company", name: "Дымлама (на 12 человек)", price: "27 990 тг", desc: "томленое мясо с крупными сезонными овощами и специями", img: "https://placehold.co/400x300/222/fff?text=Dymlama" },
    { id: 68, category: "company", name: "Казан-кебаб (на 6 человек)", price: "17 990 тг", desc: "мясо на кости с хрустящим картофелем из казана", img: "https://placehold.co/400x300/222/fff?text=Kaban+Kebab+6" },
    { id: 69, category: "company", name: "Дымлама (на 6 человек)", price: "17 990 тг", desc: "мясо, томленое в собственном соку с овощами на 6 персон", img: "https://placehold.co/400x300/222/fff?text=Dymlama+6" },
    { id: 70, category: "company", name: "Мясной сет Kinza (на 6 человек)", price: "29 990 тг", desc: "стейки, кебабы, курица и мясные деликатесы с соусами", img: "https://placehold.co/400x300/222/fff?text=Meat+Set" },
    { id: 71, category: "company", name: "Рыбный сет (на 6 человек)", price: "26 990 тг", desc: "ассорти из запеченной и обжаренной рыбы с рисом и лимоном", img: "https://placehold.co/400x300/222/fff?text=Fish+Set" },
    { id: 72, category: "company", name: "Тауық ассорти / Куриное ассорти (на 6 человек)", price: "22 990 тг", desc: "крылышки, стейки, филе и цыплята с картофельными дольками", img: "https://placehold.co/400x300/222/fff?text=Chicken+Set" },
    { id: 73, category: "company", name: "Шашлық ассорти / Ассорти из шашлыков", price: "21 900 тг", desc: "огромное плато горячих кебабов и шашлыков разного вида мяса", img: "https://placehold.co/400x300/222/fff?text=Shashlik+Set" },

    // --- СТЕЙКИ ---
    { id: 74, category: "steaks", name: "Куриный стейк / Тауық стейкі", price: "3790 тг", desc: "сочное маринованное куриное филе, приготовленное на гриле", img: "https://placehold.co/400x300/222/fff?text=Chicken+Steak" },
    { id: 75, category: "steaks", name: "Медальоны из телятины", price: "5290 тг", desc: "нежнейшая вырезка телятины с фирменным соусом", img: "https://placehold.co/400x300/222/fff?text=Medallions" },
    { id: 76, category: "steaks", name: "Стейк из сёмги с рисом", price: "5690 тг", desc: "стейк красной рыбы на гриле, подается с рассыпчатым рисом", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80" },
    { id: 77, category: "steaks", name: "Ти-Бон стейк", price: "5190 тг", desc: "стейк на Т-образной кости, сочетающий два вида премиального мяса", img: "https://placehold.co/400x300/222/fff?text=T-Bone" },
    { id: 78, category: "steaks", name: "Рибай стейк", price: "5390 тг", desc: "классический сочный стейк с высокой мраморностью", img: "https://placehold.co/400x300/222/fff?text=Ribeye" },
    { id: 79, category: "steaks", name: "Пеппер стейк / Бұрышты стейк", price: "6190 тг", desc: "стейк из говядины под пикантным сливочно-перечным соусом", img: "https://placehold.co/400x300/222/fff?text=Pepper+Steak" },
    { id: 80, category: "steaks", name: "Утиное магре / Үйрек магре", price: "3790 тг", desc: "нежное прожаренное утиное филе с ягодным соусом", img: "https://placehold.co/400x300/222/fff?text=Magret" },

    // --- ЗАВТРАКИ ---
    { id: 81, category: "breakfast", name: "Шакшука / Шакшука", price: "2090 тг", desc: "глазунья из 2-х яиц, болгарский перец, лук, чеснок, томаты, хрустящие тосты", img: "https://images.unsplash.com/photo-1590412200988-a436bb7050a8?w=400&q=80" },
    { id: 82, category: "breakfast", name: "Экспресс-завтрак", price: "1090 тг", desc: "хрустящий тост, творожный сыр, спелые томаты, жареное яйцо", img: "https://placehold.co/400x300/222/fff?text=Express" },
    { id: 83, category: "breakfast", name: "Английский завтрак", price: "2290 тг", desc: "яичница из 3-х яиц, говяжьи сосиски, картофельные дольки, сладкая кукуруза, соус", img: "https://placehold.co/400x300/222/fff?text=English" },
    { id: 84, category: "breakfast", name: "Каша домашняя / Ботқа", price: "1090 тг", desc: "на выбор клиента: манная, рисовая или полезный геркулес", img: "https://placehold.co/400x300/222/fff?text=Porridge" },
    { id: 85, category: "breakfast", name: "Омлет с овощами / Көкөністі омлет", price: "1890 тг", desc: "пышный омлет из свежих яиц со спелыми томатами и зеленью", img: "https://placehold.co/400x300/222/fff?text=Omelette" },

    // --- ШАШЛЫКИ ---
    { id: 86, category: "shashlik", name: "Шашлык из баранины / Қой еті", price: "2500 тг", desc: "классический сочный шашлык из мяса молодой баранины", img: "https://placehold.co/400x300/222/fff?text=Shashlik" },
    { id: 87, category: "shashlik", name: "Бараньи семечки / Қой қабырғасы", price: "2000 тг", desc: "хрустящие, хорошо обжаренные бараньи ребрышки", img: "https://placehold.co/400x300/222/fff?text=Ribs" },
    { id: 88, category: "shashlik", name: "Баранина антрекот", price: "3000 тг", desc: "крупные куски сочного антрекота из баранины на углях", img: "https://placehold.co/400x300/222/fff?text=Antrekot" },
    { id: 89, category: "shashlik", name: "Шашлык из телятины / Бұзау еті", price: "2200 тг", desc: "нежное маринованное мясо телятины, тающее во рту", img: "https://placehold.co/400x300/222/fff?text=Veal" },
    { id: 90, category: "shashlik", name: "Окорочка на углях / Сан еті", price: "1300 тг", desc: "куриные окорочка с ароматной дымной корочкой", img: "https://placehold.co/400x300/222/fff?text=Chicken" },
    { id: 91, category: "shashlik", name: "Куриные крылышки / Қанаттар", price: "1200 тг", desc: "аппетитные куриные крылышки в пикантном маринаде", img: "https://placehold.co/400x300/222/fff?text=Wings" },
    { id: 92, category: "shashlik", name: "Куриное филе / Тауық филесі", price: "1300 тг", desc: "нежное, сочное и диетическое белое мясо курицы", img: "https://placehold.co/400x300/222/fff?text=Fillet" },
    { id: 93, category: "shashlik", name: "Шашлык из утки / Уйрек еті", price: "1300 тг", desc: "ароматное филе утки с легкой жировой прослойкой", img: "https://placehold.co/400x300/222/fff?text=Duck" },
    { id: 94, category: "shashlik", name: "Люля-кебаб", price: "1200 тг", desc: "традиционный нежный люля-кебаб из рубленого фарша со специями", img: "https://placehold.co/400x300/222/fff?text=Lula" },
    { id: 95, category: "shashlik", name: "Печень в рубашке / Қабықтағы бауыр", price: "1400 тг", desc: "нежная говяжья или баранья печень, обернутая в жировую сетку", img: "https://placehold.co/400x300/222/fff?text=Liver" },
    { id: 96, category: "shashlik", name: "Овощной шашлык", price: "1200 тг", desc: "болгарский перец, баклажаны, кабачки и помидоры на мангале", img: "https://placehold.co/400x300/222/fff?text=Vegetable" },
    { id: 97, category: "shashlik", name: "Шампиньоны на углях", price: "1400 тг", desc: "крупные сочные грибы шампиньоны с ароматом костра", img: "https://placehold.co/400x300/222/fff?text=Mushrooms" }
];

// Список категорий для панели навигации
const categories = [
    { id: "all", title: "Все" },
    { id: "salads", title: "Салаты" },
    { id: "cold", title: "Закуски" },
    { id: "soups", title: "Супы" },
    { id: "hot", title: "Горячее" },
    { id: "company", title: "На компанию" },
    { id: "steaks", title: "Стейки" },
    { id: "breakfast", title: "Завтраки" },
    { id: "shashlik", title: "Шашлыки" }
];

let currentCategory = "all";

// Элементы DOM
const categoriesContainer = document.getElementById("categoriesContainer");
const menuGrid = document.getElementById("menuGrid");
const currentCategoryTitle = document.getElementById("currentCategoryTitle");
const searchInput = document.getElementById("searchInput");

// Инициализация категорий
function renderCategories() {
    categoriesContainer.innerHTML = categories.map(cat => `
        <button class="category-btn ${cat.id === currentCategory ? 'active' : ''}" 
                onclick="setCategory('${cat.id}')">
            ${cat.title}
        </button>
    `).join('');
}

// Переключение категории
function setCategory(catId) {
    currentCategory = catId;
    const selectedCat = categories.find(c => c.id === catId);
    currentCategoryTitle.textContent = selectedCat ? selectedCat.title : "Все блюда";
    
    renderCategories();
    renderMenu();
}

// Отображение карточек меню
function renderMenu() {
    const query = searchInput.value.toLowerCase().trim();
    
    const filteredItems = menuData.filter(item => {
        const matchesCategory = (currentCategory === "all" || item.category === currentCategory);
        const matchesSearch = item.name.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });

    if (filteredItems.length === 0) {
        menuGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: #666; padding: 40px; font-size: 14px;">Ничего не найдено...</div>`;
        return;
    }

    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="menu-item">
            <img src="${item.img}" alt="${item.name}" class="item-img" loading="lazy">
            <div class="item-info">
                <h3 class="item-title">${item.name}</h3>
                <p class="item-desc">${item.desc}</p>
                <div class="item-footer">
                    <span class="item-price">${item.price}</span>
                    <button class="order-btn">Заказать</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Слушатель поиска
searchInput.addEventListener("input", renderMenu);

// Запуск приложения
renderCategories();
renderMenu();