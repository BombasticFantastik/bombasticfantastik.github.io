const snow_canvas=document.getElementById('snow_canvas')
const ctx=snow_canvas.getContext('2d')


weather='Snow'

let width,height,weather_flakes=[];


function snow_method(flake){
    ctx.fillStyle = 'grey';
    mthod=ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
    
}
//let mthod=draw_snow_flake

function init(){

    height = document.documentElement.scrollHeight;
    width = window.innerWidth;
    snow_canvas.width = width;
    snow_canvas.height = height;
    //console.log(width,height)
    weather_flakes=[];
    for (let i = 0;i<300;i++){
        weather_flakes.push(new WeatherFlake(snow_method))
    }
    //console.log(1)
}

function reinit(){//flex0
    const flex0=document.getElementById('flex0')
    width = window.innerWidth;
    height =flex0.scrollHeight

    

    const snow_canvas=document.getElementById('snow_canvas')
    snow_canvas.width = width;
    snow_canvas.height = height;
}
class WeatherFlake{
    constructor(snow_method){
        this.reset()
        this.snow_method=snow_method
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
        }
    
        //ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.mthod(this)
        this.on_screen=false
        
        
        
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

window.addEventListener('load', ()=>{
    init();
})

function click_method(flake){
    ctx.fillStyle = 'green';
    mthod=ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
    
}

class ClickFlake{
    constructor(snow_method,x,y){
        this.reset()
        this.snow_method=snow_method
        this.mthod=snow_method
        this.x=x
        this.y=y
        this.lifetime=60
        
    }
    reset(){



        this.size=Math.random()*3
        this.speed=(Math.random()*1+Math.random()*-1)
        this.velX=(Math.random()*1+Math.random()*-1)
    }
    update(){
        this.x+=this.velX
        this.y+=this.speed
        this.lifetime-=1

        if (this.lifetime<=0){
            console.log(this.lifetime)
            this.lifetime=60
            weather_flakes=weather_flakes.filter(item => item!=this)
        };

        
    }
    draw(){        
        ctx.beginPath();
        if (this.on_screen) {
            
            
            if (weather=='Snow'){
                this.speed=Math.random()*1+0.5
                this.mthod=this.snow_method
            }
        }
    
        this.mthod(this)
        this.on_screen=false
        ctx.fill();

        
    }
}

document.addEventListener('click',(e)=>{
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    weather_flakes.push(new ClickFlake(click_method,e.clientX,e.clientY))
    
})





