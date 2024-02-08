$("#oneCardSubmit").on("click", function(e) {
    e.preventDefault();
    let promise = axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)

    promise 
        .then(data =>{
            const deck = data.data.deck_id
            return axios.get(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`)
        })
        .then(card =>{
            console.log(card.data.cards[0].value,'of', card.data.cards[0].suit)
            //$("#location").append(`<img src='${card.data.cards[0].image}'>`);    
        })
             
        .catch(err => console.log(err));
})

$("#twoCardSubmit").on("click", function(e) {
    e.preventDefault();
    let promise = axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)

    promise 
        .then(data =>{
            const deck = data.data.deck_id
            return axios.get(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=2`)
        })
        .then(card =>{
            console.log(card.data.cards[0].value,'of', card.data.cards[0].suit)
            console.log(card.data.cards[1].value,'of', card.data.cards[1].suit)
            //$("#location").append(`<img src='${card.data.cards[0].image}'>`);
            //$("#location").append(`<img src='${card.data.cards[1].image}'>`);
        })
             
        .catch(err => console.log(err));
})

let deckId;

window.onload = function() {

    axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(response => {
            deckId = response.data.deck_id;
            console.log(`Deck set with ID: ${deckId}`);
        })
        .catch(error => {
            console.error(error);
        });
};

$("#drawSubmit").on("click", function(e) {
    e.preventDefault();
    axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then(card =>{
            $("#location").append(`<img src='${card.data.cards[0].image}'>`);
        })
             
        .catch(err => console.log(err));
})