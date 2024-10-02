import express from "express"

const app = express()

app.get('/', (req, res) => {
    console.log('Travelon Homepage');

    res.send('<h1>Welcome to Travelon</h1>')
    })

app.get('/about', (req, res) => {
    console.log('Travelon Owner About Page');
    res.send(`About me: <br>My name is Abdussalam Adam <br>I am a software engineer and travel blogger <br> I am a student of IBT Institute <br> I am learning Full stack software Engineering` )
})

app.get('/greet/:userName', (req, res) => {
    const username = req.params.userName
    console.log(`Travelon Greetings Page for ${username}`);
    res.send(`Hello, ${username}! Welcome to Travelon`)
})

app.get('/favorite', (req, res) => {
    console.log(`Travelon Favorite Page for favorites`);
    
    if (Object.keys(req.query).length > 0) {
        const favorites = req.query
        
        let favour = ""
        for(const favorite in favorites) {
            const key = favorite
            favour += `My Favorite ${key} is ${favorites[key]}. `

        }
        res.send(favour)
    } else {
        res.send(`You have no favorite thing, you can add one by adding ?fave=your_favorite_thing to the url`)
    }
})

    // if  (req.query.fave) {
    //     console.log(`Travelon Favorite Page for ${req.query.fave}`);
    //     res.send(`My favorite thing is ${req.query.fave}`)
        
  

app.listen(4000, () => {
    console.log("Server is running on port 4000")
})