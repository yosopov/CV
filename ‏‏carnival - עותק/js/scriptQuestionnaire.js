const arrQuestions = [
    {question:'What famous father and son were each crowned King Bacchus at New Orleans Mardi Gras?',
    answers:[
    'Alan Thicke and Robin Thicke',
    'Louis Thicke and Nikolai Thicke',
    'Alexamder Macedon and Victor Macedon',
    'Victor Yampolsky and Alan Yampolsky']
    },
    {question:'When was the earliest known carnival celebration?',
    answers:[
    '1294',
    '1894',
    '1967',
    '1660']
    },
    {question:'What is the signature Mardi Gras dessert?',
    answers:[
    'King cake',
    'King cooki',
    'Rost chicken',
    'Barbecue']
    },
    {question:'What is traditionally hidden inside a king cake?',
    answers:[
    'A plastic baby',
    'Finger',
    'Foot',
    'cake'
    ]},
    {question:'Before the COVID-19 pandemic, when was the most recent cancellation of New Orleans’ Mardi Gras parades?',
    answers:[
    '1945',
    '1976',
    '1677',
    '1675'
    ]},
    {question:'A man dressed as whom was credited with popularizing throwing beads during Mardi Gras?',
    answers:[
    'Santa Claus',
    'The Hunchback of Notre Dame',
    'Victor Yampolsky',
    'Baba Yaga']
    },
    {question:'What are the groups that organize New Orleans Mardi Gras parades called?',
    answers:[
    'Krewes',
    'PORKI',
    '7 Millimeters',
    '9 miles']
    },
    {question:'What was the first all-female New Orleans Mardi Gras krewe?',
    answers:[
    'The Krewe of Venus',
    'The Krewe of Yampolsky',
    'The Krewe of Rozia',
    'The Krewe of Nanako']
    },
    {question:'Bacchus is the Roman god of what?',
    answers:[
    'Wine',
    'Water',
    'Whiskey',
    'Vodka']
    },
    {question:'What states recognize Fat Tuesday as a holiday?',
    answers:[
    'Louisiana, Florida and Alabama',
    'Florida and Alabama',
    'London, US, Russia and Azerbaijan',
    'US, Russia and Azerbaijan']
    }
];
let likeArrQuestions = [];

function showQuestions() {
    let numbers = [];
    let flag = true;
    while (numbers.length < 10) {
        let random = Math.floor(Math.random()*10);
        numbers.map((element)=>{
            if (element === random) {
                flag = false;
            }
        })
        let fourNumber = [];
        let flagFourNumber = true;
        if (flag) {
            while (fourNumber.length < 4) {
                let randomFourNumber = Math.floor(Math.random()*4);
                fourNumber.map((element) => {
                    if (element == randomFourNumber) {
                        flagFourNumber = false;
                    }
                })
                if (flagFourNumber) {
                    fourNumber = [...fourNumber,randomFourNumber];
                }
                flagFourNumber = true;
            }
                        
                likeArrQuestions = [...likeArrQuestions ,{question:arrQuestions[random].question ,answers:[arrQuestions[random].answers[fourNumber[0]] ,arrQuestions[random].answers[fourNumber[1]],arrQuestions[random].answers[fourNumber[2]],arrQuestions[random].answers[fourNumber[3]]],index:random}];
                numbers = [...numbers,random];
        }
        flag = true;

    }

        for (let i = 0; i < likeArrQuestions.length; i++) {
            let showQuestion = document.querySelector('.question' + i)
            showQuestion.innerText = likeArrQuestions[i].question;
        }    
        
        for (let i = 0; i < 10; i++) {
            for (let index = 0; index < 4; index++) {
                let showQuestion = document.querySelector('.answer' + i + index);
                showQuestion.innerHTML = '<input  class="form-check-input" type="radio" name=' +"flexRadioDefault"+[i] +  ' id="flexRadioDefault2">' +  likeArrQuestions[i].answers[index];
                document.querySelector('.answer' + i + index).style.color = 'black';

 
                
            }
            
        }


}

let rightOrWrong = [];

function deteminingAnAnswer(location0,location1) {
    let index;
        for (let i = 0; i < arrQuestions.length; i++) {
            if (likeArrQuestions[location0].question === arrQuestions[i].question ) {
                index = i;
            }
            
        }

    if (likeArrQuestions[location0].answers[location1] === arrQuestions[index].answers[0] ) {
        
        rightOrWrong[location0] = {result:true,loca:location1,color:'green'};
    }
    else{
        rightOrWrong[location0] = {result:false,loca:location1,color:'red'}};
    }


function checkAnswers() {
    flag = true;
    let score = document.querySelector('.score');
    for (let i = 0; i < 10; i++) {
        if (rightOrWrong[i] == undefined) {
            document.querySelector('.question' + i).style.color = 'red';
            flag = false;
        }
        else{
            document.querySelector('.question' + i).style.color = 'black';
        }
        score.innerText = 'You did not answer all the questions';
    }


    if (flag && rightOrWrong.length === 10) {
        let number = 0;
        rightOrWrong.map((element)=>{
            if (element.result === true) {
                number += 10;
            }
        })
        for (let i = 0; i < 40; i++) {
            document.querySelectorAll('.form-check-input')[i].disabled = true;
        }
        for (let index = 0; index < rightOrWrong.length; index++) {
            document.querySelector('.answer' + index + rightOrWrong[index].loca).style.color = rightOrWrong[index].color;        
        }
        likeArrQuestions.map((data,location) =>{
            for (let x = 0; x < 4; x++) {
                        if ( arrQuestions[data.index].answers[0] === data.answers[x] ) {
                            document.querySelector('.answer' + location + x).style.color = 'green';
                        }
                        
                    }
                })                
        score.innerText = 'Your score is: ' + number;
        document.querySelector('.Checked').style.display = 'none';
        document.querySelector('.tryAgain').style.display = 'block';

    }
}

function restart() {
    document.querySelector('.Checked').style.display = 'block';
    document.querySelector('.tryAgain').style.display = 'none';
    document.querySelector('.score').innerText = '';
    likeArrQuestions = [];
    rightOrWrong = [];
    showQuestions();
}

showQuestions();
