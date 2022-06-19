const urlusers = "https://jsonplaceholder.typicode.com/users";
let blackOrX = true;
let randomBlack = [];
let randomStart= [];
let columns = [];
$('.LoginUser').on('click',checkinputs)
 function checkinputs() {
    const name = $('.nameInput')[0]
    const email = $('.emailInput')[0]
    const result = await fetch(urlusers);
    const data = await result.json();
    for (let i = 0; i < data.length; i++) {
        if (name.value ===data[i].name && email.value ===data[i].email) {
            start();
        }
        
    }  
}

function start() {
    $('.inputs').addClass('d-none')
    $('.buttons').removeClass('d-none')
    $('.hearts').append(
        `<i class="fa fa-heart heartRed"></i>
        <i class="fa fa-heart heartRed"></i>
        <i class="fa fa-heart heartRed"></i>`

    )
    $('.buttons').append(
    `<button class="easy">Easy</button>
    <button class="medium">Medium</button>
    <button class="hard">Hard</button>`
    )
    $('.easy').on("click",function() {play('easy')})
    $('.medium').on("click",function() {play('medium')})
    $('.hard').on("click",function() {play('hard')})

}

const showGame =(value)=>{
    let level;
    let num;
    if (value==="hard") {
        level = 16;
        num = 16;
    }
    else{
        level = 10
        if (value==="medium") {
            num = 10;
        }
        else{
            num = 7;
        }
    }

    for (let i = 0; i < level; i++) {     
        randomBlack = [...randomBlack,Math.floor(Math.random()*num+1)];
        let flag = true;
            while (flag) {
                let likeRandomStart = Math.floor(Math.random()*num)
                if (randomBlack[i]+likeRandomStart <=num) {
                    flag=!flag;
                    randomStart = [...randomStart,{Start:likeRandomStart,End:randomBlack[i]+likeRandomStart}]
                }
              
                console.log(randomStart);
            }
    }

    column()
}

function column() {
    for (let i = 0; i < randomStart.length; i++) {
        let numColumn = [];
        for (const key in randomStart) {
            if (randomStart[key].Start<=i &&randomStart[key].End>i) {
                numColumn = [...numColumn,'y']
            }
            else{
                numColumn = [...numColumn,'n']
            }
        }
        let num  = 0;
        let a=[]
        for (let i = 0; i < numColumn.length; i++) {
            if (numColumn[i]==='y') {
                num++
                if (numColumn[i+1]!=='y') {
                    a = [...a,num]; 
                }
            }
            else{
                num = 0;
            }
            
        }
        columns=[...columns,a];
    }
}

function play(value) {
    $('.buttons').addClass('d-none')
    $('.container').removeClass('d-none')
    $('.hearts').removeClass('d-none')
    showGame(value);
    let level;
    let cube;
    if (value === "hard") {
        level = 17;
        cube = 17;
    }
    else if (value === "medium") {
        level = 11; 
        cube = 11;
    }
    else{
        level = 8;
        cube = 11;

    }      
        for (let i = 0; i < level; i++) {
            let y = ''
            let x = ''
            if (i===0) {
                for (let index = 0; index < randomBlack.length+1; index++) {
                    switch (index) {
                        case 0:
                            x += `<div class="colunumber"></div>`
                            
                            break;
                    
                        default:
                            x += `<div class="rowNumber">${randomBlack[index-1]}</div>`
                            break;
                    }
                    
                }
                y =`<div class="row">${x}</div>`
                $('.container').append(y)  
            }
            else{

                for (let index = 0; index < cube; index++) {
                    switch (index) {
                        case 0:
                            x += `<div class="colunumber">${columns[i-1]}</div>`
                            break;
                    
                        default:
                            x += `<div class="borde" value=${(i-1).toString() +"-"+(index-1).toString()}></div>`
                            break;
                    }
                    
                }
                y = `<div class="row">${x}</div>`
                $('.container').append(y)  
            }
        }


    $('.container').append(
        `<div class="mt-3 d-flex justify-content-center">
        <button class="markerX">X</button>
        <button class="markerBlack"></button>
        </div>`)

        $('.container').on("click",marker)  
        $('.markerX').on("click",function() {blackOrX = false})
        $('.markerBlack').on("click",function() {blackOrX = true})

}

function marker(e) {
    if (e.target.className==="borde") {
        
        if (blackOrX) {
            let flag=false
            let row='';
            let com='';
            for (let index = 0; index < e.target.attributes[1].value.length; index++) {
                if (e.target.attributes[1].value.charAt(index)!=='-') {
                    if (!flag) {
                        row+=e.target.attributes[1].value.charAt(index)
                    }
                    else{
                        com+=e.target.attributes[1].value.charAt(index)
                    }
                }
                else{
                    flag = true
                }
                
            }
                
                if (randomStart[com].Start<=row&&randomStart[com].End>row) {
                return ( $(e.target).addClass('markerBlackDiv'))
                    
                }
                else{
            
                    if ($('.heartRed').length>0) {
                        $('.heartRed')[$('.heartRed').length-1].classList.remove('heartRed');
                        $(e.target).addClass('markerBlackDi');
                        $(e.target).text('X');
                    }
                    
                     if($('.heartRed').length==0){
                        $('.container').addClass('d-none');
                        $('.hearts').addClass('d-none');
                        $('.refresh').removeClass('d-none');

                    }
                }
                                  
        }
        if (!blackOrX) {
            let flag=false
            let row='';
            let com='';
            for (let index = 0; index < e.target.attributes[1].value.length; index++) {
                if (e.target.attributes[1].value.charAt(index)!=='-') {
                    if (!flag) {
                        row+=e.target.attributes[1].value.charAt(index)
                    }
                    else{
                        com+=e.target.attributes[1].value.charAt(index)
                    }
                }
                else{
                    flag = true
                }
                
            }
            if (randomStart[com].Start>row || randomStart[com].End<=row) {
                 $(e.target).addClass('markerBlackDi');
                 $(e.target).text('X')                
            }
            else{
                
                if ($('.heartRed').length>0) {
                    $('.heartRed')[$('.heartRed').length-1].classList.remove('heartRed') 
                    $(e.target).addClass('markerBlackDiv')
                }
        
                if($('.heartRed').length==0) {
                    $('.container').addClass('d-none')
                    $('.hearts').addClass('d-none')
                    $('.refresh').removeClass('d-none');

                }
                
            }      

        }
    }

}

