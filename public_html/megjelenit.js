window.addEventListener("load",init);

function $(nev) {
    return document.querySelectorAll(nev);
}

//var kepek=["kepek/kutya1.jfif","kepek/kutya2.jfif","kepek/kutya3.jfif"];
//var cim=["1. kép címe","2. kép címe","3. kép címe"];

var kep1 = {
    eleresiut: "kepek/kutya1.jfif",
    cim: "1. kép címe",
    leiras: "1. képfff leírása"
    };
    
    var kep2 = {
    eleresiut: "kepek/kutya2.jfif",
    cim: "2. kép címe",
    leiras: "2. képfff leírása"
    };
    
    var kep3 = {
    eleresiut: "kepek/kutya3.jfif",
    cim: "3. kép címe",
    leiras: "3. képfff leírása"
    };
    
    var kepTomb=[kep1,kep2,kep3];
        
  

function init() {
    
    for (var i = 0; i < kepTomb.length; i++) {
        var elem= '<div><h3></h3><img id="'+i+'" src="" alt=""/><p></p></div>';
        $("article")[0].innerHTML+=elem;
    }
        
    console.log("kepTOmb");
    for (var i = 0; i < $("article img").length; i++) {
      $("article img")[i].src=kepTomb[i].eleresiut;  
      $("article img")[i].src=kepTomb[i]("eleresiut");
      $("article h3")[i].innerHTML=kepTomb[i].cim; 
      $("article p")[i].innerHTML=kepTomb[i].leiras;
      //$("article img")[1].src="kepek/kutya2.jfif";
    //$("article img")[2].innerHTML="kepek/kutya3.jfif";
    //$("article p")[i].innerHTML="leiras[i]";
    }
   
   //képekhez hozzá kell renelni egy saját eseménykezelőt, kattintásra
   for (var i = 0; i < kepTomb.length; i++) {
   
   $("article div img")[i].addEventListener("click",betolt);
    }
    document.getElementById("bal").addEventListener("click",bal);
    document.getElementById("jobb").addEventListener("click",jobb);   }
   
  function betolt() {
    var index= this.id;//hanyadik kép
  console.log(kepTomb[index].eleresiut);
  console.log(kepTomb[index].cim); 
  console.log(kepTomb[index].leiras); 
  
  $("section div img")[0].src = kepTomb[index].eleresiut;
  $("section div h3")[0].innerHTML = kepTomb[index].eleresiut;
  $("section div p")[0].innerHTML = kepTomb[index].eleresiut;
}
 var index =0;
 function bal() {
     
  
     
     $("section div img")[0].src=(kep[index].eleresiut);
     $("section div h3")[0].innerHTML=(kep[index].cim);
     $("section div p")[0].innerHTML=(kep[index].leiras);
 index -= 1;
 if(index<0) {
     index=kep.length-1;
 
}
 }
 
 function jobb() {
     $("section div img")[0].src=(kep[index].eleresiut);
     $("section div h3")[0].innerHTML=(kep[index].cim);
     $("section div p")[0].innerHTML=(kep[index].leiras);
     index += 1;
     if(index==kep.length) {
         index=0;
            
     }
 }
 
 
 