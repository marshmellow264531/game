const canvas  =  document.getElementById('gameCanvas')
const ctx = canvas.getContext('2D')
const images = ["47f1b200-8b2e-11ea-8fa1-ab106189aeb0.jfif","47f1b200-8b2e-11ea-8fa1-ab106189aeb0.jfif",
"photo-1481349518771-20055b2a7b24.jfif","photo-1481349518771-20055b2a7b24.jfif"];
var shuf_images = images.sort(() => (Math.random() > .5) ? 2 : -1);
for ( var i =0; i<images.length; i++){
    let box = document.createElement('div')
    box.className = 'item';
    box.innerHTML = shuf_images[i]
    document.querySelector('.game').appendChild(box);
}
