$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});


let pictures = [];
for (let i = 0; i < 28; i++) {
        if(i<10){
            pictures.push({picture:'pic/media/carnival0'+i +'.jpeg',rating:0,favorite:false})
        } 
        else{
            pictures.push({picture:'pic/media/carnival'+i +'.jpeg',rating:0,favorite:false})
        }
    }
    pictures.map((element,number)=>{
    document.querySelector('.href'+number).onclick =    function () {pictures[number].rating = pictures[number].rating+1;};
    document.querySelector('.heart'+number).onclick =    function () {likeOrDislike(number)};
})

function imgRandom() {
    let flag = false;
    let count = [];
    let likePictures = [];

        while (!flag) {
            let random = Math.floor(Math.random()*28);
            let flagRandom = true;
            for (let i = 0; i <= count.length; i++) {
                if (count[i] === random) {
                    flagRandom = false;
                }
                
            }
            if (flagRandom) {
                likePictures = [...likePictures,pictures[random]];
                count = [...count,random];
                
            }
            if (count.length === pictures.length) {
                flag = true;
            }
        }

        for (let i = 0; i < count.length; i++) {
            document.querySelector('.pic'+i).src = likePictures[i].picture;
            document.querySelector('.pic'+i).alt = likePictures[i].picture; 
            document.querySelector('.href'+i).href = likePictures[i].picture;
            document.querySelector('.heart'+i).onclick =    function () {likeOrDislike(i)};
            if(likePictures[i].favorite === true){
                document.querySelector('.heart'+i).style.color = 'red';
            }  
            else{
                document.querySelector('.heart'+i).style.color = '#495057';
    
            } 
        }

        likePictures.map((element,number)=>{
            document.querySelector('.pic'+number).src = element.picture;
            document.querySelector('.pic'+number).alt = element.picture; 
            document.querySelector('.href'+number).href = element.picture;
            if(element.favorite === true){
                document.querySelector('.heart'+number).style.color = 'red';
            }  
            else{
                document.querySelector('.heart'+number).style.color = '#495057';
    
            } 
        })

        pictures = likePictures;


}

function imgPopular() {
    imgRandom()
    let checkRating = [];
    likePictures = pictures;
    while (checkRating.length < pictures.length) {
        let numArr = [0,0];
        for (let index = 0; index < likePictures.length; index++) {                      
            for (let i = 0; i < likePictures.length; i++) {
                if (numArr[0] < likePictures[i].rating) {
                    numArr = [likePictures[i].rating,i];
                }
                
            }       
            
            checkRating = [...checkRating,likePictures[numArr[1]]];
            let newArray = []
            for (let i = 0; i < likePictures.length; i++) {
                if (i != numArr[1]) {
                    newArray = [...newArray,likePictures[i]];
                }
            }
            likePictures=newArray;
            numArr = [0,0];

        }
    }
    
    for (let i = 0; i < checkRating.length; i++) {
       
        document.querySelector('.pic'+i).src = checkRating[i].picture;
        document.querySelector('.pic'+i).alt = checkRating[i].picture;
        document.querySelector('.href'+i).href = checkRating[i].picture;
        if(checkRating[i].favorite === true){
            document.querySelector('.heart'+i).style.color = 'red'
        }  
        else{
            document.querySelector('.heart'+i).style.color = '#495057'

        } 
    }

    pictures = checkRating;
}

function imgFavorite() {
    imgRandom()
    let Favoriteimg = [];
    pictures.map((element)=>{
        if (element.favorite === true) {
            
            Favoriteimg = [...Favoriteimg,element]
        }
    });
    pictures.map((element)=>{
        if (element.favorite === false) {
            Favoriteimg = [...Favoriteimg,element]
        }
    })

    for (let i = 0; i < Favoriteimg.length; i++) {
       
        document.querySelector('.pic'+i).src = Favoriteimg[i].picture;
        document.querySelector('.pic'+i).alt = Favoriteimg[i].picture;
        document.querySelector('.href'+i).href = Favoriteimg[i].picture;
        document.querySelector('.heart'+i).onclick =    function () {likeOrDislike(i)};
        if(Favoriteimg[i].favorite === true){
            document.querySelector('.heart'+i).style.color = 'red'
        }  
        else{
            document.querySelector('.heart'+i).style.color = '#495057'

        } 
    }


    pictures=Favoriteimg
    
}

function likeOrDislike(location) {
    debugger
    if (pictures[location].favorite === false) {
        pictures[location].favorite = true;
        document.querySelector('.heart'+location).style.color = 'red'
    }
    else{
        pictures[location].favorite = false;
        document.querySelector('.heart'+location).style.color = '#495057'
    }
}

function selectid() {
    let value = document.querySelector('.selectpicker').value;
    if(value ==='popular'){

        imgPopular()
       
    }
    else if (value ==='random') {
        imgRandom();
   

    }
    else{
        imgFavorite()
    }
}

imgRandom();
