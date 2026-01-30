const snow_canvas=document.getElementById('snow_canvas')
const ctx=snow_canvas.getContext('2d')

weather='Snow'

let width,height,snowflakes=[];

function init(){
    width = window.innerWidth;
    height = window.innerHeight;
    snow_canvas.width = width;
    snow_canvas.height = height;
    snowflakes=[];
    for (let i = 0;i<150;i++){
        snowflakes.push(new Snowflake())
    }
    console.log(1)
}
class Snowflake{
    constructor(){
        this.reset()
    }
    reset(){
        this.x=Math.random()*width
        this.y=Math.random()*height
        this.size=Math.random()*3+1
        this.speed=Math.random()*1+0.5
        this.velX=Math.random()*0.5-0.25
    }
    update(){
        this.x+=this.velX
        this.y+=this.speed

        if ((this.y>height)&&(weather)=='Snow' ) {
            this.y=-10;
            this.x=Math.random()*width
        }
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'grey';
        ctx.fill();
    }
}
function animate_snow(){

    
    ctx.clearRect(0, 0, width, height);
    snowflakes.forEach(flake => {

    flake.update();
    flake.draw();
    
  });
  requestAnimationFrame(animate_snow);
}
window.addEventListener('resize',init);

init()
animate_snow()




//animate_snow()

document.querySelectorAll('input[type="radio"][name="weather"]').forEach(radio => {
    radio.addEventListener('change', () => weather=radio.value);
    console.log(weather)
});




// const snow_canvas=document.getElementById('snow_canvas')
// const ctx=snow_canvas.getContext('2d')

// let width, height, snowflakes = [];

// function init(){
//     width = window.innerWidth;
//     height = window.innerHeight;
//     snow_canvas.width = width;
//     snow_canvas.height = height;
//     snowflakes=[];
//     for (let i = 0;i<150;i++){
//         snowflakes.push(new Snowflake())
//     }
// }



// class Snowflake {
//   constructor() {
//     this.reset();
//   }

//   reset(){
//         this.x=Math.random()*width
//         this.y=Math.random()*height
//         this.size=Math.random()*3+1
//         this.speed=Math.random()*1+0.5
//         this.velX=Math.random()*0.5-0.25
//     }

//   update() {
//     this.y=this.speed
//     this.x += this.velX;

//     // Если снежинка улетела вниз — возвращаем её наверх
//     if (this.y > height) {
//       this.y = -10;
//       this.x = Math.random() * width;
//     }
//   }

//   update(){
//     this.y+=this.speed
//     this.x+=this.velX

//     if (this.y>height){
//         this.y=-10;
//         this.x=Math.random()*width
//         }
//     }

//   draw() {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//     ctx.fillStyle = 'white';
//     ctx.fill();
//   }
// }

// function animate() {
//   ctx.clearRect(0, 0, width, height);
//   snowflakes.forEach(flake => {
//     flake.update();
//     flake.draw();
//   });
//   requestAnimationFrame(animate);
// }

// window.addEventListener('resize', init);
// init();
// animate();