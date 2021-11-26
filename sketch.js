let message1 = ["ennen kuin ehdin kysyä, minua on kysytty",
"menen tyhjään jotta odottaminen alkaisi tuntua joltain"]

let message2 = ["minuun iskeytyy ääntä, pintoja ",
"tulen koko ajan nuoremmaksi"]

let message3 = ["äkkiä muistan lauluja joilla peitotaan kaikuja ",
"suuni keksii sinulle tilan, jonne se puhuu "]

let message4 = ["äkkiä muistan kaikuja",
"olen vastaselitettynä, liikun nimissäni"]

let message5 = ["tulet valmiiksi edessäni, takaraivosi hehkuu ",
"sydän kesken kaikista paikoista, kirjekuori ei nuoltu"]

let message6 = ["en vähään aikaan osaa mitään, minua ei melkein näe ",
"muistutan itseäni niin paljon, että opin nimiäni "]

let message7 = ["sydän, jolle ei ole edes niin montaa nimeä ",
"hän toistaa ikäänsä, se on yksinkertaisempi kuin minun, "]

let message8 = [" lumet sulavat, kruunut hajoavat",
"äkkiä olen yksinkertaisempi kuin sinä"]


let message9 = ["toistat nimeäsi, se on monta kertaa sama",
"äkkiä luulen kasvojasi omikseni "]

let message10 = ["olet paikka johon osun, mantra ",
"olet kaikki paikat jotka maailma ehtii tehdä valmiiksi "]

let message11= ["olet perillä siinä mikä on perillä sinussa  ",
"teen itsestäni uusia henkilöitä, uurnalehtoja "]

let message12=["katoan sinulta, tulen sinuksi, takaraivoni hehkuu",
"synnyn monta kertaa, ikääni ei laske kukaan"]

let message13=["sydän laskee kaikkia päiviä,",
"ei riitä kaikkiin päiviin"]

let message14=["vastakeksitty laji"]

let message15=["tulen koko ajan nuoremmaksi"]

let message16=["arka antura, pulssi joka käy kaikissa paikoissa."]

let message17=["olet paikka johon osutaan"]

let message18=["ennen kuin ehdin kysyä, minua on kysytty",
"menen tyhjään jotta odottaminen alkaisi tuntua joltain",
"minuun iskeytyy ääntä, pintoja",
"tulen koko ajan nuoremmaksi",
"äkkiä muistan lauluja joilla peitotaan kaikuja",
"suuni keksii sinulle tilan, jonne se puhuu",
"äkkiä muistan kaikuja",
"olen vastaselitettynä, liikun nimissäni",
"tulet valmiiksi edessäni, takaraivosi hehkuu",
"sydän kesken kaikista paikoista, kirjekuori ei nuoltu",
"en vähään aikaan osaa mitään, minua ei melkein näe",
"muistutan itseäni niin paljon, että opin nimiäni",
"sydän, jolle ei ole edes niin montaa nimeä",
"hän toistaa ikäänsä, se on yksinkertaisempi kuin minun,",
 "lumet sulavat, kruunut hajoavat",
"äkkiä olen yksinkertaisempi kuin sinä",
"toistat nimeäsi, se on monta kertaa sama",
"äkkiä luulen kasvojasi omikseni",
 "olet paikka johon osun, mantra",
"olet kaikki paikat jotka maailma ehtii tehdä valmiiksi",
"olet perillä siinä mikä on perillä sinussa",
"teen itsestäni uusia henkilöitä, uurnalehtoja",
"katoan sinulta, tulen sinuksi, takaraivoni hehkuu",
"synnyn monta kertaa, ikääni ei laske kukaan",
"äkkiä olet yksinkertaisempi kuin minä",
"sydän laskee kaikkia päiviä, ei riitä kaikkiin päiviin",
"vastakeksitty laji",
"tulen koko ajan nuoremmaksi",
"arka antura, pulssi joka käy kaikissa paikoissa.",
"olet paikka johon osutaan"]

let x;
let d;
let e;
let index = 0;
let b = 0;
let r;
let y;
let u;
let i;
let p=1;
let s=200;
let z=1;
let q=1;
let h=1;
let aika;
let aika2;

function setup() {

createCanvas(displayWidth, displayHeight);
frameRate(1);

//fullScreen();
//Helvetica = loadFont("Asul-Regular.ttf");
//Helvetica=  createFont("Asul-Regular", 45);
//Helvetica = loadFont("CordiaUPC-48.vlw");
background(255,255,255);
}

