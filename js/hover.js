function funnyOver() {
    let abusing = document.getElementById('abusing')
    let talking = document.getElementById('talking')
    talking.style.opacity = 0.2
    abusing.style.opacity = 0.2
}

function funnyOut() {
    let abusing = document.getElementById('abusing')
    let talking = document.getElementById('talking')
    talking.style.opacity = 1
    abusing.style.opacity = 1
}

function talkingOver() {
    let funny = document.getElementById('funny')
    let abusing = document.getElementById('abusing')
    funny.style.opacity = 0.2
    abusing.style.opacity = 0.2
}

function talkingOut() {
    let funny = document.getElementById('funny')
    let abusing = document.getElementById('abusing')
    funny.style.opacity = 1
    abusing.style.opacity = 1
}

function abusingOver() {
    let funny = document.getElementById('funny')
    let talking = document.getElementById('talking')
    talking.style.opacity = 0.2
    funny.style.opacity = 0.2
}

function abusingOut() {
    let funny = document.getElementById('funny')
    let talking = document.getElementById('talking')
    talking.style.opacity = 1
    funny.style.opacity = 1
}