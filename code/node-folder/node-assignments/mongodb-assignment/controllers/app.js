import express from 'express';
const router = express.Router();

import { MongoClient, ObjectId} from 'mongodb'
const client =  new MongoClient('mongodb://localhost:27017/')

client.connect()

const getCollection = () => {
    const db = client.db('newDB')
    const collection = db.collection('newCollection')
    return collection
}

router.post('/', async (req, res) => {
    const collection = getCollection().insertOne({
        school: req.body.school,
        course: req.body.course,
        language: req.body.language
    })
    res.send(`Data added successfully! ${req.body.school}---${req.body.course}---${req.body.language}`)
})

router.get('/', async (req, res) => {
    const collection = getCollection().find()
    const allData = await collection.toArray()

    res.json(allData)
})

router.get('/find/:id', async (req, res) => {
    const allData = await getCollection().findOne({
        _id : new ObjectId(req.params.id)
    })

    res.json(allData)
})

// router.post('/', (req, res) => {
//     res.json(req.body)

// })

export default router