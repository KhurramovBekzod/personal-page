/* MercyMed draft website: language switch, team list, mobile menu, booking pop-up, scroll animations */
(function () {
  var WA = "996770231813";

  var T = {
    en: {
      r_dir: "Director / Doula", r_chief: "Chief Doctor / Pediatrics", r_pedfam: "Pediatrics / Family Medicine",
      r_intpul: "Internal Medicine / Pulmonology", r_pedint: "Pediatric Intensivist", r_ped: "Pediatrics",
      r_pedonc: "Pediatrics / Oncology", r_pt: "Physical Therapist", r_gyn: "Gynecology", r_us: "Ultrasound",
      photo_of: "Photo of", us_img: "Ultrasound scanner at MercyMed", hero_alt: "Dr Jonathan Williams at the MercyMed clinic",
      m_wa_t: "Book via WhatsApp", m_call_t: "Call MercyMed", m_org_t: "Partnership enquiry",
      m_wa: "This opens a real WhatsApp chat with MercyMed’s reception, with this message ready to fill in:",
      m_wa_msg: "Hello MercyMed! I would like to book an appointment.\nName and surname:\nDate of birth:\nContact number:\nReason or preferred doctor (optional):",
      m_org: "This opens a real WhatsApp chat with MercyMed, with this message ready to fill in:",
      m_org_msg: "Hello MercyMed! Our organisation is interested in staff check-ups.\nOrganisation:\nContact person:\nNumber of people:\nContact number:",
      m_call: "Call the clinic at +996 770 231 813, Monday to Friday, 09:00–18:00.", m_call_go: "Call now",
      m_note_wa: "Nothing is sent until you press send in WhatsApp. This page is a student prototype, so please only send real requests.",
      m_note_call: "This page is a student prototype.",
      copied: "Copied"
    },
    ru: {
      proto: "Студенческий прототип для MercyMed, не официальный сайт. Некоторые данные ожидают подтверждения клиники.",
      trnote: "Перевод ожидает проверки клиникой.",
      nav_home: "Главная", nav_about: "О нас", nav_services: "Услуги", nav_team: "Команда", nav_contact: "Контакты",
      book: "Записаться на приём", menu: "Меню", call: "Позвонить", wa_btn: "Записаться через WhatsApp",
      hero_eyebrow: "Частный медицинский центр · Тунгуч, Бишкек",
      hero_h1: "Доказательная медицина для всей семьи в одном месте.",
      hero_lead: "Детей, подростков, взрослых и будущих мам принимает одна команда местных и иностранных врачей.",
      langs_label: "Консультации на языках", draft_tag: "Черновой слоган, ожидает утверждения клиникой",
      f1: "лет выездных клиник в регионах", f2n: "С 2023 года", f2: "работает наша клиника в Бишкеке (открылась в октябре)",
      f3: "языков консультаций", f4: "скидка на анализы для наших пациентов",
      how_h: "Как мы работаем",
      w1t: "Семейный подход", w1d: "Взрослых, детей, подростков и беременных принимают в одном месте.",
      w2t: "Доказательная медицина", w2d: "Мы диагностируем и лечим всех пациентов по методам доказательной медицины.",
      w3t: "Местные и иностранные специалисты", w3d: "Семейная медицина, педиатрия, гинекология, пульмонология и УЗИ.",
      w4t: "Обучение и развитие", w4d: "Мы обучаем врачей и студентов-медиков.",
      about_eyebrow: "О MercyMed", about_h: "Клиника, выросшая из выездных клиник",
      a1: "MercyMed — частный медицинский центр в Бишкеке. Мы оказываем качественную медицинскую помощь, основанную на современных медицинских знаниях и международном опыте.",
      a2: "Более 10 лет наша команда проводит медицинские консультации в разных регионах Кыргызстана. Клиника в Бишкеке открылась в октябре 2023 года, чтобы продолжить и расширить эту работу и дать пациентам место для дальнейшего наблюдения.",
      ebm_h: "Что для вас значит «доказательная медицина»",
      ebm_p: "Наши решения основаны на современных исследованиях и международном опыте, а не только на привычке. Мы стараемся избегать ненужных лекарств и анализов, чтобы вы не платили за лечение, которое не поможет.",
      t1t: "Выездные клиники", t1d: "По приглашению сёл и местных медицинских центров наша команда выезжает с врачами, медсестрой и лекарствами и проводит приём один или несколько дней.",
      t2t: "Медицинское образование", t2d: "Студенты-медики проходили у нас практику по несколько недель, и мы надеемся скоро обучать ординаторов.",
      t3t: "Для организаций", t3d: "Школы, компании и посольства могут сотрудничать с нами для ежегодных медосмотров сотрудников. Подробнее в разделе «Услуги».",
      svc_h: "Что мы предлагаем",
      svc_intro: "Мы амбулаторная клиника: принимаем пациентов днём, без стационара. Диагностика и анализы назначаются после консультации с нашим врачом.",
      g1: "Консультации", g1a: "Семейная медицина для взрослых и детей", g1b: "Педиатрия", g1c: "Гинекология", g1d: "Пульмонология",
      g1e: "Физическая терапия", g1f: "Профилактические осмотры для детей, женщин и мужчин", g1g: "Ведение беременности и подготовка к родам с нашей сертифицированной доулой",
      g2: "Диагностика и анализы", g2a: "УЗИ", g2b: "ЭКГ (проверка сердца)", g2c: "Проверка зрения", g2d: "Проверка слуха (аудиометрия)",
      g2e: "Лабораторные анализы на месте, включая скрининг на анемию и диабет",
      g3: "Документы и справки", g3a: "Для школы", g3b: "Для перелётов и путешествий", g3c: "Для работы", g3d: "Для страховки",
      s1t: "Ежедневные консультации", s1d: "Семейная медицина, педиатрия, гинекология и пульмонология для детей и взрослых.",
      s2t: "Консультации и заключения на вашем языке", s2d: "Кыргызский, русский, английский, китайский, немецкий и французский.",
      s3t: "Профилактические осмотры", s3d: "Рост и развитие, проверка зрения, ЭКГ, скрининг на анемию и диабет, лабораторные анализы.",
      s4t: "Медицинские документы и справки", s4d: "Для школы, перелётов, путешествий и туризма, работы и страховки.",
      x_h: "Дополнительные услуги", x1: "УЗИ", x2: "ЭКГ", x3: "Проверка зрения", x4: "Аудиометрия (проверка слуха)",
      x5: "Лабораторные анализы на месте, скидка 30% для наших пациентов", x5_flag: "Формулировка ожидает проверки",
      x6: "Курсы подготовки к родам с нашей сертифицированной доулой",
      org_h: "Для школ, компаний и посольств",
      org_p: "Мы предлагаем ежегодные медосмотры сотрудников и специальные условия для студентов. Свяжитесь с нами, чтобы обсудить сотрудничество.",
      org_btn: "Обсудить сотрудничество",
      team_eyebrow: "Наша команда", team_h: "Люди, которых вы встретите", team_intro: "Кыргызстанские и иностранные специалисты в одной команде.",
      r_dir: "Директор / Доула", r_chief: "Главный врач / Педиатрия", r_pedfam: "Педиатрия / Семейная медицина",
      r_intpul: "Терапия / Пульмонология", r_pedint: "Детский реаниматолог", r_ped: "Педиатрия",
      r_pedonc: "Педиатрия / Онкология", r_pt: "Физический терапевт", r_gyn: "Гинекология", r_us: "УЗИ-диагностика",
      bio_ph: "Краткие биографии сотрудников: ожидают подтверждения клиники",
      photo_of: "Фото:", us_img: "Аппарат УЗИ в MercyMed", hero_alt: "Доктор Джонатан Уильямс в клинике MercyMed",
      hero_btn: "Наши врачи", scroll: "Листайте вниз",
      contact_h: "Приходите или напишите нам",
      c_addr: "Адрес", c_addr_v: "ул. Исакеева, 18, мкр. Тунгуч, Бишкек (рядом с Ayu Grand)", copy: "Копировать",
      c_phone: "Телефон и WhatsApp", c_hours_v: "Понедельник — пятница, 09:00–18:00",
      c_mail: "Эл. почта", c_mail_ph: "Адрес ожидает подтверждения клиники",
      c_hours: "Часы работы", c_hours_ph: "Ожидает подтверждения клиники",
      c_howbook: "Для записи отправьте имя и фамилию, дату рождения и контактный номер. Администратор ответит и предложит время.",
      map_t: "Открыть наше местоположение в 2GIS", map_s: "ул. Исакеева, 18, мкр. Тунгуч",
      c_else: "Мы также есть на", link_ph: "ссылка ожидается",
      foot_1: "Частный медицинский центр, Бишкек", foot_2: "Студенческий прототип, COM 360, АУЦА. Не официальный сайт MercyMed.",
      m_close: "Закрыть", m_go: "Открыть WhatsApp",
      m_wa_t: "Запись через WhatsApp", m_call_t: "Позвонить в MercyMed", m_org_t: "Запрос о сотрудничестве",
      m_wa: "Откроется настоящий чат WhatsApp с регистратурой MercyMed и готовым сообщением для заполнения:",
      m_wa_msg: "Здравствуйте, MercyMed! Хочу записаться на приём.\nИмя и фамилия:\nДата рождения:\nКонтактный номер:\nПричина или желаемый врач (необязательно):",
      m_org: "Откроется настоящий чат WhatsApp с MercyMed и готовым сообщением для заполнения:",
      m_org_msg: "Здравствуйте, MercyMed! Наша организация интересуется медосмотрами сотрудников.\nОрганизация:\nКонтактное лицо:\nКоличество человек:\nКонтактный номер:",
      m_call: "Позвоните в клинику: +996 770 231 813, с понедельника по пятницу, 09:00–18:00.", m_call_go: "Позвонить",
      m_note_wa: "Ничего не отправится, пока вы не нажмёте «Отправить» в WhatsApp. Это студенческий прототип, поэтому отправляйте только настоящие запросы.",
      m_note_call: "Это студенческий прототип.", copied: "Скопировано"
    },
    ky: {
      proto: "MercyMed үчүн студенттик прототип, расмий сайт эмес. Айрым маалыматтар клиниканын ырастоосун күтүүдө.",
      trnote: "Котормо клиника тарабынан текшерилүүнү күтүүдө.",
      nav_home: "Башкы бет", nav_about: "Биз жөнүндө", nav_services: "Кызматтар", nav_team: "Команда", nav_contact: "Байланыш",
      book: "Кабыл алууга жазылуу", menu: "Меню", call: "Чалуу", wa_btn: "WhatsApp аркылуу жазылуу",
      hero_eyebrow: "Жеке медициналык борбор · Түнгүч, Бишкек",
      hero_h1: "Бүт үй-бүлө үчүн далилдүү медицина бир жерде.",
      hero_lead: "Балдарды, өспүрүмдөрдү, чоңдорду жана боюнда бар аялдарды жергиликтүү жана эл аралык дарыгерлердин бир командасы кабыл алат.",
      langs_label: "Консультация тилдери", draft_tag: "Долбоор слоган, клиника бекитүүсүн күтүүдө",
      f1: "жыл аймактарда көчмө клиникалар", f2n: "2023-жылдан", f2: "Бишкектеги клиникабыз иштейт (октябрда ачылган)",
      f3: "консультация тили", f4: "биздин бейтаптар үчүн анализдерге арзандатуу",
      how_h: "Биз кантип иштейбиз",
      w1t: "Үй-бүлөгө багытталган", w1d: "Чоңдор, балдар, өспүрүмдөр жана боюнда бар аялдар бир жерде кабыл алынат.",
      w2t: "Далилдүү медицина", w2d: "Бардык бейтаптарды далилдүү медицинанын ыкмалары менен текшерип, дарылайбыз.",
      w3t: "Жергиликтүү жана эл аралык адистер", w3d: "Үй-бүлөлүк медицина, педиатрия, гинекология, пульмонология жана УЗИ.",
      w4t: "Окутуу жана өнүгүү", w4d: "Биз дарыгерлерди жана медицина студенттерин окутабыз.",
      about_eyebrow: "MercyMed жөнүндө", about_h: "Көчмө клиникалардан өсүп чыккан клиника",
      a1: "MercyMed — Бишкектеги жеке медициналык борбор. Биз заманбап медициналык билимге жана эл аралык тажрыйбага негизделген сапаттуу медициналык жардам көрсөтөбүз.",
      a2: "10 жылдан ашык убакыттан бери биздин команда Кыргызстандын ар кайсы аймактарында медициналык консультацияларды өткөрүп келет. Бишкектеги клиника бул ишти улантуу жана кеңейтүү, ошондой эле бейтаптарга кийинки байкоо үчүн жай берүү максатында 2023-жылдын октябрында ачылган.",
      ebm_h: "«Далилдүү медицина» сиз үчүн эмнени билдирет",
      ebm_p: "Биздин чечимдер адатка гана эмес, заманбап изилдөөлөргө жана эл аралык тажрыйбага негизделет. Пайдасы жок дарылоо үчүн төлөбөшүңүз үчүн керексиз дарылардан жана анализдерден качууга аракет кылабыз.",
      t1t: "Көчмө клиникалар", t1d: "Айылдардын жана жергиликтүү саламаттык борборлорунун чакыруусу менен биздин команда дарыгерлер, медайым жана дарылар менен барып, бир же бир нече күн кабыл алуу өткөрөт.",
      t2t: "Медициналык билим берүү", t2d: "Медицина студенттери бизде бир нече жума практикадан өтүшкөн, жакында ординаторлорду да окутууга үмүттөнөбүз.",
      t3t: "Уюмдар үчүн", t3d: "Мектептер, компаниялар жана элчиликтер кызматкерлердин жыл сайын медициналык текшерүүсү боюнча биз менен кызматташа алышат. Кененирээк «Кызматтар» бөлүмүндө.",
      svc_h: "Биз эмне сунуштайбыз",
      svc_intro: "Биз амбулатордук клиникабыз: бейтаптарды күндүз кабыл алабыз, түнкүсүн калтырбайбыз. Диагностика жана анализдер биздин дарыгердин консультациясынан кийин дайындалат.",
      g1: "Консультациялар", g1a: "Чоңдор жана балдар үчүн үй-бүлөлүк медицина", g1b: "Педиатрия", g1c: "Гинекология", g1d: "Пульмонология",
      g1e: "Физикалык терапия", g1f: "Балдар, аялдар жана эркектер үчүн алдын алуу текшерүүлөрү", g1g: "Биздин сертификатталган доула менен кош бойлуулук жана төрөткө даярдык",
      g2: "Диагностика жана анализдер", g2a: "УЗИ", g2b: "ЭКГ (жүрөктү текшерүү)", g2c: "Көрүүнү текшерүү", g2d: "Угууну текшерүү (аудиометрия)",
      g2e: "Жеринде лабораториялык анализдер, анын ичинде аз кандуулукка жана диабетке скрининг",
      g3: "Документтер жана маалымкаттар", g3a: "Мектеп үчүн", g3b: "Учуу жана саякат үчүн", g3c: "Жумуш үчүн", g3d: "Камсыздандыруу үчүн",
      s1t: "Күн сайын консультациялар", s1d: "Балдар жана чоңдор үчүн үй-бүлөлүк медицина, педиатрия, гинекология жана пульмонология.",
      s2t: "Сиздин тилиңизде консультация жана корутунду", s2d: "Кыргыз, орус, англис, кытай, немис жана француз тилдери.",
      s3t: "Алдын алуу текшерүүлөрү", s3d: "Өсүү жана өнүгүү, көрүүнү текшерүү, ЭКГ, аз кандуулукка жана диабетке скрининг, лабораториялык анализдер.",
      s4t: "Медициналык документтер жана маалымкаттар", s4d: "Мектеп, учуу, саякат жана туризм, жумуш жана камсыздандыруу үчүн.",
      x_h: "Кошумча кызматтар", x1: "УЗИ", x2: "ЭКГ", x3: "Көрүүнү текшерүү", x4: "Аудиометрия (угууну текшерүү)",
      x5: "Жеринде лабораториялык анализдер, биздин бейтаптарга 30% арзандатуу", x5_flag: "Сөз айкашы текшерүүнү күтүүдө",
      x6: "Биздин сертификатталган доула менен төрөткө даярдык курстары",
      org_h: "Мектептер, компаниялар жана элчиликтер үчүн",
      org_p: "Биз кызматкерлер үчүн жыл сайын медициналык текшерүү жана студенттер үчүн атайын шарттарды сунуштайбыз. Кызматташуу боюнча сүйлөшүү үчүн биз менен байланышыңыз.",
      org_btn: "Кызматташууну талкуулоо",
      team_eyebrow: "Биздин команда", team_h: "Сиз жолуга турган адамдар", team_intro: "Кыргызстандык жана эл аралык адистер бир командада.",
      r_dir: "Директор / Доула", r_chief: "Башкы дарыгер / Педиатрия", r_pedfam: "Педиатрия / Үй-бүлөлүк медицина",
      r_intpul: "Ички оорулар / Пульмонология", r_pedint: "Балдар реаниматологу", r_ped: "Педиатрия",
      r_pedonc: "Педиатрия / Онкология", r_pt: "Физикалык терапевт", r_gyn: "Гинекология", r_us: "УЗИ диагностикасы",
      bio_ph: "Кызматкерлердин кыскача өмүр баяны: клиниканын ырастоосун күтүүдө",
      photo_of: "Сүрөт:", us_img: "MercyMed клиникасындагы УЗИ аппараты", hero_alt: "Доктор Джонатан Уильямс MercyMed клиникасында",
      hero_btn: "Биздин дарыгерлер", scroll: "Ылдый сыдырыңыз",
      contact_h: "Келиңиз же бизге жазыңыз",
      c_addr: "Дарек", c_addr_v: "Исакеев көчөсү, 18, Түнгүч кичи району, Бишкек (Ayu Grand жанында)", copy: "Көчүрүү",
      c_phone: "Телефон жана WhatsApp", c_hours_v: "Дүйшөмбү — жума, 09:00–18:00",
      c_mail: "Эл. почта", c_mail_ph: "Дарек клиниканын ырастоосун күтүүдө",
      c_hours: "Иш убактысы", c_hours_ph: "Клиниканын ырастоосун күтүүдө",
      c_howbook: "Жазылуу үчүн аты-жөнүңүздү, туулган күнүңүздү жана байланыш номериңизди жөнөтүңүз. Администратор жооп берип, убакыт сунуштайт.",
      map_t: "Биздин жайгашкан жерди 2GIS'те ачуу", map_s: "Исакеев көчөсү, 18, Түнгүч кичи району",
      c_else: "Бизди бул жерлерден да табасыз", link_ph: "шилтеме күтүлүүдө",
      foot_1: "Жеке медициналык борбор, Бишкек", foot_2: "Студенттик прототип, COM 360, АУЦА. MercyMed расмий сайты эмес.",
      m_close: "Жабуу", m_go: "WhatsApp'ты ачуу",
      m_wa_t: "WhatsApp аркылуу жазылуу", m_call_t: "MercyMed'ге чалуу", m_org_t: "Кызматташуу боюнча суроо",
      m_wa: "MercyMed каттоо бөлүмү менен чыныгы WhatsApp чаты толтурууга даяр билдирүү менен ачылат:",
      m_wa_msg: "Саламатсызбы, MercyMed! Кабыл алууга жазылгым келет.\nАты-жөнү:\nТуулган күнү:\nБайланыш номери:\nСебеби же каалаган дарыгер (милдеттүү эмес):",
      m_org: "MercyMed менен чыныгы WhatsApp чаты толтурууга даяр билдирүү менен ачылат:",
      m_org_msg: "Саламатсызбы, MercyMed! Биздин уюм кызматкерлерди медициналык текшерүүгө кызыкдар.\nУюм:\nБайланышуучу адам:\nАдамдардын саны:\nБайланыш номери:",
      m_call: "Клиникага чалыңыз: +996 770 231 813, дүйшөмбүдөн жумага чейин, 09:00–18:00.", m_call_go: "Чалуу",
      m_note_wa: "WhatsApp'та «Жөнөтүү» баскычын баспасаңыз, эч нерсе жөнөтүлбөйт. Бул студенттик прототип, ошондуктан чыныгы суроо-талаптарды гана жөнөтүңүз.",
      m_note_call: "Бул студенттик прототип.", copied: "Көчүрүлдү"
    }
  };

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var k = el.getAttribute("data-i18n");
    if (!(k in T.en)) T.en[k] = el.textContent;
  });

  var lang = "en";
  function t(k) { return (T[lang] && T[lang][k]) || T.en[k] || ""; }

  // team cards are in the HTML; only their photo descriptions change with the language
  function renderTeam() {
    document.querySelectorAll("#teamlist img[data-role]").forEach(function (i) {
      i.alt = i.dataset.role === "r_us" ? t("us_img") : t("photo_of") + " " + i.dataset.name + ", " + t(i.dataset.role);
    });
  }

  function apply(l) {
    lang = T[l] ? l : "en";
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    document.querySelectorAll(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
    document.getElementById("trnote").hidden = lang === "en";
    renderTeam();
    document.getElementById("hero-img").alt = t("hero_alt");
    try { localStorage.setItem("mm-lang", lang); } catch (e) {}
  }
  document.querySelectorAll(".lang button").forEach(function (b) { b.addEventListener("click", function () { apply(b.dataset.lang); }); });

  var nav = document.getElementById("mainnav"), menuBtn = document.getElementById("menubtn");
  var mq = window.matchMedia("(max-width: 980px)");
  function setMenu(open) {
    menuBtn.setAttribute("aria-expanded", String(open));
    if (mq.matches && !open) nav.setAttribute("hidden-mobile", ""); else nav.removeAttribute("hidden-mobile");
  }
  menuBtn.addEventListener("click", function () { setMenu(menuBtn.getAttribute("aria-expanded") !== "true"); });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  (mq.addEventListener ? mq.addEventListener("change", function () { setMenu(false); }) : mq.addListener(function () { setMenu(false); }));
  setMenu(false);

  var scrim = document.getElementById("scrim"), lastFocus = null, go = document.getElementById("m-go");
  function openModal(kind) {
    lastFocus = document.activeElement;
    var msgKey = { wa: "m_wa_msg", org: "m_org_msg" }[kind];
    document.getElementById("m-title").textContent = t({ wa: "m_wa_t", call: "m_call_t", org: "m_org_t" }[kind]);
    document.getElementById("m-body").textContent = t({ wa: "m_wa", call: "m_call", org: "m_org" }[kind]);
    var pre = document.getElementById("m-msg");
    pre.hidden = !msgKey; pre.textContent = msgKey ? t(msgKey) : "";
    document.getElementById("m-note").textContent = t(msgKey ? "m_note_wa" : "m_note_call");
    go.href = kind === "call" ? "tel:+" + WA : "https://api.whatsapp.com/send?phone=" + WA + (msgKey ? "&text=" + encodeURIComponent(t(msgKey)) : "");
    go.textContent = t(kind === "call" ? "m_call_go" : "m_go");
    scrim.hidden = false;
    document.getElementById("m-close").focus();
  }
  function closeModal() { scrim.hidden = true; if (lastFocus) lastFocus.focus(); }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-open]");
    if (b) { openModal(b.dataset.open); return; }
    var cp = e.target.closest("[data-copy]");
    if (cp) {
      var done = function () { var o = cp.textContent; cp.textContent = t("copied"); setTimeout(function () { cp.textContent = t("copy"); }, 1500); };
      var fallback = function () { var r = document.createRange(); r.selectNodeContents(document.getElementById("wa-num")); var s = getSelection(); s.removeAllRanges(); s.addRange(r); };
      try { navigator.clipboard.writeText(cp.dataset.copy).then(done, fallback); } catch (err) { fallback(); }
      return;
    }
    if (e.target === scrim) closeModal();
  });
  document.getElementById("m-close").addEventListener("click", closeModal);
  go.addEventListener("click", function () { setTimeout(closeModal, 50); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { if (!scrim.hidden) closeModal(); else setMenu(false); }
    if (e.key === "Tab" && !scrim.hidden) {
      var f = [document.getElementById("m-close"), go], i = f.indexOf(document.activeElement);
      e.preventDefault(); f[(i + (e.shiftKey ? f.length - 1 : 1)) % f.length].focus();
    }
  });


  function setupReveal() {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var sel = ".facts li, .how article, .about-text > *, .ebm, .teasers article, .sec-head, .svc article, .extra li, .org, .team li, dl.info > div, .how-book, .map, .elsewhere li, .cta-row .btn, .chips li";
    var els = Array.prototype.slice.call(document.querySelectorAll(sel));
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target; io.unobserve(el);
        el.classList.add("in");
        var d = parseInt(el.style.getPropertyValue("--d")) || 0;
        setTimeout(function () { el.classList.remove("reveal", "in"); el.style.removeProperty("--d"); }, 800 + d);
      });
    }, { threshold: 0.1 });
    var vh = window.innerHeight;
    els.forEach(function (el) {
      if (el.closest(".hero")) return;
      if (el.getBoundingClientRect().top < vh * 0.95) return;   // already on screen: leave it visible
      var sibs = Array.prototype.indexOf.call(el.parentNode.children, el);
      el.style.setProperty("--d", (Math.min(sibs, 6) * 80) + "ms");
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  var saved = null;
  try { saved = localStorage.getItem("mm-lang"); } catch (e) {}
  apply(saved || "en");
  setupReveal();
})();
