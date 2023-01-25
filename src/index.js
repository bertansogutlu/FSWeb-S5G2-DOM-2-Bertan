import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

const buttons = document.querySelectorAll('.btn');
console.log(buttons);

const desImg = document.querySelector('.content-destination img');

buttons[0].addEventListener('mouseenter', (event) => {
    desImg.src = 'https://picsum.photos/id/65/600/200'
})

buttons[0].addEventListener('mouseleave', (event) => {
    desImg.src = 'http://localhost:9000/img/destination.jpg'
})

buttons[1].addEventListener('mouseenter', (event) => {
    desImg.src = 'https://picsum.photos/id/28/600/200'
})

buttons[1].addEventListener('mouseleave', (event) => {
    desImg.src = 'http://localhost:9000/img/destination.jpg'
})

buttons[2].addEventListener('mouseenter', (event) => {
    desImg.src = 'https://picsum.photos/id/54/600/200'
})

buttons[2].addEventListener('mouseleave', (event) => {
    desImg.src = 'http://localhost:9000/img/destination.jpg'
})

const body = document.querySelector('body');
const newDiv = document.createElement('div');
newDiv.textContent = 'Şimdi Al Martta Öde';
newDiv.style.fontSize = '40px'
newDiv.style.display = 'inline'
newDiv.style.backgroundColor = 'yellow'


const introImg = document.querySelector('.intro img');

introImg.addEventListener('mouseover', (event) => {
    body.prepend(newDiv)
})


body.addEventListener('resize', (event) => {
    console.log(event)
})