function draw() {


z=z+1;
aika=millis()*0.001;
aika=aika%800;
let aika2=millis()*0.001;
aika2=aika2%(width*0.2);
// //////////////////////////////////////////////////////////////////////////////

//teksti01


//fill(52, 106, 121);
//x = int(random(width)/3);
//let word = random(message1); // select random word
//text(word, x+200, random(200)); // draw the word

//teksti1-1
if(aika>137 && aika<138){
fill(52, 106, 121);
x = random(width/3);
let word = random(message1); // select random word
text(word, x+(width*0.02), random(height*0.1)); // draw the word
}

//teksti2-1
if(aika>140 && aika<142){
fill(52, 106, 121);
x = random(width/3);
let word4 = random(message2); // select random word
text(word4, x+(width*0.7), (height*0.8)-random(height*0.1));
}

//teksti3-1
if(aika>150 && aika<152){
fill(52, 106, 121);
x = random(width/3);
let word5 = random(message3); // select random word
text(word5, x+(width*0.7), random(height*0.05)+height*0.05);
}


//teksti4-1
if(aika>160 && aika<162){
fill(52, 106, 121);
x = random(width/3);
let word6 = random(message4); // select random word
text(word6, x+(width*0.01), (height*0.8)+random(height*0.05));
}

//teksti5-1
if(aika>170 && aika<172){
fill(52, 106, 121);
x = random(width/3);
let word6 = random(message5); // select random word
text(word6, x+(width*0.5)-(width*0.1), random(height*0.1)+height*0.05);
}

///////////////////////////////////

//teksti1-2
if(aika>180 && aika<182){
fill(52, 106, 121);
x = random(width/3);
let word = random(message1); // select random word
text(word, x+(width*0.02), random(height*0.1)); // draw the word
}

//teksti2-2
if(aika>190 && aika<192){
fill(52, 106, 121);
x = random(width/3);
let word4 = random(message2); // select random word
text(word4, x+(width*0.7), (height*0.8)-random(height*0.1));
}

//teksti3-2
if(aika>200 && aika<202){
fill(52, 106, 121);
x = random(width/3);
let word5 = random(message3); // select random word
text(word5, x+(width*0.7), random(height*0.05)+height*0.05);
}

//teksti4-2
if(aika>210 && aika<212){
fill(52, 106, 121);
x = random(width/3);
let word6 = random(message4); // select random word
text(word6, x+(width*0.01), (height*0.8)+random(height*0.05));
}

//teksti5-2
if(aika>220 && aika<222){
fill(52, 106, 121);
x = random(width/3);
let word6 = random(message5); // select random word
text(word6, x+(width*0.5)-(width*0.1), random(height*0.1)+height*0.05);
}


//////////////////////////////

//teksti1-3
if(aika>230 && aika<232){
fill(52, 106, 121);
x = random(width/3);
let word = random(message1); // select random word
text(word, x+(width*0.02), random(height*0.1)); // draw the word
}

//teksti2-3
if(aika>240 && aika<242){
fill(52, 106, 121);
x = random(width/3);
let word4 = random(message2); // select random word
text(word4, x+(width*0.7), (height*0.8)-random(height*0.1));
}

//teksti3-3
if(aika>253 && aika<256){
fill(52, 106, 121);
x = random(width/3);
let word5 = random(message3); // select random word
text(word5, x+(width*0.7), random(height*0.05)+height*0.05);
}

//teksti4-3
if(aika>363 && aika<365){
fill(52, 106, 121);
x = random(width/3);
let word6 = random(message4); // select random word
text(word6, x+(width*0.01), (height*0.8)+random(height*0.05));
}


//teksti5-3
if(aika>420 && aika<425){
fill(52, 106, 121);
x = random(width/3);
let word6 = random(message5); // select random word
text(word6, x+(width*0.5)-(width*0.1), random(height*0.1)+height*0.05);
}







//////////////////////////////////////////////////////////////

//teksti02










////////////////////////////////////////////////////////


//teksti03










//////////////////////////////////////////////////////////

//teksti04










////////////////////////////////////////////////////////////

//teksti05










//////////////////////////////////////////////////////


//pyyhkimis funktio



if(aika>799 && aika<801){

fill(255,255,255);
rect(0, 0, width, height);
//if(z>1802){
//z=0;

//}
}

////////////////////////////////////////////////////////////

//keski sykkyrä
if(aika<800){

//textFont(Helvetica, 30);
e = random(width*0.4);

let word2 = random(message18);
fill(52, 106, 121);
text(word2,(width/2.3)+random(aika2),height/2+random(aika2));
//text(word2,(width/2.3)-(random(width*0.2)-random(width*0.2)),random(height*0.2)-random(height*0.2)+height/2);


//float z = textWidth(message[int(random(26))]);
//index = (index + 1) % message.length;




//textFont(Helvetica, 30);
e = random(width*0.4);

let word3 = random(message18);

fill(255, 235, 252);
text(word2,(width/2.3)+random(aika2),height/2+random(aika2));
//text(word3,(width/2.3)-(random(width*0.2)-random(width*0.2)),random(height*0.2)-random(height*0.2)+height/2);
//float z = textWidth(message[int(random(26))]);
//index = (index + 1) % message.length;
}





}
