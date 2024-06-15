document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'apartment15.jpg',
        'apartment1.jpg',
        'apartment2.jpg',
        'apartment3.jpg',
        'apartment4.jpg',
        'apartment5.jpg',
        'apartment6.jpg',
        'apartment7.jpg',
        'apartment8.jpg',
        'apartment9.jpg',
        'apartment10.jpg',
        'apartment11.jpg',
        'apartment12.jpg',
        'apartment13.jpg',
        'apartment14.jpg'
    ];
    let currentImageIndex = 0;
    const heroSection = document.querySelector('.hero');

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        heroSection.style.backgroundImage = `url(${images[currentImageIndex]})`;
    }, 2000); // Change image every 5 seconds
});


const email = document.getElementById("email");
const myLabel = document.getElementById("myLabel");
const submit = document.getElementById("submit");

submit.onclick = function(){
    if(email.checked){
        myLabel.textContent = `you are subscribed.`;
    }else{
        myLabel.textContent = `you are NOT subscribed.`;
    }
}