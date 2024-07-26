// creazione e riempimento array con oggetti
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

for ( let k = 0; k < images.length; k ++){

    console.log(images[k].image);
}


const myContainer = document.querySelector('.container'); // creata costante container

const cardContainer = document.querySelector('.card-container');





// ciclo per stambare nel html gli oggetti contenuti nell'array

for(let j = 0; j < images.length; j ++){
    
    if(j == 0){
    cardContainer.innerHTML+=   `<div class=" active">
                                    <div class = "info-card">
                                        <h2> ${images[j].title}</h2>
                                        <p> ${images[j].text} </p>
                                    </div>
                                    <div class= "img-container">
                                        <img src=${images[j].image}>
                                    </div>
                                </div>`;
    }

    else{

        cardContainer.innerHTML+= `  <div>
                                        <div class = "info-card">
                                            <h2> ${images[j].title}</h2>
                                        <p> ${images[j].text} </p>
                                            </div>
                                        <div class= "img-container">
                                            <img src=${images[j].image}>
                                        </div>
                                    </div>`;
    };

    }
    
    

  
const allCard = document.querySelectorAll('.card-container > div')
let activeCard = 0;

// imposta funzione per andare avanti con le card

    const nextButton = document.getElementById('btn-right');
    nextButton.addEventListener('click',
        function (){
        if (activeCard < (images.length - 1)){  

        allCard[activeCard].classList.remove('active');

        activeCard++;

        allCard[activeCard].classList.add('active');
        
        }
        else{
            allCard[activeCard].classList.remove('active');

            activeCard= 0;

            allCard[activeCard].classList.add('active');
        }
    });
    
// imposta funzione per andare indietro con le card
    const prevButton = document.getElementById('btn-left');
    prevButton.addEventListener('click',
        function (){

    if (activeCard > 0){

        allCard[activeCard].classList.remove('active');

        activeCard--;


        allCard[activeCard].classList.add('active');
    }
       
    else{
        allCard[activeCard].classList.remove('active');

        activeCard= 4;

        allCard[activeCard].classList.add('active');
        }
    
}
)

