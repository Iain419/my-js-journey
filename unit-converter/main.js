const number = 70;

function converter(){
    // itterating through the class list
    values = document.getElementsByClassName('value'); 
    for(let i = 0; i < values.length; i++){
        values[i].textContent = number;
    }
}

function tofeet(){
    const feet = number * 3.28084;
    document.getElementById('tofeet').textContent = feet.toFixed(3);

}

function tometers(){
    const meters = number * 0.3048;
    document.getElementById('tometers').textContent = meters.toFixed(3);
}

function togallonns(){
    const gallons = number * 0.264172;
    document.getElementById('togallonns').textContent = gallons.toFixed(3);
}

function tolitres(){
    const litres = number * 3.78541;
    document.getElementById('tolitres').textContent = litres.toFixed()

}

function topounds(){
    const pounds = number * 2.20462;
    document.getElementById('topounds').textContent = pounds.toFixed(3);
}

function tokilos(){
    const kilos = number * 0.453592;
    document.getElementById('tokilos').textContent = kilos.toFixed(3);
}