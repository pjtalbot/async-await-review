let BASE_URL = "http://deckofcardsapi.com/api/"

let cardCount = 0
let $button = $('#draw')
let deckId

async function getDeck(url){
    
    let data = await $.getJSON(url)
    return data; 
}

async function setupDeck() {
    let deck = await getDeck(BASE_URL + 'deck/new/shuffle');
    
    console.log(deck.deck_id)
    deckId = deck.deck_id
    console.log(deckId)
    let $pile = $('#pile')
    $button.on("click", async function() {
        console.log(deckId)
        
    let card = await $.getJSON(`${BASE_URL}deck/${deckId}/draw/`)
    $pile.append(
        $('<img>', {
          src: card.cards[0].image,
          
        })
      );
      if (card.remaining === 0) $button.remove();
    });
  }



setupDeck()








