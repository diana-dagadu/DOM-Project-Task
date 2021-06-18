let modal = document.querySelector("#add-modal")
let addMovieBtn1 = document.querySelector(".Btn1")
let backdrop = document.querySelector("#backdrop")
let cancelBtn = document.querySelector(".btn--passive")
let addMovieBtn2 = document.querySelector(".btn--success")
let movieStore = []



const addMovie = () => {
modal.classList.add("visible")
toggleBackdrop()
}

const toggleBackdrop = () => {
    backdrop.classList.toggle("visible")
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
const  addMovieDetails  = () => {
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
            }
        }else {
            alert("Please enter image URL")
        }
    }else {
        alert("Please add movie title")
    }

clearInputs()


}
const clearInputs = () => {
    document.querySelector("#title").value = ""
    document.querySelector("#image-url").value = ""
    document.querySelector("#rating").value = ""
}

addMovieBtn1.addEventListener("click", addMovie)
cancelBtn.addEventListener("click", cancelEvent)
backdrop.addEventListener("click", hideBackdrop)
addMovieBtn2.addEventListener("click", addMovieDetails)




