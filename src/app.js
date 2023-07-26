const express = require("express")
const path    = require("path")
const hbs     = require("hbs")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")
const cors = require("cors")
// console.log(__dirname)
// console.log(__filename)
console.log(path.join(__dirname,"../public"))


// Define paths for Express config
const publicPathDirectory = path.join(__dirname,"../public")
const viewPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

const app = express()

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

var corsOptions = {
    origin: "http://localhost:3000"
  };

  app.use(cors({
    origin: 'http://localhost:3000'
  }))

// app.use(cors(corsOptions))
// Setup static directory to serve
app.use(express.static(publicPathDirectory))

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*")
//   }) 
  


// app.get('',  (req, res)=> {
//     console.log("first application of web server...")
//     res.send("<h1>Weather</h1>")
// })

app.get("", (req, res) => {
   res.render("index",{
     title: 'weather App',
     name: 'Andrew Mead'
   })
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About me",
        name: "Andrew wordpress"
    })
})

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help",
        name: "help the page"
    })
})


app.get("/products", (req, res) => {
    console.log(req.query)

    if(!req.query.search)
    {
        res.send({
            error: "You must provide a search term" 
        })
    }

    res.send({
        products: []
    })
})


app.get("/help/*", (req, res) =>{
    res.render("404", {
        title: "404",
        name: "Andrew Mead",
        errorMessage: "Help article not found..."
    })
})





// app.get('/help',  (req, res)=> {
//    res.send([
//     {
//     name: "ajay bhawani",
//     age:33
//    },
//    {
//     name: "dev mansarovar",
//     age: 35 
//    }
//   ])
// })


// app.get("/about", (req, res) => {
//     res.send("<h2>About pagess!!!</h2>")
// })

app.get("/weather", (req, res) => {

    if(!req.query.address)
    {
       res.send({
        error: "You must provide an address"
       })
    }



//    geocode(req.query.address, (error, { latitude= 42.37349632336484, longitude = -71.0658540421618, location }) => {

//     if(error)
//     {
//         res.send({ error })
//     }

//    })
   




    res.send({
        forecast: "It is showing",
        location: "Philadelphia",
        address: req.query.address
    })
})


app.get('*', (req, res) => {
    res.render("404", {
        title: "404",
        name: "Andrew Mead",
        errorMessage: "404 page..."
    })

})

app.listen(3000, () => {
    console.log("server is up on port 3000...")
})


