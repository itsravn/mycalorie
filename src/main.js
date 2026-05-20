// 1. Veritabanı
const foodDB = [
  // --- Kullanıcı Güncellemesi: Part 1 (Kahvaltılık & Fırın) ---
  { name: "Haşlanmış Yumurta", ref: 1, unit: "adet", cal: 78, p: 6, c: 0.5, f: 6 },
  { name: "Beyaz Peynir", ref: 30, unit: "g", cal: 90, p: 4.5, c: 1, f: 7 },
  { name: "Kaşar Peyniri", ref: 30, unit: "g", cal: 106, p: 8, c: 0.5, f: 8 },
  { name: "Lor Peyniri", ref: 50, unit: "g", cal: 45, p: 8, c: 1.5, f: 1 },
  { name: "Siyah Zeytin", ref: 10, unit: "adet", cal: 45, p: 0.5, c: 1, f: 5 },
  { name: "Dana Sucuk", ref: 50, unit: "g", cal: 165, p: 7, c: 1, f: 15 },
  { name: "Pastırma", ref: 30, unit: "g", cal: 80, p: 9, c: 0, f: 5 },
  { name: "Sosis", ref: 50, unit: "g", cal: 140, p: 6, c: 2, f: 12 },
  { name: "Simit", ref: 1, unit: "adet", cal: 275, p: 9, c: 50, f: 4 },
  { name: "Açma", ref: 1, unit: "adet", cal: 350, p: 7, c: 40, f: 18 },
  { name: "Sade Poğaça", ref: 1, unit: "adet", cal: 250, p: 6, c: 25, f: 14 },
  { name: "Menemen", ref: 1, unit: "porsiyon", cal: 190, p: 10, c: 6, f: 14 },
  { name: "Sucuklu Yumurta", ref: 1, unit: "porsiyon", cal: 280, p: 14, c: 2, f: 24 },
  { name: "Tereyağı", ref: 10, unit: "g", cal: 75, p: 0, c: 0, f: 8 },
  { name: "Bal", ref: 1, unit: "tatlı kaşığı", cal: 30, p: 0, c: 8, f: 0 },
  { name: "Yulaf Ezmesi", ref: 50, unit: "g", cal: 190, p: 7, c: 33, f: 3 },
  { name: "Şekersiz Fıstık Ezmesi", ref: 1, unit: "yk", cal: 95, p: 4, c: 3, f: 8 },
  
  // --- Kullanıcı Güncellemesi: Part 2 (Çorbalar) ---
  { name: "Mercimek Çorbası", ref: 1, unit: "kase", cal: 135, p: 7, c: 18, f: 4 },
  { name: "Ezogelin Çorbası", ref: 1, unit: "kase", cal: 150, p: 6, c: 22, f: 4 },
  { name: "Tarhana Çorbası", ref: 1, unit: "kase", cal: 120, p: 4, c: 15, f: 5 },
  { name: "Yayla Çorbası", ref: 1, unit: "kase", cal: 100, p: 4, c: 12, f: 4 },
  { name: "Tavuk Suyu Çorbası", ref: 1, unit: "kase", cal: 110, p: 8, c: 10, f: 4 },
  { name: "İşkembe Çorbası", ref: 1, unit: "kase", cal: 160, p: 12, c: 5, f: 10 },
  { name: "Kelle Paça Çorbası", ref: 1, unit: "kase", cal: 250, p: 20, c: 4, f: 17 },
  { name: "Domates Çorbası", ref: 1, unit: "kase", cal: 90, p: 2, c: 12, f: 4 },
  { name: "Ayran Aşı Çorbası", ref: 1, unit: "kase", cal: 110, p: 5, c: 15, f: 3 },
  { name: "Brokoli Çorbası", ref: 1, unit: "kase", cal: 80, p: 3, c: 9, f: 4 },

  // --- Kullanıcı Güncellemesi: Part 3 (Etler ve Ana Yemekler) ---
  { name: "Izgara Tavuk Göğsü", ref: 150, unit: "g", cal: 165, p: 35, c: 0, f: 3 },
  { name: "Fırın Tavuk But", ref: 1, unit: "adet", cal: 210, p: 18, c: 1, f: 15 },
  { name: "Tavuk Şiş", ref: 1, unit: "porsiyon", cal: 220, p: 30, c: 2, f: 10 },
  { name: "Tavuk Sote", ref: 1, unit: "porsiyon", cal: 240, p: 25, c: 10, f: 11 },
  { name: "Izgara Köfte", ref: 150, unit: "g", cal: 300, p: 25, c: 4, f: 20 },
  { name: "Sulu Köfte", ref: 1, unit: "porsiyon", cal: 260, p: 15, c: 18, f: 14 },
  { name: "Adana Kebap", ref: 1, unit: "porsiyon", cal: 360, p: 25, c: 5, f: 27 },
  { name: "İskender Kebap", ref: 1, unit: "porsiyon", cal: 750, p: 35, c: 55, f: 43 },
  { name: "Et Döner", ref: 100, unit: "g", cal: 280, p: 24, c: 2, f: 20 },
  { name: "Tavuk Döner", ref: 100, unit: "g", cal: 190, p: 22, c: 3, f: 10 },
  { name: "Tas Kebabı", ref: 1, unit: "porsiyon", cal: 320, p: 22, c: 12, f: 20 },
  { name: "Karnıyarık", ref: 1, unit: "adet", cal: 270, p: 12, c: 15, f: 18 },
  { name: "Hünkar Beğendi", ref: 1, unit: "porsiyon", cal: 420, p: 20, c: 18, f: 30 },
  { name: "Etli Yaprak Sarma", ref: 6, unit: "adet", cal: 220, p: 8, c: 25, f: 10 },
  { name: "Etli Biber Dolması", ref: 1, unit: "adet", cal: 150, p: 6, c: 12, f: 9 },
  { name: "Fırın Somon", ref: 150, unit: "g", cal: 310, p: 30, c: 0, f: 21 },
  { name: "Izgara Levrek", ref: 200, unit: "g", cal: 240, p: 40, c: 0, f: 9 },
  { name: "Ton Balığı (Yağsız Konserve)", ref: 100, unit: "g", cal: 110, p: 25, c: 0, f: 1 },

  // --- Kullanıcı Güncellemesi: Part 4 (Zeytinyağlılar & Sebzeler) ---
  { name: "Etli Kuru Fasulye", ref: 1, unit: "porsiyon", cal: 280, p: 16, c: 30, f: 11 },
  { name: "Etsiz Kuru Fasulye", ref: 1, unit: "porsiyon", cal: 220, p: 12, c: 35, f: 4 },
  { name: "Etli Nohut Yemeği", ref: 1, unit: "porsiyon", cal: 290, p: 15, c: 32, f: 11 },
  { name: "Yeşil Mercimek Yemeği", ref: 1, unit: "porsiyon", cal: 210, p: 14, c: 30, f: 4 },
  { name: "Zeytinyağlı Barbunya", ref: 1, unit: "porsiyon", cal: 240, p: 8, c: 28, f: 11 },
  { name: "Zeytinyağlı Taze Fasulye", ref: 1, unit: "porsiyon", cal: 130, p: 3, c: 12, f: 8 },
  { name: "Zeytinyağlı Yaprak Sarma", ref: 6, unit: "adet", cal: 200, p: 3, c: 25, f: 10 },
  { name: "İmam Bayıldı", ref: 1, unit: "adet", cal: 190, p: 3, c: 15, f: 13 },
  { name: "Şakşuka", ref: 1, unit: "porsiyon", cal: 180, p: 3, c: 14, f: 12 },
  { name: "Ispanak Yemeği (Yumurtasız)", ref: 1, unit: "porsiyon", cal: 100, p: 4, c: 8, f: 6 },
  { name: "Mücver", ref: 2, unit: "adet", cal: 240, p: 8, c: 20, f: 14 },
  { name: "Türlü Yemeği", ref: 1, unit: "porsiyon", cal: 130, p: 4, c: 15, f: 6 },

  // --- Kullanıcı Güncellemesi: Part 5 (Karbonhidratlar & Ekmekler) ---
  { name: "Pirinç Pilavı", ref: 1, unit: "porsiyon", cal: 260, p: 4, c: 45, f: 7 },
  { name: "Bulgur Pilavı", ref: 1, unit: "porsiyon", cal: 220, p: 6, c: 40, f: 4 },
  { name: "Sade Makarna", ref: 1, unit: "porsiyon", cal: 240, p: 8, c: 48, f: 2 },
  { name: "Patates Püresi", ref: 1, unit: "porsiyon", cal: 180, p: 3, c: 22, f: 9 },
  { name: "Haşlanmış Patates (Orta Boy)", ref: 1, unit: "adet", cal: 110, p: 2, c: 25, f: 0 },
  { name: "Lavaş", ref: 1, unit: "adet", cal: 180, p: 5, c: 35, f: 2 },
  { name: "Somun Ekmek", ref: 1, unit: "dilim", cal: 65, p: 2, c: 13, f: 1 },
  { name: "Tam Buğday Ekmek", ref: 1, unit: "dilim", cal: 60, p: 2.5, c: 11, f: 1 },
  { name: "Ramazan Pidesi", ref: 1, unit: "dilim", cal: 130, p: 4, c: 25, f: 2 },

  // --- Kullanıcı Güncellemesi: Part 6 (Sokak Lezzetleri & Fast Food) ---
  { name: "Lahmacun", ref: 1, unit: "adet", cal: 220, p: 10, c: 30, f: 7 },
  { name: "Kıymalı Pide", ref: 1, unit: "porsiyon", cal: 450, p: 18, c: 55, f: 18 },
  { name: "Kaşarlı Pide", ref: 1, unit: "porsiyon", cal: 500, p: 20, c: 65, f: 18 },
  { name: "Kokoreç (Yarım Ekmek)", ref: 1, unit: "adet", cal: 650, p: 28, c: 60, f: 33 },
  { name: "Tantuni (Lavaş)", ref: 1, unit: "adet", cal: 350, p: 20, c: 35, f: 14 },
  { name: "Midye Dolma", ref: 10, unit: "adet", cal: 250, p: 6, c: 35, f: 10 },
  { name: "Çiğ Köfte (Lavaş Dürüm)", ref: 1, unit: "adet", cal: 340, p: 8, c: 55, f: 10 },
  { name: "Islak Hamburger", ref: 1, unit: "adet", cal: 320, p: 12, c: 35, f: 15 },
  { name: "Kumpir (Karışık)", ref: 1, unit: "adet", cal: 750, p: 15, c: 80, f: 41 },
  { name: "Sokak Tavuklu Pilav (Nohutlu)", ref: 1, unit: "porsiyon", cal: 420, p: 20, c: 50, f: 16 },
  { name: "Sucuk Ekmek (Yarım)", ref: 1, unit: "adet", cal: 550, p: 22, c: 60, f: 25 },
  { name: "Gözleme (Peynirli)", ref: 1, unit: "adet", cal: 400, p: 12, c: 45, f: 19 },

  // --- Kullanıcı Güncellemesi: Part 7 (Salata & Mezeler) ---
  { name: "Çoban Salata (Yağlı)", ref: 1, unit: "porsiyon", cal: 90, p: 2, c: 8, f: 6 },
  { name: "Gavurdağı Salatası", ref: 1, unit: "porsiyon", cal: 150, p: 3, c: 10, f: 11 },
  { name: "Haydari", ref: 1, unit: "porsiyon", cal: 120, p: 4, c: 6, f: 9 },
  { name: "Humus", ref: 1, unit: "porsiyon", cal: 160, p: 6, c: 15, f: 8 },
  { name: "Acılı Ezme", ref: 1, unit: "porsiyon", cal: 60, p: 2, c: 8, f: 2 },
  { name: "Fava", ref: 1, unit: "porsiyon", cal: 180, p: 8, c: 20, f: 8 },
  { name: "Havuç Tarator", ref: 1, unit: "porsiyon", cal: 140, p: 3, c: 8, f: 11 },
  { name: "Kısır", ref: 1, unit: "porsiyon", cal: 220, p: 5, c: 35, f: 7 },
  { name: "Mercimek Köftesi", ref: 4, unit: "adet", cal: 180, p: 6, c: 25, f: 6 },

  // --- Kullanıcı Güncellemesi: Part 8 (Tatlılar & Çerezler) ---
  { name: "Baklava", ref: 2, unit: "dilim", cal: 340, p: 3, c: 45, f: 16 },
  { name: "Sütlaç", ref: 1, unit: "kase", cal: 260, p: 6, c: 45, f: 6 },
  { name: "Künefe", ref: 1, unit: "porsiyon", cal: 450, p: 8, c: 50, f: 24 },
  { name: "Profiterol", ref: 1, unit: "kase", cal: 380, p: 6, c: 40, f: 22 },
  { name: "Aşure", ref: 1, unit: "kase", cal: 340, p: 7, c: 65, f: 6 },
  { name: "Güllaç", ref: 1, unit: "dilim", cal: 250, p: 6, c: 35, f: 10 },
  { name: "Trileçe", ref: 1, unit: "dilim", cal: 300, p: 7, c: 40, f: 12 },
  { name: "Kuruyemiş Karışımı", ref: 30, unit: "g", cal: 180, p: 5, c: 8, f: 14 },
  { name: "Çiğ Badem", ref: 30, unit: "g", cal: 175, p: 6, c: 6, f: 14 },
  { name: "Ayran", ref: 1, unit: "bardak", cal: 75, p: 4, c: 6, f: 4 },
  { name: "Kefir", ref: 1, unit: "bardak", cal: 100, p: 6, c: 8, f: 5 },

  // --- Kullanıcı Güncellemesi: İçecek 1 (Kahveler) ---
  { name: "Filtre Kahve", ref: 250, unit: "ml", cal: 5, p: 0.5, c: 1, f: 0 },
  { name: "Americano", ref: 250, unit: "ml", cal: 10, p: 1, c: 1.5, f: 0 },
  { name: "Espresso (Single)", ref: 1, unit: "shot", cal: 3, p: 0.2, c: 0.5, f: 0 },
  { name: "Espresso (Double)", ref: 2, unit: "shot", cal: 6, p: 0.4, c: 1, f: 0 },
  { name: "Ristretto", ref: 1, unit: "shot", cal: 2, p: 0.1, c: 0.4, f: 0 },
  { name: "Lungo", ref: 1, unit: "shot", cal: 5, p: 0.4, c: 0.8, f: 0 },
  { name: "Macchiato", ref: 1, unit: "fincan", cal: 15, p: 1, c: 1, f: 0.8 },
  { name: "Cortado", ref: 1, unit: "fincan", cal: 50, p: 3, c: 4, f: 2.5 },
  { name: "Sütlü Filtre Kahve", ref: 250, unit: "ml", cal: 30, p: 2, c: 3, f: 1 },
  { name: "Cappuccino (Tam Yağlı Süt)", ref: 250, unit: "ml", cal: 110, p: 6, c: 10, f: 5.2 },
  { name: "Cappuccino (Yağsız Süt)", ref: 250, unit: "ml", cal: 70, p: 6, c: 11, f: 0.2 },
  { name: "Cappuccino (Badem Sütü)", ref: 250, unit: "ml", cal: 60, p: 2, c: 4, f: 4 },
  { name: "Cappuccino (Yulaf Sütü)", ref: 250, unit: "ml", cal: 90, p: 2, c: 14, f: 3 },
  { name: "Latte (Tam Yağlı)", ref: 350, unit: "ml", cal: 150, p: 8, c: 12, f: 7.8 },
  { name: "Latte (Yağsız)", ref: 350, unit: "ml", cal: 90, p: 8, c: 13, f: 0.6 },
  { name: "Latte (Badem Sütü)", ref: 350, unit: "ml", cal: 80, p: 3, c: 5, f: 5.3 },
  { name: "Latte (Yulaf Sütü)", ref: 350, unit: "ml", cal: 120, p: 3, c: 18, f: 4 },
  { name: "Latte (Soya Sütü)", ref: 350, unit: "ml", cal: 110, p: 7, c: 10, f: 4.6 },
  { name: "Flat White", ref: 250, unit: "ml", cal: 130, p: 7, c: 10, f: 6.8 },
  { name: "Mocha (Kremasız)", ref: 350, unit: "ml", cal: 290, p: 10, c: 35, f: 12.2 },
  { name: "White Chocolate Mocha", ref: 350, unit: "ml", cal: 340, p: 11, c: 40, f: 15.1 },
  { name: "Caramel Macchiato", ref: 350, unit: "ml", cal: 240, p: 8, c: 33, f: 8.4 },
  { name: "Karamel Macchiato (Yağsız)", ref: 350, unit: "ml", cal: 180, p: 8, c: 35, f: 1 },
  { name: "Soya Macchiato", ref: 350, unit: "ml", cal: 190, p: 7, c: 28, f: 5.5 },
  { name: "Hazelnut (Fındık) Latte", ref: 350, unit: "ml", cal: 220, p: 8, c: 28, f: 8.4 },
  { name: "Vanilla Latte", ref: 350, unit: "ml", cal: 220, p: 8, c: 28, f: 8.4 },
  { name: "Irish Nut Latte", ref: 350, unit: "ml", cal: 230, p: 8, c: 30, f: 8.6 },
  { name: "Toffee Nut Latte", ref: 350, unit: "ml", cal: 250, p: 8, c: 32, f: 10 },
  { name: "Pumpkin Spice Latte", ref: 350, unit: "ml", cal: 260, p: 9, c: 35, f: 9.3 },
  { name: "Kestane Şuruplu Latte", ref: 350, unit: "ml", cal: 250, p: 8, c: 33, f: 9.5 },
  { name: "Gingerbread Latte", ref: 350, unit: "ml", cal: 240, p: 8, c: 32, f: 8.8 },
  { name: "Türk Kahvesi (Sade)", ref: 1, unit: "fincan", cal: 5, p: 0.5, c: 1, f: 0 },
  { name: "Türk Kahvesi (Orta)", ref: 1, unit: "fincan", cal: 20, p: 0.5, c: 4.5, f: 0 },
  { name: "Türk Kahvesi (Şekerli)", ref: 1, unit: "fincan", cal: 35, p: 0.5, c: 8, f: 0 },
  { name: "Sütlü Türk Kahvesi", ref: 1, unit: "fincan", cal: 40, p: 2, c: 4, f: 1.8 },
  { name: "Dibek Kahvesi", ref: 1, unit: "fincan", cal: 55, p: 1, c: 8, f: 2 },
  { name: "Menengiç Kahvesi", ref: 1, unit: "fincan", cal: 70, p: 2, c: 5, f: 4.6 },
  { name: "Çörek Otu Kahvesi", ref: 1, unit: "fincan", cal: 45, p: 1, c: 6, f: 1.8 },
  { name: "Keçiboynuzu Kahvesi", ref: 1, unit: "fincan", cal: 35, p: 0.5, c: 8, f: 0.2 },
  { name: "Mırra", ref: 1, unit: "fincan", cal: 5, p: 0.5, c: 1, f: 0 },

  // --- Meyveler ---
  { name: "Muz", ref: 100, unit: "g", cal: 89, p: 1, c: 23, f: 0 },
  { name: "Elma", ref: 100, unit: "g", cal: 52, p: 0, c: 14, f: 0 },
  { name: "Portakal", ref: 100, unit: "g", cal: 47, p: 1, c: 12, f: 0 },
  { name: "Çilek", ref: 100, unit: "g", cal: 32, p: 1, c: 8, f: 0 },
  { name: "Üzüm", ref: 100, unit: "g", cal: 69, p: 1, c: 18, f: 0 },

  // --- Kullanıcı Güncellemesi: İçecek 2 (Soğuk Kahveler) ---
  { name: "Iced Americano", ref: 1, unit: "bardak", cal: 10, p: 1, c: 1.5, f: 0 },
  { name: "Iced Filter Coffee", ref: 1, unit: "bardak", cal: 5, p: 0.5, c: 1, f: 0 },
  { name: "Iced Ristretto", ref: 1, unit: "shot", cal: 2, p: 0.1, c: 0.4, f: 0 },
  { name: "Iced Lungo", ref: 1, unit: "shot", cal: 5, p: 0.4, c: 0.8, f: 0 },
  { name: "Cold Brew", ref: 1, unit: "bardak", cal: 5, p: 0.5, c: 1, f: 0 },
  { name: "Nitro Cold Brew", ref: 1, unit: "bardak", cal: 5, p: 0.5, c: 1, f: 0 },
  { name: "Cold Brew Latte", ref: 1, unit: "bardak", cal: 60, p: 3, c: 5, f: 3.1 },
  { name: "Iced Latte (Tam Yağlı)", ref: 1, unit: "bardak", cal: 130, p: 7, c: 11, f: 6.4 },
  { name: "Iced Latte (Yağsız)", ref: 1, unit: "bardak", cal: 80, p: 7, c: 12, f: 0.4 },
  { name: "Iced Latte (Badem Sütü)", ref: 1, unit: "bardak", cal: 70, p: 2, c: 4, f: 5.1 },
  { name: "Iced Latte (Yulaf Sütü)", ref: 1, unit: "bardak", cal: 100, p: 2, c: 16, f: 3.1 },
  { name: "Iced Soya Latte", ref: 1, unit: "bardak", cal: 90, p: 6, c: 9, f: 3.3 },
  { name: "Iced Coconut (Hindistan Cevizi) Latte", ref: 1, unit: "bardak", cal: 90, p: 1, c: 8, f: 6 },
  { name: "Iced Cappuccino", ref: 1, unit: "bardak", cal: 100, p: 5, c: 9, f: 4.8 },
  { name: "Iced Flat White", ref: 1, unit: "bardak", cal: 120, p: 6, c: 9, f: 6.6 },
  { name: "Iced Cortado", ref: 1, unit: "bardak", cal: 45, p: 2.5, c: 3.5, f: 2.3 },
  { name: "Iced Macchiato", ref: 1, unit: "bardak", cal: 20, p: 1, c: 2, f: 0.8 },
  { name: "Iced Caramel Macchiato", ref: 1, unit: "bardak", cal: 220, p: 7, c: 31, f: 7.5 },
  { name: "Iced Mocha", ref: 1, unit: "bardak", cal: 260, p: 9, c: 32, f: 10.6 },
  { name: "Iced White Chocolate Mocha", ref: 1, unit: "bardak", cal: 310, p: 10, c: 38, f: 13.1 },
  { name: "Iced Vanilla Latte", ref: 1, unit: "bardak", cal: 200, p: 7, c: 26, f: 7.5 },
  { name: "Iced Caramel Latte", ref: 1, unit: "bardak", cal: 200, p: 7, c: 26, f: 7.5 },
  { name: "Iced Hazelnut Latte", ref: 1, unit: "bardak", cal: 200, p: 7, c: 26, f: 7.5 },
  { name: "Iced Toffee Nut Latte", ref: 1, unit: "bardak", cal: 220, p: 7, c: 28, f: 8.8 },
  { name: "Iced Irish Nut Latte", ref: 1, unit: "bardak", cal: 210, p: 7, c: 27, f: 8.2 },
  { name: "Iced Pumpkin Spice Latte", ref: 1, unit: "bardak", cal: 230, p: 8, c: 32, f: 7.7 },
  { name: "Iced Peppermint Mocha", ref: 1, unit: "bardak", cal: 250, p: 9, c: 31, f: 10 },
  { name: "Frappuccino (Kahveli)", ref: 1, unit: "bardak", cal: 220, p: 3, c: 35, f: 7.5 },
  { name: "Frappuccino (Karamel)", ref: 1, unit: "bardak", cal: 380, p: 4, c: 60, f: 13.7 },
  { name: "Frappuccino (Çikolatalı)", ref: 1, unit: "bardak", cal: 400, p: 5, c: 62, f: 14.6 },
  { name: "Frappuccino (Vanilya)", ref: 1, unit: "bardak", cal: 350, p: 4, c: 55, f: 12.6 },
  { name: "Frappuccino (Çilek - Kahvesiz)", ref: 1, unit: "bardak", cal: 330, p: 4, c: 52, f: 11.7 },
  { name: "Frappuccino (Matcha)", ref: 1, unit: "bardak", cal: 310, p: 5, c: 48, f: 10.8 },
  { name: "Frappe (Yunan Usulü Şekerli)", ref: 1, unit: "bardak", cal: 140, p: 3, c: 20, f: 5.3 },
  { name: "Dalgona Kahvesi (Sütlü)", ref: 1, unit: "bardak", cal: 180, p: 6, c: 22, f: 7.5 },
  { name: "Espresso Tonic", ref: 1, unit: "bardak", cal: 85, p: 1, c: 20, f: 0.1 },
  { name: "Shakerato (Şekerli Çalkalanmış Esp)", ref: 1, unit: "fincan", cal: 40, p: 0.5, c: 9, f: 0.2 },
  { name: "Mazagran (Limonlu Soğuk Kahve)", ref: 1, unit: "bardak", cal: 60, p: 0.5, c: 14, f: 0.2 },
  { name: "Affogato (Dondurmalı Espresso)", ref: 1, unit: "porsiyon", cal: 180, p: 3, c: 24, f: 8 },
  { name: "Cold Brew Limonata", ref: 1, unit: "bardak", cal: 70, p: 0.5, c: 16, f: 0.4 },

  // --- Kullanıcı Güncellemesi: İçecek 3 (Çaylar, Sıcak Sütlü İçecekler & Yöresel) ---
  { name: "Siyah Çay (Şekersiz)", ref: 1, unit: "bardak", cal: 2, p: 0.1, c: 0.4, f: 0 },
  { name: "Siyah Çay (1 Küp Şekerli)", ref: 1, unit: "bardak", cal: 18, p: 0.1, c: 4.4, f: 0 },
  { name: "Yeşil Çay", ref: 1, unit: "bardak", cal: 2, p: 0, c: 0.5, f: 0 },
  { name: "Adaçayı", ref: 1, unit: "bardak", cal: 2, p: 0, c: 0.5, f: 0 },
  { name: "Ihlamur", ref: 1, unit: "bardak", cal: 5, p: 0, c: 1, f: 0 },
  { name: "Ihlamur (Ballı)", ref: 1, unit: "bardak", cal: 35, p: 0, c: 8.5, f: 0 },
  { name: "Kuşburnu Çayı", ref: 1, unit: "bardak", cal: 4, p: 0, c: 1, f: 0 },
  { name: "Papatya Çayı", ref: 1, unit: "bardak", cal: 2, p: 0, c: 0.5, f: 0 },
  { name: "Kış Çayı", ref: 1, unit: "bardak", cal: 5, p: 0.1, c: 1, f: 0 },
  { name: "Elma Çayı (Toz/Şekerli)", ref: 1, unit: "bardak", cal: 60, p: 0.2, c: 14.5, f: 0 },
  { name: "Nane Limon", ref: 1, unit: "bardak", cal: 10, p: 0.2, c: 2, f: 0 },
  { name: "Zencefil Çayı", ref: 1, unit: "bardak", cal: 5, p: 0.1, c: 1, f: 0 },
  { name: "Hibiskus Çayı", ref: 1, unit: "bardak", cal: 2, p: 0, c: 0.5, f: 0 },
  { name: "Oolong Çayı", ref: 1, unit: "bardak", cal: 2, p: 0, c: 0.5, f: 0 },
  { name: "Beyaz Çay", ref: 1, unit: "bardak", cal: 2, p: 0, c: 0.5, f: 0 },
  { name: "Chai Tea Latte", ref: 1, unit: "bardak", cal: 210, p: 6, c: 32, f: 6.4 },
  { name: "Iced Chai Tea Latte", ref: 1, unit: "bardak", cal: 200, p: 6, c: 30, f: 6.2 },
  { name: "Matcha Latte", ref: 1, unit: "bardak", cal: 180, p: 7, c: 18, f: 8.8 },
  { name: "Iced Matcha Latte", ref: 1, unit: "bardak", cal: 160, p: 6, c: 16, f: 8 },
  { name: "Sıcak Çikolata", ref: 1, unit: "fincan", cal: 320, p: 12, c: 42, f: 11.5 },
  { name: "Beyaz Sıcak Çikolata", ref: 1, unit: "fincan", cal: 350, p: 12, c: 45, f: 13.5 },
  { name: "Sahlep", ref: 1, unit: "fincan", cal: 220, p: 6, c: 35, f: 6.2 },
  { name: "Süt (Tam Yağlı)", ref: 1, unit: "bardak", cal: 120, p: 6, c: 9, f: 6.6 },
  { name: "Süt (Yarım Yağlı)", ref: 1, unit: "bardak", cal: 90, p: 6, c: 9, f: 3.3 },
  { name: "Süt (Yağsız)", ref: 1, unit: "bardak", cal: 70, p: 6, c: 10, f: 0.6 },
  { name: "Laktozsuz Süt", ref: 1, unit: "bardak", cal: 100, p: 6, c: 9, f: 4.4 },
  { name: "Ballı Süt", ref: 1, unit: "bardak", cal: 150, p: 6, c: 16, f: 6.8 },
  { name: "Sıcak Soya Sütü", ref: 1, unit: "bardak", cal: 90, p: 6, c: 8, f: 3.7 },
  { name: "Sıcak Badem Sütü", ref: 1, unit: "bardak", cal: 40, p: 1, c: 3, f: 2.6 },
  { name: "Sıcak Yulaf Sütü", ref: 1, unit: "bardak", cal: 100, p: 2, c: 16, f: 3.1 },
  { name: "Çikolatalı Süt (Kutu)", ref: 1, unit: "kutu", cal: 160, p: 6, c: 20, f: 6.2 },
  { name: "Çilekli Süt (Kutu)", ref: 1, unit: "kutu", cal: 150, p: 6, c: 20, f: 5.1 },
  { name: "Muzlu Süt (Kutu)", ref: 1, unit: "kutu", cal: 150, p: 6, c: 20, f: 5.1 },
  { name: "Kefir (Sade)", ref: 1, unit: "bardak", cal: 100, p: 6, c: 8, f: 4.8 },
  { name: "Kefir (Meyveli)", ref: 1, unit: "bardak", cal: 140, p: 6, c: 16, f: 5.7 },
  { name: "Ayran (Tam Yağlı)", ref: 1, unit: "bardak", cal: 75, p: 4, c: 6, f: 3.8 },
  { name: "Ayran (Yarım Yağlı)", ref: 1, unit: "bardak", cal: 50, p: 4, c: 6, f: 1.1 },
  { name: "Naneli Ayran", ref: 1, unit: "bardak", cal: 75, p: 4, c: 6, f: 3.8 },
  { name: "Şalgam Suyu (Acılı)", ref: 1, unit: "bardak", cal: 10, p: 0.5, c: 2, f: 0 },
  { name: "Şalgam Suyu (Acısız)", ref: 1, unit: "bardak", cal: 10, p: 0.5, c: 2, f: 0 },

  // --- Kullanıcı Güncellemesi: İçecek 4 (Soğuk Meşrubatlar & Enerji İçecekleri) ---
  { name: "Coca-Cola (Klasik - 330ml)", ref: 1, unit: "kutu", cal: 140, p: 0, c: 35, f: 0 },
  { name: "Coca-Cola Zero / Şekersiz", ref: 1, unit: "kutu", cal: 1, p: 0, c: 0, f: 0 },
  { name: "Coca-Cola Light", ref: 1, unit: "kutu", cal: 1, p: 0, c: 0, f: 0 },
  { name: "Pepsi (Klasik)", ref: 1, unit: "kutu", cal: 140, p: 0, c: 35, f: 0 },
  { name: "Pepsi Max", ref: 1, unit: "kutu", cal: 1, p: 0, c: 0, f: 0 },
  { name: "Sprite", ref: 1, unit: "kutu", cal: 130, p: 0, c: 32.5, f: 0 },
  { name: "Sprite Şekersiz", ref: 1, unit: "kutu", cal: 2, p: 0, c: 0.5, f: 0 },
  { name: "Fanta", ref: 1, unit: "kutu", cal: 150, p: 0, c: 37.5, f: 0 },
  { name: "Yedigün", ref: 1, unit: "kutu", cal: 145, p: 0, c: 36, f: 0 },
  { name: "Schweppes (Tonik)", ref: 1, unit: "kutu", cal: 120, p: 0, c: 30, f: 0 },
  { name: "Schweppes (Mandalina)", ref: 1, unit: "kutu", cal: 135, p: 0, c: 33.5, f: 0 },
  { name: "Schweppes (Limon)", ref: 1, unit: "kutu", cal: 140, p: 0, c: 35, f: 0 },
  { name: "Fruko Gazoz", ref: 1, unit: "kutu", cal: 130, p: 0, c: 32.5, f: 0 },
  { name: "Uludağ Gazoz", ref: 1, unit: "kutu", cal: 125, p: 0, c: 31, f: 0 },
  { name: "Niğde Gazozu", ref: 1, unit: "şişe", cal: 140, p: 0, c: 35, f: 0 },
  { name: "Şeftalili Gazoz", ref: 1, unit: "şişe", cal: 145, p: 0, c: 36, f: 0 },
  { name: "Çilekli Gazoz", ref: 1, unit: "şişe", cal: 145, p: 0, c: 36, f: 0 },
  { name: "Beypazarı Maden Suyu (Sade)", ref: 1, unit: "şişe", cal: 0, p: 0, c: 0, f: 0 },
  { name: "Meyveli Soda (Limonlu)", ref: 1, unit: "şişe", cal: 80, p: 0, c: 20, f: 0 },
  { name: "Meyveli Soda (Elmalı)", ref: 1, unit: "şişe", cal: 90, p: 0, c: 22.5, f: 0 },
  { name: "Limonlu Maden Suyu (Şekersiz)", ref: 1, unit: "şişe", cal: 5, p: 0, c: 1, f: 0.1 },
  { name: "Red Bull (250ml)", ref: 1, unit: "kutu", cal: 110, p: 0.5, c: 27, f: 0 },
  { name: "Red Bull Sugarfree (250ml)", ref: 1, unit: "kutu", cal: 5, p: 0.5, c: 0.5, f: 0.1 },
  { name: "Monster Energy (500ml)", ref: 1, unit: "kutu", cal: 230, p: 0, c: 57.5, f: 0 },
  { name: "Monster Ultra (Şekersiz)", ref: 1, unit: "kutu", cal: 10, p: 0, c: 2, f: 0.2 },
  { name: "Burn (250ml)", ref: 1, unit: "kutu", cal: 115, p: 0, c: 28.5, f: 0 },
  { name: "Lipton Ice Tea (Şeftali)", ref: 1, unit: "kutu", cal: 95, p: 0, c: 23.5, f: 0.1 },
  { name: "Lipton Ice Tea (Limon)", ref: 1, unit: "kutu", cal: 90, p: 0, c: 22.5, f: 0 },
  { name: "Fuse Tea (Şeftali)", ref: 1, unit: "kutu", cal: 100, p: 0, c: 25, f: 0 },
  { name: "Ev Yapımı Buzlu Çay (Şekerli)", ref: 1, unit: "bardak", cal: 80, p: 0, c: 20, f: 0 },
  { name: "Taze Sıkma Portakal Suyu", ref: 1, unit: "bardak", cal: 110, p: 1.5, c: 25, f: 0.4 },
  { name: "Taze Sıkma Nar Suyu", ref: 1, unit: "bardak", cal: 130, p: 0.5, c: 31, f: 0.4 },
  { name: "Elma Suyu (Hazır Kutu)", ref: 1, unit: "bardak", cal: 120, p: 0.2, c: 29, f: 0.3 },
  { name: "Vişne Suyu (Hazır Kutu)", ref: 1, unit: "bardak", cal: 140, p: 0.5, c: 34, f: 0.2 },
  { name: "Karışık Meyve Suyu", ref: 1, unit: "bardak", cal: 135, p: 0.5, c: 32, f: 0.5 },
  { name: "Limonata (Ev Yapımı)", ref: 1, unit: "bardak", cal: 100, p: 0.2, c: 24, f: 0.3 },
  { name: "Çilekli Limonata", ref: 1, unit: "bardak", cal: 120, p: 0.5, c: 29, f: 0.2 },
  { name: "Naneli Limonata", ref: 1, unit: "bardak", cal: 105, p: 0.2, c: 25, f: 0.3 },
  { name: "Çilekli Smoothie", ref: 1, unit: "bardak", cal: 160, p: 3, c: 32, f: 2.2 },
  { name: "Yeşil Detoks Suyu", ref: 1, unit: "bardak", cal: 60, p: 1, c: 14, f: 0 },

  // --- Kullanıcı Güncellemesi: İçecek 5 (Alkollü İçecekler & Kokteyller) ---
  { name: "Bira (Açık Renkli/Lager)", ref: 50, unit: "cl", cal: 210, p: 2.5, c: 15, f: 0 },
  { name: "Bira (Koyu Renkli/Stout)", ref: 50, unit: "cl", cal: 250, p: 3, c: 20, f: 0 },
  { name: "Bira (Filtresiz)", ref: 50, unit: "cl", cal: 230, p: 3.5, c: 16, f: 0 },
  { name: "Bira (Alkolsüz)", ref: 50, unit: "cl", cal: 110, p: 2.5, c: 25, f: 0 },
  { name: "Kırmızı Şarap", ref: 1, unit: "kadeh", cal: 125, p: 0.2, c: 4, f: 0 },
  { name: "Beyaz Şarap", ref: 1, unit: "kadeh", cal: 120, p: 0.1, c: 3, f: 0 },
  { name: "Roze Şarap", ref: 1, unit: "kadeh", cal: 115, p: 0.1, c: 3.5, f: 0 },
  { name: "Şampanya", ref: 1, unit: "kadeh", cal: 110, p: 0.2, c: 3, f: 0 },
  { name: "Sıcak Şarap", ref: 1, unit: "bardak", cal: 200, p: 0.5, c: 18, f: 0 },
  { name: "Rakı (Tek)", ref: 1, unit: "kadeh", cal: 105, p: 0, c: 0, f: 0 },
  { name: "Rakı (Duble)", ref: 1, unit: "kadeh", cal: 210, p: 0, c: 0, f: 0 },
  { name: "Votka (Sek)", ref: 1, unit: "shot", cal: 95, p: 0, c: 0, f: 0 },
  { name: "Votka Enerji", ref: 1, unit: "bardak", cal: 205, p: 0.5, c: 27, f: 0 },
  { name: "Votka Portakal (Screwdriver)", ref: 1, unit: "bardak", cal: 160, p: 0.5, c: 16, f: 0 },
  { name: "Viski (Sek)", ref: 1, unit: "kadeh", cal: 95, p: 0, c: 0, f: 0 },
  { name: "Viski Kola", ref: 1, unit: "bardak", cal: 180, p: 0, c: 21.2, f: 0 },
  { name: "Cin (Sek)", ref: 1, unit: "kadeh", cal: 95, p: 0, c: 0, f: 0 },
  { name: "Cin Tonik", ref: 1, unit: "bardak", cal: 165, p: 0, c: 17.5, f: 0 },
  { name: "Tekila (Shot)", ref: 1, unit: "shot", cal: 95, p: 0, c: 0, f: 0 },
  { name: "Rom (Sek)", ref: 1, unit: "shot", cal: 95, p: 0, c: 0, f: 0 },
  { name: "Margarita (Kokteyl)", ref: 1, unit: "kadeh", cal: 180, p: 0, c: 12, f: 0 },
  { name: "Mojito (Kokteyl)", ref: 1, unit: "kadeh", cal: 160, p: 0, c: 15, f: 0 },
  { name: "Long Island Iced Tea", ref: 1, unit: "bardak", cal: 270, p: 0, c: 18, f: 0 },
  { name: "Pina Colada", ref: 1, unit: "kadeh", cal: 300, p: 1, c: 30, f: 12 },
  { name: "Cosmopolitan", ref: 1, unit: "kadeh", cal: 150, p: 0, c: 11, f: 0 },
  { name: "Espresso Martini", ref: 1, unit: "kadeh", cal: 180, p: 0.5, c: 15, f: 0 },
  { name: "Aperol Spritz", ref: 1, unit: "kadeh", cal: 160, p: 0, c: 14, f: 0 },
  { name: "Sangria", ref: 1, unit: "kadeh", cal: 170, p: 0.5, c: 20, f: 0 },
  { name: "Baileys", ref: 1, unit: "shot", cal: 160, p: 1.5, c: 12.5, f: 6.6 },
  { name: "Jägermeister", ref: 1, unit: "shot", cal: 140, p: 0, c: 14, f: 0 },
  { name: "Konyak", ref: 1, unit: "kadeh", cal: 95, p: 0, c: 0, f: 0 },
  { name: "Campari", ref: 1, unit: "kadeh", cal: 110, p: 0, c: 10, f: 0 },
  { name: "Absinthe", ref: 1, unit: "shot", cal: 110, p: 0, c: 0, f: 0 },
  { name: "Elma Şarabı / Cider", ref: 1, unit: "şişe", cal: 150, p: 0, c: 18, f: 0 },
  { name: "Martini (Bianco)", ref: 1, unit: "kadeh", cal: 80, p: 0, c: 8, f: 0 },
  { name: "White Russian", ref: 1, unit: "bardak", cal: 260, p: 3, c: 18, f: 10.6 },
  { name: "Negroni", ref: 1, unit: "kadeh", cal: 190, p: 0, c: 12, f: 0 },
  { name: "Daiquiri", ref: 1, unit: "kadeh", cal: 170, p: 0, c: 15, f: 0 },
  { name: "Tequila Sunrise", ref: 1, unit: "bardak", cal: 180, p: 0.5, c: 20, f: 0 },
  { name: "Lynchburg Lemonade", ref: 1, unit: "bardak", cal: 210, p: 0, c: 25, f: 0 },

  // --- Kullanıcı Güncellemesi: Tatlı 1 (Sütlü Tatlılar) ---
  { name: "Fırın Sütlaç", ref: 1, unit: "porsiyon", cal: 258, p: 6, c: 45, f: 6 },
  { name: "Anne Sütlacı (Ev Tipi)", ref: 1, unit: "porsiyon", cal: 225, p: 5, c: 40, f: 5 },
  { name: "Supangle", ref: 1, unit: "porsiyon", cal: 292, p: 6, c: 40, f: 12 },
  { name: "Profiterol", ref: 1, unit: "porsiyon", cal: 382, p: 6, c: 40, f: 22 },
  { name: "Keşkül", ref: 1, unit: "porsiyon", cal: 258, p: 7, c: 35, f: 10 },
  { name: "Kazandibi", ref: 1, unit: "porsiyon", cal: 224, p: 5, c: 42, f: 4 },
  { name: "Tavukgöğsü (Gerçek)", ref: 1, unit: "porsiyon", cal: 237, p: 8, c: 40, f: 5 },
  { name: "Yalancı Tavukgöğsü", ref: 1, unit: "porsiyon", cal: 272, p: 5, c: 45, f: 8 },
  { name: "Trileçe (Karamelli)", ref: 1, unit: "dilim", cal: 296, p: 7, c: 40, f: 12 },
  { name: "Trileçe (Frambuazlı)", ref: 1, unit: "dilim", cal: 286, p: 7, c: 42, f: 10 },
  { name: "Magnolia (Muzlu)", ref: 1, unit: "kavanoz", cal: 295, p: 5, c: 35, f: 15 },
  { name: "Magnolia (Çilekli)", ref: 1, unit: "kavanoz", cal: 270, p: 4, c: 32, f: 14 },
  { name: "Magnolia (Oreolu)", ref: 1, unit: "kavanoz", cal: 346, p: 6, c: 40, f: 18 },
  { name: "Güllaç (Cevizli)", ref: 1, unit: "dilim", cal: 245, p: 6, c: 35, f: 9 },
  { name: "Güllaç (Fıstıklı/Narlı)", ref: 1, unit: "dilim", cal: 262, p: 7, c: 36, f: 10 },
  { name: "Muhallebi (Sade)", ref: 1, unit: "kase", cal: 194, p: 5, c: 30, f: 6 },
  { name: "Sakızlı Muhallebi", ref: 1, unit: "kase", cal: 202, p: 5, c: 32, f: 6 },
  { name: "Kadayıflı Muhallebi", ref: 1, unit: "kase", cal: 312, p: 6, c: 45, f: 12 },
  { name: "Su Muhallebisi", ref: 1, unit: "kase", cal: 134, p: 4, c: 25, f: 2 },
  { name: "İncir Uyutması", ref: 1, unit: "kase", cal: 256, p: 6, c: 40, f: 8 },
  { name: "Kakaolu Puding", ref: 1, unit: "kase", cal: 172, p: 4, c: 30, f: 4 },
  { name: "Muzlu Puding", ref: 1, unit: "kase", cal: 171, p: 4, c: 32, f: 3 },
  { name: "Vanilyalı Puding", ref: 1, unit: "kase", cal: 176, p: 4, c: 31, f: 4 },
  { name: "Creme Brulee", ref: 1, unit: "kase", cal: 320, p: 5, c: 30, f: 20 },
  { name: "Panna Cotta", ref: 1, unit: "kase", cal: 341, p: 4, c: 25, f: 25 },
  { name: "Sütlü İrmik Tatlısı", ref: 1, unit: "dilim", cal: 256, p: 6, c: 40, f: 8 },
  { name: "Çikolatalı İrmik Tatlısı", ref: 1, unit: "dilim", cal: 316, p: 7, c: 45, f: 12 },
  { name: "Saray Sarması", ref: 1, unit: "porsiyon", cal: 262, p: 5, c: 38, f: 10 },
  { name: "Padişah Yastığı", ref: 1, unit: "porsiyon", cal: 330, p: 6, c: 45, f: 14 },
  { name: "Sütlü Nuriye", ref: 1, unit: "dilim", cal: 311, p: 4, c: 40, f: 15 },
  { name: "Zerde", ref: 1, unit: "kase", cal: 164, p: 1, c: 40, f: 0 },
  { name: "Aşure", ref: 1, unit: "kase", cal: 333, p: 7, c: 65, f: 5 },
  { name: "Höşmerim", ref: 1, unit: "porsiyon", cal: 328, p: 10, c: 45, f: 12 },
  { name: "Sütlü Kadayıf", ref: 1, unit: "porsiyon", cal: 367, p: 8, c: 50, f: 15 },
  { name: "Sütlü Hayrabolu Tatlısı", ref: 1, unit: "porsiyon", cal: 294, p: 6, c: 45, f: 10 },
  { name: "Fincan Tatlısı", ref: 1, unit: "adet", cal: 181, p: 4, c: 30, f: 5 },
  { name: "Gelin Pastası", ref: 1, unit: "dilim", cal: 312, p: 6, c: 45, f: 12 },
  { name: "Kedi Dili Ekler Pasta", ref: 1, unit: "adet", cal: 286, p: 5, c: 35, f: 14 },
  { name: "Bisküvili Soğuk Pasta", ref: 1, unit: "dilim", cal: 348, p: 6, c: 45, f: 16 },
  { name: "Ev Yapımı Süt Dilimi", ref: 1, unit: "adet", cal: 208, p: 5, c: 20, f: 12 },

  // --- Kullanıcı Güncellemesi: Tatlı 2 (Şerbetli Tatlılar & Yöresel) ---
  { name: "Fıstıklı Baklava", ref: 2, unit: "dilim", cal: 346, p: 4, c: 42, f: 18 },
  { name: "Cevizli Baklava", ref: 2, unit: "dilim", cal: 336, p: 3, c: 45, f: 16 },
  { name: "Kuru Baklava", ref: 2, unit: "dilim", cal: 360, p: 5, c: 40, f: 20 },
  { name: "Soğuk Baklava", ref: 2, unit: "dilim", cal: 339, p: 6, c: 45, f: 15 },
  { name: "Şöbiyet", ref: 2, unit: "adet", cal: 378, p: 5, c: 40, f: 22 },
  { name: "Havuç Dilimi Baklava", ref: 1, unit: "adet", cal: 469, p: 6, c: 55, f: 25 },
  { name: "Bülbül Yuvası", ref: 2, unit: "adet", cal: 376, p: 4, c: 45, f: 20 },
  { name: "Saray Burması", ref: 2, unit: "adet", cal: 346, p: 4, c: 42, f: 18 },
  { name: "Dilber Dudağı", ref: 2, unit: "adet", cal: 329, p: 4, c: 40, f: 17 },
  { name: "Midye Baklava", ref: 2, unit: "adet", cal: 359, p: 5, c: 42, f: 19 },
  { name: "Künefe (Sade)", ref: 1, unit: "porsiyon", cal: 448, p: 8, c: 50, f: 24 },
  { name: "Fıstıkzade Künefe", ref: 1, unit: "porsiyon", cal: 530, p: 10, c: 55, f: 30 },
  { name: "Hasır Kadayıf", ref: 1, unit: "porsiyon", cal: 400, p: 5, c: 50, f: 20 },
  { name: "Burma Kadayıf", ref: 1, unit: "porsiyon", cal: 398, p: 4, c: 55, f: 18 },
  { name: "Taş Kadayıf (Yassı Kadayıf)", ref: 1, unit: "porsiyon", cal: 327, p: 3, c: 45, f: 15 },
  { name: "Ekmek Kadayıfı (Kaymaklı)", ref: 1, unit: "porsiyon", cal: 422, p: 5, c: 60, f: 18 },
  { name: "Ekmek Kadayıfı (Sade)", ref: 1, unit: "porsiyon", cal: 301, p: 4, c: 60, f: 5 },
  { name: "Revani (Sade)", ref: 1, unit: "porsiyon", cal: 308, p: 5, c: 45, f: 12 },
  { name: "Haşhaşlı Revani", ref: 1, unit: "porsiyon", cal: 327, p: 6, c: 42, f: 15 },
  { name: "Şekerpare", ref: 2, unit: "adet", cal: 340, p: 4, c: 45, f: 16 },
  { name: "Kemalpaşa Tatlısı", ref: 5, unit: "adet", cal: 314, p: 6, c: 50, f: 10 },
  { name: "Peynir Tatlısı", ref: 1, unit: "porsiyon", cal: 320, p: 8, c: 45, f: 12 },
  { name: "Tulumba Tatlısı", ref: 3, unit: "adet", cal: 298, p: 3, c: 40, f: 14 },
  { name: "Halka Tatlısı", ref: 1, unit: "adet", cal: 323, p: 2, c: 45, f: 15 },
  { name: "Lokma", ref: 5, unit: "adet", cal: 320, p: 3, c: 50, f: 12 },
  { name: "İzmir Lokma", ref: 1, unit: "porsiyon", cal: 362, p: 4, c: 55, f: 14 },
  { name: "Vezir Parmağı", ref: 2, unit: "adet", cal: 307, p: 3, c: 40, f: 15 },
  { name: "Hanım Göbeği", ref: 2, unit: "adet", cal: 290, p: 3, c: 38, f: 14 },
  { name: "Kalburabastı", ref: 2, unit: "adet", cal: 338, p: 4, c: 40, f: 18 },
  { name: "İrmik Helvası (Sade)", ref: 1, unit: "porsiyon", cal: 331, p: 4, c: 45, f: 15 },
  { name: "Dondurmalı İrmik Helvası", ref: 1, unit: "porsiyon", cal: 424, p: 6, c: 55, f: 20 },
  { name: "Un Helvası", ref: 1, unit: "porsiyon", cal: 316, p: 3, c: 40, f: 16 },
  { name: "Saray Helvası", ref: 1, unit: "porsiyon", cal: 282, p: 4, c: 35, f: 14 },
  { name: "Höşmerim (Balıkesir)", ref: 1, unit: "porsiyon", cal: 320, p: 8, c: 45, f: 12 },
  { name: "Müşebbek (Antakya)", ref: 1, unit: "porsiyon", cal: 323, p: 2, c: 45, f: 15 },
  { name: "Karakuş Tatlısı", ref: 1, unit: "porsiyon", cal: 334, p: 3, c: 40, f: 18 },
  { name: "Nevzine Tatlısı", ref: 1, unit: "porsiyon", cal: 376, p: 4, c: 45, f: 20 },
  { name: "Kerebiç", ref: 1, unit: "adet", cal: 291, p: 4, c: 35, f: 15 },
  { name: "Şıllık Tatlısı (Şanlıurfa)", ref: 1, unit: "porsiyon", cal: 288, p: 5, c: 40, f: 12 },
  { name: "Kadıboğan", ref: 1, unit: "porsiyon", cal: 340, p: 4, c: 45, f: 16 },

  // --- Kullanıcı Güncellemesi: Tatlı 3 (Pastalar, Kafeterya & Çikolatalar) ---
  { name: "Dubai Çikolatası", ref: 100, unit: "g", cal: 527, p: 8, c: 45, f: 35 },
  { name: "San Sebastian Cheesecake", ref: 1, unit: "dilim", cal: 442, p: 8, c: 35, f: 30 },
  { name: "Çikolatalı Cheesecake", ref: 1, unit: "dilim", cal: 413, p: 7, c: 40, f: 25 },
  { name: "Limonlu Cheesecake", ref: 1, unit: "dilim", cal: 374, p: 6, c: 38, f: 22 },
  { name: "Frambuazlı Cheesecake", ref: 1, unit: "dilim", cal: 364, p: 6, c: 40, f: 20 },
  { name: "Tiramisu (Orijinal)", ref: 1, unit: "dilim", cal: 366, p: 7, c: 35, f: 22 },
  { name: "Kedi Dilli Tiramisu (Ev Tipi)", ref: 1, unit: "dilim", cal: 346, p: 6, c: 40, f: 18 },
  { name: "Ekler (Çikolatalı)", ref: 2, unit: "adet", cal: 344, p: 6, c: 35, f: 20 },
  { name: "Ekler (Beyaz Çikolatalı)", ref: 2, unit: "adet", cal: 374, p: 6, c: 38, f: 22 },
  { name: "Paris Brest", ref: 1, unit: "adet", cal: 413, p: 7, c: 40, f: 25 },
  { name: "Alman Pastası", ref: 1, unit: "adet", cal: 366, p: 6, c: 45, f: 18 },
  { name: "Köstebek Pasta", ref: 1, unit: "dilim", cal: 360, p: 5, c: 40, f: 20 },
  { name: "Mozaik Pasta", ref: 1, unit: "dilim", cal: 358, p: 4, c: 45, f: 18 },
  { name: "Rulo Pasta (Muzlu)", ref: 1, unit: "dilim", cal: 315, p: 5, c: 40, f: 15 },
  { name: "Red Velvet (Kırmızı Kadife)", ref: 1, unit: "dilim", cal: 422, p: 6, c: 50, f: 22 },
  { name: "Çikolatalı Yaş Pasta", ref: 1, unit: "dilim", cal: 420, p: 5, c: 55, f: 20 },
  { name: "Meyveli Yaş Pasta", ref: 1, unit: "dilim", cal: 342, p: 4, c: 50, f: 14 },
  { name: "Kara Orman Pastası", ref: 1, unit: "dilim", cal: 390, p: 5, c: 52, f: 18 },
  { name: "Malaga Pasta", ref: 1, unit: "dilim", cal: 420, p: 6, c: 45, f: 24 },
  { name: "Orman Meyveli Turta", ref: 1, unit: "dilim", cal: 340, p: 4, c: 45, f: 16 },
  { name: "Elmalı Turta", ref: 1, unit: "dilim", cal: 347, p: 3, c: 50, f: 15 },
  { name: "Brownie (Cevizli)", ref: 1, unit: "dilim", cal: 398, p: 5, c: 45, f: 22 },
  { name: "Islak Kek", ref: 1, unit: "dilim", cal: 324, p: 5, c: 40, f: 16 },
  { name: "Ağlayan Pasta", ref: 1, unit: "dilim", cal: 366, p: 6, c: 45, f: 18 },
  { name: "Sufle (Çikolatalı)", ref: 1, unit: "porsiyon", cal: 400, p: 6, c: 40, f: 24 },
  { name: "Sufle (Beyaz Çikolatalı)", ref: 1, unit: "porsiyon", cal: 417, p: 6, c: 42, f: 25 },
  { name: "Çikolatalı Fondan", ref: 1, unit: "porsiyon", cal: 370, p: 5, c: 38, f: 22 },
  { name: "Waffle (Çikolata + Meyve)", ref: 1, unit: "porsiyon", cal: 512, p: 8, c: 75, f: 20 },
  { name: "Pankek (Ballı/Muzlu)", ref: 1, unit: "porsiyon", cal: 360, p: 8, c: 55, f: 12 },
  { name: "Krep (Nutellalı)", ref: 1, unit: "adet", cal: 370, p: 7, c: 45, f: 18 },
  { name: "Donut (Çikolata Kaplı)", ref: 1, unit: "adet", cal: 338, p: 4, c: 40, f: 18 },
  { name: "Makaron", ref: 3, unit: "adet", cal: 222, p: 3, c: 30, f: 10 },
  { name: "Churros (Çikolatalı)", ref: 1, unit: "porsiyon", cal: 376, p: 4, c: 45, f: 20 },
  { name: "Truff Çikolata", ref: 3, unit: "adet", cal: 271, p: 4, c: 30, f: 15 },
  { name: "Pralin Çikolata", ref: 50, unit: "g", cal: 256, p: 3, c: 25, f: 16 },
  { name: "Bitter Çikolata (%70)", ref: 50, unit: "g", cal: 268, p: 4, c: 18, f: 20 },
  { name: "Sütlü Çikolata", ref: 50, unit: "g", cal: 259, p: 3, c: 28, f: 15 },
  { name: "Beyaz Çikolata", ref: 50, unit: "g", cal: 276, p: 3, c: 30, f: 16 },
  { name: "Fıstıklı Çikolata (Kare)", ref: 50, unit: "g", cal: 282, p: 5, c: 25, f: 18 },
  { name: "Bisküvili Çikolata", ref: 50, unit: "g", cal: 266, p: 3, c: 32, f: 14 },

  // --- Kullanıcı Güncellemesi: Tatlı 4 (Meyve Tatlıları, Kurabiyeler, Geleneksel Şekerlemeler) ---
  { name: "Kabak Tatlısı (Tahinli/Cevizli)", ref: 1, unit: "porsiyon", cal: 304, p: 4, c: 45, f: 12 },
  { name: "Kabak Tatlısı (Sade)", ref: 1, unit: "porsiyon", cal: 168, p: 2, c: 40, f: 0 },
  { name: "Ayva Tatlısı (Kaymaklı)", ref: 1, unit: "adet", cal: 298, p: 2, c: 50, f: 10 },
  { name: "İncir Tatlısı", ref: 1, unit: "porsiyon", cal: 264, p: 3, c: 45, f: 8 },
  { name: "Armut Tatlısı", ref: 1, unit: "adet", cal: 162, p: 1, c: 35, f: 2 },
  { name: "Zonguldak Beyaz Baklava", ref: 1, unit: "porsiyon", cal: 331, p: 4, c: 45, f: 15 },
  { name: "Erzurum Kadayıf Dolması", ref: 1, unit: "adet", cal: 386, p: 6, c: 50, f: 18 },
  { name: "Laz Böreği", ref: 1, unit: "dilim", cal: 356, p: 8, c: 45, f: 16 },
  { name: "Pepeçura", ref: 1, unit: "kase", cal: 144, p: 1, c: 35, f: 0 },
  { name: "Karsambaç", ref: 1, unit: "porsiyon", cal: 100, p: 0, c: 25, f: 0 },
  { name: "Bici Bici", ref: 1, unit: "porsiyon", cal: 164, p: 1, c: 40, f: 0 },
  { name: "Haytalı", ref: 1, unit: "kase", cal: 188, p: 3, c: 35, f: 4 },
  { name: "Paluze", ref: 1, unit: "kase", cal: 120, p: 0, c: 30, f: 0 },
  { name: "Pestil", ref: 50, unit: "g", cal: 153, p: 1, c: 35, f: 1 },
  { name: "Cevizli Sucuk", ref: 50, unit: "g", cal: 226, p: 4, c: 30, f: 10 },
  { name: "Lokum (Sade)", ref: 50, unit: "g", cal: 168, p: 0, c: 42, f: 0 },
  { name: "Çifte Kavrulmuş Lokum", ref: 50, unit: "g", cal: 204, p: 2, c: 40, f: 4 },
  { name: "Pişmaniye", ref: 50, unit: "g", cal: 202, p: 2, c: 35, f: 6 },
  { name: "Saray Helvası (Kutu)", ref: 50, unit: "g", cal: 248, p: 3, c: 32, f: 12 },
  { name: "Çekme Helva", ref: 50, unit: "g", cal: 258, p: 3, c: 30, f: 14 },
  { name: "Un Kurabiyesi", ref: 2, unit: "adet", cal: 287, p: 3, c: 35, f: 15 },
  { name: "Kavala Kurabiyesi", ref: 2, unit: "adet", cal: 298, p: 4, c: 30, f: 18 },
  { name: "Elmalı Kurabiye", ref: 2, unit: "adet", cal: 280, p: 3, c: 40, f: 12 },
  { name: "Acıbadem Kurabiyesi", ref: 1, unit: "adet", cal: 226, p: 4, c: 30, f: 10 },
  { name: "Mantar Kurabiye", ref: 3, unit: "adet", cal: 278, p: 3, c: 35, f: 14 },
  { name: "Tırtıl Kurabiye", ref: 4, unit: "adet", cal: 248, p: 3, c: 32, f: 12 },
  { name: "Damla Çikolatalı Kurabiye", ref: 1, unit: "adet", cal: 291, p: 4, c: 35, f: 15 },
  { name: "Cevizli Kurabiye", ref: 2, unit: "adet", cal: 280, p: 4, c: 30, f: 16 },
  { name: "Şekerli Kurabiye", ref: 2, unit: "adet", cal: 238, p: 2, c: 35, f: 10 },
  { name: "Kokoş (Hindistan Cevizli Kurabiye)", ref: 1, unit: "adet", cal: 247, p: 3, c: 25, f: 15 },
  { name: "Islak Kurabiye (Brownie Tipi)", ref: 1, unit: "adet", cal: 318, p: 4, c: 35, f: 18 },
  { name: "Tuzlu Kurabiye (Küçük)", ref: 5, unit: "adet", cal: 247, p: 3, c: 25, f: 15 },
  { name: "Çatal Kurabiye", ref: 1, unit: "adet", cal: 216, p: 2, c: 25, f: 12 },
  { name: "Kandil Simidi", ref: 1, unit: "adet", cal: 178, p: 2, c: 20, f: 10 },
  { name: "Tuzlu Kuru Pasta", ref: 100, unit: "g", cal: 429, p: 6, c: 45, f: 25 },
  { name: "Tatlı Kuru Pasta", ref: 100, unit: "g", cal: 438, p: 5, c: 55, f: 22 },
  { name: "Petibör Bisküvi", ref: 100, unit: "g", cal: 436, p: 7, c: 75, f: 12 },
  { name: "Burçak Bisküvi", ref: 100, unit: "g", cal: 472, p: 8, c: 65, f: 20 },
  { name: "Çikolatalı Gofret", ref: 50, unit: "g", cal: 240, p: 3, c: 30, f: 12 },
  { name: "Sade Anne Keki", ref: 1, unit: "dilim", cal: 264, p: 4, c: 35, f: 12 },

  // --- Kullanıcı Güncellemesi: Tatlı 5 (Dondurmalar, Milkshake & Endüstriyel Çikolatalar) ---
  { name: "Maraş Dondurması", ref: 2, unit: "top", cal: 192, p: 5, c: 25, f: 8 },
  { name: "Kakaolu Dondurma", ref: 2, unit: "top", cal: 218, p: 4, c: 28, f: 10 },
  { name: "Çilekli Dondurma", ref: 2, unit: "top", cal: 186, p: 3, c: 30, f: 6 },
  { name: "Fıstıklı Dondurma", ref: 2, unit: "top", cal: 232, p: 6, c: 25, f: 12 },
  { name: "Karamel Dondurma", ref: 2, unit: "top", cal: 230, p: 3, c: 32, f: 10 },
  { name: "Limonlu Sorbe", ref: 2, unit: "top", cal: 140, p: 0, c: 35, f: 0 },
  { name: "Çilekli Sorbe", ref: 2, unit: "top", cal: 128, p: 0, c: 32, f: 0 },
  { name: "İtalyan Gelato (Çikolata)", ref: 2, unit: "top", cal: 248, p: 5, c: 30, f: 12 },
  { name: "İtalyan Gelato (Stracciatella)", ref: 2, unit: "top", cal: 254, p: 4, c: 28, f: 14 },
  { name: "Magnum (Klasik)", ref: 1, unit: "adet", cal: 260, p: 3, c: 26, f: 16 },
  { name: "Magnum (Bademli)", ref: 1, unit: "adet", cal: 278, p: 4, c: 25, f: 18 },
  { name: "Cornetto (Çikolata)", ref: 1, unit: "adet", cal: 240, p: 3, c: 30, f: 12 },
  { name: "Twister / Meyveli Buz", ref: 1, unit: "adet", cal: 72, p: 0, c: 18, f: 0 },
  { name: "Nogger", ref: 1, unit: "adet", cal: 220, p: 3, c: 25, f: 12 },
  { name: "Max (Kakaolu)", ref: 1, unit: "adet", cal: 142, p: 2, c: 20, f: 6 },
  { name: "Kutu Dondurma (Sade)", ref: 2, unit: "top", cal: 180, p: 3, c: 24, f: 8 },
  { name: "Kağıt Helva (Arası Dondurmalı)", ref: 1, unit: "adet", cal: 268, p: 4, c: 45, f: 8 },
  { name: "Meyve Salatası", ref: 1, unit: "kase", cal: 104, p: 1, c: 25, f: 0 },
  { name: "Muzlu Split", ref: 1, unit: "porsiyon", cal: 440, p: 5, c: 60, f: 20 },
  { name: "Kup Griye", ref: 1, unit: "porsiyon", cal: 402, p: 6, c: 45, f: 22 },
  { name: "Milkshake (Çikolata)", ref: 1, unit: "bardak", cal: 358, p: 8, c: 50, f: 14 },
  { name: "Milkshake (Çilek)", ref: 1, unit: "bardak", cal: 298, p: 7, c: 45, f: 10 },
  { name: "Milkshake (Muz)", ref: 1, unit: "bardak", cal: 310, p: 7, c: 48, f: 10 },
  { name: "Dondurmalı Frappe", ref: 1, unit: "bardak", cal: 292, p: 6, c: 40, f: 12 },
  { name: "Meyveli Parfe", ref: 1, unit: "porsiyon", cal: 322, p: 5, c: 35, f: 18 },
  { name: "Çikolata Şelalesi (Meyve Banılmış)", ref: 1, unit: "porsiyon", cal: 376, p: 4, c: 45, f: 20 },
  { name: "Çikolata Fondü", ref: 1, unit: "porsiyon", cal: 445, p: 5, c: 50, f: 25 },
  { name: "Krokan", ref: 50, unit: "g", cal: 262, p: 4, c: 30, f: 14 },
  { name: "Tahin Helvası", ref: 50, unit: "g", cal: 268, p: 6, c: 25, f: 16 },
  { name: "Yaz Helvası (Cevizli)", ref: 50, unit: "g", cal: 258, p: 5, c: 28, f: 14 },
  { name: "Kestane Şekeri", ref: 3, unit: "adet", cal: 177, p: 2, c: 40, f: 1 },
  { name: "Cevizli Kaşık Helvası", ref: 1, unit: "porsiyon", cal: 318, p: 4, c: 35, f: 18 },
  { name: "Mevlana Şekeri (Peynir Şekeri)", ref: 50, unit: "g", cal: 192, p: 0, c: 48, f: 0 },
  { name: "Macun Şekeri", ref: 1, unit: "porsiyon", cal: 140, p: 0, c: 35, f: 0 },
  { name: "Pamuk Şeker", ref: 1, unit: "adet", cal: 100, p: 0, c: 25, f: 0 },
  { name: "Elma Şekeri", ref: 1, unit: "adet", cal: 160, p: 0, c: 40, f: 0 },
  { name: "Fırın Ayva Tatlısı (Sade)", ref: 1, unit: "adet", cal: 124, p: 1, c: 30, f: 0 },
  { name: "Kozalak Tatlısı (Mısır Gevrekli)", ref: 1, unit: "adet", cal: 256, p: 2, c: 35, f: 12 },
  { name: "Snickers (Standart)", ref: 50, unit: "g", cal: 244, p: 4, c: 30, f: 12 },
  { name: "Metro Çikolata (Standart)", ref: 50, unit: "g", cal: 226, p: 2, c: 32, f: 10 },

  // --- Kullanıcı Güncellemesi: Ekstra Yemek 1 (Mantı Çeşitleri) ---
  { name: "Kayseri Mantısı", ref: 1, unit: "porsiyon", cal: 402, p: 15, c: 45, f: 18 },
  { name: "Boşnak Mantısı (Börek Tipi)", ref: 1, unit: "porsiyon", cal: 497, p: 18, c: 50, f: 25 },
  { name: "Tepsi Mantısı", ref: 1, unit: "porsiyon", cal: 436, p: 16, c: 48, f: 20 },
  { name: "Sinop Mantısı (Cevizli)", ref: 1, unit: "porsiyon", cal: 454, p: 14, c: 50, f: 22 },
  { name: "Çıtır Mantı (Kızartma)", ref: 1, unit: "porsiyon", cal: 533, p: 14, c: 46, f: 33 },
  { name: "Pelmeni (Rus Mantısı)", ref: 1, unit: "porsiyon", cal: 388, p: 16, c: 42, f: 16 },
  { name: "Yağ Mantısı", ref: 1, unit: "porsiyon", cal: 485, p: 15, c: 40, f: 25 },

  // --- Kullanıcı Güncellemesi: Ekstra Yemek 2 (Börek Çeşitleri) ---
  { name: "Boşnak Böreği (Kıymalı)", ref: 1, unit: "porsiyon", cal: 414, p: 14, c: 40, f: 22 },
  { name: "Boşnak Böreği (Ispanaklı)", ref: 1, unit: "porsiyon", cal: 388, p: 10, c: 42, f: 20 },
  { name: "Boşnak Böreği (Peynirli)", ref: 1, unit: "porsiyon", cal: 400, p: 12, c: 40, f: 20 },
  { name: "Kürt Böreği (Sade, Pudra Şekerli)", ref: 1, unit: "porsiyon", cal: 477, p: 8, c: 55, f: 25 },
  { name: "Su Böreği (Peynirli)", ref: 1, unit: "porsiyon", cal: 368, p: 12, c: 35, f: 20 },
  { name: "Kol Böreği (Kıymalı)", ref: 1, unit: "porsiyon", cal: 438, p: 15, c: 45, f: 22 },
  { name: "Kol Böreği (Peynirli)", ref: 1, unit: "porsiyon", cal: 414, p: 12, c: 45, f: 18 },
  { name: "Gül Böreği (Patatesli)", ref: 1, unit: "adet", cal: 386, p: 8, c: 48, f: 18 },
  { name: "Sigara Böreği (Kızartma)", ref: 4, unit: "adet", cal: 295, p: 10, c: 30, f: 15 },
  { name: "Paçanga Böreği", ref: 1, unit: "adet", cal: 310, p: 12, c: 25, f: 18 },
  { name: "Çiğ Börek / Şırbörek", ref: 1, unit: "adet", cal: 296, p: 10, c: 28, f: 16 },
  { name: "Talaş Böreği", ref: 1, unit: "adet", cal: 430, p: 15, c: 40, f: 22 },
  { name: "Milföy Börek (Peynirli)", ref: 2, unit: "adet", cal: 382, p: 8, c: 35, f: 22 },

  // --- Kullanıcı Güncellemesi: Ekstra Yemek 3 (Pideler & Lahmacun) ---
  { name: "Kuşbaşılı Kaşarlı Pide", ref: 1, unit: "porsiyon", cal: 538, p: 25, c: 60, f: 22 },
  { name: "Kıymalı Pide (Standart)", ref: 1, unit: "porsiyon", cal: 502, p: 20, c: 65, f: 18 },
  { name: "Kaşarlı Pide (Standart)", ref: 1, unit: "porsiyon", cal: 512, p: 18, c: 65, f: 20 },
  { name: "Kavurmalı Pide", ref: 1, unit: "porsiyon", cal: 586, p: 28, c: 60, f: 26 },
  { name: "Bafra Pidesi (Kapalı Kıymalı)", ref: 1, unit: "porsiyon", cal: 488, p: 22, c: 55, f: 20 },
  { name: "Karadeniz Pidesi (Kavurmalı Ymt)", ref: 1, unit: "porsiyon", cal: 592, p: 30, c: 55, f: 28 },
  { name: "Kır Pidesi (Kıymalı)", ref: 1, unit: "adet", cal: 354, p: 12, c: 45, f: 14 },
  { name: "Kır Pidesi (Peynirli)", ref: 1, unit: "adet", cal: 328, p: 10, c: 45, f: 12 },
  { name: "Lahmacun (Standart)", ref: 1, unit: "adet", cal: 260, p: 12, c: 35, f: 8 },
  { name: "Fındık Lahmacun", ref: 3, unit: "adet", cal: 241, p: 10, c: 30, f: 9 },
  { name: "Cantık (Bursa Pidesi)", ref: 1, unit: "adet", cal: 278, p: 12, c: 35, f: 10 },
  { name: "Etliekmek (Konya)", ref: 1, unit: "porsiyon", cal: 486, p: 22, c: 55, f: 18 },

  // --- Kullanıcı Güncellemesi: Ekstra Yemek 4 (Simit, Poğaça & Çörekler) ---
  { name: "Simit (Sokak Simidi)", ref: 1, unit: "adet", cal: 281, p: 9, c: 50, f: 5 },
  { name: "Gevrek (İzmir)", ref: 1, unit: "adet", cal: 272, p: 9, c: 50, f: 4 },
  { name: "Sade Poğaça (Pastane Tipi)", ref: 1, unit: "adet", cal: 259, p: 6, c: 25, f: 15 },
  { name: "Peynirli Poğaça", ref: 1, unit: "adet", cal: 280, p: 8, c: 26, f: 16 },
  { name: "Zeytinli Poğaça", ref: 1, unit: "adet", cal: 290, p: 6, c: 26, f: 18 },
  { name: "Kıymalı Poğaça", ref: 1, unit: "adet", cal: 280, p: 9, c: 25, f: 16 },
  { name: "Dereotlu Peynirli Poğaça", ref: 1, unit: "adet", cal: 254, p: 8, c: 24, f: 14 },
  { name: "Karaköy Poğaçası (Yağlı)", ref: 1, unit: "adet", cal: 308, p: 7, c: 25, f: 20 },
  { name: "Anne Poğaçası (Ev Tipi)", ref: 1, unit: "adet", cal: 212, p: 5, c: 22, f: 12 },
  { name: "Sade Açma", ref: 1, unit: "adet", cal: 350, p: 7, c: 40, f: 18 },
  { name: "Zeytinli Açma", ref: 1, unit: "adet", cal: 376, p: 7, c: 42, f: 20 },
  { name: "Çikolatalı Açma", ref: 1, unit: "adet", cal: 410, p: 8, c: 45, f: 22 },
  { name: "Kaşarlı Açma", ref: 1, unit: "adet", cal: 382, p: 9, c: 40, f: 20 },
  { name: "Boyoz", ref: 1, unit: "adet", cal: 264, p: 5, c: 25, f: 16 },
  { name: "Ay Çöreği", ref: 1, unit: "adet", cal: 386, p: 8, c: 45, f: 18 },
  { name: "Tahinli Çörek", ref: 1, unit: "adet", cal: 434, p: 8, c: 45, f: 24 },
  { name: "İzmir Bomba", ref: 1, unit: "adet", cal: 186, p: 4, c: 20, f: 10 },

  // --- Kullanıcı Güncellemesi: Peynir Çeşitleri ---
  { name: "Tam Yağlı Beyaz Peynir", ref: 30, unit: "g", cal: 89.5, p: 4.5, c: 1, f: 7.5 },
  { name: "Yarım Yağlı Beyaz Peynir", ref: 30, unit: "g", cal: 65, p: 5, c: 1.5, f: 4.3 },
  { name: "Süzme Peynir", ref: 30, unit: "g", cal: 73, p: 3.5, c: 1, f: 6.1 },
  { name: "Kaşar Peyniri", ref: 30, unit: "g", cal: 106, p: 8, c: 0.5, f: 8 },
  { name: "Eski Kaşar Peyniri", ref: 30, unit: "g", cal: 118, p: 8.5, c: 0.5, f: 9.1 },
  { name: "Tulum Peyniri", ref: 30, unit: "g", cal: 113, p: 7, c: 1, f: 9 },
  { name: "Lor Peyniri (Yağsız)", ref: 50, unit: "g", cal: 45.2, p: 8, c: 1.5, f: 0.8 },
  { name: "Çeçil / Tel Peyniri", ref: 30, unit: "g", cal: 92, p: 8, c: 0.5, f: 6.4 },
  { name: "Hellim Peyniri", ref: 50, unit: "g", cal: 169, p: 12, c: 1, f: 13 },
  { name: "Krem Peynir / Karper", ref: 15, unit: "g", cal: 48, p: 1.5, c: 0.5, f: 4.4 },
  { name: "Labne Peynir", ref: 30, unit: "g", cal: 60, p: 1.5, c: 1.5, f: 5.3 },
  { name: "Burgu Peynir", ref: 30, unit: "g", cal: 88, p: 6, c: 1, f: 6.6 },

  // --- Kullanıcı Güncellemesi: Kahvaltılıklar & Şarküteri ---
  { name: "Siyah Zeytin", ref: 10, unit: "adet", cal: 44.7, p: 0.5, c: 1, f: 4.3 },
  { name: "Yeşil Zeytin", ref: 10, unit: "adet", cal: 48.5, p: 0.5, c: 1.5, f: 4.5 },
  { name: "Çizik/Kırma Zeytin", ref: 10, unit: "adet", cal: 48.5, p: 0.5, c: 1.5, f: 4.5 },
  { name: "Acuka / Cevizli Ezme", ref: 15, unit: "g", cal: 68, p: 1, c: 3, f: 5.7 },
  { name: "Tereyağı", ref: 10, unit: "g", cal: 74.7, p: 0, c: 0, f: 8.3 },
  { name: "Kaymak", ref: 15, unit: "g", cal: 85, p: 0.5, c: 0.5, f: 9 },
  { name: "Süzme Çam Balı", ref: 15, unit: "g", cal: 48, p: 0, c: 12, f: 0 },
  { name: "Çilek / Vişne Reçeli", ref: 15, unit: "g", cal: 42, p: 0, c: 10.5, f: 0 },
  { name: "Nutella / Sürülebilir Çiko", ref: 15, unit: "g", cal: 80.5, p: 1, c: 9, f: 4.5 },
  { name: "Şekersiz Fıstık Ezmesi", ref: 15, unit: "g", cal: 95.5, p: 4, c: 3, f: 7.5 },
  { name: "Tahin", ref: 15, unit: "g", cal: 89, p: 2.5, c: 3, f: 7.4 },
  { name: "Pekmez", ref: 15, unit: "g", cal: 44, p: 0, c: 11, f: 0 },
  { name: "Hindi Füme", ref: 3, unit: "dilim", cal: 32.5, p: 6, c: 1, f: 0.5 },
  { name: "Tavuk Jambon", ref: 30, unit: "g", cal: 39.5, p: 5, c: 1, f: 1.7 },
  { name: "Dana Salam (Macar/Fıstıklı)", ref: 50, unit: "g", cal: 122, p: 6, c: 2, f: 10 },
  { name: "Dana Sosis", ref: 50, unit: "g", cal: 140, p: 6, c: 2, f: 12 },
  { name: "Dana Sucuk (Çiğ/Izgara)", ref: 50, unit: "g", cal: 164.3, p: 7, c: 1, f: 14.7 },
  { name: "Piliç Sucuk", ref: 50, unit: "g", cal: 124.5, p: 6.5, c: 2, f: 10 },
  { name: "Çemensiz Pastırma", ref: 30, unit: "g", cal: 79.2, p: 9, c: 0, f: 4.8 },
  { name: "Antrikot Pastırma", ref: 30, unit: "g", cal: 68, p: 9.5, c: 0, f: 3.3 },
  { name: "Kahvaltılık Kavurma", ref: 50, unit: "g", cal: 175, p: 10, c: 0, f: 15 },
  { name: "Füme Et / Roastbeef", ref: 30, unit: "g", cal: 45, p: 8, c: 0.5, f: 1.2 },

  // --- Kullanıcı Güncellemesi: Yumurtalar & Kahvaltılık Omletler ---
  { name: "Haşlanmış Yumurta", ref: 1, unit: "adet", cal: 77.3, p: 6, c: 0.5, f: 5.7 },
  { name: "Sahanda Yumurta (Tereyağlı)", ref: 1, unit: "adet", cal: 116, p: 6, c: 0.5, f: 10 },
  { name: "Sade Omlet (Az Yağlı)", ref: 1, unit: "porsiyon", cal: 104, p: 6, c: 0.5, f: 8.6 },
  { name: "Kaşarlı Omlet", ref: 1, unit: "porsiyon", cal: 286.6, p: 20, c: 1.5, f: 22.4 },
  { name: "Lorlu Omlet", ref: 1, unit: "porsiyon", cal: 214.8, p: 20, c: 2.5, f: 13.8 },
  { name: "Menemen", ref: 1, unit: "porsiyon", cal: 190, p: 10, c: 6, f: 14 },
  { name: "Sucuklu Yumurta", ref: 1, unit: "porsiyon", cal: 181.8, p: 10.2, c: 1.1, f: 15.1 },

  // --- Kullanıcı Güncellemesi: Patates Çeşitleri ---
  { name: "Haşlanmış Patates", ref: 1, unit: "adet", cal: 132, p: 3, c: 30, f: 0 },
  { name: "Patates Kızartması (Ev Tipi)", ref: 1, unit: "porsiyon", cal: 307, p: 3, c: 40, f: 15 },
  { name: "Patates Kızartması (Fast Food)", ref: 1, unit: "porsiyon", cal: 425, p: 4, c: 50, f: 23 },
  { name: "Fırın Baharatlı Elma Dilim Patates", ref: 1, unit: "porsiyon", cal: 197, p: 3, c: 35, f: 5 },
  { name: "Patates Püresi (Sütlü/Tereyağlı)", ref: 1, unit: "porsiyon", cal: 186.5, p: 3.5, c: 22, f: 9.3 },
  { name: "Kumpir İçi (Sade)", ref: 1, unit: "porsiyon", cal: 296, p: 5, c: 35, f: 15 },
  { name: "Çıtır Hash Browns", ref: 2, unit: "adet", cal: 266, p: 2, c: 26, f: 17 },
  { name: "Airfryer Patates (Az Yağlı)", ref: 1, unit: "porsiyon", cal: 155, p: 3, c: 32, f: 1.6 },

  // --- Kullanıcı Güncellemesi: Kuruyemişler (30g Porsiyon Ortalama) ---
  { name: "Ceviz İçi", ref: 30, unit: "g", cal: 209.5, p: 4.5, c: 4, f: 19.5 },
  { name: "Kavrulmuş Fındık", ref: 30, unit: "g", cal: 200, p: 4.5, c: 5, f: 18 },
  { name: "Çiğ Badem", ref: 30, unit: "g", cal: 183, p: 6, c: 6, f: 15 },
  { name: "Tuzlu Yer Fıstığı", ref: 30, unit: "g", cal: 183, p: 7.5, c: 4.5, f: 15 },
  { name: "Kaju", ref: 30, unit: "g", cal: 173, p: 5, c: 9, f: 13 },
  { name: "Antep Fıstığı", ref: 30, unit: "g", cal: 177.5, p: 6, c: 8, f: 13.5 },
  { name: "Ay Çekirdeği (İç)", ref: 30, unit: "g", cal: 187.5, p: 6, c: 6, f: 15.5 },
  { name: "Kabak Çekirdeği (İç)", ref: 30, unit: "g", cal: 178, p: 9, c: 4, f: 14 },
  { name: "Sarı Leblebi", ref: 30, unit: "g", cal: 105.5, p: 6, c: 17, f: 1.5 },
  { name: "Beyaz Leblebi", ref: 30, unit: "g", cal: 103, p: 5.5, c: 18, f: 1 },

  // --- Kullanıcı Güncellemesi: Meyveler ve Kuru Meyveler ---
  { name: "Muz (Orta Boy)", ref: 100, unit: "g", cal: 98.7, p: 1, c: 23, f: 0.3 },
  { name: "Elma", ref: 100, unit: "g", cal: 59, p: 0.3, c: 14, f: 0.2 },
  { name: "Portakal", ref: 100, unit: "g", cal: 53.8, p: 1, c: 12, f: 0.2 },
  { name: "Çilek", ref: 100, unit: "g", cal: 37.5, p: 0.7, c: 8, f: 0.3 },
  { name: "Karpuz", ref: 100, unit: "g", cal: 36.2, p: 0.6, c: 8, f: 0.2 },
  { name: "Kuru Üzüm", ref: 30, unit: "g", cal: 100.9, p: 1, c: 24, f: 0.1 },
  { name: "Kuru Kayısı", ref: 30, unit: "g", cal: 80.9, p: 1, c: 19, f: 0.1 },
  { name: "Kuru İncir", ref: 30, unit: "g", cal: 82.7, p: 1, c: 19, f: 0.3 },
  { name: "Hurma", ref: 30, unit: "g", cal: 91.7, p: 0.7, c: 22, f: 0.1 },

  // --- Kullanıcı Güncellemesi: Soslar (Genellikle 1 Yemek Kaşığı / 15g Bazlıdır) ---
  { name: "Ketçap", ref: 15, unit: "g", cal: 16.8, p: 0.2, c: 4, f: 0 },
  { name: "Mayonez (Tam Yağlı)", ref: 15, unit: "g", cal: 101.4, p: 0.1, c: 0.5, f: 11 },
  { name: "Hardal", ref: 15, unit: "g", cal: 10.1, p: 0.6, c: 0.8, f: 0.5 },
  { name: "Ranch Sos", ref: 15, unit: "g", cal: 67.8, p: 0.2, c: 1, f: 7 },
  { name: "Barbekü (BBQ) Sos", ref: 15, unit: "g", cal: 25.7, p: 0.2, c: 6, f: 0.1 },
  { name: "Acı Sos (Hot Sauce)", ref: 15, unit: "g", cal: 2.8, p: 0.1, c: 0.6, f: 0 },
  { name: "Nar Ekşisi (Orijinal)", ref: 15, unit: "g", cal: 37, p: 0.2, c: 9, f: 0 },
  { name: "Soya Sosu", ref: 15, unit: "g", cal: 8.8, p: 1.2, c: 1, f: 0 },

  // --- Kullanıcı Güncellemesi: Sporcu Takviyeleri ---
  { name: "Whey Protein Tozu", ref: 30, unit: "g", cal: 117.5, p: 24, c: 2, f: 1.5 },
  { name: "Casein Protein", ref: 30, unit: "g", cal: 110.5, p: 23, c: 3, f: 0.5 },
  { name: "Standart Protein Bar", ref: 50, unit: "g", cal: 186, p: 15, c: 18, f: 6 },
  { name: "Pre-Workout", ref: 1, unit: "servis", cal: 8, p: 0, c: 2, f: 0 },
  { name: "Kreatin", ref: 5, unit: "g", cal: 0, p: 0, c: 0, f: 0 },

  // --- Kullanıcı Güncellemesi: Yöresel Yemekler & Aperatifler ---
  { name: "Etsiz Çiğköfte Dürüm", ref: 1, unit: "adet", cal: 328, p: 10, c: 45, f: 12 },
  { name: "Etsiz Çiğköfte (Sade)", ref: 1, unit: "porsiyon", cal: 383, p: 12, c: 50, f: 15 },
  { name: "Etli Çiğköfte (Gerçek Yöresel)", ref: 1, unit: "porsiyon", cal: 362, p: 20, c: 30, f: 18 },
  { name: "İçli Köfte (Kızartma)", ref: 1, unit: "adet", cal: 302, p: 10, c: 25, f: 18 },
  { name: "İçli Köfte (Haşlama)", ref: 1, unit: "adet", cal: 212, p: 10, c: 25, f: 8 },
  { name: "Konya Etliekmek", ref: 1, unit: "porsiyon", cal: 470, p: 22, c: 55, f: 18 },
  { name: "Mevlana Pidesi (Konya Karışık)", ref: 1, unit: "porsiyon", cal: 494, p: 24, c: 50, f: 22 },
  { name: "Bıçakarası (Konya Kuşbaşılı)", ref: 1, unit: "porsiyon", cal: 484, p: 26, c: 50, f: 20 },
  { name: "Falafel (Kızartma)", ref: 4, unit: "adet", cal: 338, p: 14, c: 30, f: 18 },
  { name: "Mücver (Kızartma)", ref: 2, unit: "dilim", cal: 258, p: 8, c: 20, f: 16 },

  // --- Kullanıcı Güncellemesi: Çikolatalar ve Barlar ---
  { name: "Sütlü Çikolata (Kare Tablet)", ref: 60, unit: "g", cal: 318, p: 4, c: 35, f: 18 },
  { name: "Fıstıklı Çikolata (Kare Tablet)", ref: 60, unit: "g", cal: 342, p: 6, c: 30, f: 22 },
  { name: "Bitter Çikolata %60 (Kare Tablet)", ref: 60, unit: "g", cal: 341, p: 4, c: 25, f: 25 },
  { name: "Beyaz Çikolata (Kare Tablet)", ref: 60, unit: "g", cal: 336, p: 4, c: 35, f: 20 },
  { name: "Çikolatalı Gofret (Standart)", ref: 35, unit: "g", cal: 186, p: 2, c: 22, f: 10 },
  { name: "Karamelli/Nugatlı Bar (Standart)", ref: 50, unit: "g", cal: 252, p: 4, c: 32, f: 12 },
  { name: "Hindistan Cevizli Bar (Standart)", ref: 25, unit: "g", cal: 127, p: 1, c: 15, f: 7 },
  { name: "Bisküvili Çikolata Bar (Standart)", ref: 40, unit: "g", cal: 214, p: 3, c: 25, f: 10 },
  { name: "Çikolata Kaplı Kek (Standart)", ref: 40, unit: "g", cal: 183, p: 2, c: 22, f: 9.7 },
  { name: "Sürülebilir Çikolata (Dolu 1 YK)", ref: 20, unit: "g", cal: 107, p: 1.2, c: 12, f: 6 },

  // --- Kullanıcı Güncellemesi: Çeşitli Dondurmalar ---
  { name: "Maraş Kesme Dondurma", ref: 100, unit: "g", cal: 206, p: 4, c: 25, f: 10 },
  { name: "Külah Dondurma (Külah + 2 Top)", ref: 1, unit: "adet", cal: 272, p: 6, c: 35, f: 12 },
  { name: "Bademli Çubuk Dondurma (Kalın Kaplama)", ref: 100, unit: "g", cal: 312, p: 5, c: 28, f: 20 },
  { name: "Klasik Çubuk Dondurma (Çikolata Kaplı)", ref: 90, unit: "g", cal: 257, p: 4, c: 25, f: 15.7 },
  { name: "Sade/Kaymaklı Kutu Dondurma", ref: 100, unit: "g", cal: 190, p: 3, c: 22, f: 10 },
  { name: "Çikolatalı Kutu Dondurma", ref: 100, unit: "g", cal: 220, p: 4, c: 24, f: 12 },
  { name: "Fıstıklı Kutu Dondurma", ref: 100, unit: "g", cal: 236, p: 5, c: 22, f: 14 },
  { name: "Meyveli Buz / Buz Parmak", ref: 50, unit: "g", cal: 60, p: 0, c: 15, f: 0 },
  { name: "Dondurma Sandviçi (Bisküvi Arası)", ref: 80, unit: "g", cal: 235, p: 4, c: 32, f: 10.1 },
  { name: "Meyve Şerbetli Sorbe", ref: 80, unit: "g", cal: 112, p: 0, c: 28, f: 0 },

  // --- Kullanıcı Güncellemesi: Fast Food ve Burger Çeşitleri ---
  { name: "Hamburger (Standart)", ref: 1, unit: "adet", cal: 257, p: 13, c: 31, f: 9 },
  { name: "Cheeseburger", ref: 1, unit: "adet", cal: 296, p: 15, c: 32, f: 12 },
  { name: "Double Cheeseburger", ref: 1, unit: "adet", cal: 430, p: 25, c: 33, f: 22 },
  { name: "Triple Cheeseburger", ref: 1, unit: "adet", cal: 564, p: 35, c: 34, f: 32 },
  { name: "Big Mac", ref: 1, unit: "adet", cal: 501, p: 26, c: 43, f: 25 },
  { name: "Quarter Pounder / McRoyal", ref: 1, unit: "adet", cal: 506, p: 30, c: 38, f: 26 },
  { name: "Double Quarter Pounder", ref: 1, unit: "adet", cal: 730, p: 50, c: 38, f: 42 },
  { name: "Whopper", ref: 1, unit: "adet", cal: 623, p: 28, c: 49, f: 35 },
  { name: "Double Whopper", ref: 1, unit: "adet", cal: 865, p: 48, c: 49, f: 53 },
  { name: "Triple Whopper", ref: 1, unit: "adet", cal: 1107, p: 68, c: 49, f: 71 },
  { name: "Whopper Jr.", ref: 1, unit: "adet", cal: 326, p: 14, c: 27, f: 18 },
  { name: "Big King", ref: 1, unit: "adet", cal: 476, p: 26, c: 30, f: 28 },
  { name: "Big King XXL", ref: 1, unit: "adet", cal: 920, p: 50, c: 45, f: 60 },
  { name: "Steakhouse Burger", ref: 1, unit: "adet", cal: 710, p: 33, c: 50, f: 42 },
  { name: "Texas Smokehouse", ref: 1, unit: "adet", cal: 765, p: 35, c: 55, f: 45 },
  { name: "McChicken", ref: 1, unit: "adet", cal: 351, p: 14, c: 40, f: 15 },
  { name: "Chicken Royale", ref: 1, unit: "adet", cal: 530, p: 20, c: 45, f: 30 },
  { name: "Spicy Chicken Burger", ref: 1, unit: "adet", cal: 381, p: 15, c: 42, f: 17 },
  { name: "Filet-O-Fish / Balıklı Burger", ref: 1, unit: "adet", cal: 338, p: 15, c: 38, f: 14 },
  { name: "Köfteburger", ref: 1, unit: "adet", cal: 348, p: 16, c: 35, f: 16 },
  { name: "Tenders Burger", ref: 1, unit: "adet", cal: 399, p: 18, c: 48, f: 15 },
  { name: "Barbekü Et Burger", ref: 1, unit: "adet", cal: 514, p: 25, c: 45, f: 26 },
  { name: "Acılı Meksika Et Burger", ref: 1, unit: "adet", cal: 618, p: 30, c: 48, f: 34 },
  { name: "Trüf Mantarlı Burger", ref: 1, unit: "adet", cal: 654, p: 32, c: 46, f: 38 },
  { name: "Bacon Cheeseburger", ref: 1, unit: "adet", cal: 333, p: 20, c: 32, f: 13.9 },
  { name: "Double Bacon Burger", ref: 1, unit: "adet", cal: 591, p: 35, c: 34, f: 35 },
  { name: "Crispy Chicken", ref: 1, unit: "adet", cal: 452, p: 18, c: 50, f: 20 },
  { name: "Izgara Tavuk Sandviç", ref: 1, unit: "adet", cal: 285, p: 25, c: 35, f: 5 },
  { name: "Mega Mac / Dev Burger", ref: 1, unit: "adet", cal: 714, p: 40, c: 44, f: 42 },
  { name: "Klasik Tavuk Burger", ref: 1, unit: "adet", cal: 278, p: 12, c: 35, f: 10 },
  { name: "Karamelize Soğanlı Burger", ref: 1, unit: "adet", cal: 590, p: 28, c: 52, f: 30 },
  { name: "Cheddar Soslu Burger", ref: 1, unit: "adet", cal: 593, p: 26, c: 48, f: 33 },
  { name: "Smash Burger (Tek Köfte)", ref: 1, unit: "adet", cal: 380, p: 22, c: 28, f: 20 },
  { name: "Smash Burger (Çift Köfte)", ref: 1, unit: "adet", cal: 550, p: 40, c: 30, f: 30 },
  { name: "Vegan Fast Food Burger", ref: 1, unit: "adet", cal: 379, p: 16, c: 45, f: 15 },
  { name: "Fish Royale", ref: 1, unit: "adet", cal: 414, p: 18, c: 45, f: 18 },
  { name: "Chicken BLT Burger", ref: 1, unit: "adet", cal: 546, p: 24, c: 45, f: 30 },
  { name: "Jalapeno Et Burger", ref: 1, unit: "adet", cal: 610, p: 30, c: 46, f: 34 },
  { name: "Gurme Kaburga Burger", ref: 1, unit: "adet", cal: 750, p: 38, c: 55, f: 42 },
  { name: "Mantarlı İsviçre Burger", ref: 1, unit: "adet", cal: 556, p: 28, c: 45, f: 28 },

  // --- Kullanıcı Güncellemesi: Pizzalar (Dilim & Bütün) ---
  { name: "Karışık Pizza (1 Orta Boy Dilim)", ref: 1, unit: "dilim", cal: 239, p: 10, c: 25, f: 11 },
  { name: "Karışık Pizza (Bütün Orta Boy)", ref: 1, unit: "adet", cal: 1434, p: 60, c: 150, f: 66 },
  { name: "Pepperoni Pizza (1 Dilim)", ref: 1, unit: "dilim", cal: 252, p: 11, c: 25, f: 12 },
  { name: "Pepperoni Pizza (Bütün Orta Boy)", ref: 1, unit: "adet", cal: 1512, p: 66, c: 150, f: 72 },
  { name: "Margarita Pizza (1 Dilim)", ref: 1, unit: "dilim", cal: 203, p: 9, c: 26, f: 7 },
  { name: "Margarita Pizza (Bütün Orta Boy)", ref: 1, unit: "adet", cal: 1218, p: 54, c: 156, f: 42 },
  { name: "Sucuklu Pizza (1 Dilim)", ref: 1, unit: "dilim", cal: 252, p: 11, c: 25, f: 12 },
  { name: "Sucuklu Pizza (Bütün Orta Boy)", ref: 1, unit: "adet", cal: 1512, p: 66, c: 150, f: 72 },
  { name: "BBQ Tavuklu Pizza (1 Dilim)", ref: 1, unit: "dilim", cal: 232, p: 12, c: 28, f: 8 },
  { name: "BBQ Tavuklu (Bütün Orta Boy)", ref: 1, unit: "adet", cal: 1392, p: 72, c: 168, f: 48 },
  { name: "Bol Malzemos (1 Dilim)", ref: 1, unit: "dilim", cal: 269, p: 12, c: 26, f: 13 },
  { name: "Bol Malzemos (Bütün Orta Boy)", ref: 1, unit: "adet", cal: 1614, p: 72, c: 156, f: 78 },
  { name: "Extravaganza (1 Dilim)", ref: 1, unit: "dilim", cal: 282, p: 13, c: 26, f: 14 },
  { name: "Extravaganza (Bütün Orta Boy)", ref: 1, unit: "adet", cal: 1692, p: 78, c: 156, f: 84 },
  { name: "Dört Peynirli (1 Dilim)", ref: 1, unit: "dilim", cal: 248, p: 11, c: 24, f: 12 },
  { name: "Dört Peynirli (Bütün Orta Boy)", ref: 1, unit: "adet", cal: 1488, p: 66, c: 144, f: 72 },
  { name: "Ton Balıklı Pizza (1 Dilim)", ref: 1, unit: "dilim", cal: 229, p: 12, c: 25, f: 9 },
  { name: "Ton Balıklı (Bütün Orta Boy)", ref: 1, unit: "adet", cal: 1374, p: 72, c: 150, f: 54 },
  { name: "Mantarlı Pizza (1 Dilim)", ref: 1, unit: "dilim", cal: 190, p: 8, c: 26, f: 6 },
  { name: "Mantarlı Pizza (Bütün Orta Boy)", ref: 1, unit: "adet", cal: 1140, p: 48, c: 156, f: 36 },
  { name: "Kavurmalı Pizza (1 Dilim)", ref: 1, unit: "dilim", cal: 273, p: 14, c: 25, f: 13 },
  { name: "Kavurmalı Pizza (Bütün Orta Boy)", ref: 1, unit: "adet", cal: 1638, p: 84, c: 150, f: 78 },
  { name: "Hawaii Pizza (Ananaslı - 1 Dilim)", ref: 1, unit: "dilim", cal: 211, p: 9, c: 28, f: 7 },
  { name: "Hawaii Pizza (Bütün Orta Boy)", ref: 1, unit: "adet", cal: 1266, p: 54, c: 168, f: 42 },
  { name: "Acılı Meksika Pizza (1 Dilim)", ref: 1, unit: "dilim", cal: 247, p: 11, c: 26, f: 11 },
  { name: "Acılı Meksika (Bütün Orta Boy)", ref: 1, unit: "adet", cal: 1482, p: 66, c: 156, f: 66 },
  { name: "Pastırmalı Pizza (1 Dilim)", ref: 1, unit: "dilim", cal: 238, p: 12, c: 25, f: 10 },
  { name: "Sosisli Pizza (1 Dilim)", ref: 1, unit: "dilim", cal: 243, p: 10, c: 26, f: 11 },
  { name: "İnce Hamur Margarita (1 Dilim)", ref: 1, unit: "dilim", cal: 154, p: 7, c: 18, f: 6 },
  { name: "İnce Hamur Pepperoni (1 Dilim)", ref: 1, unit: "dilim", cal: 189, p: 9, c: 18, f: 9 },
  { name: "İnce Hamur Karışık (1 Dilim)", ref: 1, unit: "dilim", cal: 176, p: 8, c: 18, f: 8 },
  { name: "Kalın Hamur / Pan Karışık (1 Dilim)", ref: 1, unit: "dilim", cal: 289, p: 11, c: 32, f: 13 },
  { name: "Kalın Hamur / Pan Pepperoni (1 Dilim)", ref: 1, unit: "dilim", cal: 306, p: 12, c: 33, f: 14 },
  { name: "Vegan Pizza (1 Dilim)", ref: 1, unit: "dilim", cal: 187, p: 6, c: 25, f: 7 },
  { name: "Fit / Kepekli Pizza (1 Dilim)", ref: 1, unit: "dilim", cal: 178, p: 9, c: 22, f: 6 },
  { name: "Sucuksever Pizza (1 Dilim)", ref: 1, unit: "dilim", cal: 257, p: 11, c: 24, f: 13 },
  { name: "Etsever Pizza (1 Dilim)", ref: 1, unit: "dilim", cal: 291, p: 14, c: 25, f: 15 },
  { name: "Etsever Pizza (Bütün Orta Boy)", ref: 1, unit: "adet", cal: 1746, p: 84, c: 150, f: 90 },
  { name: "Peynir Kenarlı Karışık (1 Dilim)", ref: 1, unit: "dilim", cal: 311, p: 13, c: 31, f: 15 },
  { name: "Sosis Kenarlı Pepperoni (1 Dilim)", ref: 1, unit: "dilim", cal: 333, p: 13, c: 32, f: 17 },

  // --- Kullanıcı Güncellemesi: Kızarmış Tavuk ve Kova Menüler ---
  { name: "Hot Shots / Popcorn Tavuk (Orta Boy)", ref: 1, unit: "porsiyon", cal: 355, p: 18, c: 28, f: 19 },
  { name: "Hot Shots (Büyük Boy)", ref: 1, unit: "porsiyon", cal: 528, p: 27, c: 42, f: 28 },
  { name: "Çıtır Kanat / Hot Wings", ref: 3, unit: "adet", cal: 239, p: 14, c: 12, f: 15 },
  { name: "Çıtır Kanat / Hot Wings (6 Adet)", ref: 6, unit: "adet", cal: 478, p: 28, c: 24, f: 30 },
  { name: "Kemiksiz Çıtır / Tenders", ref: 3, unit: "adet", cal: 301, p: 24, c: 22, f: 13 },
  { name: "Kemiksiz Çıtır / Tenders (6 Adet)", ref: 6, unit: "adet", cal: 602, p: 48, c: 44, f: 26 },
  { name: "Orijinal Tarif But", ref: 1, unit: "adet", cal: 221, p: 16, c: 10, f: 13 },
  { name: "Orijinal Tarif Göğüs", ref: 1, unit: "adet", cal: 332, p: 32, c: 15, f: 16 },
  { name: "Acılı Çıtır But", ref: 1, unit: "adet", cal: 243, p: 15, c: 12, f: 15 },
  { name: "Acılı Çıtır Göğüs", ref: 1, unit: "adet", cal: 362, p: 30, c: 20, f: 18 },
  { name: "Zinger Tavuk Burger", ref: 1, unit: "adet", cal: 478, p: 25, c: 45, f: 22 },
  { name: "Zinger Tower Burger", ref: 1, unit: "adet", cal: 610, p: 30, c: 55, f: 30 },
  { name: "Kule Burger (Popeyes Tarzı)", ref: 1, unit: "adet", cal: 584, p: 28, c: 55, f: 28 },
  { name: "Tavuklu Dürüm / Twister", ref: 1, unit: "adet", cal: 423, p: 18, c: 45, f: 19 },
  { name: "Acılı Tavuk Dürüm", ref: 1, unit: "adet", cal: 445, p: 18, c: 46, f: 21 },
  { name: "Maxi Tavuk Burger", ref: 1, unit: "adet", cal: 516, p: 25, c: 50, f: 24 },
  { name: "Klasik Çıtır Tavuk Sandviç", ref: 1, unit: "adet", cal: 350, p: 16, c: 40, f: 14 },
  { name: "Çıtır Fileto Burger", ref: 1, unit: "adet", cal: 457, p: 22, c: 45, f: 21 },
  { name: "Extreme Tavuk Burger", ref: 1, unit: "adet", cal: 663, p: 32, c: 55, f: 35 },
  { name: "Popeyes Biscuit (Özel Bisküvi)", ref: 1, unit: "adet", cal: 229, p: 4, c: 24, f: 13 },
  { name: "Coleslaw / Lahana Salatası (Orta)", ref: 1, unit: "porsiyon", cal: 168, p: 1, c: 14, f: 12 },
  { name: "Coleslaw / Lahana Salatası (Büyük)", ref: 1, unit: "porsiyon", cal: 336, p: 2, c: 28, f: 24 },
  { name: "Tavuk Parçacıkları (Nuggets)", ref: 6, unit: "adet", cal: 272, p: 14, c: 18, f: 16 },
  { name: "Nuggets (9 Adet)", ref: 9, unit: "adet", cal: 408, p: 21, c: 27, f: 24 },
  { name: "Nuggets Kova (20 Adet)", ref: 20, unit: "adet", cal: 901, p: 46, c: 60, f: 53 },
  { name: "Kemikli Kalça (Orijinal Kızartma)", ref: 1, unit: "adet", cal: 273, p: 18, c: 12, f: 17 },
  { name: "Kemikli Kalça (Çıtır Kaplama)", ref: 1, unit: "adet", cal: 294, p: 18, c: 15, f: 18 },
  { name: "Sade Tavuk Burger (Sossuz)", ref: 1, unit: "adet", cal: 302, p: 18, c: 35, f: 10 },
  { name: "Çıtır Tavuk Salata (Fast Food Tarzı)", ref: 1, unit: "porsiyon", cal: 342, p: 20, c: 25, f: 18 },
  { name: "Dip Soslu Tavuk Topları", ref: 10, unit: "adet", cal: 400, p: 20, c: 35, f: 20 },
  { name: "Kova Tavuk (Karışık - 1 Kişilik)", ref: 1, unit: "adet", cal: 850, p: 50, c: 50, f: 50 },
  { name: "Mega Kova Menü (Tavuk Kısmı)", ref: 1, unit: "adet", cal: 1275, p: 75, c: 75, f: 75 },
  { name: "Gravy Sos (Et Suyu Sos - Orta)", ref: 1, unit: "adet", cal: 47, p: 1, c: 4, f: 3 },
  { name: "Gravy Sos (Büyük Boy)", ref: 1, unit: "adet", cal: 94, p: 2, c: 8, f: 6 },
  { name: "Mısır Koçanı (Tereyağlı)", ref: 1, unit: "adet", cal: 129, p: 3, c: 18, f: 5 },
  { name: "Çıtır Baget", ref: 1, unit: "adet", cal: 178, p: 12, c: 10, f: 10 },
  { name: "Acılı Baget", ref: 1, unit: "adet", cal: 195, p: 12, c: 12, f: 11 },
  { name: "Sandviç İçi Tavuk Fileto (Kızarmış)", ref: 1, unit: "adet", cal: 248, p: 20, c: 15, f: 12 },
  { name: "Sandviç İçi Tavuk Fileto (Izgara)", ref: 1, unit: "adet", cal: 114, p: 22, c: 2, f: 2 },
  { name: "Kajun Baharatlı Tavuk Sepeti", ref: 1, unit: "porsiyon", cal: 543, p: 30, c: 45, f: 27 },

  // --- Kullanıcı Güncellemesi: Fast Food Yan Ürünler & Diğer Aperatifler ---
  { name: "Patates Kızartması (Küçük Boy)", ref: 1, unit: "porsiyon", cal: 222, p: 3, c: 30, f: 10 },
  { name: "Patates Kızartması (Orta Boy)", ref: 1, unit: "porsiyon", cal: 332, p: 4, c: 43, f: 16 },
  { name: "Patates Kızartması (Büyük Boy)", ref: 1, unit: "porsiyon", cal: 450, p: 6, c: 57, f: 22 },
  { name: "Mega Boy Patates Kızartması", ref: 1, unit: "porsiyon", cal: 588, p: 8, c: 76, f: 28 },
  { name: "Kıvırcık Patates / Curly Fries (Orta)", ref: 1, unit: "porsiyon", cal: 330, p: 4, c: 38, f: 18 },
  { name: "Kıvırcık Patates (Büyük Boy)", ref: 1, unit: "porsiyon", cal: 436, p: 5, c: 50, f: 24 },
  { name: "Elma Dilim Patates / Wedges (Orta)", ref: 1, unit: "porsiyon", cal: 282, p: 4, c: 35, f: 14 },
  { name: "Elma Dilim Patates (Büyük Boy)", ref: 1, unit: "porsiyon", cal: 383, p: 5, c: 48, f: 19 },
  { name: "Soğan Halkası", ref: 6, unit: "adet", cal: 249, p: 3, c: 30, f: 13 },
  { name: "Peynir Çubukları / Mozzarella Sticks", ref: 4, unit: "adet", cal: 281, p: 12, c: 20, f: 17 },
  { name: "Çıtır Peynir Topları", ref: 6, unit: "adet", cal: 302, p: 10, c: 25, f: 18 },
  { name: "Jalapeno Poppers (Peynirli)", ref: 4, unit: "adet", cal: 285, p: 8, c: 25, f: 17 },
  { name: "Sarımsaklı Ekmek (Garlic Bread)", ref: 2, unit: "dilim", cal: 294, p: 6, c: 36, f: 14 },
  { name: "Peynirli Sarımsaklı Ekmek", ref: 2, unit: "dilim", cal: 371, p: 12, c: 38, f: 19 },
  { name: "Tırtıklı Patates Kızartması (Orta)", ref: 1, unit: "porsiyon", cal: 320, p: 4, c: 40, f: 16 },
  { name: "Çıtır Tenders (Soslu)", ref: 3, unit: "adet", cal: 342, p: 20, c: 25, f: 18 },
  { name: "Peynir Soslu Patates Kızartması", ref: 1, unit: "porsiyon", cal: 448, p: 8, c: 50, f: 24 },
  { name: "Pastırmalı Peynir Soslu Patates", ref: 1, unit: "porsiyon", cal: 518, p: 12, c: 50, f: 30 },
  { name: "Hash Browns (Kahvaltılık Patates)", ref: 1, unit: "adet", cal: 136, p: 1, c: 15, f: 8 },
  { name: "Mac & Cheese Bites (Makarna Topları)", ref: 4, unit: "adet", cal: 258, p: 8, c: 25, f: 14 },
  { name: "Nachos (Peynir Soslu)", ref: 1, unit: "porsiyon", cal: 418, p: 10, c: 45, f: 22 },
  { name: "Baharatlı Çıtır Patates (Orta Boy)", ref: 1, unit: "porsiyon", cal: 340, p: 4, c: 45, f: 16 },
  { name: "Tenders (Acılı)", ref: 3, unit: "adet", cal: 328, p: 22, c: 24, f: 16 },
  { name: "Chicken Fries (Tavuk Çubukları)", ref: 9, unit: "adet", cal: 275, p: 15, c: 20, f: 15 },
  { name: "Cheddar Peynir Topları", ref: 6, unit: "adet", cal: 324, p: 12, c: 24, f: 20 },
  { name: "Ekstra Çıtır Kaplamalı Patates (Orta)", ref: 1, unit: "porsiyon", cal: 370, p: 4, c: 48, f: 18 },
  { name: "Sufle Topları (Atıştırmalık)", ref: 4, unit: "adet", cal: 380, p: 5, c: 45, f: 20 },
  { name: "Piliç Çevirme Porsiyon (Fast Food Menü)", ref: 1, unit: "porsiyon", cal: 396, p: 45, c: 0, f: 24 },
  { name: "Ekmek Arası Döner (Zincir Dönerci)", ref: 1, unit: "adet", cal: 549, p: 30, c: 60, f: 21 },
  { name: "Dürüm Döner (Zincir Dönerci)", ref: 1, unit: "adet", cal: 478, p: 25, c: 45, f: 22 },
  { name: "İskender (Zincir Fast Food Porsiyonu)", ref: 1, unit: "porsiyon", cal: 850, p: 35, c: 65, f: 50 },
  { name: "Tombik Döner Sandviç", ref: 1, unit: "adet", cal: 518, p: 25, c: 55, f: 22 },
  { name: "Kumpir (Zincir AVM Porsiyonu)", ref: 1, unit: "porsiyon", cal: 779, p: 18, c: 80, f: 43 },
  { name: "Sosisli Sandviç (Klasik Hot Dog)", ref: 1, unit: "adet", cal: 348, p: 12, c: 30, f: 20 },
  { name: "Chili Cheese Dog (Acılı Peynirli Sosisli)", ref: 1, unit: "adet", cal: 473, p: 18, c: 35, f: 29 },
  { name: "Taco (Sert Kabuklu Kıymalı)", ref: 1, unit: "adet", cal: 169, p: 8, c: 14, f: 9 },
  { name: "Burrito (Tavuklu)", ref: 1, unit: "adet", cal: 547, p: 25, c: 60, f: 23 },

  // --- Kullanıcı Güncellemesi: Fast Food Tatlıları ve İçecekler ---
  { name: "Dondurma Külahı (Küçük/Sade)", ref: 1, unit: "adet", cal: 135, p: 3, c: 24, f: 3 },
  { name: "Sundae (Çikolatalı)", ref: 1, unit: "adet", cal: 272, p: 5, c: 45, f: 8 },
  { name: "Sundae (Karamelli)", ref: 1, unit: "adet", cal: 284, p: 5, c: 48, f: 8 },
  { name: "Sundae (Çilekli)", ref: 1, unit: "adet", cal: 250, p: 4, c: 45, f: 6 },
  { name: "McFlurry (Oreo)", ref: 1, unit: "adet", cal: 415, p: 8, c: 62, f: 15 },
  { name: "McFlurry (M&M's)", ref: 1, unit: "adet", cal: 440, p: 9, c: 65, f: 16 },
  { name: "McFlurry (Snickers)", ref: 1, unit: "adet", cal: 450, p: 9, c: 63, f: 18 },
  { name: "King Sundae (Çikolata)", ref: 1, unit: "adet", cal: 313, p: 6, c: 52, f: 9 },
  { name: "Elmalı Turta / Apple Pie (Kızarmış)", ref: 1, unit: "adet", cal: 244, p: 2, c: 32, f: 12 },
  { name: "Vişneli Turta (Kızarmış)", ref: 1, unit: "adet", cal: 244, p: 2, c: 32, f: 12 },
  { name: "Sıcak Çikolatalı Kek (Fondan)", ref: 1, unit: "adet", cal: 359, p: 5, c: 42, f: 19 },
  { name: "Çikolatalı Sufle (Fast Food Tipi)", ref: 1, unit: "adet", cal: 389, p: 6, c: 44, f: 21 },
  { name: "Milkshake (Çikolata - Küçük Boy)", ref: 1, unit: "bardak", cal: 312, p: 8, c: 52, f: 8 },
  { name: "Milkshake (Çikolata - Orta Boy)", ref: 1, unit: "bardak", cal: 403, p: 11, c: 65, f: 11 },
  { name: "Milkshake (Çikolata - Büyük Boy)", ref: 1, unit: "bardak", cal: 510, p: 14, c: 82, f: 14 },
  { name: "Milkshake (Çilek - Küçük Boy)", ref: 1, unit: "bardak", cal: 294, p: 8, c: 52, f: 6 },
  { name: "Milkshake (Çilek - Orta Boy)", ref: 1, unit: "bardak", cal: 384, p: 10, c: 68, f: 8 },
  { name: "Milkshake (Çilek - Büyük Boy)", ref: 1, unit: "bardak", cal: 482, p: 13, c: 85, f: 10 },
  { name: "Milkshake (Vanilya - Küçük Boy)", ref: 1, unit: "bardak", cal: 304, p: 8, c: 50, f: 8 },
  { name: "Milkshake (Vanilya - Orta Boy)", ref: 1, unit: "bardak", cal: 398, p: 11, c: 66, f: 10 },
  { name: "Milkshake (Vanilya - Büyük Boy)", ref: 1, unit: "bardak", cal: 496, p: 13, c: 84, f: 12 },
  { name: "Frappe (Karamelli - Kremsiz)", ref: 1, unit: "bardak", cal: 350, p: 5, c: 60, f: 10 },
  { name: "Frappe (Karamelli - Kremalı)", ref: 1, unit: "bardak", cal: 452, p: 6, c: 62, f: 20 },
  { name: "Frappe (Mocha - Kremsiz)", ref: 1, unit: "bardak", cal: 353, p: 6, c: 62, f: 9 },
  { name: "Frappe (Mocha - Kremalı)", ref: 1, unit: "bardak", cal: 455, p: 7, c: 64, f: 19 },
  { name: "Donut (Çikolata Soslu)", ref: 1, unit: "adet", cal: 320, p: 4, c: 40, f: 16 },
  { name: "Donut (Karamel Dolgulu)", ref: 1, unit: "adet", cal: 337, p: 4, c: 42, f: 17 },
  { name: "Cookie (Çikolata Parçacıklı)", ref: 1, unit: "adet", cal: 349, p: 4, c: 45, f: 17 },
  { name: "Double Çikolatalı Cookie", ref: 1, unit: "adet", cal: 362, p: 4, c: 46, f: 18 },
  { name: "Brownie (Zincir Kahveci / Burgerci)", ref: 1, unit: "adet", cal: 400, p: 5, c: 50, f: 20 },
  { name: "Çikolatalı Muffin", ref: 1, unit: "adet", cal: 374, p: 5, c: 48, f: 18 },
  { name: "Yaban Mersinli Muffin", ref: 1, unit: "adet", cal: 356, p: 5, c: 48, f: 16 },
  { name: "Havuçlu Kek (Dilim)", ref: 1, unit: "dilim", cal: 406, p: 6, c: 46, f: 22 },
  { name: "Tiramisu (Fast Food Kup)", ref: 1, unit: "adet", cal: 298, p: 5, c: 38, f: 14 },
  { name: "Cheesecake (Frambuazlı)", ref: 1, unit: "dilim", cal: 373, p: 6, c: 40, f: 21 },
  { name: "Cheesecake (Limonlu)", ref: 1, unit: "dilim", cal: 390, p: 6, c: 42, f: 22 },
  { name: "İce Slush (Buzlu İçecek - Küçük Boy)", ref: 1, unit: "bardak", cal: 112, p: 0, c: 28, f: 0 },
  { name: "İce Slush (Buzlu İçecek - Büyük Boy)", ref: 1, unit: "bardak", cal: 180, p: 0, c: 45, f: 0 },
  { name: "Sıcak Kakao (Orta Boy)", ref: 1, unit: "bardak", cal: 273, p: 8, c: 40, f: 9 },
  { name: "Taze Sıkılmış Portakal Suyu", ref: 1, unit: "kutu", cal: 152, p: 2, c: 36, f: 0 },

  // --- Kullanıcı Güncellemesi: Döner & İskender Çeşitleri ---
  { name: "İskender (Standart)", ref: 1, unit: "porsiyon", cal: 750, p: 35, c: 55, f: 43.3 },
  { name: "İskender (1.5 Porsiyon - Bol Tereyağlı)", ref: 1.5, unit: "porsiyon", cal: 1125, p: 52.5, c: 82.5, f: 65 },
  { name: "Hatay Usulü Tavuk Dürüm (Mayonezli)", ref: 1, unit: "adet", cal: 518, p: 25, c: 55, f: 22 },
  { name: "Zurna Tavuk Dürüm (Hatay Usulü)", ref: 1, unit: "adet", cal: 730, p: 35, c: 80, f: 30 },
  { name: "Et Dürüm (Lavaşta Klasik)", ref: 1, unit: "adet", cal: 545, p: 30, c: 50, f: 25 },
  { name: "Zurna Et Dürüm", ref: 1, unit: "adet", cal: 785, p: 42, c: 75, f: 33 },
  { name: "Tavuk Döner (Yarım Ekmek Arası)", ref: 1, unit: "adet", cal: 486, p: 26, c: 55, f: 18 },
  { name: "Et Döner (Yarım Ekmek Arası)", ref: 1, unit: "adet", cal: 544, p: 32, c: 55, f: 24 },
  { name: "Tombik Tavuk Döner (Pide Arası)", ref: 1, unit: "adet", cal: 450, p: 24, c: 52, f: 16 },
  { name: "Kaşarlı Tavuk Dürüm (Dürümx Tarzı)", ref: 1, unit: "adet", cal: 606, p: 32, c: 55, f: 26 },

  // --- Kullanıcı Güncellemesi: Tostlar ve Sandviçler ---
  { name: "Kaşarlı Tost (Beyaz Tost Ekmeği)", ref: 1, unit: "adet", cal: 294, p: 12, c: 30, f: 14 },
  { name: "Karışık Tost (Sucuk + Kaşar)", ref: 1, unit: "adet", cal: 382, p: 16, c: 30, f: 22 },
  { name: "Çift Kaşarlı Tost (Bol Malzemeli)", ref: 1, unit: "adet", cal: 366, p: 18, c: 30, f: 22 },
  { name: "Ayvalık Tostu (Orijinal Bol Malzeme)", ref: 1, unit: "adet", cal: 618, p: 22, c: 65, f: 30 },
  { name: "Yengen Tost (Sucuk/Kaşar/Sosis/Domates)", ref: 1, unit: "adet", cal: 552, p: 20, c: 55, f: 28 },
  { name: "Sanayi Tostu (Yarım Ekmek/Salçalı/Yağlı)", ref: 1, unit: "adet", cal: 587, p: 18, c: 50, f: 35 },
  { name: "Tam Buğday Ekmeğine Kaşarlı Tost", ref: 1, unit: "adet", cal: 268, p: 14, c: 26, f: 12 },
  { name: "Kavurmalı Kaşarlı Tost", ref: 1, unit: "adet", cal: 458, p: 22, c: 32, f: 26 },
  { name: "Salçalı Sosisli Tost", ref: 1, unit: "adet", cal: 370, p: 14, c: 35, f: 18 },
  { name: "Kumru (Çeşme Usulü)", ref: 1, unit: "adet", cal: 642, p: 25, c: 60, f: 34 },

  // --- Kullanıcı Güncellemesi: Sokak Lezzetleri (Patso, Kokoreç vb.) ---
  { name: "Sade Patso (Yarım Ekmek)", ref: 1, unit: "adet", cal: 532, p: 8, c: 80, f: 20 },
  { name: "Kaşarlı Patso (Yarım Ekmek)", ref: 1, unit: "adet", cal: 640, p: 16, c: 80, f: 28 },
  { name: "Sosisli Patso (Yarım Ekmek)", ref: 1, unit: "adet", cal: 684, p: 14, c: 82, f: 32 },
  { name: "Karışık Patso (Kaşar+Sosis+Patates)", ref: 1, unit: "adet", cal: 792, p: 22, c: 82, f: 40 },
  { name: "Köfte Ekmek (Yarım Ekmek)", ref: 1, unit: "adet", cal: 572, p: 25, c: 60, f: 24 },
  { name: "Sucuk Ekmek (Yarım Ekmek Izgara)", ref: 1, unit: "adet", cal: 620, p: 22, c: 60, f: 32 },
  { name: "Kokoreç (Çeyrek Ekmek)", ref: 1, unit: "adet", cal: 355, p: 14, c: 30, f: 19.9 },
  { name: "Kokoreç (Yarım Ekmek - Bol Yağlı)", ref: 1, unit: "adet", cal: 710, p: 28, c: 60, f: 39.8 },
  { name: "Balık Ekmek (Yarım Ekmek)", ref: 1, unit: "adet", cal: 470, p: 24, c: 55, f: 16 },
  { name: "Arnavut Ciğeri (Yarım Ekmek Arası)", ref: 1, unit: "adet", cal: 605, p: 28, c: 65, f: 25 }
];

