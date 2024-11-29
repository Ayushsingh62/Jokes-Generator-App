
const body = document.querySelector('body')

const para = document.querySelector('p')




async function getjokes() {


    const response=  await fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    

const jokes= await response.json()

console.log(jokes)

// const user= jokes.joke

// console.log(user)
// console.log(user.category)

// body.appendChild=para
// para.innerText=user


document.querySelector('.jokescontent').innerHTML=`

<p><strong>Jokes :</strong>${jokes.joke}</p>
<p><strong>Category :</strong>${jokes.category}</p>

`
    
}

// getjokes()