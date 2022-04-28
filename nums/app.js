// $.get('http://numbersapi.com/1337/trivia?notfound=floor&fragment', function(data) {
//     $('#number').text(data);
// });

let BASE_URL = "http://numbersapi.com/"
let chosenNumber = 2
content = document.getElementById('content')

function getCard() {
    return new Promise((resolve, reject) => {
        
    }
    
    )
}

function get(url){
    const request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        request.onload = function () {
            if (request.readyState !== 4) return;

            if (request.status >= 200 && request.status < 300) {
                resolve(JSON.parse(request.response))
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

let nums = [1,2,3]

nums.forEach(num => {
    let title = document.createElement('h1');
    title.setAttribute('id', `title-${num}`);
    title.innerHTML = `${num}`

    let text = document.createElement('h2')
    text.setAttribute('id', `content-${num}`)

    get(BASE_URL + num + "?json")
    .then(res => {console.log(res)
        text.innerHTML = res.text
    })
    .catch(err => console.log(err))

    document.body.appendChild(title)
    document.body.appendChild(text)



}) 


// let title = document.createElement('h1');
// title.setAttribute('id', '');


// get(BASE_URL + chosenNumber + "?json")
//     .then(res => {console.log(res)
//         content.innerHTML = res.text
//     })
//     .catch(err => console.log(err))

// title = document.getElementById('chosen-number')

// title.innerHTML = chosenNumber

// content = document.getElementById('content')


    
