// Tableau représentant les chiffres romains et leurs valeurs équivalentes en décimal.
const romanNumerals = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
];

/**
 * Convertit un nombre décimal en chiffre romain.
 *
 * @param {number} number - Le nombre à convertir en chiffre romain.
 * @returns {string} - Le chiffre romain équivalent.
 */
function convertToRoman(number) {
    let romanString = "";

    // Itérer à travers chaque chiffre romain en commençant par le plus grand.
    for (const [roman, value] of romanNumerals) {
        // Tant que le nombre est supérieur ou égal à la valeur du chiffre romain,
        // ajoutez le chiffre romain à la chaîne de résultat et soustrayez sa valeur.
        while (number >= value) {
            romanString += roman;
            number -= value;
        }
    }

    return romanString;
}

/**
 * Convertit un chiffre romain en nombre décimal.
 *
 * @param {string} romanString - La chaîne représentant le chiffre romain à convertir.
 * @returns {number} - Le nombre décimal équivalent.
 */
function convertToDecimal(romanString) {
    let decimalValue = 0;
    let index = 0;

    // Itérer à travers chaque chiffre romain en commençant par le plus grand.
    for (const [roman, value] of romanNumerals) {
        // Tant que la sous-chaîne actuelle correspond au chiffre romain,
        // ajoutez sa valeur au résultat et avancez l'index.
        while (romanString.substr(index, roman.length) === roman) {
            decimalValue += value;
            index += roman.length;
        }
    }

    return decimalValue;
}

/**
 * Génère un nombre entier aléatoire entre min et max inclus.
 *
 * @param {number} min - La valeur minimale.
 * @param {number} max - La valeur maximale.
 * @returns {number} - Un nombre entier aléatoire.
 */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Génère et convertit des nombres décimaux et romains de manière aléatoire.
 */
function generateAndConvertRandomNumbers() {
    console.log('Conversion de nombres décimaux aléatoires en chiffres romains:');
    for (let i = 0; i < 10; i++) {
        const randomDecimal = getRandomInteger(1, 3000);
        console.log(`${randomDecimal} -> ${convertToRoman(randomDecimal)}`);
    }

    console.log('\nConversion de chiffres romains aléatoires en nombres décimaux:');
    const sampleRomanNumerals = ['I', 'IV', 'IX', 'XXX', 'XL', 'L', 'XC', 'CD', 'CM', 'M'];
    for (let i = 0; i < 10; i++) {
        const randomRoman = sampleRomanNumerals[getRandomInteger(0, sampleRomanNumerals.length - 1)];
        console.log(`${randomRoman} -> ${convertToDecimal(randomRoman)}`);
    }
}

// Exécute la fonction pour générer et convertir des nombres aléatoires.
generateAndConvertRandomNumbers();