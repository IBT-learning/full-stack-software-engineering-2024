import express from 'express';
const router = express.Router();

import Recipe from '../model/Recipes.js'; // import the recipe model
import { mongoose } from '../db.js';
import { checkBody, checkBodyUpdate, checkFields} from '../middlewares/checks.js';
import tokenvalidator from '../middlewares/tokenvalidator.js'



router.get('/', async (req, res) => {
    try {
        const allRecipes = await Recipe.find()
        return res.json(allRecipes)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }    
})
router.get('/:id', async (req, res) => {
    try {
        if (mongoose.Types.ObjectId.isValid(req.params.id)) {
            const recipe = await Recipe.findById(req.params.id)
            if (recipe) {
                return res.status(200).json(recipe)
            } else {
                return res.status(404).json({ message: 'Recipe not found' })
            }
        }
        else {
            return res.status(400).json({ message: 'Invalid ID' })
        }
    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
})

router.get('/search/:userId', async (req, res) => {
    try {
        const id = req.params.userId
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({ message: 'Invalid ID' })
        }

        const recipe = await Recipe.find({ createdBy: id })
        if (recipe.length > 0) {
            return res.status(200).json(recipe)
        } else {
            return res.status(404).json({ message: 'No recipes found for this user' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})
router.post('/add/recipes', checkBody, checkFields, tokenvalidator, async (req, res) => {
    try {
        const newRecipe = new Recipe(req.body)
        
        newRecipe.createdBy = req.user.userId
        const savedRecipe = await newRecipe.save()
        return res.status(201).json(savedRecipe)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})
router.put('/update/:id', checkBody, checkBodyUpdate, tokenvalidator, async (req, res) => {
    try {
        const recipeID = req.params.id
        if (!mongoose.Types.ObjectId.isValid(recipeID)){
            return res.status(400).json({ message: 'Invalid ID' })
        }

        const recipe = await Recipe.findById(recipeID)
        if (!recipe) {
            return res.status(400).json({ message: 'Recipe not found' })
        }

        if (!recipe.createdBy.equals(req.user.userId)) {
            return res.status(403).json({ message: 'You are not authorized to update this recipe' })
        }

        const updatedRecipe = await Recipe.findByIdAndUpdate(recipeID, req.body, { new: true })
        return res.status(200).json(updatedRecipe)
    } catch (err) {
            return res.status(500).json({ message: err.message })
        }
})
router.delete('/delete/:id', tokenvalidator, async (req, res) => {
    try {
        const recipeID = req.params.id
        if (!mongoose.Types.ObjectId.isValid(recipeID)){
            return res.status(400).json({ message: 'Invalid ID' })
        }

        const recipe = await Recipe.findById(recipeID)
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' })
        }

        if (!recipe.createdBy.equals(req.user.userId)) {
            return res.status(403).json({ message: 'You are not authorized to update this recipe' })
        }

        const deletedRecipe = await Recipe.findByIdAndDelete(recipeID)
        return res.status(200).json({ message: 'Recipe deleted', deletedRecipe })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})
router.use((req, res, next) => {
    return res.status(404).send({ error: 'Route not valid' });
});
export default router;