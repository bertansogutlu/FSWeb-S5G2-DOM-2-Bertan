import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

const buttons = document.querySelectorAll('.btn');

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

// const body = document.querySelector('body');
// const newDiv = document.createElement('div');
// newDiv.textContent = 'Şimdi Al Martta Öde';
// newDiv.style.fontSize = '40px'
// newDiv.style.display = 'inline'
// newDiv.style.backgroundColor = 'yellow'


// const introImg = document.querySelector('.intro img');

// introImg.addEventListener('mouseover', (event) => {
//     body.prepend(newDiv)
// })


// body.addEventListener('resize', (event) => {
//     console.log(event)
// })

const imgDiv = document.createElement("div");
const img1 = document.createElement("img");
const img2 = document.createElement("img");
const img3 = document.createElement("img");

img1.src = "https://picsum.photos/id/65/100/50";
img2.src = "https://picsum.photos/id/28/100/50";
img3.src = "https://picsum.photos/id/54/100/50";

img1.id = "img1source";
img2.id = "img2source";
img3.id = "img3source";

imgDiv.appendChild(img1);
imgDiv.appendChild(img2);
imgDiv.appendChild(img3);

const navigation = document.querySelector(".main-navigation");
navigation.append(imgDiv);

const imgIntro = document.querySelector(".intro img");
imgIntro.id = "imgTarget";

img1.addEventListener("dragstart", (event) => 
    event.dataTransfer.setData("text/plain", event.target.id)
)

img2.addEventListener("dragstart", (event) => 
    event.dataTransfer.setData("text/plain", event.target.id)
)

img3.addEventListener("dragstart", (event) => 
    event.dataTransfer.setData("text/plain", event.target.id)
)

imgIntro.addEventListener("dragover", (event) => {
    event.preventDefault(); 
})

imgIntro.addEventListener("drop", (event) => {
    event.preventDefault();
   const sourceID = event.dataTransfer.getData("text/plain");
   const sourceElement = document.getElementById(sourceID);
   event.target.src = sourceElement.src;
   
})