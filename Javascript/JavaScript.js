//alert("Welcome sur ma page");

//La fonction pour faire l'inversement
function inverserChaine(chaine) {
    return chaine.split('').reverse().join('');
}

console.log(inverserChaine("bonjour"));

//La fonction pour mettre en majuscule
function motsMajuscules(phrase) {
    return phrase.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(motsMajuscules("bonjour tout le monde")); 



//La fonction pour trouver le maximun et le plus petit dans un tableau
//Rechercher Maximum et Minimum: Écrire des fonctions pour trouver les valeurs maximales et minimales dans un tableau de nombres
function trouverlemax(tableaux) {
    return Math.max(...tableaux)
}

function trouverMinimum(tableaux) {
    return Math.min(...tableaux);
}

let tableaux = [12, 99, 90, 7, 59];
console.log(trouverlemax(tableaux));
console.log(trouverMinimum(tableaux));

//Fonction de recherche d'age dans une suite Workshop

const age = 18

if (age < 10){
    console.log("Tes un gamin, tu paies 100f")
}
else if (age > 10 && (age < 18)){
    console.log("Tes un jeune, tu paies 300f")
}

//Tableau de true et false et trier seulement les false

function Tridata(array, filterFunction) {
    return array.filter(filterFunction);
}

const Tableau = [true, false, true, false, true, false];
const True = value => value === true;

const trueValues = Tridata(Tableau, True);

console.log(trueValues);

//Fonction pour factoriser

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(10));


// Prime Number Check: Créer une fonction pour vérifier si un nombre est premier ou non.
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7)); 
console.log(isPrime(10)); 