// 2. Global State
let todayDate = new Date();
const formatDate = (d) => d.toISOString().split('T')[0];
let currentStr = formatDate(todayDate);
let historyStr = currentStr;

let customFoods = JSON.parse(localStorage.getItem('customFoods')) || [];
let settings = JSON.parse(localStorage.getItem('settings')) || { cal: 2000, p: 120, c: 200, f: 60, w: 2500 };
let profile = JSON.parse(localStorage.getItem('profile')) || { current: null, target: null, start: null, weightHistory: [] };

// Migrasyon: Eski currentWeight var ama weightHistory yoksa ilk kaydı oluştur
if (!profile.weightHistory) profile.weightHistory = [];
if (profile.current && profile.weightHistory.length === 0) {
  profile.weightHistory.push({ id: Date.now().toString(), date: new Date().toISOString(), weight: profile.current });
  localStorage.setItem('profile', JSON.stringify(profile));
}

let selectedFood = null; // Portions modal active food

// 3. Elements
const DOM = {
  navItems: document.querySelectorAll('.nav-item'),
  views: document.querySelectorAll('.view'),
  headerTitle: document.getElementById('header-title'),
  
  calConsumed: document.getElementById('cal-consumed'),
  calGoal: document.getElementById('cal-goal'),
  calRing: document.getElementById('cal-ring'),
  protText: document.getElementById('prot-text'), protBar: document.getElementById('prot-bar'),
  carbText: document.getElementById('carb-text'), carbBar: document.getElementById('carb-bar'),
  fatText: document.getElementById('fat-text'), fatBar: document.getElementById('fat-bar'),
  waterText: document.getElementById('water-text'), waterBar: document.getElementById('water-bar'),
  foodList: document.getElementById('food-list'),
  
  historyDate: document.getElementById('history-date'),
  hCal: document.getElementById('h-cal'),
  hWater: document.getElementById('h-water'),
  historyFoodList: document.getElementById('history-food-list'),
  btnPrevDay: document.getElementById('btn-prev-day'),
  btnNextDay: document.getElementById('btn-next-day'),
  
  inpCurrentWeight: document.getElementById('inp-current-weight'),
  inpTargetWeight: document.getElementById('inp-target-weight'),
  btnSaveWeight: document.getElementById('btn-save-weight'),
  weightBar: document.getElementById('weight-bar'),
  lblWeightStart: document.getElementById('lbl-weight-start'),
  lblWeightTarget: document.getElementById('lbl-weight-target'),
  lblWeightStatus: document.getElementById('lbl-weight-status'),
  
  btnAdd: document.getElementById('btn-add'),
  btnSettings: document.getElementById('btn-settings'),
  modalAdd: document.getElementById('modal-add'),
  modalSettings: document.getElementById('modal-settings'),
  modalPortion: document.getElementById('modal-portion'),
  btnCloseModal: document.getElementById('btn-close-modal'),
  btnCloseSettings: document.getElementById('btn-close-settings'),
  btnClosePortion: document.getElementById('btn-close-portion'),
  
  searchInput: document.getElementById('search-input'),
  searchResults: document.getElementById('search-results'),
  tabs: document.querySelectorAll('.tab'),
  tabContents: document.querySelectorAll('.tab-content'),
  
  mName: document.getElementById('m-name'),
  mRef: document.getElementById('m-ref'),
  mUnit: document.getElementById('m-unit'),
  mCal: document.getElementById('m-cal'),
  mP: document.getElementById('m-p'), mC: document.getElementById('m-c'), mF: document.getElementById('m-f'),
  btnSaveManual: document.getElementById('btn-save-manual'),
  
  pTitle: document.getElementById('p-title'),
  pAmount: document.getElementById('p-amount'),
  pUnit: document.getElementById('p-unit'),
  pCalVal: document.getElementById('p-cal-val'),
  pPVal: document.getElementById('p-p-val'),
  pCVal: document.getElementById('p-c-val'),
  pFVal: document.getElementById('p-f-val'),
  btnSavePortion: document.getElementById('btn-save-portion'),
  
  setCal: document.getElementById('set-cal'), setP: document.getElementById('set-p'),
  setC: document.getElementById('set-c'), setF: document.getElementById('set-f'), setW: document.getElementById('set-w'),
  btnSaveSettings: document.getElementById('btn-save-settings')
};

