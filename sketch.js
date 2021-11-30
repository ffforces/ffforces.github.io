


let message1 = ["päivä",
"yö"];


let message2 = ["kaikki tämä on yhä mutta mikään ei aina",
"päivä juo sinua, silmistäsi paino putoaa sormiin",
"joskus valo yllättää kulmasta jota ei nähty",
"selkää pitkin nousee yhä ryppyisiä paitoja ",
"eilinen kinostuu",
"on yhtä paljon hiljaisuutta kuin aikaa",
"emme tunne värejämme",
"vuodenaika rikkoo edeltäjänsä säännöt ",
"katson hänen kasvojensa päiviä",
"jäätyneen pinnan päälle sataa uutta lunta, minuutti tuntuu  "
];

let message3 =
["kirjoittuneena hiuksiisi kuin rouhittu atlas ",
"aukeaa kuin kivuton lommo",
"tulitikun pää on kuiva ja kysyy lisää pimeää",
"myöhästymme toisin",
"jokaisena hetkenä katulamppu paljastaa lumen joka ehtii",
"on yhtä paljon paikkoja, joista lähteä",
"talvi, hidasta lähtöä ",
"talvi kukkii, sitä vain ei kuule",
"kaula-aukko, jonka läpi hänen pieni sähköä laulava päänsä",
"talvehdin, poskiluiden läpi alkavat alaäänet",
"kuuntelemisen tilat aukeavat kuin kalkkiset onkalot",
"auto sutinut lumeen urat jotka muistuttavat pimeässä reisiä"
];

let a;


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
aika=aika%2;
//a=random(2);
fill(255,255,255);
rect(0, 0, width, height);
fill(0, 0, 0);


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
