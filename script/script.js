var superHeroData = [
  { heroName: "superman", power: "fly", score: 10, superHero : 'yes'  },
  { heroName: "Batman", power: "rich", score: 0 , superHero : 'yes'},
  { heroName: "Ironman", power: "rich", score: 0, superHero : 'yes' },
  { heroName: "wonderwoman", power: "fly", score: 10, superHero : 'yes' },
  { heroName: "Hulk", power: "anger", score: 5, superHero : 'yes' },
  { heroName: "Ant", power: "size", score: 20, superHero : 'yes' },
  { heroName: "Flash", power: "fast", score: 15, superHero : 'yes' },
  { heroName: "captain America", power: "rich", score: 0, superHero : 'yes' }
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
      data.innerHTML +='<li>' + elm.heroName + "</li>";
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
    
  





    


