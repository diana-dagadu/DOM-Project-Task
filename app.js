let modal = document.querySelector("#add-modal")
let addMovieBtn1 = document.querySelector(".Btn1")
let backdrop = document.querySelector("#backdrop")
let cancelBtn = document.querySelector(".btn--passive")
let addMovieBtn2 = document.querySelector(".btn--success")
let movieStore = []
let sectionRemoval = document.querySelector("#entry-text")


const addMovie = () => {
modal.classList.toggle("visible")
// modal.classList.add("visible")
// modal.style.display = "block"
toggleBackdrop()
}

const toggleBackdrop = () => {
    backdrop.classList.toggle("visible")
    // backdrop.classList.add("visible")
    // backdrop.style.display = "block"
}

const cancelEvent = () => {
    modal.classList.remove("visible")
    backdrop.classList.remove("visible")   
    clearInputs() 
}

const hideBackdrop = () => {
    modal.classList.remove("visible")
    backdrop.classList.remove("visible")    
}
addMovieBtn2.addEventListener("click", () => {

    let title = document.querySelector("#title").value.trim()
    let imgLink = document.querySelector("#image-url").value.trim() 
    let rating = document.querySelector("#rating").value.trim() 

    if (title !=="") {
        if (imgLink !== ""){
            if (rating < 1 || rating > 5) {
                alert ("Please enter any rating from 1 to 5")                
            } else{
               const movieDetails = {
                   title: title,
                   imageURL : imgLink,
                   movieRating : rating                   
                }
                movieStore.push(movieDetails)
                addMovieTitle(movieDetails.title)
                clearInputs()
                // modal.style.display = "none"
                // backdrop.style.display = "none"
                // modal.classList.remove("visible")
                // backdrop.classList.remove("visible")
                modal.classList.toggle("visible")
                backdrop.classList.toggle("visible")
                removeSection()
                
            }
        }else {
            alert("Please enter image URL")
        }
    }else {
        alert("Please add movie title")
    }

})
    

const clearInputs = () => {
    document.querySelector("#title").value = ""
    document.querySelector("#image-url").value = ""
    document.querySelector("#rating").value = ""
}

function removeSection(){
    if (movieStore[0] != null) {
        sectionRemoval.style.display = "none"
    }
    else {
        sectionRemoval.style.display = "block"
    }
}

function addMovieTitle(title){
    let ul  = document.getElementById("movie-list")
    let movie = document.createElement('li')

    movie.innerText = title

 ul.appendChild(movie)

}
addMovieBtn1.addEventListener("click", addMovie)
cancelBtn.addEventListener("click", cancelEvent)
backdrop.addEventListener("click", hideBackdrop)





