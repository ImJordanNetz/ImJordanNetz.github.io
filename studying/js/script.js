function change_darklight(){
    let image = document.getElementById("darklight");
    var root = document.documentElement;
    if (image.getAttribute('data') === '1') {
        image.src = './images/sun.png';
        image.setAttribute('data', '0');
        root.style.setProperty('--text', '#ffffff');
        root.style.setProperty('--bckgrnd', 'rgb(30, 30, 30)');
        root.style.setProperty('--primary', '#7F00FF');
        root.style.setProperty('--secondary', '#FFD700');
    } else {
        image.src = './images/moon.png';
        image.setAttribute('data', '1');
        root.style.setProperty('--text', '#000000');
        root.style.setProperty('--bckgrnd', '#ffffff');
        root.style.setProperty('--primary', '#0b6909');
        root.style.setProperty('--secondary', '#f00a88');
    }
}

// Code taken from https://codepen.io/Hyperplexed/pen/abYJQxP

const trailer = document.getElementById("trailer");

window.onmousemove = e => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  const keyframes = {
    transform: `translate(${x}px, ${y}px)`
  }
  
  trailer.animate(keyframes, { 
    duration: 3000, 
    fill: "forwards" 
  });
}
