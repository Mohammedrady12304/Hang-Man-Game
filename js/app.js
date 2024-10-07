//letters
let letters ="abcdefghijklmnopqrstuvwxyz";

//array
let lettersArray= Array.from(letters);

//letters container

let lettersContainer=document.querySelector(".letters");

//generate letters

lettersArray.forEach(
  letter=>{
    //span
    let span =document.createElement("span");
    //letter text node
    let theLetter =document.createTextNode(letter);
    
    
    //append the letter to span
    span.appendChild(theLetter);
    
    
    //add class to span 
    span.className='letter-box';
    
    
    //append span to letters container
    lettersContainer.appendChild(span);
    
    
      }
  );
  
  
  //object of words and categories
  const words = {
    programming:["php","js","go","scala","fortran","r","mysql","python"],
    movies:["prestige","inception","parasite","intersteller","whiplash","memento","coco","up"],
    people:["albert","Hitch","Alex","cleopatra","mahatma ghandi"],
    countries:["syr","pala","yemen","egy","bahrin","qatar"],
    
  }
  
  let allKeys = Object.keys(words);
  
  let randomPropNum = Math.floor(Math.random() * allKeys.length );
  
  let randomPropName =allKeys[randomPropNum];
  
  let randomPropValue=words[randomPropName];
  
  let randomValueNum = Math.floor(Math.random()*randomPropValue.length);
  
  let randomValueValue=randomPropValue[randomValueNum];
  
  document.querySelector(".game-info .category span").innerHTML = randomPropName;
  
  
  