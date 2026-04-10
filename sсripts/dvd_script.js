document.addEventListener('click',(event)=>{

    if (event.target.id=="dvd_button"){
        //let dvd_button=window.getElementById("dvd_button");
        let dvd_sign=document.getElementById("dvd_sign");
        let dvd_sign_img=document.getElementById("dvd_sign_img");
        
        dvd_sign.hidden=false
        
        dvd_sign_img.onclick = ()=> dvd_sign.hidden=true//.style.display='block'
    }
    
    // let dvd_button=window.getElementById("dvd_button");
    // let dvd_sign=window.getElementById("dvd_sign");

    // console.log(dvd_button)

    //dvd_button.onclick = ()=> dvd_sign.hidden=false//.style.display='block'
    
})