// 4. Helpers
function getLog(dateStr) { return JSON.parse(localStorage.getItem(`log_${dateStr}`)) || []; }
function setLog(dateStr, data) { localStorage.setItem(`log_${dateStr}`, JSON.stringify(data)); }
function getWater(dateStr) { return parseInt(localStorage.getItem(`water_${dateStr}`)) || 0; }
function setWater(dateStr, val) { localStorage.setItem(`water_${dateStr}`, Math.max(0, val)); }

// 5. Navigation
DOM.navItems.forEach(item => {
  item.onclick = () => {
    DOM.navItems.forEach(n => n.classList.remove('active')); item.classList.add('active');
    DOM.views.forEach(v => v.classList.remove('active'));
    const target = item.dataset.target; document.getElementById(target).classList.add('active');
    
    if(target === 'view-home') { updateHome(); DOM.btnAdd.style.display = 'flex'; }
    else if(target === 'view-history') { updateHistory(); DOM.btnAdd.style.display = 'none'; }
    else if(target === 'view-profile') { updateProfile(); DOM.btnAdd.style.display = 'none'; }
  };
});

// 6. Views
function updateHome() {
  const log = getLog(currentStr);
  const water = getWater(currentStr);
  
  let totalCal = 0, totalP = 0, totalC = 0, totalF = 0;
  log.forEach(i => { totalCal+=i.cal; totalP+=i.p; totalC+=i.c; totalF+=i.f; });
  totalCal = Math.round(totalCal); totalP = Math.round(totalP); totalC = Math.round(totalC); totalF = Math.round(totalF);

  DOM.calConsumed.textContent = totalCal; DOM.calGoal.textContent = settings.cal;
  DOM.calRing.setAttribute('stroke-dasharray', `${Math.min((totalCal / settings.cal) * 100, 100)}, 100`);
  DOM.calRing.style.stroke = totalCal > settings.cal ? 'var(--danger)' : 'var(--accent)';

  DOM.protText.textContent = `${totalP}/${settings.p}g`; DOM.carbText.textContent = `${totalC}/${settings.c}g`; DOM.fatText.textContent = `${totalF}/${settings.f}g`;
  DOM.protBar.style.width = `${Math.min((totalP / settings.p) * 100, 100)}%`; DOM.carbBar.style.width = `${Math.min((totalC / settings.c) * 100, 100)}%`; DOM.fatBar.style.width = `${Math.min((totalF / settings.f) * 100, 100)}%`;
  DOM.waterText.textContent = `${water} / ${settings.w} ml`; DOM.waterBar.style.width = `${Math.min((water / settings.w) * 100, 100)}%`;

  DOM.foodList.innerHTML = '';
  if(log.length === 0) DOM.foodList.innerHTML = '<p class="text-center text-muted">Henüz bir şey eklemedin.</p>';
  log.forEach((item, idx) => {
    let unitText = item.addedAmount && item.unit ? ` (${item.addedAmount}${item.unit})` : '';
    DOM.foodList.innerHTML += `
      <div class="food-item glass">
        <div class="food-info"><h4>${item.name}${unitText}</h4><p>${Math.round(item.p)}P • ${Math.round(item.c)}K • ${Math.round(item.f)}Y</p></div>
        <div style="display:flex; align-items:center;">
          <span class="food-cals">${Math.round(item.cal)} kcal</span>
          <button class="delete-btn" onclick="deleteHomeItem(${idx})"><i data-lucide="trash-2"></i></button>
        </div>
      </div>`;
  });
  lucide.createIcons();
}

