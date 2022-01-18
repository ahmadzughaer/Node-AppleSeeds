const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://127.0.0.1:27017'
const dataBase = 'findMyRestaurant'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect to database')
    }
    const db = client.db(dataBase)

    // db.collection('resturants').insertOne({
    //     "name": "Shawerma 11", "address": { "city": "Haifa", "street": "13", "coordinates": [31245, 3434] }, "cuisine": "fast-food", "isKosher": true, "reviews": [{ "date": new Date("2020-12-15"), "rate": 7 }, { "date": new Date("2021-02-22"), "rate": 8 }]
    // }) to insert data

    // 1.1 – Write a MongoDb query to display all the documents in the restaurant collection.
    // db.collection('resturants').find({}).toArray((error, resturants) => {
    //     if(error) {
    //         return console.log('error')
    //     }
    //     console.log(resturants)
    // }) 

    // 1.2 - Write a MongoDb query to display all restaurants that have a specific cuisine
    //     db.collection('resturants').findOne({cuisine:"fast-food"}, (error, data)=> {
    //         if(error) {
    //             return console.log('error')
    //         }
    //         console.log(data)
    //    }) 

    //1.3 - Write a MongoDb query that displays only kosher restaurants
    //    db.collection('resturants').find({isKosher: true}).toArray((error, resturants) => {
    //        if(error) {
    //            return console.log('error')
    //        }
    //        console.log(resturants)
    //    })


    // 1.4 - Write a MongoDb query that displays only a specific cities restaurants
    // db.collection('resturants').find({ "address.city":  "Jerusalem" } ).toArray((error, resturants) => {
    //     if (error) {
    //         return console.log('error')
    //     }
    //     console.log(resturants)
    // }) 

    // 1.5 - Write a MongoDb query to display a specific restaurants address
    // db.collection('resturants').find({ "address.street": "3", "address.city": "Haifa" }).toArray((error, resturants) => {
    //     if (error) {
    //         return console.log('error')
    //     }
    //     console.log(resturants)
    // })

    //1.6 - Write a MongoDb query to display a specific restaurants coordinates
    //   db.collection('resturants').find({ "address.coordinates": { $elemMatch: { 0: "12245", 1: "3434" } }}).toArray((error, resturants) => {
    //     if (error) {
    //         return console.log('error')
    //     }
    //     console.log(resturants)
    // })

    // 1.7. - Write a MongoDb query that should display all restaurants in ascending order by restaurant name.
    //   db.collection('resturants').find().sort({name:1}).toArray((error, resturants) => {
    //     if (error) {
    //         return console.log('error')
    //     }
    //     console.log(resturants)
    // })

    // 1.8 - Write a MongoDb query that should display all restaurants in ascending order by city names.
    //   db.collection('resturants').find().sort({ "address.city": 1}).toArray((error, resturants) => {
    //     if (error) {
    //         return console.log('error')
    //     }
    //     console.log(resturants)
    // })

    // 1.9 - Update a specific restaurant's name
    // db.collection('resturants').updateOne({ name: "Shawerma 11" }, {$set: {name: "Shawerma king"}}, (error, res)=> {
    //     if (error) {
    //                 return console.log('error')
    //             }
    //             console.log('updated')
    // })

    // 1.10 - Update a specific restaurant by adding a new review.
    // db.collection('resturants').updateOne({ name: "Shawerma king" }, {$push: {"reviews": {date: Date(), rate: 9}}} )

    //1.11 - Update all restaurants to be kosher
    // db.collection('resturants').updateMany({ }, {$set: {isKosher:true} })

    //1.12 - Delete a specific restaurant
    // db.collection('resturants').deleteOne({name: "Al-Bustan"})

    // 1.13 - Delete all restaurants
    // db.collection('resturants').deleteMany({})


    // 2. forEach Queries
    //2.1 - Write a MongoDb query to print all restaurant names.
    // db.collection('resturants').find({}).forEach( (resturant) => { console.log( "Resturant: " + resturant.name ); } );

    //2.2 - Write a MongoDb query to print all restaurant cities
    // db.collection('resturants').find({}).forEach((resturant) => { console.log("City: " + resturant.address.city); });

    // 2.3 - Write a MongoDb query to print all restaurant coordinates
    // db.collection('resturants').find({}).forEach((resturant) => { console.log("Coordinates: " + resturant.address.coordinates); });

    // 3. Advanced Queries
    // 3.1 - Query for restaurant names that start with a specific alphabet
    // db.collection('resturants').find({ name: /^R.*/ }).forEach((resturant) => { console.log("Name: " + resturant.name); });

    // 3.2 - Query how many documents you have from the restaurant collection.
    // let count = db.collection('resturants').countDocuments({})
    // console.log(count)

    //  Write a MongoDb query to get restaurants that include reviews from a specific date.

    // db.collection('resturants').find({"reviews.date": new Date("2020-10-03")}).toArray((error, resturants) => {
    //         if (error) {
    //             return console.log('error')
    //         }
    //         console.log(resturants)
    //     })

    // 4. Aggregation operations
    // 4.1- Write a mongoDb query to display all restaurants average score.
    // aggregate([ { $group: { resturant: "$name", avgReviews: { "$avg": "$reviews.rate" } } }])
    // db.collection('resturants').aggregate([{$project: {resturant:"$name", average: {"$avg":"$reviews.rate"} } }]).toArray((error, resturants) => {
    //     if (error) {
    //         return console.log('error')
    //     }
    //     console.log(resturants)
    // })

    // 4.2 - Write a mongoDb query to display a specific restaurant average score
    // db.collection('resturants').aggregate([{ $match: { name: "Hong Kong Bar" } }, { $project: { average: { "$avg": "$reviews.rate" } } }]).toArray((error, resturants) => {
    //     if (error) {
    //         return console.log('error')
    //     }
    //     console.log(resturants)
    // })
})
