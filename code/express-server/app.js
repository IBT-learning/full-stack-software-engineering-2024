import express from 'express'
const app = express();

app.get('/', (req, res)=>{
    res.send(`
        <body>
        <h1>Rea's page</h1>
        </body>
        `)
})

app.get('/about', (req, res) =>{
    res.send('I won my first hackathon!')
})

app.get('/greet/:userName', (req, res)=>{
    res.send(`hello ${req.params.userName}`)
})

app.get('/favorite', (req, res)=>{

    const queryParams = req.query;

    if (Object.keys(queryParams).length === 0 ){
        res.send(`You did not specify your favorite thing`)
    } else{
        let favorites = '';

        for (const key in queryParams){
            favorites += `My favorite is ${key} is ${queryParams[key]}. `
        }
        res.send(favorites.trim());
    }
});

app.listen(4000, ()=>{
    console.log('listening at port 4000')
})