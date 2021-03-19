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



var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");

  var data = new FormData(event.target);
  
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)