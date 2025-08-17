// Générer des étoiles aléatoires
function creerEtoiles(nombre) {
   const starsContainer = document.getElementById("stars");
   for (let i = 0; i < nombre; i++) {
       const star = document.createElement("div");
       star.classList.add("star");
       const size = Math.random() * 3 + 1; // taille 1-4px
       star.style.width = size + "px";
       star.style.height = size + "px";
       star.style.top = Math.random() * 100 + "%";
       star.style.left = Math.random() * 100 + "%";
       star.style.animationDuration = (Math.random() * 3 + 2) + "s";
       starsContainer.appendChild(star);
   }
}

// Création de 50 étoiles
creerEtoiles(50);

// Message du jour
function afficherMessage() {
   const messages = [
       "Les étoiles vous guident vers de nouvelles opportunités ✨",
       "Prenez le temps d’écouter votre intuition aujourd'hui 🌙",
       "Un changement arrive, préparez-vous à l’accueillir 🌟",
       "Les planètes favorisent la créativité et l’inspiration 🎨"
   ];

   const index = Math.floor(Math.random() * messages.length);
   document.getElementById("message").textContent = messages[index];
}

// Horoscope quotidien
function afficherHoroscope() {
   const signe = document.getElementById("signe").value;

   const horoscopes = {
       "Bélier": ["Aujourd'hui, Bélier, vos idées brillent, osez les partager !", "Une rencontre inattendue pourrait illuminer votre journée."],
       "Taureau": ["Taureau, la patience sera votre meilleure alliée aujourd'hui.", "Prenez soin de vous et de votre environnement, vous en récolterez les fruits."],
       "Gémeaux": ["Gémeaux, la communication est clé, exprimez vos pensées clairement.", "Un moment de détente pourrait révéler une nouvelle inspiration."],
       "Cancer": ["Cancer, votre intuition vous guide vers de belles opportunités.", "Prenez le temps d’écouter vos émotions, elles contiennent des réponses."],
       "Lion": ["Lion, votre énergie attire l’attention, profitez-en pour avancer vos projets.", "Soyez généreux aujourd'hui, la reconnaissance viendra naturellement."],
       "Vierge": ["Vierge, une organisation rigoureuse vous permettra de réussir.", "Prenez un moment pour analyser calmement une situation complexe."],
       "Balance": ["Balance, l’équilibre sera votre force aujourd'hui.", "Une décision importante se profile, suivez votre instinct et votre cœur."],
       "Scorpion": ["Scorpion, la passion guide vos actions, laissez-la vous inspirer.", "Une découverte personnelle pourrait transformer votre perspective."],
       "Sag
