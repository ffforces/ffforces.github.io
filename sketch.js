


let message1 = ["päivä",
"yö"];

//päivä1
let message2 = ["päivä juo sinua, silmistäsi paino putoaa sormiin",
"joskus valo yllättää kulmasta jota ei nähty",
"selkää pitkin nousee yhä ryppyisiä paitoja ",
"eilinen vastakinostunut",
"on yhtä paljon hiljaisuutta kuin aikaa",
"emme tunne värejämme",
"vuodenaika rikkoo edeltäjänsä säännöt ",
"katson hänen kasvojensa päiviä",
"jäätyneen pinnan päälle sataa uutta lunta ",
"aukimurtunut, herkenevä makramee"
];

//yö1
let message3 = ["kirjoittuneena hiuksiisi kuin rouhittu atlas ",
"aukeaa kuin kivuton lommo",
"tulitikun pää on kuiva ja kysyy lisää pimeää",
"myöhästymme toisin",
"jokaisena hetkenä katulamppu paljastaa lumen joka ehtii",
"on yhtä paljon paikkoja, joista lähteä",
"talvi, hidasta lähtöä ",
"talvi kukkii, sitä vain ei kuule",
"kaula-aukko, hänen pieni sähköä laulava päänsä",
"talvehdin, poskiluiden läpi alkavat alaäänet",
"kuuntelemisen tilat aukeavat kuin kalkkiset onkalot",
"auto sutinut lumeen urat kuin pimeän reidet"
];

let message4 = ["päivä",
"yö"];

//päiv2
let message5 = ["painuu sinuun",
"joskus valo ylittää kulmat jota ei nähty",
"on enemmän hiljaisuutta kuin aikaa",
"tunnen värejä",
"vuodenaika rikkoo seuraajansa säännöt",
"katselen hänen kasvojaan",
"valoon kätkettyä pöytää",
"jäätyneen pinnan päälle sataa minuutteja"
];

//yö2
let message6 = ["vajonnut salonki",
"vastakinostunut",
"rouhittu atlas",
"kivuton lommo",
"herkenevä makramee",
"myöhästymme enemmän kuin ennen",
"kuuntelemisen tilat aukeavat ",
"poskiluiden läpi alkavat alaäänet",
"talvi kukkii, aukimurtunut",
"pilaripuisto",
"aukiluutunut, herkenevä makramee"
]






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
aika=millis()*0.01;
aika=aika%100;
//a=random(2);
fill(255,255,255);
rect(0, 0, width, height);
fill(0, 0, 0);

if (aika <50){

let word = random(message1); // select random word
text(word, width*0.2, height*0.3); // draw the word

if (word == "päivä"){
let word2 = random(message2); // select random word
text(word2, width*0.5, height*0.3); // draw the word
}

if (word == "yö"){
  let word2 = random(message3); // select random word
  text(word2, width*0.5, height*0.3); // draw the word
  }
}

if (aika >50){

let word = random(message4); // select random word
text(word, width*0.2, height*0.3); // draw the word

if (word == "päivä"){
let word2 = random(message5); // select random word
text(word2, width*0.5, height*0.3); // draw the word
}

if (word == "yö"){
  let word2 = random(message6); // select random word
  text(word2, width*0.5, height*0.3); // draw the word
  }
}




}
