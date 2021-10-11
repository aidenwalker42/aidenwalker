window.onscroll = () => {
    const aprop = document.querySelectorAll('[id=nav-links]');
    const aiden = document.querySelector("h1");
    const nav = document.querySelector("nav");
    const icons = document.querySelectorAll('[id=icons]');
    console.log(aprop)

    if(this.scrollY <= window.innerHeight-2)
    {
        nav.style.backgroundColor = "transparent"; 
        aiden.className = "";
        for(let i=0; i<aprop.length; i++){
            aprop[i].className = '';
            icons[i].className = '';
        }
        
    } 
    else {
        nav.style.backgroundColor = "black"; 
        aiden.className = "scroll";
        for(let i=0; i<aprop.length; i++){
            aprop[i].className = 'scroll';
            icons[i].className = "invert";
        }
    }
  };
