

let BASE_URL = "http://numbersapi.com/"
let chosenNumber = 2
content = document.getElementById('content')

async function getFacts() {
    let factsArray = Array.from({ length: 4}, async function() {
        return $.getJSON(`${BASE_URL}${chosenNumber}?json`)
    })
    let facts = await Promise.all(factsArray)
    console.log(facts)

    for (let i = 0; i < facts.length; i++) {
        console.log(facts[i].text)

        $('body').append(`<p>${facts[i].text}<p>`)
    }
}
getFacts()
favs = [2,9,4]

async function multiNums(arr) {
    console.log(arr)

    for (let num of arr){
        console.log(num)
        let data = await $.getJSON(`${BASE_URL}${num}?json`)
        console.log(data.text)
        
    }
    
}

multiNums(favs)





    
