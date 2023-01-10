let sec = 0
let min = 0
let hor = 0
let interval
let alarme = document.getElementById('alarme').value;
let despertador = Number(alarme.value);



function iniciar(){
    relogio()
   interval = setInterval(relogio,1000)
}

function pausar(){
   clearInterval(interval)
}

function reiniciar (){
    clearInterval(interval)
     sec = 00
     min = 00
    document.getElementById('relogio').innerText='00:00:00'
}

function doisdigitos (digito){
    if (digito <10){
        return('0'+ digito)
    }else{
        return(digito)
    }

}

function relogio (){
    sec++
    if (sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hor++
        }
    }
    document.getElementById('relogio').innerText=doisdigitos(hor)+':'+doisdigitos(min)+':'+doisdigitos(sec)
    

}

