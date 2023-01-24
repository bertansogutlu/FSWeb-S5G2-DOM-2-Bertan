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