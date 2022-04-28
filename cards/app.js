let BASE_URL = "http://deckofcardsapi.com/api/"

let cardCount = 0

let deckId = null



function get(url){
    const request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        request.onload = function () {
            if (request.readyState !== 4) return;

            if (request.status >= 200 && request.status < 300) {
                resolve(JSON.parse(request.response))
                console.log(JSON.parse(request.response))
            } else {
                reject(request.status)
            }
        }
        request.onerror = function handleError() {
            request = null;
            reject("NETWORK ERROR")
        };
        request.open('GET', url);
        request.send();
    })
}

get(BASE_URL + 'deck/new/shuffle')
.then(res => {console.log(res.deck_id)
    deckId = res.deck_id
    console.log(`DECK ID: ${deckId}`)
    get(BASE_URL + `deck/${deckId}/draw`)
    .then((cardRes) => {
        console.log(cardRes)
    
        cardCount++
        createCardHTML(cardRes)
    })
})

function drawCard(deckId) {
    get(BASE_URL + `deck/${deckId}/draw`)
    .then((cardRes) => {
        console.log(cardRes)
    
        cardCount++
        createCardHTML(cardRes)
        
    
})}

function createCardHTML(data) {
    let new_card = document.createElement('img')
    new_card.setAttribute('id', `card-${cardCount}`)
    new_card.setAttribute('src', `${data.cards[0].image}`)
    document.body.appendChild(new_card)

}

let drawBtn = document.getElementById('draw')

drawBtn.addEventListener('click', () => {
    drawCard(deckId)
})


