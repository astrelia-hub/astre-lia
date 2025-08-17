// Messages du jour
const messages = [
    "Aujourd’hui, écoute ton intuition : elle t’ouvrira des portes insoupçonnées 🌙",
    "Un vent de nouveauté souffle : sois prêt à accueillir le changement ✨",
    "Les planètes te rappellent que la patience est une force intérieure 🌌",
    "La lumière des étoiles guide ton chemin, avance avec confiance 🌟",
    "Chaque fin cache un nouveau départ, laisse les astres t’accompagner 🔮",
    "Ton énergie est précieuse : protège-la et partage-la avec sagesse ☀️",
    "Aujourd’hui, célèbre même les petites victoires 🌠"
];

function afficherMessage() {
    const index = new Date().getDate() % messages.length;
    document.getElementById("message-du-jour").textContent = messages[index];
}

// Horoscope simple
const horoscopes = {
    "Bélier": "Aujourd’hui, votre énergie est au top, profitez-en pour avancer dans vos projets.",
    "Taureau": "Prenez soin de vous et accordez-vous un moment de détente.",
    "Gémeaux": "La communication est favorisée, exprimez vos idées avec confiance.",
    "Cancer": "Vos émotions sont fortes aujourd’hui, écoutez votre cœur.",
    "Lion": "C’est le moment de briller et de montrer vos talents.",
    "Vierge": "Organisez votre journée, la rigueur sera votre alliée.",
    "Balance": "Cherchez l’équilibre dans vos relations et vos choix.",
    "Scorpion": "Intuition et passion guideront vos décisions.",
    "Sagittaire": "Aventure et curiosité vous mèneront vers de nouvelles découvertes.",
    "Capricorne": "Travail et persévérance porteront leurs fruits.",
    "Verseau": "Innovations et idées nouvelles sont à l’honneur.",
    "Poissons": "Laissez libre cours à votre imagination et à votre créativité."
};

function afficherHoroscope() {
    const signe = document.getElementById("signe").value;
    const resultat = horoscopes[signe] || "Sélectionnez votre signe pour voir votre horoscope.";
    document.getElementById("horoscopeResult").textContent = resultat;
}
