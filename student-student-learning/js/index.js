document.addEventListener('mousemove', function(e) {
    const container = document.getElementById('image-container');
    const floatingImage = document.getElementById('floating-image');
    
    const rect = container.getBoundingClientRect();
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const maxRadius = 5; 
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const angle = Math.atan2(mouseY, mouseX);
    
    const distance = Math.min(maxRadius, Math.sqrt(mouseX * mouseX + mouseY * mouseY));
    
    const imageX = distance * Math.cos(angle);
    const imageY = distance * Math.sin(angle);
    
    const keyframes = {
        transform: `translate(${imageX}%, ${imageY}%)`
      }
      
      floatingImage.animate(keyframes, { 
        duration: 2000, 
        fill: "forwards" 
      });

    const shadowDirectionX = -1 * imageX / maxRadius * 10; 
    const shadowDirectionY = -1 * imageY / maxRadius * 10; 
    const shadowBlur = 20; 
    const shadowSpread = 5;
    const shadowColor = "rgba(0,0,0,0.7)";

    floatingImage.style.boxShadow = `${shadowDirectionX}px ${shadowDirectionY}px ${shadowBlur}px ${shadowSpread}px ${shadowColor}`;
});
