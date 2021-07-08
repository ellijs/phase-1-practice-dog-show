const dogUrl = "http://localhost:3000/dogs"

const newTag = (string) => document.createElement(string)
const pick = (string) => document.querySelector(string)
const pickAll = (string) => document.querySelectorAll(string)

document.addEventListener('DOMContentLoaded', () => {
    fetchAllDogs()
})

function fetchAllDogs() {
    fetch(dogUrl)
    .then(resp => resp.json())
    .then(json => json.forEach(renderTable))
}

function renderTable(obj) {
    let trDog = newTag("tr")
    let tdName = newTag("td")
    let tdBreed = newTag("td")
    let tdSex = newTag("td")
    let button = newTag("button")

    tdName.textContent = obj.name 
    tdBreed.textContent = obj.breed 
    tdSex.textContent = obj.sex
    button.textContent = "Edit"

    trDog.append(tdName, tdBreed, tdSex, button)

    pick("#table-body").append(trDog)

    button.addEventListener("click", (e) => editForm(e, obj))

}
function editForm(e, obj) {
    // console.log(pick("dog-form"))
    console.log(e)
    console.log(obj)
    pick("#dog-form").name.value = obj.name
    pick("#dog-form").breed.value = obj.breed
    pick("#dog-form").sex.value = obj.sex
}