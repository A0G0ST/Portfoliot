const toggleBtn = document.getElementById('langToggle');
const svTexts = document.querySelectorAll('.lang-sv');
const enTexts = document.querySelectorAll('.lang-en');

// Hämta språk från localStorage
let isEnglish = localStorage.getItem('language') === 'en';

// Funktion för att uppdatera språkvisningen
function updateLanguage() {
  svTexts.forEach(el => el.style.display = isEnglish ? 'none' : 'block');
  enTexts.forEach(el => el.style.display = isEnglish ? 'block' : 'none');
  toggleBtn.textContent = isEnglish ? 'SV' : 'EN';
}

// Kör direkt när sidan laddas
updateLanguage();

// När användaren klickar på knappen
toggleBtn.addEventListener('click', () => {
  isEnglish = !isEnglish;
  localStorage.setItem('language', isEnglish ? 'en' : 'sv');
  updateLanguage();
});


//för pilen
// function updateArrowHint(language) {
//   const svText = document.querySelector('.lang-sv');
//   const enText = document.querySelector('.lang-en');

//   if (language === 'sv') {
//       svText.style.display = 'none';
//       enText.style.display = 'inline';
//   } else {
//       svText.style.display = 'inline';
//       enText.style.display = 'none';
//   }
// }

// // Kör detta också direkt efter sidladdning
// const savedLang = localStorage.getItem("language") || "sv";
// updateArrowHint(savedLang);
