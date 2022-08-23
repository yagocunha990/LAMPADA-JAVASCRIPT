const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
//FUNÇÃO PARA VERIFICAR SE A LAMPADA ESTAR QUEBRADA
function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

//FUNÇÃO PARA ACENDER A LAMPADA
function lampOn () {
    if(!isLampBroken()){
    lamp.src = './img/ligada.jpg';
    }
}
//FUNÇÃO PARA APAGAR A LAMPADA
function lampOff () {
    if(!isLampBroken()){
  lamp.src = './img/desligada.jpg';
    }  
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';  
  }

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);