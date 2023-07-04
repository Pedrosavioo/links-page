function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    const img = document.querySelector('#profile img');


    if(html.classList.contains("light")){
        img.setAttribute('src', 'assets/avatar-light.png');
        img.setAttribute('alt', 'Gato de óculos curtindo o sol na praia');
    } else {
       img.setAttribute('src', 'assets/avatar-dark.png')
       img.setAttribute('alt', 'Gato no telhado de uma casa em uma noite de lua cheia');
    }
}