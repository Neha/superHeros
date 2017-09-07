/*
Demo for the Functional Programing
for the JSLovers youtube channel
Developer : Neha Sharma
Twitter: @hellonehha
Year : 2017 
*/

var superHeroData = [
  { heroName: "superman", power: "fly", score: 10, superHero : 'yes' , imageURL : "images/superman.png" },
  { heroName: "Batman", power: "rich", score: 0 , superHero : 'yes' , imageURL : "images/batman.png"},
  { heroName: "Ironman", power: "rich", score: 0, superHero : 'yes' , imageURL : "images/ironman.png"},
  { heroName: "wonderwoman", power: "", score: 10, superHero : 'yes' , imageURL : ""},
  { heroName: "Hulk", power: "anger", score: 5, superHero : 'yes' , imageURL : "images/hulk.png"},
  { heroName: "wolverine", power: "size", score: 20, superHero : 'yes' , imageURL : "images/wolverine.png"},
  { heroName: "Flash", power: "fly", score: 15, superHero : 'yes' , imageURL : "images/flash.png"},
  { heroName: "captain America", power: "rich", score: 0, superHero : 'yes' , imageURL : "images/captainhero_.png"}
];

var heroNameList = [],
    superPower,
    heroScoreList = [],
    scorePlayer;

const filterBtn = document.querySelectorAll("span.filter"),
      data = document.querySelector("#data ul"),
      score = document.getElementById("score");

//every
var isSuperHero = superHeroData.every(function(elm){
        return elm.superHero == 'yes';
        });
     
for (let i = 0; i < filterBtn.length; i++) {
  
   filterBtn[i].addEventListener("click", getData)
   
}

function getData(){
    let _this = this;
    
   
if(isSuperHero){
           heroScoreList = [];
           data.innerHTML = "";
           score.innerHTML = "";

superPower = _this.getAttribute("data-attr");
      
   
//filter
    let flyhero = superHeroData.filter((elm) => {
      return elm.power === superPower;
    });

    //map
    flyhero.map((elm) => {
      heroNameList.push(elm.heroName);
      heroScoreList.push(elm.score);

     //reduce
    let scorePlayer = heroScoreList.reduce((sum, val) => {
        return sum + val;
      });

      
      score.innerHTML = "You scored : " +  scorePlayer;
  data.innerHTML += "<li class='loading'><img src=" + elm.imageURL + '>' + '<h2>' + elm.heroName + "</h2></li>";
    });

    //some
    let subHero = heroNameList.some((elm) => {
      return elm === "Batman";
    });
     
      } 
  else{
    data.innerHTML = 'Superheros are out to save the world!!'
  }


   
}
    
  





    