window.deleteHomeItem = (idx) => { let log = getLog(currentStr); log.splice(idx, 1); setLog(currentStr, log); updateHome(); };
window.addWater = (amount) => { setWater(currentStr, getWater(currentStr) + amount); updateHome(); };
window.removeWater = (amount) => { setWater(currentStr, getWater(currentStr) - amount); updateHome(); };

function updateHistory() {
  const dateObj = new Date(historyStr);
  DOM.historyDate.textContent = dateObj.toLocaleDateString('tr-TR', { weekday: 'short', month: 'short', day: 'numeric' });
  const log = getLog(historyStr); const water = getWater(historyStr);
  let totalCal = 0; log.forEach(i => totalCal+=i.cal);
  DOM.hCal.textContent = Math.round(totalCal); DOM.hWater.textContent = water;
  
  DOM.historyFoodList.innerHTML = '';
  if(log.length === 0) DOM.historyFoodList.innerHTML = '<p class="text-center text-muted">Kayıt yok.</p>';
  log.forEach(item => {
    let unitText = item.addedAmount && item.unit ? ` (${item.addedAmount}${item.unit})` : '';
    DOM.historyFoodList.innerHTML += `
      <div class="food-item glass">
        <div class="food-info"><h4>${item.name}${unitText}</h4><p>${Math.round(item.p)}P • ${Math.round(item.c)}K • ${Math.round(item.f)}Y</p></div>
        <div class="food-cals">${Math.round(item.cal)} kcal</div>
      </div>`;
  });
  lucide.createIcons();
}

