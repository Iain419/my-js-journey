let passlength = 11
let characters = ['q','w','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','v','w','x','y','z','Q','W','E','R','T','U','V','W','X','Y','Z','A','B','C','D','1','2','3','4','5','6','7','8','9','0','!','@','$','%','*','(',')','+','=','f'];
let pass1 = document.getElementById('pass-1')
let pass2 = document.getElementById('pass-2')
let pass3 = document.getElementById('pass-3')
let pass4 = document.getElementById('pass-4')


let length = characters.length

function passwgen(){
    pass1.textContent = '';
    pass2.textContent = '';
    pass3.textContent = '';
    pass4.textContent = '';

    for(let i = 0; i < passlength; i++){
      let index = Math.floor(Math.random() * length) 
      pass1.textContent += characters[index]
    }
    for(let i = 0; i < passlength; i++){
        let index2 = Math.floor(Math.random() * length)
        pass2.textContent += characters[index2]
    }
    for(let i = 0; i < passlength; i++){
        let index3 = Math.floor(Math.random() * length)
        pass3.textContent += characters[index3]
    }
    for(let i = 0; i < passlength; i++){
        let index4 = Math.floor(Math.random() * length)
        pass4.textContent += characters[index4]
      }

    
}




