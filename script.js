const btnHam = document.querySelector('.ham-btn');

const btnTime = document.querySelector('.time-btn');

const navBar = document.getElementById('nav-bar');

btnHam.addEventListener('click',function(){
    if(btnHam.className !== "")
    {
        btnHam.style.display = "none";
        btnTime.style.display = "block";
        navBar.classList.add("show-nav");
    }
})

btnTime.addEventListener('click', function(){
    if(btnHam.className !== "")
    {
        this.style.display = "none";
        btnHam.style.display = "block";
        navBar.classList.remove("show-nav");
    }

})