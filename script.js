let random_btn = document.querySelector(".random-btn");

random_btn.addEventListener("click", fetchImg);

function fetchImg () {
    let catsImgDiv = document.querySelector(".img-cat")
    catsImgDiv.innerHTML = ''

    fetch ('https://api.thecatapi.com/v1/images/search')
    .then (response => response.json())
    .then ((data) => {
        let catsImgUrl = data[0].url

        let catsImgEl = document.createElement("img")
        catsImgEl.setAttribute('src', `${catsImgUrl}`)
        catsImgEl.classList.add("showcase")
        
        let catsImgDiv = document.querySelector(".img-cat")
        catsImgDiv.appendChild(catsImgEl)

    }
    )

    .catch (err => console.log(err))
}