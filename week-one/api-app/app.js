const request = require('request')
const postmanRequest = require('postman-request');
const axios = require('axios')
const url = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=100'

// request({url: url}, (error, respose)=> {
//     const data = JSON.parse(respose.body)
//     const title = data.map((el) => {
//         return el.title
//     })
//     console.log(title)
// })

postmanRequest({url: url, json:true}, (error, respose)=> {
    const data = respose.body
    const title = data.map((el) => {
        return el.title
    })
    console.log(title)
})

// const getData = async () => {
//     try {
//         return await axios.get(url)
//     } catch (error) {
//         console.error(error)
//     }
// }
// const printData = async () => {
//     const data = await getData()
//   const title = data.data
//     return title.map((el) => {
//         console.log(el.title) 
//     })
  

// }

// printData()


