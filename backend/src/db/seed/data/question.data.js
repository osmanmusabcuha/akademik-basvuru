const questionData = [
  {
    question:
      "SCI-E, SSCI veya AHCI kapsamındaki dergilerde yayımlanmış makale (Q1 olarak taranan dergide)",
    requiresFile: true,
    sectionName: "A. Makaleler",
    minScore: 0,
    maxScore: 60,
  },
  {
    question:
      "SCI-E, SSCI veya AHCI kapsamındaki dergilerde yayımlanmış makale (Q2 olarak taranan dergide)",
    requiresFile: true,
    sectionName: "A. Makaleler",
    minScore: 0,
    maxScore: 55,
  },
  {
    question:
      "SCI-E, SSCI veya AHCI kapsamındaki dergilerde yayımlanmış makale (Q3 olarak taranan dergide)",
    requiresFile: true,
    sectionName: "A. Makaleler",
    minScore: 0,
    maxScore: 40,
  },
  {
    question:
      "SCI-E, SSCI veya AHCI kapsamındaki dergilerde yayımlanmış makale (Q4 olarak taranan dergide)",
    requiresFile: true,
    sectionName: "A. Makaleler",
    minScore: 0,
    maxScore: 30,
  },
  {
    question: "ESCI tarafından taranan dergilerde yayımlanmış makale",
    requiresFile: true,
    sectionName: "A. Makaleler",
    minScore: 0,
    maxScore: 25,
  },
  {
    question: "Scopus tarafından taranan dergilerde yayımlanmış makale",
    requiresFile: true,
    sectionName: "A. Makaleler",
    minScore: 0,
    maxScore: 20,
  },
  {
    question:
      "Uluslararası diğer indekslerde taranan dergilerde yayımlanmış makale ",
    requiresFile: true,
    sectionName: "A. Makaleler",
    minScore: 0,
    maxScore: 15,
  },
  {
    question:
      "ULAKBİM TR Dizin tarafından taranan ulusal hakemli dergilerde yayımlanmış makale",
    requiresFile: true,
    sectionName: "A. Makaleler",
    minScore: 0,
    maxScore: 10,
  },
  {
    question: "8. madde dışındaki ulusal hakemli dergilerde yayımlanmış makale",
    requiresFile: true,
    sectionName: "A. Makaleler",
    minScore: 0,
    maxScore: 8,
  },
  {
    question:
      "Uluslararası bilimsel toplantılarda sözlü olarak sunulan, tam metni matbu veya elektronik olarak bildiri kitapçığında yayımlanmış çalışmalar",
    requiresFile: true,
    sectionName: "B. Bilimsel Toplantı Faaliyetleri",
    minScore: 0,
    maxScore: 8,
  },
  {
    question:
      "Uluslararası bilimsel toplantılarda sözlü olarak sunulan, özet metni matbu veya elektronik olarak bildiri kitapçığında yayımlanmış çalışmalar",
    requiresFile: true,
    sectionName: "B. Bilimsel Toplantı Faaliyetleri",
    minScore: 0,
    maxScore: 7,
  },
  {
    question:
      "Uluslararası bilimsel toplantılarda poster olarak sunulan çalışmalar",
    requiresFile: true,
    sectionName: "B. Bilimsel Toplantı Faaliyetleri",
    minScore: 0,
    maxScore: 6,
  },
  {
    question:
      "Ulusal bilimsel toplantılarda sözlü olarak sunulan tam metni matbu veya elektronik olarak bildiri kitapçığında yayımlanmış çalışmalar",
    requiresFile: true,
    sectionName: "B. Bilimsel Toplantı Faaliyetleri",
    minScore: 0,
    maxScore: 7,
  },
  {
    question:
      "Ulusal bilimsel toplantılarda sözlü olarak sunulan, özet metni matbu veya elektronik olarak bildiri kitapçığında yayımlanmış çalışmalar",
    requiresFile: true,
    sectionName: "B. Bilimsel Toplantı Faaliyetleri",
    minScore: 0,
    maxScore: 6,
  },
  {
    question: "Ulusal bilimsel toplantılarda poster olarak sunulan çalışmalar",
    requiresFile: true,
    sectionName: "B. Bilimsel Toplantı Faaliyetleri",
    minScore: 0,
    maxScore: 5,
  },
  {
    question:
      "Uluslararası bir kongre, konferans veya sempozyumda organizasyon veya yürütme komitesinde düzenleme kurulu üyeliği veya bilim kurulu üyeliği yapmak",
    requiresFile: true,
    sectionName: "B. Bilimsel Toplantı Faaliyetleri",
    minScore: 0,
    maxScore: 7,
  },
  {
    question:
      "Ulusal bir kongre, konferans veya sempozyumda organizasyon veya yürütme komitesinde düzenleme kurulu üyeliği veya bilim kurulu üyeliği yapmak",
    requiresFile: true,
    sectionName: "B. Bilimsel Toplantı Faaliyetleri",
    minScore: 0,
    maxScore: 5,
  },
  {
    question:
      "Uluslararası konferanslarda, bilimsel toplantı, seminerlerde davetli konuşmacı olarak yer almak",
    requiresFile: true,
    sectionName: "B. Bilimsel Toplantı Faaliyetleri",
    minScore: 0,
    maxScore: 8,
  },
  {
    question:
      "Ulusal konferanslarda, bilimsel toplantı, seminerlerde davetli konuşmacı olarak yer almak",
    requiresFile: true,
    sectionName: "B. Bilimsel Toplantı Faaliyetleri",
    minScore: 0,
    maxScore: 6,
  },
  {
    question:
      "Uluslararası veya ulusal çeşitli kurumlarla işbirliği içinde atölye, çalıştay, yaz okulu organize ederek gerçekleştirmek",
    requiresFile: true,
    sectionName: "B. Bilimsel Toplantı Faaliyetleri",
    minScore: 0,
    maxScore: 6,
  },
  {
    question:
      "Uluslararası veya ulusal çeşitli kurumlarla işbirliği içinde atölye, çalıştay, panel, seminer, yaz okulunda konuşmacı veya panelist olarak görev almak",
    requiresFile: true,
    sectionName: "B. Bilimsel Toplantı Faaliyetleri",
    minScore: 0,
    maxScore: 5,
  },
  {
    question: "Uluslararası yayınevleri tarafından yayımlanmış özgün kitap",
    requiresFile: true,
    sectionName: "C. KİTAPLAR",
    minScore: 0,
    maxScore: 60,
  },
  {
    question:
      "Uluslararası yayınevleri tarafından yayımlanmış özgün kitap editörlüğü, bölüm yazarlığı (Her bir kitap için maksimum 2 bölüm yazarlığı)",
    requiresFile: true,
    sectionName: "C. KİTAPLAR",
    minScore: 0,
    maxScore: 20,
  },
  {
    question:
      "Uluslararası yayımlanan ansiklopedi konusu/maddesi (en fazla 3 madde)",
    requiresFile: true,
    sectionName: "C. KİTAPLAR",
    minScore: 0,
    maxScore: 5,
  },
  {
    question: "Ulusal yayınevleri tarafından yayımlanmış özgün kitap",
    requiresFile: true,
    sectionName: "C. KİTAPLAR",
    minScore: 0,
    maxScore: 40,
  },
  {
    question:
      "Ulusal yayınevleri tarafından yayımlanmış özgün kitap editörlüğü, bölüm yazarlığı (Her bir kitap için maksimum 2 bölüm yazarlığı)",
    requiresFile: true,
    sectionName: "C. KİTAPLAR",
    maxScore: 10,
  },
  {
    question:
      "Tam kitap çevirisi (Yayınevleri için ilgili ÜAK kriterleri geçerlidir)",
    requiresFile: true,
    sectionName: "C. KİTAPLAR",
    minScore: 0,
    maxScore: 15,
  },
  {
    question:
      "Çeviri kitap editörlüğü, kitap bölümü çevirisi (Yayınevleri için ilgili ÜAK kriterleri geçerlidir) (Her bir kitap için maksimum 2 bölüm çevirisi)",
    requiresFile: true,
    sectionName: "C. KİTAPLAR",
    minScore: 0,
    maxScore: 6,
  },
  {
    question:
      "Alanında ulusal yayımlanan ansiklopedi konusu/maddesi (en fazla 3 madde)",
    requiresFile: true,
    sectionName: "C. KİTAPLAR",
    minScore: 0,
    maxScore: 3,
  },
  {
    question:
      "SCI-E, SSCI veya AHCI tarafından taranan dergilerde; Uluslararası yayınevleri tarafından yayımlanmış kitaplarda yayımlanan ve adayın yazar olarak yer almadığı yayınlardan her birinde, metin içindeki atıf sayısına bakılmaksızın adayın atıf yapılan her eseri için",
    requiresFile: true,
    sectionName: "D. ATIFLAR",
    minScore: 0,
    maxScore: 4,
  },
  {
    question:
      "E-SCI tarafından taranan dergilerde ve adayın yazar olarak yer almadığı yayınlardan her birinde, metin içindeki atıf sayısına bakılmaksızın adayın atıf yapılan her eseri için",
    requiresFile: true,
    sectionName: "D. ATIFLAR",
    minScore: 0,
    maxScore: 3,
  },
  {
    question:
      "SCI-E, SSCI, AHCI, E-SCI dışındaki diğer uluslararası indeksler tarafından taranan dergilerde; Uluslararası yayınevleri tarafından yayımlanmış kitaplarda bölüm yazarı olarak yayımlanan ve adayın yazar olarak yer almadığı yayınlardan her birinde, metin içindeki atıf sayısına bakılmaksızın adayın atıf yapılan her eseri için",
    requiresFile: true,
    sectionName: "D. ATIFLAR",
    minScore: 0,
    maxScore: 2,
  },
  {
    question:
      "Ulusal hakemli dergilerde; Ulusal yayınevleri tarafından yayımlanmış kitaplarda yayımlanan ve adayın yazar olarak yer almadığı yayınlardan her birinde, metin içindeki atıf sayısına bakılmaksızın adayın atıf yapılan her eseri için",
    requiresFile: true,
    sectionName: "D. ATIFLAR",
    minScore: 0,
    maxScore: 1,
  },
  {
    question:
      "Güzel sanatlardaki eserlerin uluslararası kaynak veya yayın organlarında yer alması veya gösterime ya da dinletime girmesi",
    requiresFile: true,
    sectionName: "D. ATIFLAR",
    minScore: 0,
    maxScore: 3,
  },
  {
    question:
      "Güzel sanatlardaki eserlerin ulusal kaynak veya yayın organlarında yer alması veya gösterime ya da dinletime girmesi",
    requiresFile: true,
    sectionName: "D. ATIFLAR",
    minScore: 0,
    maxScore: 1,
  },
  {
    question: "Önlisans/lisans dersleri",
    requiresFile: true,
    sectionName: "E. EĞİTİM ÖĞRETİM FAALİYETLERİ",
    minScore: 0,
    maxScore: 2,
  },
  {
    question: "Önlisans/lisans dersleri (Yabancı dilde)",
    requiresFile: true,
    sectionName: "E. EĞİTİM ÖĞRETİM FAALİYETLERİ",
    minScore: 0,
    maxScore: 3,
  },
  {
    question: "Lisansüstü dersleri",
    requiresFile: true,
    sectionName: "E. EĞİTİM ÖĞRETİM FAALİYETLERİ",
    minScore: 0,
    maxScore: 3,
  },
  {
    question: "Lisansüstü dersleri (Yabancı dilde)",
    requiresFile: true,
    sectionName: "E. EĞİTİM ÖĞRETİM FAALİYETLERİ",
    minScore: 0,
    maxScore: 4,
  },
  {
    question:
      "Doktora/Sanatta Yeterlik veya Tıp/Diş Hekimliğinde Uzmanlık Tez Yönetimi (Tamamlanmış)",
    requiresFile: true,
    sectionName: "F. TEZ YÖNETİCİLİĞİ",
    minScore: 0,
    maxScore: 40,
  },
  {
    question: "Yüksek Lisans Tez Yönetimi (Tamamlanmış)",
    requiresFile: true,
    sectionName: "F. TEZ YÖNETİCİLİĞİ",
    minScore: 0,
    maxScore: 15,
  },
  {
    question: "Doktora/Sanatta Yeterlik (Eş Danışman) (Tamamlanmış)",
    requiresFile: true,
    sectionName: "F. TEZ YÖNETİCİLİĞİ",
    minScore: 0,
    maxScore: 9,
  },
  {
    question:
      "Yüksek Lisans/Sanatta Yeterlik Tez Yönetimi (Eş Danışman) (Tamamlanmış)",
    requiresFile: true,
    sectionName: "F. TEZ YÖNETİCİLİĞİ",
    minScore: 0,
    maxScore: 4,
  },
  {
    question: "Lisanslanan Uluslararası Patent",
    requiresFile: true,
    sectionName: "G. PATENTLER",
    minScore: 0,
    maxScore: 120,
  },
  {
    question: "Tescillenmiş Uluslararası Patent",
    requiresFile: true,
    sectionName: "G. PATENTLER",
    minScore: 0,
    maxScore: 100,
  },
  {
    question: "Uluslararası Patent Başvurusu",
    requiresFile: true,
    sectionName: "G. PATENTLER",
    minScore: 0,
    maxScore: 50,
  },
  {
    question: "Lisanslanan Ulusal Patent",
    requiresFile: true,
    sectionName: "G. PATENTLER",
    minScore: 0,
    maxScore: 80,
  },
  {
    question: "Tescillenmiş Ulusal Patent",
    requiresFile: true,
    sectionName: "G. PATENTLER",
    minScore: 0,
    maxScore: 60,
  },
  {
    question: "Ulusal Patent Başvurusu",
    requiresFile: true,
    sectionName: "G. PATENTLER",
    minScore: 0,
    maxScore: 30,
  },
  {
    question: "Lisanslanan Faydalı Model, Endüstriyel Tasarım, Marka",
    requiresFile: true,
    sectionName: "G. PATENTLER",
    minScore: 0,
    maxScore: 20,
  },
  {
    question: "Faydalı Model ve Endüstriyel Tasarım",
    requiresFile: true,
    sectionName: "G. PATENTLER",
    minScore: 0,
    maxScore: 15,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question:
      "AB çerçeve programı/NSF/ERC bilimsel araştırma projesinde koordinatör/alt koordinatör olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 250,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question:
      "AB çerçeve programı/NSF/ERC bilimsel araştırma projesinde yürütücü olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 150,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question:
      "AB çerçeve programı/NSF/ERC bilimsel araştırma projesinde araştırmacı olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 100,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question:
      "Uluslararası destekli bilimsel araştırma projelerinde koordinatör/alt koordinatör olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 150,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question:
      "Uluslararası destekli bilimsel araştırma projelerinde yürütücü olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 120,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question:
      "Uluslararası destekli bilimsel araştırma projelerinde araştırmacı olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 70,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question:
      "Uluslararası destekli bilimsel araştırma projelerinde danışman olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 30,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question:
      "TÜBİTAK ARGE (ARDEB, TEYDEB) ve TÜSEB projelerinde yürütücü olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 100,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question:
      "Diğer TÜBİTAK veya Kalkınma Ajansları projelerinde yürütücü olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 50,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question:
      "TÜBİTAK dışındaki diğer kamu kurumlarıyla yapılan projelerde yürütücü olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 40,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question:
      "Sanayi kuruluşları ile yapılan Ar-Ge projelerinde yürütücü olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 40,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question:
      "Diğer özel kuruluşlar ile yapılan Ar-Ge projelerinde yürütücü olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 20,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question: "TÜBİTAK ARGE ve TÜSEB projelerinde araştırmacı olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 50,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question:
      "Diğer TÜBİTAK veya Kalkınma Ajansları projelerinde araştırmacı olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 25,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question:
      "TÜBİTAK dışındaki kamu kurumlarıyla yapılan projelerde araştırmacı olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 20,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question: "Sanayi kuruluşları ile yapılan projelerde araştırmacı olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 20,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question: "Diğer özel kuruluşlarla yapılan projelerde araştırmacı olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 10,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question: "TÜBİTAK ARGE ve TÜSEB projelerinde danışman olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 25,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question: "Diğer TÜBİTAK projelerinde danışman olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 12,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question: "Kamu kurumları ile yapılan projelerde danışman olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 10,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question: "Sanayi kuruluşları ile yapılan projelerde danışman olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 10,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question: "Özel kuruluşlarla yapılan projelerde danışman olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 10,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question: "Üniversitelerin BAP projelerinde yürütücü olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 8,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question: "Üniversitelerin BAP projelerinde araştırmacı olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 6,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question: "Üniversitelerin BAP projelerinde danışman olmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 3,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question: "En az dört aylık yurtdışı araştırma çalışmasında bulunmak",
    requiresFile: true,
    minScore: 0,
    maxScore: 100,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question:
      "En az dört aylık yurtiçi araştırma çalışmasında bulunmak (kurum dışında)",
    requiresFile: true,
    minScore: 0,
    maxScore: 50,
  },
  {
    sectionName: "H. Araştırma Projeleri",
    question:
      "TÜBİTAK 2209-A, 2209-B, 2242 projelerinde danışman olmak (En fazla 100 puan alınabilir)",
    requiresFile: true,
    minScore: 0,
    maxScore: 10,
  },
  {
    question:
      "SCI-E, SSCI, AHCI, E-SCI veya SCOPUS kapsamındaki dergilerde baş editörlük görevinde bulunmak",
    requiresFile: true,
    sectionName: "I. EDİTÖRLÜK, YAYIN KURULU ÜYELİĞİ VE HAKEMLİK FAALİYETLERİ",
    minScore: 0,
    maxScore: 100,
  },
  {
    question:
      "SCI-E, SSCI, AHCI, E-SCI veya SCOPUS kapsamındaki dergilerde alan/yardımcı/ortak/asistan editörlük görevinde bulunmak",
    requiresFile: true,
    sectionName: "I. EDİTÖRLÜK, YAYIN KURULU ÜYELİĞİ VE HAKEMLİK FAALİYETLERİ",
    minScore: 0,
    maxScore: 70,
  },
  {
    question:
      "SCI-E, SSCI, AHCI, E-SCI veya SCOPUS kapsamındaki dergilerde misafir/davetli editörlük görevinde bulunmak",
    requiresFile: true,
    sectionName: "I. EDİTÖRLÜK, YAYIN KURULU ÜYELİĞİ VE HAKEMLİK FAALİYETLERİ",
    minScore: 0,
    maxScore: 50,
  },
  {
    question:
      "SCI-E, SSCI, AHCI, E-SCI veya SCOPUS kapsamındaki dergilerde yayın kurulu üyeliği",
    requiresFile: true,
    sectionName: "I. EDİTÖRLÜK, YAYIN KURULU ÜYELİĞİ VE HAKEMLİK FAALİYETLERİ",
    minScore: 0,
    maxScore: 40,
  },
  {
    question:
      "SCI-E, SSCI, AHCI, E-SCI veya SCOPUS kapsamı dışındaki uluslararası diğer indeksler tarafından taranan dergilerde baş editörlük görevinde bulunmak",
    requiresFile: true,
    sectionName: "I. EDİTÖRLÜK, YAYIN KURULU ÜYELİĞİ VE HAKEMLİK FAALİYETLERİ",
    minScore: 0,
    maxScore: 40,
  },
  {
    question:
      "SCI-E, SSCI, AHCI, E-SCI veya SCOPUS kapsamı dışındaki uluslararası diğer indeksler tarafından taranan dergilerde alan/yardımcı/ortak/asistan editörlük görevinde bulunmak",
    requiresFile: true,
    sectionName: "I. EDİTÖRLÜK, YAYIN KURULU ÜYELİĞİ VE HAKEMLİK FAALİYETLERİ",
    minScore: 0,
    maxScore: 30,
  },
  {
    question:
      "SCI-E, SSCI, AHCI, E-SCI veya SCOPUS kapsamı dışındaki uluslararası diğer indeksler tarafından taranan dergilerde misafir/davetli editörlük görevinde bulunmak",
    requiresFile: true,
    sectionName: "I. EDİTÖRLÜK, YAYIN KURULU ÜYELİĞİ VE HAKEMLİK FAALİYETLERİ",
    minScore: 0,
    maxScore: 20,
  },
  {
    question:
      "SCI-E, SSCI, AHCI, E-SCI veya SCOPUS kapsamı dışındaki uluslararası diğer indeksler tarafından taranan dergilerde yayın kurulu üyeliği",
    requiresFile: true,
    sectionName: "I. EDİTÖRLÜK, YAYIN KURULU ÜYELİĞİ VE HAKEMLİK FAALİYETLERİ",
    minScore: 0,
    maxScore: 10,
  },
  {
    question: "ULAKBİM tarafından taranan dergilerde baş editörlük görevi",
    requiresFile: true,
    sectionName: "I. EDİTÖRLÜK, YAYIN KURULU ÜYELİĞİ VE HAKEMLİK FAALİYETLERİ",
    minScore: 0,
    maxScore: 15,
  },
  {
    question:
      "ULAKBİM tarafından taranan dergilerde yayın kurulu üyeliği veya alan/yardımcı/ortak/asistan editörlük görevinde bulunmak",
    requiresFile: true,
    sectionName: "I. EDİTÖRLÜK, YAYIN KURULU ÜYELİĞİ VE HAKEMLİK FAALİYETLERİ",
    minScore: 0,
    maxScore: 5,
  },
  {
    question:
      "SCI-E, SSCI veya AHCI kapsamındaki dergilerde tamamlanmış hakemlik faaliyeti (her bir hakemlik faaliyeti başına)",
    requiresFile: true,
    sectionName: "I. EDİTÖRLÜK, YAYIN KURULU ÜYELİĞİ VE HAKEMLİK FAALİYETLERİ",
    minScore: 0,
    maxScore: 3,
  },
  {
    question:
      "SCI-E, SSCI veya AHCI kapsamı dışındaki uluslararası diğer indeksler tarafından dergilerde tamamlanmış hakemlik faaliyeti (her bir hakemlik faaliyeti başına)",
    requiresFile: true,
    sectionName: "I. EDİTÖRLÜK, YAYIN KURULU ÜYELİĞİ VE HAKEMLİK FAALİYETLERİ",
    minScore: 0,
    maxScore: 2,
  },
  {
    question:
      "ULAKBİM tarafından taranan dergilerde hakemlik faaliyeti (her bir hakemlik faaliyeti başına)",
    requiresFile: true,
    sectionName: "I. EDİTÖRLÜK, YAYIN KURULU ÜYELİĞİ VE HAKEMLİK FAALİYETLERİ",
    minScore: 0,
    maxScore: 1,
  },
  {
    question:
      "Sürekli ve periyodik olarak jürili uluslararası kurum veya kuruluşlar tarafından verilen bilim ve sanat ödülleri",
    requiresFile: true,
    sectionName: "J. ÖDÜLLER (Temel alanı ile ilgili olmak üzere)",
    minScore: 0,
    maxScore: 150,
  },
  {
    question: "TÜBİTAK tarafından verilen Bilim, Özel ve Hizmet Ödülleri",
    requiresFile: true,
    sectionName: "J. ÖDÜLLER (Temel alanı ile ilgili olmak üzere)",
    minScore: 0,
    maxScore: 100,
  },
  {
    question: "TÜBA tarafından verilen Akademi Ödülleri",
    requiresFile: true,
    sectionName: "J. ÖDÜLLER (Temel alanı ile ilgili olmak üzere)",
    minScore: 0,
    maxScore: 100,
  },
  {
    question:
      "TÜBİTAK tarafından verilen Teşvik Ödülü (Yayın teşvik ödülü hariç)",
    requiresFile: true,
    sectionName: "J. ÖDÜLLER (Temel alanı ile ilgili olmak üzere)",
    minScore: 0,
    maxScore: 80,
  },
  {
    question: "TÜBA tarafından verilen GEBİP ve TESEP ödülleri",
    requiresFile: true,
    sectionName: "J. ÖDÜLLER (Temel alanı ile ilgili olmak üzere)",
    minScore: 0,
    maxScore: 80,
  },
  {
    question:
      "Sürekli ve periyodik olarak jürili ulusal kurum veya kuruluşlar tarafından verilen bilim ve sanat ödülleri",
    requiresFile: true,
    sectionName: "J. ÖDÜLLER (Temel alanı ile ilgili olmak üzere)",
    minScore: 0,
    maxScore: 50,
  },
  {
    question:
      "Sürekli ve periyodik olarak verilen ve bir jüri değerlendirmesine tabi olmayan uluslararası/ulusal ödüller",
    requiresFile: true,
    sectionName: "J. ÖDÜLLER (Temel alanı ile ilgili olmak üzere)",
    minScore: 0,
    maxScore: 20,
  },
  {
    question: "Uluslararası hakemli yarışmalarda birincilik derecesi",
    requiresFile: true,
    sectionName: "J. ÖDÜLLER (Temel alanı ile ilgili olmak üzere)",
    minScore: 0,
    maxScore: 20,
  },
  {
    question: "Uluslararası hakemli yarışmalarda ikincilik derecesi",
    requiresFile: true,
    sectionName: "J. ÖDÜLLER (Temel alanı ile ilgili olmak üzere)",
    minScore: 0,
    maxScore: 10,
  },
  {
    question: "Uluslararası hakemli yarışmalarda üçüncülük derecesi",
    requiresFile: true,
    sectionName: "J. ÖDÜLLER (Temel alanı ile ilgili olmak üzere)",
    minScore: 0,
    maxScore: 5,
  },
  {
    question: "Ulusal hakemli yarışmalarda birincilik derecesi",
    requiresFile: true,
    sectionName: "J. ÖDÜLLER (Temel alanı ile ilgili olmak üzere)",
    minScore: 0,
    maxScore: 10,
  },
  {
    question: "Ulusal hakemli yarışmalarda ikincilik derecesi",
    requiresFile: true,
    sectionName: "J. ÖDÜLLER (Temel alanı ile ilgili olmak üzere)",
    minScore: 0,
    maxScore: 5,
  },
  {
    question: "Ulusal hakemli yarışmalarda üçüncülük derecesi",
    requiresFile: true,
    sectionName: "J. ÖDÜLLER (Temel alanı ile ilgili olmak üzere)",
    minScore: 0,
    maxScore: 3,
  },
  {
    question: "Uluslararası bilimsel toplantılarda alınan ödüller",
    requiresFile: true,
    sectionName: "J. ÖDÜLLER (Temel alanı ile ilgili olmak üzere)",
    minScore: 0,
    maxScore: 5,
  },
  {
    question: "Ulusal bilimsel toplantılarda alınan ödüller",
    requiresFile: true,
    sectionName: "J. ÖDÜLLER (Temel alanı ile ilgili olmak üzere)",
    minScore: 0,
    maxScore: 3,
  },
  {
    question:
      "Sanat, tasarım ve mimarlık alanlarında Uluslararası hakemli/jürili yarışmalarda alınan ödüller",
    requiresFile: true,
    sectionName: "J. ÖDÜLLER (Temel alanı ile ilgili olmak üzere)",
    minScore: 0,
    maxScore: 20,
  },
  {
    question:
      "Sanat, tasarım ve mimarlık alanlarında Ulusal hakemli/jürili yarışmalarda alınan ödüller",
    requiresFile: true,
    sectionName: "J. ÖDÜLLER (Temel alanı ile ilgili olmak üzere)",
    minScore: 0,
    maxScore: 10,
  },
  {
    question:
      "Üniversite kurumsal ödülleri (üniversite genelinde ilgili alanda makale, patent, proje, v.b. dereceye girenler)",
    requiresFile: true,
    sectionName: "J. ÖDÜLLER (Temel alanı ile ilgili olmak üzere)",
    minScore: 0,
    maxScore: 10,
  },
  {
    question: "Kitap veya makale gibi bilimsel eserlere atfedilen ödüller",
    requiresFile: true,
    sectionName: "J. ÖDÜLLER (Temel alanı ile ilgili olmak üzere)",
    minScore: 0,
    maxScore: 5,
  },
  {
    question: "Dekan/Enstitü/Yüksekokul/MYO/Merkez Müdürü",
    requiresFile: true,
    sectionName: "K. İDARİ GÖREVLER VE ÜNİVERSİTEYE KATKI FAALİYETLERİ",
    minScore: 0,
    maxScore: 15,
  },
  {
    question:
      "Enstitü Müdür Yrd. / Dekan Yrd. / Yüksekokul Müdür Yrd. / MYO Müdür Yrd. / Merkez Müdürü Yrd./Bölüm Başkanı",
    requiresFile: true,
    sectionName: "K. İDARİ GÖREVLER VE ÜNİVERSİTEYE KATKI FAALİYETLERİ",
    minScore: 0,
    maxScore: 12,
  },
  {
    question: "Bölüm Başkan Yrd. / Anabilim Dalı Başkanı",
    requiresFile: true,
    sectionName: "K. İDARİ GÖREVLER VE ÜNİVERSİTEYE KATKI FAALİYETLERİ",
    minScore: 0,
    maxScore: 10,
  },
  {
    question: "Rektörlükçe görevlendirilen Koordinatörlük",
    requiresFile: true,
    sectionName: "K. İDARİ GÖREVLER VE ÜNİVERSİTEYE KATKI FAALİYETLERİ",
    minScore: 0,
    maxScore: 8,
  },
  {
    question: "Rektörlükçe görevlendirilen Koordinatör Yardımcıları",
    requiresFile: true,
    sectionName: "K. İDARİ GÖREVLER VE ÜNİVERSİTEYE KATKI FAALİYETLERİ",
    minScore: 0,
    maxScore: 7,
  },
  {
    question:
      "Rektörlükçe görevlendirilen üniversite düzeyinde Komisyon/Kurul üyelikleri",
    requiresFile: true,
    sectionName: "K. İDARİ GÖREVLER VE ÜNİVERSİTEYE KATKI FAALİYETLERİ",
    minScore: 0,
    maxScore: 6,
  },
  {
    question:
      "Dekanlık/Y.O. Müdürlüğü/MYO Müdürlüğü /Konservatuvar Müdürlüğü tarafından görevlendirilen Komisyon/Kurul üyelikleri",
    requiresFile: true,
    sectionName: "K. İDARİ GÖREVLER VE ÜNİVERSİTEYE KATKI FAALİYETLERİ",
    minScore: 0,
    maxScore: 5,
  },
  {
    question:
      "Bölüm Başkanlıkları tarafından görevlendirilen Komisyon/Kurul üyelikleri",
    requiresFile: true,
    sectionName: "K. İDARİ GÖREVLER VE ÜNİVERSİTEYE KATKI FAALİYETLERİ",
    minScore: 0,
    maxScore: 4,
  },
  {
    question:
      "Rektörlük/Dekanlık/Y.O. Müdürlüğü/MYO Müdürlüğü /Konservatuvar Müdürlüğü/ Bölüm Başkanlığı görevlendirmeleriyle kurum içi ve dışı eğitim, işbirliği vb konularda katkı sağlamak",
    requiresFile: true,
    sectionName: "K. İDARİ GÖREVLER VE ÜNİVERSİTEYE KATKI FAALİYETLERİ",
    minScore: 0,
    maxScore: 3,
  },
  {
    question:
      "Uluslararası nitelikteki bilimsel ve mesleki kurum/kuruluşların yönetimlerinde, kurullarında, komisyon veya komitelerinde görev almak",
    requiresFile: true,
    sectionName: "K. İDARİ GÖREVLER VE ÜNİVERSİTEYE KATKI FAALİYETLERİ",
    minScore: 0,
    maxScore: 5,
  },
  {
    question:
      "Ulusal nitelikteki bilimsel ve mesleki kurum/kuruluşların yönetimlerinde, kurullarında, komisyon veya komitelerinde görev almak",
    requiresFile: true,
    sectionName: "K. İDARİ GÖREVLER VE ÜNİVERSİTEYE KATKI FAALİYETLERİ",
    minScore: 0,
    maxScore: 4,
  },
  {
    question:
      "Yerel nitelikteki bilimsel ve mesleki kurum/kuruluşların yönetimlerinde, kurullarında, komisyon veya komitelerinde görev almak",
    requiresFile: true,
    sectionName: "K. İDARİ GÖREVLER VE ÜNİVERSİTEYE KATKI FAALİYETLERİ",
    minScore: 0,
    maxScore: 3,
  },
  {
    question:
      "Özgün sanat eserlerinin, tasarım veya yorum çalışmalarının yurt dışında sanat, eğitim ve kültür kurumlarınca satın alınması veya bu eser(ler) için telif ödenmesi",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 40,
  },
  {
    question:
      "Özgün sanat eserlerinin, tasarım veya yorum çalışmalarının yurt içinde sanat, eğitim ve kültür kurumlarınca satın alınması veya bu eser(ler) için telif ödenmesi",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 25,
  },
  {
    question:
      "Yerel Yönetimler veya Özel Kuruluşların desteklediği kamusal alanda kalıcı olarak gerçekleştirilen sanat projeleri (Heykel, Duvar Resmi / Graffiti, Enstalasyon vb.)",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 40,
  },
  {
    question:
      "Galerilerde, müzelerde, sanat ve kültür merkezlerinde gerçekleştirilen Küratörlük etkinlikleri",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 10,
  },
  {
    question:
      "Özgün sanat eserleri, tasarımlar ya da yorum/icra çalışmalarıyla yurtdışında uluslararası jürili kişisel etkinlikte (sergi, bienal, sempozyum, trienal, gösteri, kareografi, performans, resital, dinleti, konser, kompozisyon, orkestra şefliği, festival, gösterim) bizzat katılım sağlamak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 25,
  },
  {
    question:
      "Özgün sanat eserleri, tasarımlar ya da yorum/icra çalışmalarıyla yurtiçinde jürili kişisel etkinlikte (sergi, bienal, sempozyum, trienal, gösteri, kareografi, performans, resital, dinleti, konser, kompozisyon, orkestra şefliği, festival, gösterim) bizzat katılım sağlamak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 20,
  },
  {
    question:
      "Özgün sanat eserleri, tasarımlar ya da yorum/icra çalışmalarıyla yurtdışında uluslararası jürili karma-ortak etkinlikte (sergi, bienal, sempozyum, trienal, gösteri, kareografi, performans, resital, dinleti, konser, kompozisyon, orkestra şefliği, festival, gösterim) bizzat katılım sağlamak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 20,
  },
  {
    question:
      "Özgün sanat eserleri, tasarımlar ya da yorum/icra çalışmalarıyla yurtiçinde ulusal jürili karma-ortak etkinlikte (sergi, bienal, sempozyum, trienal, gösteri, kareografi, performans, resital, dinleti, konser, kompozisyon, orkestra şefliği, festival, gösterim) bizzat katılım sağlamak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 10,
  },
  {
    question:
      "Uluslararası çalıştay/workshop (atölye çalışması)/uygulamalı sempozyum/yarışma/festival/şenlikte yöneticilik veya yürütücülük",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 20,
  },
  {
    question:
      "Ulusal çalıştay/workshop (atölye çalışması)/uygulamalı sempozyum/yarışma/festival/şenlikte yöneticilik veya yürütücülük",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 10,
  },
  {
    question:
      "Uluslararası çalıştay/workshop (atölye çalışması)/uygulamalı sempozyum/yarışma/festival/şenlikte araştırmacılık/kurul üyeliği",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 10,
  },
  {
    question:
      "Ulusal çalıştay/workshop (atölye çalışması)/uygulamalı sempozyum/yarışma/festival/şenlikte araştırmacılık/kurul üyeliği",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 6,
  },
  {
    question:
      "Uluslararası yarışmalarda/festivallerde/şenliklerde jüri üyeliği",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 6,
  },
  {
    question: "Ulusal yarışmalarda/festivallerde/şenliklerde jüri üyeliği",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 4,
  },
  {
    question:
      "Üretilen eserlerin uluslararası haber veya yayın organlarında yer alması veya gösterime ya da dinletime girmesi",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 2,
  },
  {
    question:
      "Üretilen eserlerin ulusal haber veya yayın organlarında yer alması veya gösterime ya da dinletime girmesi",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 2,
  },
  {
    question: "Uluslararası resital icra etmek",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 40,
  },
  {
    question:
      "Uluslararası Konserlerde, Orkestra, Koro, Geleneksel Topluluklar konserinde solist icracı olarak yer almak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 35,
  },
  {
    question:
      "Uluslararası Konserlerde, Orkestra, Koro, Geleneksel Topluluklar konserinde karma icracı olarak yer almak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 27,
  },
  {
    question:
      "Uluslararası Konserlerde, Orkestra Şefliği, Müzik Topluluğu Şefliği ve Koro Şefliği",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 40,
  },
  {
    question:
      "Uluslararası Konserlerde, Oda Müziği Konserinde icracı olarak yer almak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 30,
  },
  {
    question:
      "Uluslararası Konserlerde, Orkestra Konserinde Grup Şefi olarak yer almak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 20,
  },
  {
    question:
      "Uluslararası Konserlerde, Orkestra Konserinde Grup Üyesi olarak yer almak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 18,
  },
  {
    question:
      "Uluslararası Konserlerde, Resital veya koro konserinde eşlikçi olarak yer almak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 23,
  },
  {
    question:
      "Uluslararası Konserlerde, Konser yönetmenliği / dinleti koordinatörlüğü",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 15,
  },
  {
    question: "Ulusal resital icra etmek",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 35,
  },
  {
    question:
      "Ulusal Konserlerde, Orkestra veya koro konserinde icracı olarak bireysel dinletide bulunmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 30,
  },
  {
    question:
      "Ulusal Konserlerde, Orkestra veya koro konserinde icracı olarak karma dinletide bulunmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 23,
  },
  {
    question:
      "Ulusal Konserlerde, Orkestra Şefliği, Müzik Topluluğu Şefliği ve Koro Şefliği",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 30,
  },
  {
    question:
      "Ulusal Konserlerde, Oda Müziği Konserinde icracı olarak yer almak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 23,
  },
  {
    question:
      "Ulusal Konserlerde, Orkestra Konserinde Grup Şefi olarak yer almak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 15,
  },
  {
    question:
      "Ulusal Konserlerde, Orkestra Konserinde Grup Üyesi olarak yer almak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 13,
  },
  {
    question:
      "Ulusal Konserlerde, Resital veya koro konserinde eşlikçi olarak yer almak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 18,
  },
  {
    question:
      "Ulusal Konserlerde, Konser yönetmenliği / dinleti koordinatörlüğü",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 10,
  },
  {
    question:
      "Uluslararası sesli ve görsel etkinlikler ve sesli yayınlar, icracı, besteci, orkestra şefi, müzik topluluğu şefi veya koro şefi olarak bireysel ses yayını",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 45,
  },
  {
    question:
      "Uluslararası sesli ve görsel etkinlikler ve sesli yayınlar, icracı, besteci, orkestra şefi, müzik topluluğu şefi veya koro şefi olarak karma ses yayını",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 35,
  },
  {
    question:
      "Uluslararası sesli ve görsel etkinlikler ve sesli yayınlar, Genel Sanat Yönetmeni/Müzik yönetmeni olarak ses yayını hazırlamak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 30,
  },
  {
    question:
      "Uluslararası sesli ve görsel etkinlikler ve sesli yayınlar, Radyo ve TV Etkinliği - Program Hazırlamak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 15,
  },
  {
    question:
      "Uluslararası sesli ve görsel etkinlikler ve sesli yayınlar, Radyo ve TV Etkinliği Katılımcılığı - Bireysel",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 13,
  },
  {
    question:
      "Uluslararası sesli ve görsel etkinlikler ve sesli yayınlar, Radyo ve TV Etkinliği Katılımcılığı - Karma",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 10,
  },
  {
    question:
      "Ulusal sesli ve görsel etkinlikler ve sesli yayınlar, İcracı, besteci, orkestra şefi, müzik topluluğu şefi veya koro şefi olarak bireysel ses yayını",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 40,
  },
  {
    question:
      "Ulusal sesli ve görsel etkinlikler ve sesli yayınlar, İcracı, besteci, orkestra şefi, müzik topluluğu şefi veya koro şefi olarak karma ses yayını",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 30,
  },
  {
    question:
      "Ulusal sesli ve görsel etkinlikler ve sesli yayınlar, Genel Sanat Yönetmeni/Müzik yönetmeni olarak ses yayını hazırlamak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 25,
  },
  {
    question:
      "Ulusal sesli ve görsel etkinlikler ve sesli yayınlar, Radyo ve TV Etkinliği - Program Hazırlamak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 13,
  },
  {
    question:
      "Ulusal sesli ve görsel etkinlikler ve sesli yayınlar, Radyo ve TV Etkinliği Katılımcılığı - Bireysel",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 10,
  },
  {
    question:
      "Ulusal sesli ve görsel etkinlikler ve sesli yayınlar, Radyo ve TV Etkinliği Katılımcılığı - Karma",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 8,
  },
  {
    question:
      "Ulusal Orkestra İçin Bestelenmiş Eser (4’lü, 3’lü, 2’li, Oda ve Yaylı Çalgılar Orkestrası) 0 – 5 dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 30,
  },
  {
    question:
      "Ulusal Orkestra İçin Bestelenmiş Eser (4’lü, 3’lü, 2’li, Oda ve Yaylı Çalgılar Orkestrası) 5 – 10 dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 35,
  },
  {
    question:
      "Ulusal Orkestra İçin Bestelenmiş Eser (4’lü, 3’lü, 2’li, Oda ve Yaylı Çalgılar Orkestrası) 10 – 15 dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 40,
  },
  {
    question:
      "Ulusal Orkestra İçin Bestelenmiş Eser (4’lü, 3’lü, 2’li, Oda ve Yaylı Çalgılar Orkestrası) 15 ve üzeri dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 45,
  },
  {
    question:
      "Ulusal Oda Müziği (Karma Oda Müziği, Vokal Müzik, Solo Çalgı Müzikleri) 0 – 5 dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 28,
  },
  {
    question:
      "Ulusal Oda Müziği (Karma Oda Müziği, Vokal Müzik, Solo Çalgı Müzikleri) 5 – 10 dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 33,
  },
  {
    question:
      "Ulusal Oda Müziği (Karma Oda Müziği, Vokal Müzik, Solo Çalgı Müzikleri) 10 – 15 dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 38,
  },
  {
    question:
      "Ulusal Oda Müziği (Karma Oda Müziği, Vokal Müzik, Solo Çalgı Müzikleri) 15 ve üzeri dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 43,
  },
  {
    question:
      "Ulusal Elektronik ve Elektro – Akustik Müzikler (Çalgı, elektronik ortam ve Bilgisayar ortamında Fix Medya Müziği) 0 – 5 dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 25,
  },
  {
    question:
      "Ulusal Elektronik ve Elektro – Akustik Müzikler (Çalgı, elektronik ortam ve Bilgisayar ortamında Fix Medya Müziği) 5 – 10 dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 30,
  },
  {
    question:
      "Ulusal Elektronik ve Elektro – Akustik Müzikler (Çalgı, elektronik ortam ve Bilgisayar ortamında Fix Medya Müziği) 10 – 15 dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 35,
  },
  {
    question:
      "Ulusal Elektronik ve Elektro – Akustik Müzikler (Çalgı, elektronik ortam ve Bilgisayar ortamında Fix Medya Müziği) 15 ve üzeri dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 40,
  },
  {
    question:
      "Uluslararası Orkestra İçin Bestelenmiş Eser (4’lü, 3’lü, 2’li, Oda ve Yaylı Çalgılar Orkestrası) 0 – 5 dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 35,
  },
  {
    question:
      "Uluslararası Orkestra İçin Bestelenmiş Eser (4’lü, 3’lü, 2’li, Oda ve Yaylı Çalgılar Orkestrası) 5 – 10 dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 40,
  },
  {
    question:
      "Uluslararası Orkestra İçin Bestelenmiş Eser (4’lü, 3’lü, 2’li, Oda ve Yaylı Çalgılar Orkestrası) 10 – 15 dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 45,
  },
  {
    question:
      "Uluslararası Orkestra İçin Bestelenmiş Eser (4’lü, 3’lü, 2’li, Oda ve Yaylı Çalgılar Orkestrası) 15 ve üzeri dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 50,
  },
  {
    question:
      "Uluslararası Oda Müziği (Karma Oda Müziği, Vokal Müzik, Solo Çalgı Müzikleri) 0 – 5 dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 33,
  },
  {
    question:
      "Uluslararası Oda Müziği (Karma Oda Müziği, Vokal Müzik, Solo Çalgı Müzikleri) 5 – 10 dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 38,
  },
  {
    question:
      "Uluslararası Oda Müziği (Karma Oda Müziği, Vokal Müzik, Solo Çalgı Müzikleri) 10 – 15 dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 43,
  },
  {
    question:
      "Uluslararası Oda Müziği (Karma Oda Müziği, Vokal Müzik, Solo Çalgı Müzikleri) 15 ve üzeri dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 48,
  },
  {
    question:
      "Uluslararası Elektronik ve Elektro – Akustik Müzikler (Çalgı, elektronik ortam ve Bilgisayar ortamında Fix Medya Müziği) 0 – 5 dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 30,
  },
  {
    question:
      "Uluslararası Elektronik ve Elektro – Akustik Müzikler (Çalgı, elektronik ortam ve Bilgisayar ortamında Fix Medya Müziği) 5 – 10 dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 35,
  },
  {
    question:
      "Uluslararası Elektronik ve Elektro – Akustik Müzikler (Çalgı, elektronik ortam ve Bilgisayar ortamında Fix Medya Müziği) 10 – 15 dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 40,
  },
  {
    question:
      "Uluslararası Elektronik ve Elektro – Akustik Müzikler (Çalgı, elektronik ortam ve Bilgisayar ortamında Fix Medya Müziği) 15 ve üzeri dakikalık eser sahibi olmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 0,
    maxScore: 45,
  },
  {
    question:
      "Türk Müziği makamlarını kullanarak geleneksel formlar (ayin, peşrev, kâr, kârçe, ağır semâi, yürük semâi, beste, şarkı vb ...) çerçevesinde oluşturulmuş kompozisyonlar. Bestelenmiş Eser Sahibi Olmak (Nota ile belgelemek koşulu ile)",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 35,
    maxScore: 35,
  },
  {
    question:
      "Türk Müziği makamlarını kullanarak geleneksel formlar (ayin, peşrev, kâr, kârçe, ağır semâi, yürük semâi, beste, şarkı vb ...) çerçevesinde oluşturulmuş kompozisyonlar. Bestelenmiş ve Seslendirilmiş Eser Sahibi Olmak (ulusal konser veya ses yayını)",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 40,
    maxScore: 40,
  },
  {
    question:
      "Türk Müziği makamlarını kullanarak geleneksel formlar (ayin, peşrev, kâr, kârçe, ağır semâi, yürük semâi, şarkı beste vb ...) çerçevesinde oluşturulmuş kompozisyonlar. Bestelenmiş ve Seslendirilmiş Eser Sahibi Olmak (uluslararası konser veya yurt dışında basılmış ses yayını)",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 45,
    maxScore: 45,
  },
  {
    question:
      "Türk Halk Müziği alanında derleme yapmak (TRT Müzik Dairesi Bşk. Repertuvar Kurulu tarafından onaylanmış)",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 45,
    maxScore: 45,
  },
  {
    question:
      "Türk Halk Müziği alanında derleme yapmak (Nota ile belgelemek koşulu ile)",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 40,
    maxScore: 40,
  },
  {
    question:
      "Türk Halk Müziği alanında derlenmiş parçanın notaya alınması (TRT Müzik Dairesi Bşk. Repertuvar kurulu tarafından onaylanmış)",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ (Konservatuvar dahil)",
    minScore: 15,
    maxScore: 15,
  },
  {
    question: "Büyük oyun /film yönetmenliği",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 18,
  },
  {
    question: "Kısa oyun/film yönetmenliği",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 7,
  },
  {
    question: "Sahne oyunu / senaryo (uzun) ve dizi drama yazarlığı",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 18,
  },
  {
    question: "Kısa sahne oyunu ve senaryo yazarlığı",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 7,
  },
  {
    question: "Uyarlama oyun/senaryo yazmak, metin düzenlemek (uzun)",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 10,
  },
  {
    question: "Uyarlama oyun/senaryo yazmak, metin düzenlemek (kısa)",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 5,
  },
  {
    question: "Uzun oyun/senaryo/dizi drama dramaturjisi yapmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 18,
  },
  {
    question: "Kısa oyun/senaryo dramaturjisi yapmak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 7,
  },
  {
    question: "Uzun oyun/senaryo/ dizi drama metni çevirmek",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 10,
  },
  {
    question: "Kısa oyun/senaryo metni çevirmek",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 3,
  },
  {
    question: "Uzun oyunda/sinema filminde/dizi dramada başrol",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 18,
  },
  {
    question: "Uzun oyunda/sinema filminde/dizi dramada diğer roller",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 10,
  },
  {
    question: "Kısa oyun/filmde başrol",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 7,
  },
  {
    question: "Kısa oyun/filmde diğer roller",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 3,
  },
  {
    question:
      "Sahne oyunu/ film (uzun) ve dizi drama dekor / kostüm / ışık / ses / efekt tasarımı",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 18,
  },
  {
    question:
      "Sahne oyunu/ film (uzun) ve dizi drama dekor / kostüm / ışık / ses / efekt tasarımı ekibinde görev almak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 7,
  },
  {
    question:
      "Sahne oyunu/ film (kısa) dekor / kostüm / ışık / ses / efekt tasarımı",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 7,
  },
  {
    question:
      "Sahne oyunu/ film (kısa) dekor / kostüm / ışık / ses / efekt tasarımı ekibinde görev almak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 3,
  },
  {
    question:
      "Sahne oyunu/ film (uzun) ve dizi dramada makyaj, mask, kukla, butafor vb tasarımı",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 15,
  },
  {
    question:
      "Sahne oyunu/ film (uzun) ve dizi dramada makyaj, mask, kukla, butafor vb tasarımı ekibinde görev almak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 5,
  },
  {
    question:
      "Sahne oyunu/ film (kısa) makyaj, mask, kukla, butafor vb tasarımı",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 7,
  },
  {
    question:
      "Sahne oyunu/ film (kısa) makyaj, mask, kukla, butafor vb tasarımı ekibinde görev almak",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 3,
  },
  {
    question: "Sanat yönetmenliği (uzun prodüksiyonlar)",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 18,
  },
  {
    question: "Sanat yönetmenliği (kısa prodüksiyonlar)",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 7,
  },
  {
    question:
      "Koreografi, dramatizasyon, dinleti, performans, happening veya workshop (atölye) düzenleme/yönetme",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 10,
  },
  {
    question:
      "Kongre, sempozyum, festival etkinliklerinde atölye çalışması düzenlemek",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 7,
  },
  {
    question: "Yapıtın festival, şenlik vb. etkinliklere katılımı",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 15,
  },
  {
    question:
      "Oyunun/senaryonun/filmin/sergilenmiş oyunun video kaydının vb. kamu/özel TV’ler/dijital platformlar/kurumsal kimlikli internet siteleri vb tarafından satın alınması/gösterilmesi; Devlet Tiyatroları/Şehir Tiyatroları vb tiyatroların repertuvarlarına girmesi",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 18,
  },
  {
    question:
      "En az 10 kere gerçekleştirilmiş olan sanatsal bir yarışma/ödül organizasyonu tarafından yapıtın/sanatçının ödüllendirilmesi",
    requiresFile: true,
    sectionName: "L. GÜZEL SANATLAR FAALİYETLERİ",
    minScore: 0,
    maxScore: 18,
  },
];

export default questionData;