DOM.btnPrevDay.onclick = () => { let d = new Date(historyStr); d.setDate(d.getDate() - 1); historyStr = formatDate(d); updateHistory(); };
DOM.btnNextDay.onclick = () => { let d = new Date(historyStr); d.setDate(d.getDate() + 1); if(formatDate(d) > currentStr) return; historyStr = formatDate(d); updateHistory(); };

function updateProfile() {
  if(profile.current) DOM.inpCurrentWeight.value = profile.current;
  if(profile.target) DOM.inpTargetWeight.value = profile.target;
  if(profile.start && profile.target && profile.current) {
    DOM.lblWeightStart.textContent = `Başlangıç: ${profile.start}kg`; DOM.lblWeightTarget.textContent = `Hedef: ${profile.target}kg`;
    let totalDiff = Math.abs(profile.start - profile.target);
    let currentDiff = Math.abs(profile.start - profile.current);
    let percent = Math.min((currentDiff / totalDiff) * 100, 100);
    if (profile.start === profile.target) percent = 100;
    DOM.weightBar.style.width = `${percent}%`;
    let remaining = Math.abs(profile.current - profile.target).toFixed(1);
    DOM.lblWeightStatus.textContent = remaining > 0 ? `Hedefe ${remaining} kg kaldı! 🚀` : 'Hedefe Ulaştın! 🎉';
  }
  renderWeightHistory();
}

