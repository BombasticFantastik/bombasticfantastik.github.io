const snow_canvas=document.getElementById('snow_canvas')
const ctx=snow_canvas.getContext('2d')

weather='Snow'

let width,height,weather_flakes=[];


function rain_method(flake){
    ctx.fillStyle = 'blue';
    mthod=ctx.fillRect(flake.x, flake.y, 3, 20);
    
}
function snow_method(flake){
    ctx.fillStyle = 'grey';
    mthod=ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
    
}
//let mthod=draw_snow_flake

function init(){
    width = window.innerWidth;
    height = window.innerHeight;
    snow_canvas.width = width;
    snow_canvas.height = height;
    weather_flakes=[];
    for (let i = 0;i<150;i++){
        weather_flakes.push(new WeatherFlake(snow_method,rain_method))
    }
    //console.log(1)
}
class WeatherFlake{
    constructor(snow_method,rain_method){
        this.reset()
        this.snow_method=snow_method
        this.rain_method=rain_method
        this.mthod=snow_method
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

        if ((this.y>height)&&(weather)!='Clear' ) {
            this.y=-100;
            this.x=Math.random()*width
            this.on_screen=true
        }
    }
    draw(){        
        ctx.beginPath();
        if (this.on_screen) {
            
            
            if (weather=='Snow'){
                this.speed=Math.random()*1+0.5
                this.mthod=this.snow_method
            }
            else if(weather=='Rain'){
                this.speed=Math.random()+9
                this.mthod=this.rain_method
                
            }
        }
        //this.mthod=draw_rain_flake
        //ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.mthod(this)
        this.on_screen=false
        
        
        
        ctx.fill();

        
    }
}

class Rainflake{
    constructor(){
        this.reset()
    }
    reset(){
        this.x=Math.random()*width
        this.y=Math.random()*height
        this.size=Math.random()*3+1
        this.speed=Math.random()*1+2
        this.velX=Math.random()*0.5-0.25
    }
    update(){
        this.x+=this.velX
        this.y+=this.speed

        if ((this.y>height)&&(weather)=='Rain' ) {
            this.y=-10;
            this.x=Math.random()*width
        }
    }
    draw(){
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, 2, 20);
        ctx.fillStyle = 'grey';
        ctx.fill();
    }
}
function animate_weather(){
    ctx.clearRect(0, 0, width, height);
    weather_flakes.forEach(flake => {
    flake.update();
    flake.draw();
    
  });
  requestAnimationFrame(animate_weather);
}
window.addEventListener('resize',init);

init()
animate_weather()




//animate_snow()

document.querySelectorAll('input[type="radio"][name="flake"]').forEach(radio => {
    radio.addEventListener('change', () => weather=radio.value);
    //console.log(weather)
});
