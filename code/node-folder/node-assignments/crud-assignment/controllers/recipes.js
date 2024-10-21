import express from 'express';

const router = express.Router();

import Recipe from '../models/Recipes.js'; // import the recipe model
import { mongoose } from '../db.js';

function checkBody(req, res, next) { 

    if (!req.body) {
        return res.status(400).send({ error: 'A JSON Request body is required' });
    }

    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({ error: 'Request body cannot be empty' });
    }
        
    next()
}

function checkFields(req, res, next) {
    const fields = ["author", "title", "ingredients", "instructions"]

    for (const keys of fields) {
        if (!req.body[keys]) {
            return res.status(400).send({ error: `The ${keys} field is required` });
        }
    };

    next();  
}

function checkBodyUpdate(req, res, next) { 
    if (!req.body.title && !req.body.ingredients && !req.body.instructions && !req.body.author) {
        return res.status(400).send({ error: 'The requested field to update is not a valid'});
    }
    next()
}
router.get('/', async (req, res) => {
    try {
        const allRecipes = await Recipe.find()
        res.json(allRecipes)
    } catch (err) {
         res.status(500).json({ message: err.message })
    }    
})

router.get('/:id', async (req, res) => {
    try {
        if (mongoose.Types.ObjectId.isValid(req.params.id)) {
            const recipe = await Recipe.findById(req.params.id)
            if (recipe) {
                res.status(200).json(recipe)
            } else {
                res.status(404).json({ message: 'Recipe not found' })
            }
        }
        else {
            res.status(400).json({ message: 'Invalid ID' })
        }
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
})

router.post('/add/recipes', checkBody, checkFields, async (req, res) => {
    try {
        const newRecipe = new Recipe(req.body)
        const savedRecipe = await newRecipe.save()
        res.status(201).json(savedRecipe)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.put('/update/:id', checkBody, checkBodyUpdate, async (req, res) => {
    try {
        if (mongoose.Types.ObjectId.isValid(req.params.id)) {
            const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true })
                if (updatedRecipe) {
                    res.status(200).json(updatedRecipe)
                } else {
                    res.status(404).json({ message: 'Recipe not found' })
                }
            }
            else {
                res.status(400).json({ message: 'Invalid ID' })
            }
        } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        if (mongoose.Types.ObjectId.isValid(req.params.id)) {
            const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id)
            if (deletedRecipe) {
                res.status(200).json({ message: 'Recipe deleted', deletedRecipe })
            } else {
                res.status(404).json({ message: 'Recipe not found' })
            }
        } else {
            res.status(400).json({ message: 'Invalid ID' })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
router.use((req, res, next) => {
    res.status(404).send({ error: 'Route not valid' });
});

export default router;