window.deleteWeight = (id) => {
  profile.weightHistory = profile.weightHistory.filter(w => w.id !== id);
  if (profile.weightHistory.length > 0) {
    profile.current = profile.weightHistory[profile.weightHistory.length - 1].weight;
  } else {
    profile.current = profile.start || null; // list boşsa start'a dön, veya null yap
  }
  localStorage.setItem('profile', JSON.stringify(profile));
  updateProfile();
};

function renderWeightHistory() {
  const container = document.getElementById('weight-history-list');
  if(!container) return;
  container.innerHTML = '';
  if(!profile.weightHistory || profile.weightHistory.length === 0) {
    container.innerHTML = '<p class="text-center text-muted">Henüz kilo kaydı yok.</p>';
    return;
  }
  // En yeni en üstte
  const sorted = [...profile.weightHistory].sort((a,b) => new Date(b.date) - new Date(a.date));
  sorted.forEach(item => {
    const d = new Date(item.date);
    const dateStr = d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    container.innerHTML += `
      <div class="food-item glass">
        <div class="food-info">
          <h4 style="margin: 0; font-size: 16px;">${item.weight} kg</h4>
          <p class="text-muted text-sm" style="margin: 2px 0 0 0;">${dateStr}</p>
        </div>
        <button class="delete-btn" onclick="deleteWeight('${item.id}')"><i data-lucide="trash-2"></i></button>
      </div>`;
  });
  lucide.createIcons();
}

