let counter = document.getElementById("count")
let url = "https://cors.evaexists.workers.dev/?url=https://fxtwitter.com/api/stats/"

counter.addEventListener("click", e => {
    fetch(url).then(r => r.json()).then(j => counter.innerText = j.api)
})