window.addEventListener('scroll', function() {
    var nav = document.getElementById('sticky-nav');
    var triggerDiv = document.getElementById('trigger-div');
    var triggerDivOffset = triggerDiv.offsetTop;

    if (window.scrollY > triggerDivOffset) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
});
