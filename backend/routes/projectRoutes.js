const express=require('express');
const projectController=require('../controllers/projectController');
const db=require('../database/database');
const router=express.Router();
router.get('/', async (req, res) => {
    try {
        const projects = await db.Project.findAll();
        res.render('project', { projects });
    } catch (error) {
        console.error('Error fetching projects:', error); // Log the error
        res.status(500).json({
            erreur: {
                message: 'Failed to retrieve projects',
                details: error.message, // Provide detailed error information
            },
        });
    }
});
router.post('/create',projectController.addProject);
router.put('/update/:titre',projectController.updateProject);
router.delete('/delete/:titre',projectController.deleteProject);
module.exports=router;