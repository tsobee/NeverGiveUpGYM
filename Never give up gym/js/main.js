var menupar=["Home","About us","Programs","Contact"];
var jump = ["#index.html","#about","#subtitle","#contact"]
for(let i=0;i<menupar.length;i++){
 document.querySelector("#menuDin").innerHTML+=`<li><a href="${jump[i]}"
id="${menupar[i]}">${menupar[i]}</a></li>`;
 document.querySelector("#menuR").innerHTML+=`<li><a href="${jump[i]}"
id="${menupar[i]}">${menupar[i]}</a></li>`;
}

var menuBur = $("#menuR li");
menuBur.hide();
var burger = $("#bur");
burger.click(function(){
    menuBur.slideToggle("slow");
});

var about=document.getElementById("about");
var hAbo=document.createElement("h1");
    about.appendChild(hAbo);
    hAbo.innerHTML="About us";

var textR=["Our success is reflected in the greatest modern exercise equipment and beautifuly arranged enterier that emphasizes productivity. </br></br> Our most professional coaches will make sure your workout is effective and efficient. </br></br>  Individual trainings are adapted to the most diverse workouts and various fitness needs of exercisers.</br> For group trainings our tactic is based on forming smaller groups so the workout could be more effective for every member."]
var pics=["abous.png"];

for(let i=0;i<pics.length;i++){
        var abo=document.createElement("div");
            abo.setAttribute("class","about");
            about.appendChild(abo);
        var pic=document.createElement("img");
            abo.appendChild(pic);
        var txt=document.createElement("div");
            txt.setAttribute("class","saus");
            abo.appendChild(txt);
        var saus=document.createElement("p");
            saus.innerHTML=textR[i];
            txt.appendChild(saus);
            pic.setAttribute("src","img/"+pics[i]);
            pic.setAttribute("alt","About us");
   }

   $(document).ready(function(){

    programi();
   });
  
   
   function programi(){
    let prog = document.getElementById('progg');
    let progImg = ["img/1.jpeg","img/2.jpeg","img/3.jpeg","img/4.jpeg","img/5.jpeg","img/6.jpeg"];
    let altImgProg = ["functional training","aerobics","boot camp","yoga","cardio box","zumba"];
    let progT = ["Functional drill","Aerobics","Boot camp","Yoga","Cardio box","Zumba"];
    let progI = ["Functional training - affects the increase of fitness and strength, acceleration of metabolism and burning of calories.The program is designed for exercisers of all ages. The trainer is there to teach you and take care of the regularity of your movement, and to adapt each exercise to your current physical shape",
     "Aerobics is a dynamic and fun fitness program that will allow you to burn a large number of calories in 60 minutes without the feeling of exhaustion that occurs after many cardio programs",
     "Modeled on the training of special units, the bootcamp will make your body and character stronger. The bootcamp took the best from the world of action, adjusted it for both sexes and all levels of physical fitness",
     "Yoga is one of the most famous and widespread type of exercise in the world. Yoga is not just a physical exercise, but learning to establish a state of complete peace and relaxation",
     "Cardio Box is a high-intensity training inspired by martial arts performed on sacks. A combination of punches from various martial arts, mostly from boxing and kickboxing, with the use of hand and foot technique on the jack that fit into simple choreographies adapted to practitioners, both beginners and those who have encountered similar programs", 
     "Zumba is an interesting way to exercise. Simply training where we primarily have fun, and with good fun we burn calories"]
    let progImore = ["Functional fitness exercises train your muscles to work together and prepare them for daily tasks by simulating common movements you might do at home, at work or in sports. By training your muscles to work the way they do in everyday tasks, you prepare your body to perform well in a variety of common situations",
    "Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness like flexibility, muscular strength, and cardio-vascular fitness. It is performed to music and practiced in a group setting led by an instructor. With the goal of preventing illness and promoting physical fitness, practitioners perform various routines comprising a number of different dance-like exercises",
    "Boot camp training often commences with dynamic stretching and running, followed by a wide variety of interval training, including lifting weights/objects, pulling rubber TRX straps, pushups/situps and various types of intense explosive routines. Sessions usually finish with yoga stretching. Many other exercises using weights and/or bodyweight, similar to CrossFit routines, are used to lose body fat, increase cardiovascular efficiency, increase strength, and help people get into a routine of regular exercise",
    "Without a doubt, yoga is great for your body. It helps increase flexibility, strengthen and tones your muscles, improves circulatory health, and promotes deeper breathing patterns. Our program will give you an excellent overview of the principles of yoga, poses, breathwork, and mindfulness", 
    "Cardio boxing is a combination of the traditional training movements of a boxer—including sparring, shadow boxing, and blows delivered to a boxing bag—structured so as to be performed in sequences, similar to those of aerobics classes, that have a primarily aerobic training effect", 
    "Zumba classes are typically about an hour long and are taught by licensed instructors. In one Zumba class, a person can burn up to 600 kcal, depending on the energy put forth.The music comes from dance styles like salsa, mambo, tango"];
    for(let i=0;i<progImg.length;i++){
    prog.innerHTML+=`
    <article class="trng">
    <figure class="img">
    <img src="${progImg[i]}" alt="${altImgProg[i]}" />
    </figure>
    <div class="text">
    <h2>${progT[i]}</h2>
    <p>${progI[i]}</p>
    <p class="moreLess"> ${progImore[i]} </p>
    <a href="#" class="bttn-read-more"> More / Less</a>
    </div>
    </article>`
    } 

    let moreL = document.getElementsByClassName(".moreLess");
    $(".moreLess").hide();
    $(document).on("click",".moLe", function(e){
    e.preventDefault();
    $(this).prev().slideToggle(500);
    })
    }
    $(document).ready(function(){
        console.log($(".bttn-read-more"));
        $(".bttn-read-more").click(function(e){
            e.preventDefault(); 
            $(this).parent().find(".moreLess").slideToggle(600);
        })
    });

   var stackedCardSlide = new stackedCards({ selector: '.example' });

   stackedCardSlide.init();
   var stackedCardSlide = new stackedCards({
       layout: "fanOut"
   });
   var stackedCardSlide = new stackedCards({
       transformOrigin: "bottom"
   });

