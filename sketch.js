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


function setup() {

createCanvas(displayWidth, displayHeight);
frameRate(30);

//fullScreen();
//Helvetica = loadFont("Asul-Regular.ttf");
//Helvetica=  createFont("Asul-Regular", 45);
//Helvetica = loadFont("CordiaUPC-48.vlw");
background(255,255,255);
}

function draw() {


z=z+1;
aika=millis()*0.01;
aika=aika%800;


// //////////////////////////////////////////////////////////////////////////////

//teksti01


//fill(52, 106, 121);
//x = int(random(width)/3);
//let word = random(message1); // select random word
//text(word, x+200, random(200)); // draw the word


if(aika>137 && aika<138){


//textFont(Helvetica, 30);
fill(52, 106, 121);
x = random(width/3);
let word = random(message1); // select random word
text(word, x+(width*0.02), random(height*0.1)); // draw the word
}


if(aika>166 && aika<168){


//textFont(Helvetica, 30);
fill(52, 106, 121);
x = random(width/3);
let word = random(message1); // select random word
text(word, x+(width*0.02), random(height*0.1)); // draw the word
}

if(aika>196 && aika<198){


//textFont(Helvetica, 30);
fill(52, 106, 121);
x = random(width/3);
let word = random(message1); // select random word
text(word, x+(width*0.02), random(height*0.1)); // draw the word
}



//////////////////////////////////////////////////////////////

//teksti02

if(aika>220 && aika<225){
fill(52, 106, 121);
x = random(width/3);
let word4 = random(message2); // select random word
text(word4, x+(width*0.7), (height*0.8)-random(height*0.1));
}



if(aika>245 && aika<248){
fill(52, 106, 121);
x = random(width/3);
let word4 = random(message2); // select random word
text(word4, x+(width*0.7), (height*0.8)-random(height*0.1));
}


if(aika>255 && aika<258){
fill(52, 106, 121);
x = random(width/3);
let word4 = random(message2); // select random word
text(word4, x+(width*0.7), (height*0.8)-random(height*0.1));
}




////////////////////////////////////////////////////////


//teksti03

if(aika>300 && aika<305){
fill(52, 106, 121);
x = random(width/3);
let word5 = random(message3); // select random word
text(word5, x+(width*0.7), random(height*0.05)+height*0.05);
}

if(aika>323 && aika<326){
fill(52, 106, 121);
x = random(width/3);
let word5 = random(message3); // select random word
text(word5, x+(width*0.7), random(height*0.05)+height*0.05);
}


if(aika>343 && aika<346){
fill(52, 106, 121);
x = random(width/3);
let word5 = random(message3); // select random word
text(word5, x+(width*0.7), random(height*0.05)+height*0.05);
}




//////////////////////////////////////////////////////////

//teksti04


if(aika>310 && aika<315){
fill(52, 106, 121);
x = random(width/3);
let word6 = random(message4); // select random word
text(word6, x+(width*0.01), (height*0.8)+random(height*0.05));
}


if(aika>320 && aika<325){
fill(52, 106, 121);
x = random(width/3);
let word6 = random(message4); // select random word
text(word6, x+(width*0.01), (height*0.8)+random(height*0.05));
}


if(aika>332 && aika<335){
fill(52, 106, 121);
x = random(width/3);
let word6 = random(message4); // select random word
text(word6, x+(width*0.01), (height*0.8)+random(height*0.05));
}


////////////////////////////////////////////////////////////

//teksti05


if(aika>370 && aika<385){
fill(52, 106, 121);
x = random(width/3);
let word6 = random(message5); // select random word
text(word6, x+(width*0.5)-(width*0.1), random(height*0.1)+height*0.05);
}

if(aika>400 && aika<405){
fill(52, 106, 121);
x = random(width/3);
let word6 = random(message5); // select random word
text(word6, x+(width*0.5)-(width*0.1), random(height*0.1)+height*0.05);
}


if(aika>420 && aika<425){
fill(52, 106, 121);
x = random(width/3);
let word6 = random(message5); // select random word
text(word6, x+(width*0.5)-(width*0.1), random(height*0.1)+height*0.05);
}






//////////////////////////////////////////////////////


//pyyhkimis funktio



if(z>1800){

fill(255,255,255);
rect(0, 0, width, height);
if(z>1802){
z=0;

}
}

////////////////////////////////////////////////////////////

//keski sykkyrä
if(aika<800){

//textFont(Helvetica, 30);
e = random(width*0.4);

let word2 = random(message18);
fill(52, 106, 121);
text(word2,(width/2.3)-(random(width*0.2)-random(width*0.2)),random(height*0.2)-random(height*0.2)+height/2);
//float z = textWidth(message[int(random(26))]);
//index = (index + 1) % message.length;




//textFont(Helvetica, 30);
e = random(width*0.4);

let word3 = random(message18);

fill(255,255,255);
text(word3,(width/2.3)-(random(width*0.2)-random(width*0.2)),random(height*0.2)-random(height*0.2)+height/2);
//float z = textWidth(message[int(random(26))]);
//index = (index + 1) % message.length;
}





}
