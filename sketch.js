


let message1 = ["päivä",
"yö"];

//päivä1
let message2 = ["silmistä paino putoaa sormiin",
"valo yllättää pimeän kulmasta",
"selkää pitkin nousee ryppyisiä paitoja",
"eilinen vastakinostunut",
"on yhtä paljon hiljaisuutta kuin aikaa",
"emme tunne värejämme",
"vuodenaika rikkoo edeltäjänsä säännöt ",
"katson hänen kasvojensa päiviä",
"jäätyneen pinnan päälle sataa lunta ",
"aukimurtunut, makramee",
"pesulaput hajonneet selkääsi pitkin",
"poissaolo, kirjoitettu sivu kesken"
];

//yö1
let message3 = ["kirjoittuneena hiuksiisi kuin rouhittu atlas ",
"aukeaa kuin kivuton lommo",
"tulitikun pää on kuiva ja kysyy lisää pimeää",
"myöhästymme hitaammin kuin ennen",
"on yhtä paljon paikkoja, joista lähteä",
"talvi kukkii, sitä vain ei kuule",
"talvi, hidasta lähtöä",
"kaula-aukko, hänen sähköä laulava päänsä",
"poskiluiden läpi alkavat alaäänet",
"kuuntelemisen tilat aukeavat, kalkkiset onkalot",
"auto sutinut lumeen urat kuin pimeän reidet",
"alat haluta leipää, olet ohitseni kasvava lapsi "
];

let message4 = ["päivä",
"yö"];

//päiv2
let message5 = ["painuu sinuun",
"valo ylittää pimeän kulmasta",
"on enemmän hiljaisuutta kuin aikaa",
"väriini lähtenyt, kauemmin poissa",
"vuodenaika rikkoo seuraajansa säännöt",
"katselen hänen kasvojaan",
"valoon kätketty pöytä",
"pesulaput hajonneet selkääsi pitkin",
"kirjoitettu sivu kesken",
"eilinen vastakinostunut"
];

//yö2
let message6 = ["vajonnut salonki",
"vastakinostunut",
"rouhittu atlas",
"kivuton lommo",
"herkenevä makramee",
"kuunneltu tila",
"myöhästymme hitaammin kuin ennen",
"poskiluiden alaäänet",
"talvi kukkii, aukimurtunut",
"pilaripuisto",
"vajonnut salonki"
];


let message7 = ["yö",
"yö"];



function setup() {

createCanvas(displayWidth, displayHeight);
frameRate(0.1);
textSize(displayWidth/70);
//fullScreen();
//Helvetica = loadFont("Asul-Regular.ttf");
//Helvetica=  createFont("Asul-Regular", 45);
//Helvetica = loadFont("CordiaUPC-48.vlw");
background(255,255,255);

}

function draw() {


let aika;
aika=millis()*0.1;
aika=aika%150;
//a=random(2);
fill(255,255,255);
rect(0, 0, width, height);
fill(0, 0, 0);

if (aika <50){

let word1 = random(message1); // select random word
text(word1, width*0.2, height*0.3); // draw the word

if (word1 === "päivä"){
let word3 = random(message2); // select random word
text(word3, width*0.5, height*0.3); // draw the word
}

if (word1  === "yö"){
  let word4 = random(message3); // select random word
  text(word4, width*0.5, height*0.3); // draw the word
  }
}

if (aika >50 && aika <100){

let word5 = random(message4); // select random word
text(word5, width*0.2, height*0.3); // draw the word

if (word5 === "päivä"){
let word6 = random(message5); // select random word
text(word6, width*0.5, height*0.3); // draw the word
}

if (word6 === "yö"){
  let word7 = random(message6); // select random word
  text(word7, width*0.5, height*0.3); // draw the word
  }
}


if (aika >100){

let word8 = random(message7); // select random word
text(word8, width*0.2, height*0.3); // draw the word


if (word8 == "yö"){
  let word9 = random(message6); // select random word
  text(word9, width*0.5, height*0.3); // draw the word
  }
}




}
