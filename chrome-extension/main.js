let links = []
const ulEl = document.getElementById('ul-el')
const link = document.getElementById('input-el')
const inputEl = document.getElementById('input-el')

const linksFromLocalStorage = JSON.parse( localStorage.getItem("sites") )


if(linksFromLocalStorage){
        links =   linksFromLocalStorage
        render(links)
}

function render(link) {
    let listvalue = ''
    for(let i = 0; i < link.length; i++) {
        listvalue += `
            <li>
                <a href="${link[i]}" target="_blank">${link[i]}</a>
            </li>
        `
    }
    ulEl.innerHTML = listvalue
}

let inputbtn = document.getElementById('input-btn')
inputbtn.addEventListener('click', function (){
    links.push(inputEl.value)
    localStorage.setItem('sites', JSON.stringify(links))
    inputEl.value = ''

    render(links)
})

let savebtn = document.getElementById('save-btn')
savebtn.addEventListener('click', function (){
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        links.push(tabs[0].url)
        localStorage.setItem('sites', JSON.stringify(links))

        render(links)
    })
})

let deletebtn = document.getElementById('delete-btn')
deletebtn.addEventListener('dblclick', function (){
    localStorage.clear()
    links = []
    render(links)
})

