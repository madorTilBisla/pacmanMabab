window.addEventListener("load", function(){
    // We execute the same script as before
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    document.addEventListener("click", nextScreen);
});

function nextScreen(){
    window.location.href = "main.html";
}