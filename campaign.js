'use strict';

const cities = 'Adana|Adıyaman|Afyonkarahisar|Ağrı|Aksaray|Amasya|Ankara|Antalya|Ardahan|Artvin|Aydın|Balıkesir|Bartın|Batman|Bayburt|Bilecik|Bingöl|Bitlis|Bolu|Burdur|Bursa|Çanakkale|Çankırı|Çorum|Denizli|Diyarbakır|Düzce|Edirne|Elazığ|Erzincan|Erzurum|Eskişehir|Gaziantep|Giresun|Gümüşhane|Hakkâri|Hatay|Iğdır|Isparta|İstanbul|İzmir|Kahramanmaraş|Karabük|Karaman|Kars|Kastamonu|Kayseri|Kırıkkale|Kırklareli|Kırşehir|Kilis|Kocaeli|Konya|Kütahya|Malatya|Manisa|Mardin|Mersin|Muğla|Muş|Nevşehir|Niğde|Ordu|Osmaniye|Rize|Sakarya|Samsun|Siirt|Sinop|Sivas|Şanlıurfa|Şırnak|Tekirdağ|Tokat|Trabzon|Tunceli|Uşak|Van|Yalova|Yozgat|Zonguldak'.split('|');
const form = document.querySelector('#match-form');
const citySelect = document.querySelector('#city');
const genderSelect = document.querySelector('#gender');
const adult = document.querySelector('#adult');
const result = document.querySelector('#match-result');

for (const city of cities) {
  const option = document.createElement('option');
  option.value = city;
  option.textContent = city;
  citySelect.append(option);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  if (!cities.includes(citySelect.value) || !['woman', 'man'].includes(genderSelect.value) || !adult.checked) return;

  const heading = document.createElement('h3');
  heading.textContent = 'Yan koltuk böyle görünecek.';
  const badge = document.createElement('span');
  badge.className = 'demo-label';
  badge.textContent = 'ÖRNEK SONUÇ · GERÇEK EŞLEŞME DEĞİL';
  const summary = document.createElement('div');
  summary.className = 'result-summary';
  for (const text of [citySelect.value, genderSelect.value === 'woman' ? 'Erkek sinema arkadaşı' : 'Kadın sinema arkadaşı', 'Ben Sana İnanıyorum']) {
    const item = document.createElement('span');
    item.textContent = text;
    summary.append(item);
  }
  const description = document.createElement('p');
  description.textContent = 'Canlı kampanyada burada aynı şehirden bir katılımcının eşleşme daveti yer alacak. İkiniz de kabul etmeden iletişim bilgileri paylaşılmayacak. Şu anda kayıt, eşleştirme ve mesajlaşma yapılmıyor.';
  result.replaceChildren(badge, heading, summary, description);
  result.hidden = false;
});

form.addEventListener('change', () => {
  result.hidden = true;
  result.replaceChildren();
});
