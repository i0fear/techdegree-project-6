const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.querySelector('#overlay');
const btnReset = document.getElementsByClassName('btn__reset')[0];
const listItem = document.querySelector('#phrase ul');
const lives =document.querySelectorAll('.tries img');
let missed = 0;

// 3:Attach a event listener to the “Start Game” button to hide the start screen overlay.
btnReset.addEventListener('click',(e)=>{
    document.getElementById('overlay').style.display ="none";
});

// 4:  Create a phrases array that contains at least 5 different phrases as strings.
const phrases =[
    'This is an awesome way to learn',
    'Committed to learn javascript',
    'One day you will',
    'way to go',
    'forget about the past',
    'looking forward for tomorrow'
    ];

   
// 5: Create a getRandomPhraseAsArray function.
    function getRandomPhraseAsArray(rpa){
        const randomNumber =Math.floor(Math.random()*phrases.length);
        const randomArray = rpa[randomNumber];
        const newChar =randomArray.toLowerCase().split('');
        return newChar;
    }
    const phraseArray=getRandomPhraseAsArray(phrases);


// 6: Set the game display.
    //do stuff any arr that is passed in, and add to '#phrase ul'
   function addPhraseToDisplay(arr){
        console.log(arr);
        for(let i=0; i<arr.length; i++){
            const li = document.createElement('li');
            // const listItem = document.querySelector('#phrase ul');    
            listItem.append(li);
            li.textContent =arr[i];
            if(arr[i] ===' '){
                li.classList.add('space');
            }else{
                li.classList.add('letter');
            }           
        }
   }
   addPhraseToDisplay(phraseArray);


 // 7: Create a checkLetter function.
   function checkLetter(arr){
    const checkLetter = document.querySelectorAll('li');
    let match = null;
    for (let i = 0; i < checkLetter.length; i++) {
        if(checkLetter[i].className ==='letter'){
            if (checkLetter[i].textContent === arr) {
                checkLetter[i].classList.add('show');
                match = arr;
            }
        } 
    }
    return match;
   }

 // 8:  Add an event listener to the keyboard
 // 9:  Count the missed guesses in the game.

   qwerty.addEventListener('click', (e)=>{
        if (e.target.tagName === 'BUTTON' ){
            if(e.target.className ==='chosen'){
            //    e.target.className.chosenBtn=disabled;
                   
            }else{
                e.target.className= 'chosen';
            }             
            const letterFound = checkLetter(e.target.textContent);
            if(letterFound ===null){
               
                    lives[missed].src = 'images/lostHeart.png';
                    missed++;
                 
            }         
        }
   })

// 10: Create a checkWin function.

        function checkWin(){
            const letter =document.getElementsByClassName('letter');
            const show =document.getElementsByClassName('show');
            const title =document.getElementsByClassName('title');
            if(letter.length ===show.length){
                overlay.classList.add('win');
                title[0].textContent ='You win!';
                overlay.style.display ='flex';
            }else if(missed >4){
                overlay.classList.add('lose');
                title[0].textContent ='You lose';
                overlay.style.display ='flex';
            }       
        }

        qwerty.addEventListener('click', checkWin);
       