DOM.btnSaveWeight.onclick = () => {
  const cw = parseFloat(DOM.inpCurrentWeight.value); const tw = parseFloat(DOM.inpTargetWeight.value);
  if(!cw || !tw) return alert('Lütfen kiloları girin.');
  if(!profile.start) profile.start = cw; 
  
  profile.current = cw; 
  profile.target = tw;
  
  if(!profile.weightHistory) profile.weightHistory = [];
  profile.weightHistory.push({
    id: Date.now().toString(),
    date: new Date().toISOString(),
    weight: cw
  });
  
  localStorage.setItem('profile', JSON.stringify(profile)); 
  updateProfile(); 
  alert('Kilo bilgileri güncellendi!');
};

// 7. Modals
DOM.btnAdd.onclick = () => { DOM.modalAdd.classList.add('active'); DOM.searchInput.value = ''; DOM.searchResults.innerHTML = ''; };
DOM.btnCloseModal.onclick = () => DOM.modalAdd.classList.remove('active');
DOM.btnClosePortion.onclick = () => DOM.modalPortion.classList.remove('active');

DOM.tabs.forEach(tab => {
  tab.onclick = () => {
    DOM.tabs.forEach(t => t.classList.remove('active')); DOM.tabContents.forEach(tc => tc.classList.remove('active'));
    tab.classList.add('active'); document.getElementById(`tab-${tab.dataset.target}`).classList.add('active');
  };
});

