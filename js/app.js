let lightBlue = document.getElementById('light-blue')
let pink = document.getElementById('pink')
let yellow = document.getElementById('yellow')
let white = document.getElementById('grey')

let body = document.querySelector('body')

console.log(body.style.backgroundColor)

lightBlue.addEventListener('click', () => {
    body.classList = '';

    lightBlue.style.transform = 'scale(1.3)'
    document.querySelector('select').style.borderColor = 'rgba(255, 255, 255, 0.5)'   
    document.querySelector('button, select').style.color = 'rgba(255, 255, 255, 0.5)'
    document.querySelector('button').style.color = '#fff'
    for (const link of document.querySelectorAll('a')) {
        link.style.color = '#fff'    
    }
})
pink.addEventListener('click', () => {
    body.classList = 'pink'

    pink.style.transform = 'scale(1.3)'
    document.querySelector('select').style.borderColor = 'rgba(255, 255, 255, 0.5)'   
    document.querySelector('button, select').style.color = 'rgba(255, 255, 255, 0.5)'
    document.querySelector('button').style.color = '#fff'
    for (const link of document.querySelectorAll('a')) {
        link.style.color = '#fff'    
    }
})
yellow.addEventListener('click', () => {
    body.classList = 'yellow';

    yellow.style.transform = 'scale(1.3)'
    document.querySelector('select').style.borderColor = 'rgba(255, 255, 255, 0.5)'   
    document.querySelector('button, select').style.color = 'rgba(255, 255, 255, 0.5)'
    document.querySelector('button').style.color = '#fff'
    for (const link of document.querySelectorAll('a')) {
        link.style.color = '#fff'    
    }
})
white.addEventListener('click', () => {
    body.classList= 'white'

    white.style.transform = 'scale(1.3)'
    document.querySelector('select').style.borderColor = '#000'   
    document.querySelector('button, select').style.color = '#000'
    for (const link of document.querySelectorAll('a')) {
        link.style.color = '#000'    
    }
})


let heroImage = document.querySelector('#skate-1')

let option1 = document.querySelector('select:first-child')
let option2 = document.querySelector('option:nth-of-type(2)')
let option3 = document.querySelector('option:nth-of-type(3)')
let option4 = document.querySelector('option:nth-of-type(4)')


// here I tried to animate the size of the hero image (roller skates) to be responsive to the selected option but seems i was unable to get it. 
// You can please find your way around it if you can :)

option1.addEventListener('change', () => {
    console.log('hello')
    heroImage.style.transform = 'scale(1.2)'    
})
console.log(option1)