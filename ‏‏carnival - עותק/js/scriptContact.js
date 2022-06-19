
let users = [];

let firstN = '';
let lastN = '';
let mail = '';
let city = '';
let state = '';
let text = '';



function checkFName() {
    let valueUser = document.getElementById('validationServer01');
    if (valueUser.value.length>1) {
        let flag = true;
        for (let i = 0; i < valueUser.value.length; i++) {
            if (valueUser.value.charAt(i) < 'a' || valueUser.value.charAt(i) > 'z') {
                flag = false;
            }
            
        }
        if (flag) {
            valueUser.classList.remove("is-invalid"); 
            valueUser.classList.add("is-valid");
            firstN = valueUser.value;
        }
        else{
            valueUser.classList.remove("is-valid"); 
            valueUser.classList.add("is-invalid");
            firstN = '';
        }
    }
    else{
        valueUser.classList.remove("is-valid");
        valueUser.classList.add("is-invalid");
        firstN = '';
    }
}

function checkLName() {
    let valueUser = document.getElementById('validationServer02');
    if (valueUser.value.length>1) {
        let flag = true;
        for (let i = 0; i < valueUser.value.length; i++) {
            if (valueUser.value.charAt(i) < 'a' || valueUser.value.charAt(i) > 'z') {
                flag = false;
            }
            
        }
        if (flag) {
            valueUser.classList.remove("is-invalid"); 
            valueUser.classList.add("is-valid");
            lastN = valueUser.value;
        }
        else{
            valueUser.classList.remove("is-valid"); 
            valueUser.classList.add("is-invalid");
            lastN = '';
        }
    }
    else{
        valueUser.classList.remove("is-valid");
        valueUser.classList.add("is-invalid");
        lastN = '';
    }
    
}

function checkMail() {
    let valueUser = document.getElementById('validationServerUsername');
    if (valueUser.value.indexOf('.') !== -1 && valueUser.value.indexOf('@') !== -1 && valueUser.value.indexOf('@')-1  !== -1) {
        let flag = true ;
        for (let i = 0; i < valueUser.value.length; i++) {
            if ((valueUser.value.charAt(i) >= '0' && valueUser.value.charAt(i) <= 'z') || valueUser.value.charAt(i) === '.' || valueUser.value.charAt(i) === '@') {
                if ((valueUser.value.charAt(i) > '9' && valueUser.value.charAt(i) < 'a') && valueUser.value.charAt(i) !== '@' ) {                   
                    flag = false;
                }

            }
            else{
                flag = false;
            }
            
        }
        if (flag) {
            let indexP;
            let indexS;
            for (let i = 0; i < valueUser.value.length; i++) {
                if (valueUser.value[i]==='.') {
                    indexP =i;
                }
                else if (valueUser.value[i]==='@') {
                    indexS =i;
                }     
            }
            if (indexP<indexS) {
                flag = false;
            }
            if (flag) {
                if (valueUser.value.charAt(indexP+1) !== '' &&valueUser.value.charAt(indexS+1) !== '.') {
                    valueUser.classList.add("is-valid");
                    valueUser.classList.remove("is-invalid");
                    mail = valueUser.value;

                }
                else{
                    valueUser.classList.remove("is-valid");
                    valueUser.classList.add("is-invalid");
                    mail = '';
                    
                }
            }
            else{
                valueUser.classList.remove("is-valid");
                valueUser.classList.add("is-invalid");
                mail = '';

            }
        }
        else{
            valueUser.classList.remove("is-valid");
            valueUser.classList.add("is-invalid");
            mail = '';
        }
    }

    else{
        valueUser.classList.remove("is-valid");
        valueUser.classList.add("is-invalid");
        mail = '';
    }
}

function checkCity() {
    let valueUser = document.getElementById('validationServer03');
    if (valueUser.value.length>1) {
        let flag = true;
        for (let i = 0; i < valueUser.value.length; i++) {
            if (valueUser.value.charAt(i) < 'a' || valueUser.value.charAt(i) > 'z') {
                flag = false;
            }
            
        }
        if (flag) {
            valueUser.classList.remove("is-invalid"); 
            valueUser.classList.add("is-valid");
            city = valueUser.value;
        }
        else{
            valueUser.classList.remove("is-valid"); 
            valueUser.classList.add("is-invalid");
            city = '';
        }
    }
    else{
        valueUser.classList.remove("is-valid");
        valueUser.classList.add("is-invalid");
        city = '';

    }
}

function checkState() {
    let valueUser = document.getElementById('validationServer04');
    if (valueUser.value.length>1) {
        let flag = true;
        for (let i = 0; i < valueUser.value.length; i++) {
            if (valueUser.value.charAt(i) < 'a' || valueUser.value.charAt(i) > 'z') {
                flag = false;
            }
            
        }
        if (flag) {
            valueUser.classList.remove("is-invalid"); 
            valueUser.classList.add("is-valid");
            state = valueUser.value;
        }
        else{
            valueUser.classList.remove("is-valid"); 
            valueUser.classList.add("is-invalid");
            state = '';
        }
    }
    else{
        valueUser.classList.remove("is-valid");
        valueUser.classList.add("is-invalid");
        state = '';
    }
}

function checkText() {
    let valueUser = document.getElementById('validationServer05');

    if (valueUser.value.length>10) {
        valueUser.classList.add("is-valid");
        valueUser.classList.remove("is-invalid");
        text = valueUser;  
    }
    else{
        valueUser.classList.remove("is-valid");
        valueUser.classList.add("is-invalid");
        text = '';
    }

}

function checkAndSend() {
    if (firstN && lastN && mail && city && state && text !== '') {
        let flag = true
        users.forEach(function (user) {
            if (user.mail ===mail) {
                flag = false;
            }
        })
        if (flag) {
            users = [...users,{firstN:firstN,lastN:lastN,mail:mail,state:state,text:text}]
            alert('Your message was sent successfully! \n Please wait for an answer');
            for (let i = 1; i < 6; i++) {
                document.getElementById('validationServer0' +i).value = '' ;           
            }
            document.getElementById('validationServerUsername').value = '';
        }

        else{
            alert('One message has already been sent, Please wait for a reply in the mail ' + `"${mail}"` + ' you send');
        }
    }
    else{
        alert('One or more of the fields is empty / does not meet the requirement.');
    }
}