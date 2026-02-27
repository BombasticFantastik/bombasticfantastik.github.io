
function LoadPage(url){
    const contentArea = document.getElementById('content-area') 
    fetch(url)
        .then(response => response.text())
        .then(html=>{
            contentArea.innerHTML=html
            reinit()
        });
}

window.addEventListener('DOMContentLoaded',()=>{
    LoadPage('home.html');
    let home_button=document.getElementById('home_button');
    let about_button=document.getElementById('about_button');
    let resume_button=document.getElementById('resume_button');
    let contacts_button=document.getElementById('contacts_button');
    home_button.onclick = ()=> LoadPage('home.html');
    about_button.onclick= ()=> LoadPage('about.html');
    resume_button.onclick= ()=>LoadPage('resume.html');
    contacts_button.onclick= ()=>LoadPage('contacts.html');
})


    

