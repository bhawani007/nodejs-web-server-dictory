console.log("load the javascript file...")


const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const messageOne = document.querySelector("#message-1")
messageOne.textContent = "from javascript value"
const messageTwo = document.querySelector("#message-2")
console.log(messageOne)



weatherForm.addEventListener('submit', (e) => {
   e.preventDefault()
    console.log("testing!!!")
    console.log(search.value)

    messageOne.textContent = "Loading..."
    messageTwo.textContent = ""


    address = search.value

    const url = "https://api.weatherstack.com/current?access_key=820ee83b629b98106d60c41b81d1b083&query="+address
    console.log(url)

fetch(url).then((response)=> {
    response.json().then((data) => {
        if(data.error)
        {
            messageOne.textContent = data.error.info
          console.log(data.error.info)
          messageTwo.textContent = data.error.type
        }else{
             console.log(data)
            messageOne.textContent = data
            
        }
    })
})


})









