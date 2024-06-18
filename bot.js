const answer = document.getElementById("answer")
const question = document.getElementById("question")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0;


const botSay = (data) => {
    return[
    "Hello,my name is benBot.And you?",
    `nice to meet youu ${data?.name}, how old are you?`,
    `owhhh ${data?.age}, what's your hobby?`,
    `wow ${data?.hobby}, btw what's your favorite fruits?`,
    `heyy i like ${data?.fruits} too, lastly what is your favourtie color? `,
    `hahaha i know you like ${data?.color} colors,okay then we're done playing okay?`




    ]
}

question.innerHTML = botSay()[0]

let usersData = []

function botStart () {
    if(answer.value.length < 1) return alert("diisi njing")
    init++
    if (init==1) {
        botDelay({ name :answer.value})
    } else if (init==2) {
        botDelay({ age :answer.value})
    } else if (init==3) {
        botDelay({ hobby :answer.value})
    } else if (init==4) {
        botDelay({ fruits :answer.value})
    } else if (init==5) {
        botDelay({ color :answer.value})
    }  
    else if (init==6) {
        finishing()
 } else [
    botEnd()
    ]
    
}

function botDelay (jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout ( () => {
    question.innerHTML = botSay(jawabanUser)[init]
    loaders.style.display = "none"
    container[0].style.filter = "none"
    },1000 )
    usersData.push(answer.value)
    answer.value = ''
}

function finishing () {
    question.innerHTML = `thankyou ${usersData[0]} for playing with benBot,always be patient and support me okay? see uu my ugly monkeyy`
    answer.value = ''

}

function botEnd () {
    alert(`anjing lu ${usersData[0]}`)
    window.location.reload()    

}
