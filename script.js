function showHabilites(){
    const title = document.getElementsByClassName("language-title")
    const levelHabilites = document.getElementsByClassName("language-level")

    if(width < 731){
        if(title.style == "flex"){
            levelHabilites.style == "flex"
            title.style =="none"
        }else{
            levelHabilites.style == "none"
            title.style =="flex"
        }
    }
}

function aoClicar(){
    window.location.href = 'https://github.com/lucast898';
}

function aoClicarInstagram(){
    window.location.href = 'https://www.instagram.com/_lucascd/'
}

function aoClicarLinkedin(){
    window.location.href = 'https://www.linkedin.com/in/lucas-delsoci-cardoso-b8b415286/'
}

function aoClicarEmail(){
    window.location.href = 'https://mail.google.com/mail/u/0/#inbox'
}



function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let icon = document.querySelector('#menuHamburguer i');

    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icon.classList.remove('fa-x');
        icon.classList.add('fa-bars');
        icon.style.color = '';
    } else {
        menuMobile.classList.add('open');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-x');
        icon.style.color = '#f9fafa';
    }
}

