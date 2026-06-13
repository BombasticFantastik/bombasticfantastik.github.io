//dvd_secret=true
document.addEventListener('click',(event)=>{

    if (event.target.id=="dvd_button"){
        show_new_secret_window()
        
        let dvd_sign=document.getElementById("dvd_sign");
        let dvd_sign_img=document.getElementById("dvd_sign_img");
        
        dvd_sign.hidden=false
        dvd_sign_img.onclick = ()=> {
            dvd_sign_img.src = "gifs/boom0.gif?t=" + new Date().getTime();
            setTimeout(() => {
                dvd_sign.hidden=true;
            }, 2150);
        }
        dvd_sign_img.src="images/dvd_logo.png"

    }
})