let tasks = ["Wash Car", "Mow Lawn", "Pull weeds"]
let price = [10,20,30]
let position = []
let totask = []
let toprice = []
const value1 = document.getElementById('value1')
const value2 = document.getElementById('value2')
const value3 = document.getElementById('value3')
let yourTasks = document.getElementById('your-tasks')
let selectedPrice = document.getElementById('selected-task-price')

function localStorageSaver() {
    localStorage.setItem('totask', JSON.stringify(totask))
    localStorage.setItem('toprice', JSON.stringify(toprice))
    localStorage.setItem('position', JSON.stringify(position))
}

if(localStorage.length === 0){
    localStorageSaver()
}

totask = JSON.parse(localStorage.getItem('totask'))
toprice = JSON.parse(localStorage.getItem('toprice'))
position = JSON.parse(localStorage.getItem('position'))

for(let i = 0; i < tasks.length; i++) {
    let baseString = 'value'
    let finalString = `${baseString}${i+1}`
    let value = document.getElementById(finalString)
    value.textContent = `${tasks[i]}: $${price[i]}`

}


function render(){
    let list = ''
    for(let i = 0; i < totask.length; i++){
        list += `
                <div class="row">
                <div class="col-6">
                    <p class="span-0">${totask[i]}<span class="span-1" id="remove" onclick="remove(${i})"> Remove</span></p>
                </div>
                <div class="col-6">
                    <p class="span-2">$${toprice[i]}</p>
                </div>
            </div>
        `

    }
    yourTasks.innerHTML = list

    let sum = 0
    for(let i = 0; i <toprice.length; i++){
        sum += toprice[i]
    }
    selectedPrice.textContent = '$' + sum
}

render()


function arraypusher(number) {
    totask.push(tasks[number])
    toprice.push(price[number])
    position.push(number)
    localStorageSaver()
    render()
}




value1.addEventListener('click', () =>{
    if(totask.includes(tasks[0]) === false){
        arraypusher(0)
    }
})

value2.addEventListener('click', () =>{
    if(totask.includes(tasks[1]) === false){
        arraypusher(1)
    }
})

value3.addEventListener('click', () =>{
    if(totask.includes(tasks[2]) === false){
        arraypusher(2)
    }
})


function remove(number) {
    let indexIndex = position.indexOf(number)
    let totaskIndex = totask.indexOf(number)
    let topriceIndex = toprice.indexOf(number)

    position.splice(indexIndex, 1)
    totask.splice(totaskIndex, 1)
    toprice.splice(topriceIndex, 1)
    localStorageSaver()

    render()
}

function sendinvoive(){
    localStorage.clear()
    window.location.reload();
}