// Search & Portion Logic
DOM.searchInput.oninput = (e) => {
  const query = e.target.value.toLowerCase();
  DOM.searchResults.innerHTML = ''; if(!query) return;
  const allFoods = [...foodDB, ...customFoods];
  const results = allFoods.filter(f => f.name.toLowerCase().includes(query));
  
  results.forEach(item => {
    const div = document.createElement('div'); div.className = 'search-item';
    let label = item.ref && item.unit ? ` (${item.ref}${item.unit})` : '';
    div.innerHTML = `<div><h4 style="margin:0">${item.name}${label}</h4><small class="text-muted">${item.p}P • ${item.c}K • ${item.f}Y</small></div><div style="color:var(--accent); font-weight:600;">${item.cal} kcal</div>`;
    
    div.onclick = () => {
      // Open Portion Modal
      selectedFood = item;
      let refAmt = item.ref || 1;
      let unitStr = item.unit || 'Porsiyon';
      
      DOM.pTitle.textContent = item.name;
      DOM.pAmount.value = refAmt;
      DOM.pUnit.textContent = unitStr;
      
      updatePortionModal(refAmt);
      DOM.modalPortion.classList.add('active');
    };
    DOM.searchResults.appendChild(div);
  });
};

function updatePortionModal(currentAmount) {
  if(!selectedFood) return;
  let refAmt = selectedFood.ref || 1;
  let ratio = currentAmount / refAmt;
  
  DOM.pCalVal.textContent = Math.round(selectedFood.cal * ratio);
  DOM.pPVal.textContent = Math.round(selectedFood.p * ratio);
  DOM.pCVal.textContent = Math.round(selectedFood.c * ratio);
  DOM.pFVal.textContent = Math.round(selectedFood.f * ratio);
}

DOM.pAmount.oninput = (e) => {
  const val = parseFloat(e.target.value) || 0;
  updatePortionModal(val);
};

DOM.btnSavePortion.onclick = () => {
  if(!selectedFood) return;
  const inputAmount = parseFloat(DOM.pAmount.value) || 0;
  if(inputAmount <= 0) return alert('Geçerli bir miktar girin.');
  
  let refAmt = selectedFood.ref || 1;
  let ratio = inputAmount / refAmt;
  
  const newItem = {
    name: selectedFood.name,
    cal: selectedFood.cal * ratio,
    p: selectedFood.p * ratio,
    c: selectedFood.c * ratio,
    f: selectedFood.f * ratio,
    addedAmount: inputAmount,
    unit: selectedFood.unit || 'Porsiyon'
  };
  
  let log = getLog(currentStr);
  log.push(newItem);
  setLog(currentStr, log);
  updateHome();
  
  DOM.modalPortion.classList.remove('active');
  DOM.btnCloseModal.click();
};

DOM.btnSaveManual.onclick = () => {
  const name = DOM.mName.value.trim() || 'İsimsiz Yemek';
  const cal = parseInt(DOM.mCal.value) || 0;
  if(cal === 0) return alert('Kalori zorunlu!');
  
  const ref = parseFloat(DOM.mRef.value) || 100;
  const unit = DOM.mUnit.value.trim() || 'g';
  const p = parseFloat(DOM.mP.value) || 0;
  const c = parseFloat(DOM.mC.value) || 0;
  const f = parseFloat(DOM.mF.value) || 0;

  const newItem = { name, ref, unit, cal, p, c, f };
  
  // Directly save proportional entry as 1x of what user entered
  const logItem = { name, cal, p, c, f, addedAmount: ref, unit };
  let log = getLog(currentStr); log.push(logItem); setLog(currentStr, log);
  
  customFoods.push(newItem); localStorage.setItem('customFoods', JSON.stringify(customFoods));
  
  updateHome();
  DOM.mName.value=''; DOM.mCal.value=''; DOM.mRef.value=''; DOM.mUnit.value=''; DOM.mP.value=''; DOM.mC.value=''; DOM.mF.value='';
  DOM.btnCloseModal.click();
};

DOM.btnSettings.onclick = () => {
  DOM.setCal.value = settings.cal; DOM.setP.value = settings.p; DOM.setC.value = settings.c; DOM.setF.value = settings.f; DOM.setW.value = settings.w;
  DOM.modalSettings.classList.add('active');
};
DOM.btnCloseSettings.onclick = () => DOM.modalSettings.classList.remove('active');
DOM.btnSaveSettings.onclick = () => {
  settings = { cal: parseInt(DOM.setCal.value)||2000, p: parseInt(DOM.setP.value)||120, c: parseInt(DOM.setC.value)||200, f: parseInt(DOM.setF.value)||60, w: parseInt(DOM.setW.value)||2500 };
  localStorage.setItem('settings', JSON.stringify(settings)); updateHome(); DOM.btnCloseSettings.click();
};

updateHome();
