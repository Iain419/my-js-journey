let count = 0;
function increment(){ 
    count += 1;
    document.getElementById('counter').textContent = count;
} // increments the count every time the function is called

function save(){
    let prev = document.getElementById('prev');
    let savecount =  count + ' - ';
    prev.innerHTML = prev.textContent + savecount;
    // resting the counter
    count = 0;
    document.getElementById('counter').textContent = count;
}

console.log("Count the number of passengers spotted");