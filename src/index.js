
// CHALLENGE 1 
// - Add JavaScript that:
// - on page load, fetches the images using the url above ⬆️
// - parses the response as `JSON`
    //Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"   //declared variable for img url
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'      //declared variable for breeed url
    let breeds = []


//FETCH CHALLENGE 1
        fetch(imgUrl)
            .then(resp => resp.json())   
            .then(data => {
        data.message.forEach(dogImage => renderImage(dogImage))     // - adds image elements to the DOM **for each** 🤔 image in the array
    })
    //FETCH CHALLENGE 2
    fetch(breedUrl)
        .then(resp => resp.json() )
        .then(data => {
             breeds = Object.keys(data.message) //take the object which is (data.message)
             renderBreeds(breeds)
    })

//DOM Selectors 
const dropdown = document.querySelector('#breed-dropdown')
const ul = document.getElementById('dog-breeds')
//console.log(dropdown)


// This event listener will help us change the font color of that li, and it can be any color.
// So we will listen for a click, and then change the color of the li. It is time to add our event listener

//Event Listeners
dropdown.addEventListener('change', handleChange)


//Render Functions
    function renderImage(dogImage){

        const container = document.getElementById('dog-image-container')
        const img = document.createElement('img')
       //console.log(img)
        img.src = dogImage
        container.append(img)           //this puts imgs in the container
    }


    function renderBreeds(breeds){    //   CHALLENGE 2
        const ul = document.getElementById('dog-breeds')
        breeds.forEach(breeds =>{
            const li = document.createElement('li')
            li.textContent = breeds
            ul.append(li)
            li.addEventListener('click', changeColor)
        
    })
// console.log(li)
// iterate through the array of breeds and create an li tag
}

//Callbacks
   function changeColor(e){
       e.target.style.color = "red"
   }
   function handleChange(e) {
    const letter = e.target.value
    filteredBreeds = breeds.filter(breeds => breeds.startsWith(letter))
    ul.innerHTML = ""
    console.log(filteredBreeds)
    renderBreeds(filteredBreeds)
    //debugger;
}
});


//

// ## Challenge 4

// Once we are able to load _all_ of the dog breeds onto the page, add JavaScript
// so that the user can filter breeds that start with a particular letter using a
// [dropdown](https://www.w3docs.com/learn-html/html-select-tag.html).

// For example, if the user selects 'a' in the dropdown, only show the breeds with
// names that start with the letter a. For simplicity, the dropdown only includes
// the letters a-d. However, we can imagine expanding this to include the entire
// alphabet.

// ---

// ![dog ceo](https://dog.ceo/img/dog.jpg)






// 

//document.addEventListener('DOMContentLoaded', function(){
//     const imgUrl = "https://dog.ceo/api/breeds/image/random/4"   
//     const breedUrl = 'https://dog.ceo/api/breeds/list/all'
//     let breeds = []
//  //fetch images using url
//  fetch(imgUrl)
//     .then(resp => resp.json())
//     .then(data => {
//         data.message.forEach(dogImage => renderImage(dogImage))
// })  

// fetch(breedUrl)
//     .then(resp => resp.json())
//     .then(data => {
//         breeds = Object.keys(data.message)
//         renderBreeds(breeds)
// })  

// //DOM Selectors
// const dropdown = document.querySelector('#breed-dropdown')
// const ul = document.querySelector('#dog-breeds')

// //Add eventListeners
// dropdown.addEventListener('change', handleChange)
// //render functions
// function renderImage(dogImage) {
//     //.console.log(dogImage)
//     const container = document.getElementById('dog-image-container')
//     const img = document.createElement('img')
//     img.src = dogImage
//     container.append(img)
//     //console.log(img)
// }
// function renderBreeds(breeds){
//      //const ul = document.querySelector('#dog-breeds')

//     breeds.forEach(breed => {
//         let li = document.createElement('li')
//         li.textContent = breed
//         ul.append(li)
//         li.addEventListener('click', changeColor)     
//     })
//    //iterate through the array of breeds and create an li tage

// }

// //callbacks
// function changeColor(e) {
//     e.target.style.color = "red"
// }

// function handleChange(e) {
//     const letter = e.target.value
//     filteredBreeds = breeds.filter(breed => breed.startsWith(letter)) 
//     ul.innerHTML = ''
//     renderBreeds(filteredBreeds)