var footer=document.getElementById("footer");
var okvir=document.createElement("div");
okvir.setAttribute("class", "hold");
footer.appendChild(okvir);
var footPar=["Contact", "Info", "Useful links"];
for(let i=0;i<footPar.length;i++){
 var footB=document.createElement("div");
 footB.setAttribute("class","foott");
 okvir.appendChild(footB);
 var footT=document.createElement("h3");
 var footTxt=document.createElement("ul");
 footTxt.setAttribute("id", "ul"+[i]);
 footB.appendChild(footT);
 footB.appendChild(footTxt);
 footT.innerHTML=footPar[i];
}

var footLi=["Address: Cvijićeva 18, Beograd","Phone: 063-479-84-69","Mail: nevergiveup@gmail.com"];
for(let i=0;i<footLi.length;i++){
 var footF=document.getElementById("ul0");
 var footFli=document.createElement("li");
 footFli.innerHTML=footLi[i];
 footF.appendChild(footFli);
}
var footI=["Working hours:","Monday-Saturday 08h-22h","Sunday 10h-20h "];
for(let i=0;i<footI.length;i++){
 var footS=document.getElementById("ul1");
 var footSli=document.createElement("li");
 footSli.innerHTML=footI[i];
 footS.appendChild(footSli);
}
var soc=["fab fa-facebook-square","fab fa-instagram","fab fa-twitter","fab fa-youtube","fab fa-redhat"];
var socL=["https://www.facebook.com/","https://www.instagram.com/","https://www.twitter.com/","https://www.youtube.com/","https://aleksastrugarevic.netlify.app"];
var footTh=document.getElementById("ul2");
for(let i=0;i<soc.length;i++){
 var socLi=document.createElement("li");
 footTh.appendChild(socLi);
 var hrf=document.createElement("a");
 hrf.setAttribute("href",socL[i]);
 socLi.appendChild(hrf);
 var ffi=document.createElement("i");
 hrf.appendChild(ffi);
 ffi.setAttribute("class",soc[i]);
}

var dokumentacija=document.createElement("a");
dokumentacija.innerHTML="Documentation";
dokumentacija.setAttribute("href","dokumentacija.pdf");
document.querySelectorAll(".foott")[2].appendChild(dokumentacija);

var sitemap=document.createElement("a");
sitemap.innerHTML="Sitemap";
sitemap.setAttribute("href","sitemap.xml");
document.querySelectorAll(".foott")[2].appendChild(sitemap);

function proveraUneteVrednosti(element, regEx, greska){

    if(regEx.test(element.value)){
        element.style.border="3px solid green";
        element.style.color = "greeen";
        greska.style.display = "none";
        return true;
    }
    else{
        element.style.border = "3px solid red"
        element.style.color = "red";
        greska.style.display = "block";
        return false;
    }
}
var emailRegEx = /^[a-z]+([\._]{0,2}[a-z0-9]+)*@([a-z0-9]+\.)+[a-z]{2,3}$/;
email1.addEventListener("blur", function(){
    proveraUneteVrednosti(email1, emailRegEx, email1Greska);
});
var fullNameRegEx = /^[A-zČĆŠĐŽšđčćž]+(\s[A-zČĆŠĐŽšđčćž]+){1,3}$/;
name1.addEventListener("blur", function(){
    proveraUneteVrednosti(name1, fullNameRegEx, name1Greska);
});
var brojRegEx = /^[0-9]{3}(-?[0-9]{3,4}){2}$/;
phone.addEventListener("blur", function() {
    proveraUneteVrednosti(phone, brojRegEx, phoneGreska);
});
var porukaRegEx = /^[A-ZŠĐŽČĆ][A-zŠĐŽČĆšđžčćž,@\/_\.\s!?]+$/m;
message.addEventListener("blur", function(){
    proveraUneteVrednosti(message, porukaRegEx, messageGreska);
});
formularKontakt.onsubmit = function(e){
    e.preventDefault();
    var brojGresaka = 4;
    brojGresaka-= proveraUneteVrednosti(name1, fullNameRegEx, name1Greska );
    brojGresaka-= proveraUneteVrednosti(email1, emailRegEx, email1Greska);
    brojGresaka-= proveraUneteVrednosti(phone, brojRegEx, phoneGreska);
    brojGresaka-= proveraUneteVrednosti(message, porukaRegEx, messageGreska);
    if(brojGresaka == 0)
    {
        for(let element of [name1, email1, phone, message]){
            element.value = "";
        }
        forma2.classList.add("prikazi");
    }
    else{
        forma2.classList.remove("prikazi");
    }
}
