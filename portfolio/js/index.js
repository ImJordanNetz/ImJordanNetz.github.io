const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

document.querySelectorAll(".nav-link-container a").forEach(anchor => {
    anchor.onmouseover = event => {  
        let iteration = 0;
        
        clearInterval(interval);
        
        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                    return event.target.dataset.value[index];
                }
            
                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
            
            if(iteration >= event.target.dataset.value.length){ 
                clearInterval(interval);
            }
            
            iteration += 1 / 3;
        }, 40);
    };
});

const trailer = document.getElementById("trailer");

window.onmousemove = e => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  const keyframes = {
    transform: `translate(${x}px, ${y}px)`
  }
  
  trailer.animate(keyframes, { 
    duration: 1000, 
    fill: "forwards" 
  });
}