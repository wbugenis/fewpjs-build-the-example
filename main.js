// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!
const modal = document.querySelector("div#modal")

function toggleError(){
  modal.classList.toggle('hidden')
}

document.body.addEventListener('click', event => {
  if(event.target.matches("span.like-glyph")){
    const target = event.target
    mimicServerCall()
    .then( ()=> {
      console.log("hi")
      target.classList.contains('activated-heart')? target.innerHTML = EMPTY_HEART : target.innerHTML = FULL_HEART
      target.classList.toggle('activated-heart')
    })
    .catch(error => {
      console.log(error)
      toggleError()
      setTimeout(toggleError, 5000)
    })
  }
})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
