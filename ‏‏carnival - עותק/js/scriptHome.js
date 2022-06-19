const arrayPicSlider = [
    {png:"../pic/pexels-photo00.jpeg",title:'Osoba W Szarej Masce', text:'No worries if you don’t speak any German – Carnival is all about music, dance and pure joy, which are easy to understand in any language! And the apex of this unadulterated silliness (known as Narrisch) is the procession that will weave its way around Munich on February 23rd, 24th and 25th. In fact, the entire central zone from Stachus to Viktualienmarkt closes down all traffic to help the revellers on foot who make their way across the grand Marienplatz. Of course, you can run into our Free Tour guides here, too! Come rain or shine, they’ll be there to help you discover all that Munich has to offer!'},
    {png:"../pic/pexels-photo01.jpeg" ,title:'Costume', text: 'When you are in Venice during the Carnival, you will see people in costume everywhere you look. Most costumes are traditionally Venetian in that they feature Venetian masquerade masks and traditional capes or gowns. However, many people use the Carnival as an opportunity to dress up in interesting, colorful outfits that are not necessarily related to the theme of the Carnival, while others simply wear regular clothes with the addition of just a masquerade mask. The Venice Carnival is supposed to be a fun, relaxed experience, so wear whatever you feel most comfortable in. Our tip: at the very least wear a mask—you’ll fit right in and feel like you are part of the festivities!'},
    {png:"../pic/pexels-photo02.jpeg",title:'The Paramount Chief', text: 'At the centre of Asante political structure was the institution of chieftaincy.The paramount chief (Omanhene) was the most powerful political figure. He was the custodian of the ancestral stool which was the symbol of unity and continuity .Once enstooled, the paramount chief performed legislative executive, judicial, military and religious functions.'},
    {png:"../pic/pexels-photo03.jpeg",title:"Vishnu mantra Jaap", text: 'Lord Vishnu is regarded as one of the important Gods of Hindus like Lord Shiva. Both Vishnu and Shiva'},
    {png:"../pic/pexels-photo04.jpeg",title:'baton rouge halloween parade', text: 'In Louisiana, we tend to take every possible opportunity to throw a parade. So it’s no surprise that Baton Rouge is throwing a Halloween parade. This parade will be rolling on October 19th at 4 pm. The Greater Baton Rouge Food Bank is the organizer of this parade so they will also be collecting non-perishable food items as donations. This is a great way to get into the spirit of the season while also helping out a good cause!'}
];

let arrayPicFunders = [
    {png:"../pic/SheratonNewOrleansHotel.jpg" ,funder:'Sheraton New Orleans', text: 'Sheraton New Orleans',url:"https://www.marriott.com/hotels/travel/msyis-sheraton-new-orleans-hotel/",rating:0},
    {png:"../pic/AceHotelNewOrleans.jpg",funder:'Ace Hotel New Orleans', text: 'Ace Hotel New Orleans',url:"https://www.acehotel.com/neworleans/?gclid=CjwKCAiA4rGCBhAQEiwAelVtixBGQhYP5d9yI6fimVp4muVGLGdUMAaob3U3yM39rdSyXA8zBVbjsRoC5TYQAvD_BwE",rating:0},
    {png:"../pic/MuseumOfDeath.jpeg",funder:'Museum of Death', text: 'Museum of Death',url:"http://www.museumofdeath.net/",rating:0},
    {png:"../pic/TheRitzCarltonNewOrleans.jpg",funder:'The Ritz-Carlton, New Orleans', text: 'The Ritz-Carlton, New Orleans',url:"https://www.ritzcarlton.com/en/hotels/new-orleans",rating:0},
    {png:"../pic/PremiumParking.jpg",funder:'Premium Parking - P402', text: 'Premium Parking - P402',url:"https://www.premiumparking.com/P402",rating:0},
    {png:"../pic/WalkOns.jpg",funder:'Walk-On\'s Bistreaux and Bar', text:'Walk-On\'s Bistreaux and Bar',url:"https://walk-ons.com/",rating:0},
    {png:"../pic/LouisianaChildren'sMuseum.jpg",funder:'Louisiana Children\'s Museum', text: 'Louisiana Children\'s Museum',url:"https://thinkplaycreate.org/visit/?gclid=CjwKCAjw9MuCBhBUEiwAbDZ-7lU_wc5I7lpbawZ50amYVPcP9TdEfqh4VEOiHOpilwjuEYUf8uLq7hoCMZYQAvD_BwE",rating:0},
    {png:"../pic/HauntedMuseumHauntedMuseum.jpg",funder:'Haunted Museum', text: 'Haunted Museum',url:"https://thehauntedmuseum.com/",rating:0}
];

let check = false

function changeImgCarousel() {
    let flag = false;
    let count = [];


        while (!flag) {
            let random = Math.floor(Math.random()*5);
            let flagRandom = true;
            for (let i = 0; i <= count.length; i++) {
                if (count[i] === random) {
                    flagRandom = false;
                }
                
            }
            if (flagRandom) {
                count = [...count,random];
                
            }
            if (count.length === arrayPicSlider.length) {
                flag = true;
            }
        }
        let firstPictureMobal = document.getElementById('firstPicture');
        firstPictureMobal.src = arrayPicSlider[count[0]].png;
        firstPictureMobal.alt = arrayPicSlider[count[0]].title;
        document.getElementById('divFirstPicture').classList.add("d-md-none");
    
        for (let i = 0; i < count.length; i++) {
            let elementImg = document.querySelector('.slide'+i);
            let elementPlace = document.querySelector('.title'+i);
            let elementText = document.querySelector('.text'+i);
            elementImg.src = arrayPicSlider[count[i]].png;
            elementImg.alt = arrayPicSlider[count[i]].title;
            elementPlace.innerHTML = arrayPicSlider[count[i]].title;
            elementText.innerHTML = arrayPicSlider[count[i]].text;
            
        }

}

function changeImgFunders() {
    let checkRating = [];
    likeArrayPicFunders = arrayPicFunders;
        
        while (checkRating.length < arrayPicFunders.length) {
            let numArr = [0,0];
                for (let index = 0; index < likeArrayPicFunders.length; index++) {
                                                  
                for (let i = 0; i < likeArrayPicFunders.length; i++) {
                    if (numArr[0] < likeArrayPicFunders[i].rating) {
                        numArr = [likeArrayPicFunders[i].rating,i];
                    }
               
                }       

            checkRating = [...checkRating,likeArrayPicFunders[numArr[1]]];
            let newArray = []
            for (let i = 0; i < likeArrayPicFunders.length; i++) {
                if (i != numArr[1]) {
                    newArray = [...newArray,likeArrayPicFunders[i]];
                }
            }
            likeArrayPicFunders=newArray;
            numArr = [0,0];

        }
    }

    checkRating.map((element,number)=>{
        document.querySelector('.funderImg'+number).src = element.png;
        document.querySelector('.funderImg'+number).alt = element.funder;
        document.querySelector('.funderLink'+number).href = element.url;
        document.querySelector('.funderTextLink'+number).innerText = element.text;
    })
   
    arrayPicFunders = checkRating
}

function plusOne(location) {
    arrayPicFunders[location].rating = arrayPicFunders[location].rating+1;
    check = !check;
}


changeImgCarousel();
changeImgFunders();
setTimeout(changeImgFunders,100);







