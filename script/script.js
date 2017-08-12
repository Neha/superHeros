var superHeroData = [
  { heroName: "superman", power: "fly", score: 10 },
  { heroName: "Batman", power: "rich", score: 0 },
  { heroName: "Ironman", power: "rich", score: 0 },
  { heroName: "wonderwoman", power: "fly", score: 10 },
  { heroName: "Hulk", power: "anger", score: 5 },
  { heroName: "Ant", power: "size", score: 20 },
  { heroName: "Flash", power: "fast", score: 15 },
  { heroName: "captain America", power: "rich", score: 0 }
];

var heroNameList = [],
    superPower,
    heroScoreList = [],
    scorePlayer;

const filter = document.querySelectorAll("span.filter"),
      data = document.getElementById("data"),
      score = document.getElementById("score");

for (let i = 0; i < filter.length; i++) {
   filter[i].addEventListener("click", getData)
}

function getData(){
    heroScoreList = [];
    data.innerHTML = "";
    score.innerHTML = "";

    superPower = this.getAttribute("data-attr");
    
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
      data.innerHTML += elm.heroName + "</br>";
    });

    //some
    let subHero = heroNameList.some((elm) => {
      return elm === "Batman";
    });
  
}
