const pwEl = document.getElementById("pwEl");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");


/* A declaracao const cria uma variavel cujo o valor e fixo, ou seja, uma constante somente leitura */

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetter = "abcdefghijklmnopqrstuvwxyz" ;
const number = "0123456789";
const symbol = "!@#$%&*()?-";



function getLowercase () {
    return lowerLetter[Math.floor(Math.random() * lowerLetter.length)];
}

function getUppercase () {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber () {
    return number[Math.floor(Math.random() * number.length)];
}

function getSymbol () {
    return symbol[Math.floor(Math.random() * symbol.length)];
}

function generatePassword (){
    const len = lenEl.value;
    let  password = "";

    /* se o checkbox for selecionado vai adicionar uma letra maiuscula no password */
    
    if (upperEl.checked) {
        password += getUppercase ();
    }

    if (lowerEl.checked) {
        password += getLowercase ();
    }

    if (numberEl.checked) {
        password += getNumber ();
    }

    if (symbolEl.checked) {
        password += getSymbol ();
    }
    // alert(password);
    for (let i = password.length; i < len; i++){

        const x = generateX();
        // alert(x);
        password += x;
    }

    /* let escrita = document.getElementById('pwEl');
        escrita.innerHTML = password; */
        pwEl.innerText = password;
}

function generateX() {
    const xs = [];

    if (upperEl.checked){
        // alert('maiuscula')
        xs.push(getUppercase()); 
    }

    if (lowerEl.checked){
        // alert('minuscula')
        xs.push(getLowercase());
    }

    if (numberEl.checked){
        // alert('numeros')
        xs.push(getNumber());
    }

    if (symbolEl.checked){
        // alert('simbolos')
        xs.push(getSymbol());
    }
    // alert(xs)
    /* (push = se p checkbox for selecionado o programa ira adicionar na no password conforme selecionado) */
    if (xs.length === 0) return "";
        
    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePassword); 




