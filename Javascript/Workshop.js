//Les instructions simples : 
//console.log() : permet d'afficher sur la console (espace de debuging)
console.log("Hello World")
//Les variables : Déclaration , affectation et type
//Déclaration : On le fait à travers trois mots clés : const , let ou var
//Affectation : assigner une valeur à une variable
//Type : en js en on deux type de variables ; les variables de =type simples et les variables fde complexes 
//Les variables de type simples : Numbers (Tout ce qui est chiffres) , string (caractéres ou chaine de caractérs ) , bnoolean (true or false) , undefined (non défini ) , NaN (Not a Number) , Null (pas de valeur)
//On reconnait les string (x$caractére ou chaine de caractère ) à travers des guillements simple('a') ou dopuble("10")
let nom; // Déclaration de la varible nom
nom = "Aziz" // Affectation de valeur 'Aziz' qui est de type string )à la variable nom
let prenom = "Faye"
console.log(nom);

//On peut faire aussi la déclaration et l'affectation sur la mm ligne

const pi = 3.14; // Déclaration de la variable pi et de son initialisation (affectation) avec la valeur 3.14
console.log(pi);

var num = 10;

let sum = pi * nom
var fullName = prenom + nom
console.log(fullName);
let checkingNum = Number.isInteger(num)
let checking = Number.isInteger(fullName)
console.log("est ce que num est un nombre?", checking, " ;est ce que fullName est un nombre?", checkingNum);
let number = 10;
var number2 = "10"
const newNumber = parseInt(number2)
console.log(newNumber + 10);

//Toutes opérations arithmétiques sont valables sur les varaibles de mm type (addition + , soustraction - ;division  : ou / ;multiplication * )
//Autres opérations : puissance au carré ** ; puissace ^ ; && et logique ; || ou logique ;
//(age >= 10 && age < 18) age compris entre 10 et 18 
// OPérations de commparaison:  = affectation ; == comparaison simple (sans tenir en compte le type des éléments à comparés) ; === comparaison strict ; != diffrence simple ; !== différence stricte

console.log(number == number2);  // nous renvois true du fait qu'on a seulement comparerles valeurs 
console.log(number === number2);  // nous renvois false du fait qu'on a comparé les  valeurs  et les types

console.log("Comparaison par différence");
console.log(number != number2);  // nous renvois true du fait qu'on a seulement comparerles valeurs 
console.log(number !== number2);  // nous renvois false du fait qu'on a comparé les  valeurs  et les types

//Les varaibles de types complexes : ces varaibles sont un regroupement de variables de type simples . Nous allons étudier ici que les tableaux et les objets
//Les tableaux : On reconnait les tableaux à travers des crochets ([]) et à l"intérieur des variables simple séparés par des virgules. ILs dont caractérisés par les indexes des éléments ou positions des éléments ou encore indexe
const tab = [12, 32, 78, 89, 200, 34]  //un tableau de numbers
// indices   0    1   2   3    4    5
var noms = ['Fall', 'Ndiaye', "Seck", "Faye", "Omer"] // tableau de String
let chek = [true, true, false, true, false] // tableau de Boolean
const mix = ["Aziz", 26, true, 10, 'Faye'] // un tableau mix

//POur accéder ou manipuler  un élément d'un tableau , on appele d'abord le nom du tableau , ensuite on met en croche l'indice oula postion ou l'indexe de l"émenent

console.log(tab[4]) //output : 200
console.log(tab[10]); //output : undefined parce que l'indice 10 n'existe pas dans le tableau tab

console.log(tab[0] + mix[1]); //output : 38 (12+26) addition
console.log(noms[0] + mix[0]); //output : FallAziz (concatenation)

//Les méthodes ou fonctions sur les tableaux 
console.log(tab.length); //length : permet de retourner le nmbre d'éléments d'un tableau
noms.push("Mbaye") //push permet d'ajouter un nouveau élémnet à la fin d'un tableau
console.log(noms);

mix.unshift("Marie") //permet d'ajouter un au début du tableau un élément
console.log(mix);
// pop() : permet de supprimer le dernier élément du tableau et shift() pour supprimer le premier élément

mix.pop()
console.log(mix);

//Plus dec méthodes sur les tableaux en js https://www.w3schools.com/js/js_array_methods.asp
//Les méthodes sur les Strings : https://www.w3schools.com/js/js_string_methods.asp

//Les objets :C'est une meilleur façon de faire un regroupement de varaibles simples , ici au lieu de parler d'indices comme dans les tableaux , nous allons parler de clé et et de valeurs , et on les reconnait à travers des accolades ({})

// const objt = { prenom : "Aziz" , age : 26 , isStudentInGmc : true , id : 10 , nom : 'Faye'}
const objt = {
    prenom: "Aziz",
    age: 26,
    isStudentInGmc: true,
    id: 10,
    nom: 'Faye'
}

//Pour manipuler les élément d'u objet, on appel d'abord le nom de l'objet ensuite faire un point (.) puis la clé de l'élément 

console.log(objt.age);
//Comme dans les tableaux il existe plusieurs méthodes pour les objets aussi

console.log(Object.keys(objt)); // Object.keys(le_nom_de_objet) renvoie toutes les clés de l'objet dans un tableau

//Plus de méthodes sur les objets : https://www.w3schools.com/js/js_object_methods.asp


//Les Boucles:  Sont des intructions dans js qui pemettent d'ittérer un ensemble d'élements de positions différentes comme les tableaux 
//Itteration : effectuer une mm action sur des rang différents ; 
//En JS nous avons les boucles , while , Do while , for , for in et for of
//Les boucles sont caractérisées par 3 éléments ; l'ittérateur ( i fréquement utlisé) pour passer d'un rang à un autre , l'initialisation  (là on commence à ittérer , la condition d'arret : la ou l'on s'arrete à itterer )
//LA boucle for 

//const tab = [12, 32, 78, 89, 200, 34]  //un tableau de numbers

// let i = 0
for ( let i = 0 ; i < tab.length ; i++){
    tab[i] = tab[i]+2;
}
console.log(tab);
// POur i allant de 0 ; jusqu'à 6(6 exclus) (tab.lentth ou le nombre d'élément du tableau tab) ; tout en faissant des pas de 1 

//Pour i = 0 , i < tab.length ? <=> 0 < 6 ? => true , donc console.log(tab[i]) => console.log(tab[0]) = 12 ; i++ => i = i+1 => i = 0+1 , donc i =1 actuellemnt
//Pour i = 1 , i < tab.length ? <=> 1 < 6 ? => true , donc console.log(tab[i]) => console.log(tab[1]) = 32 ; i++ =>i = i+1 => i = 1+1 , donc i =2 actuellemnt
//Pour i = 2 , i < tab.length ? <=> 2 < 6 ? => true , donc console.log(tab[i]) => console.log(tab[2]) = 78 ; i++ =>i = i+1 => i = 2+1 , donc i =3 actuellemnt
//...

//i++ <=> i = i+1  <=> i+=1 ;
// i+=2 <=> i = i+2


//Les fonctions 

function addition(x,y){
    let somme = x+y
    return somme
}

console.log(addition(3,2));
console.log(addition(10,2));
console.log(addition(3,20));
console.log(addition(30,2));
