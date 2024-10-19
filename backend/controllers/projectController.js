const { Project } = require('../database/database'); // Adjust the import path as necessary

exports.addProject = async (req, res) => {
    console.log('Request body:', req.body); // Log the incoming request body

    try {

        const newProject = await Project.create({ titre, description, fichierJoint });
        res.status(201).json(newProject);
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({
            erreur: {
                message: 'Failed to create project',
                type: error.name,
                details: error.message,
            },
        });
    }
};


exports.updateProject = async (req, res) => {
    try {
        const titre = req.params.titre;
        const { newDescription } = req.body;
        const [updated] = await Project.update(
            { description: newDescription }, 
            { where: { titre: titre } } 
        );

        if (updated === 0) {
            return res.status(404).json({ erreur: { message: "Project not found" } });
        }

        const updatedProject = await Project.findOne({ where: { titre: titre } });

        res.status(200).json(updatedProject);
    } catch (error) {
        console.error('Error updating project:', error);
        res.status(500).json({ erreur: { message: 'Failed to update project', details: error.message } });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const titre = req.params.titre;

        const result = await Project.destroy({
            where: {
                titre: titre,
            },
        });

        if (result === 0) {
            return res.status(404).json({ erreur: { message: "Project not found" } });
        }

        res.status(200).json({ message: "Project deleted" });
    } catch (error) {
        console.error('Error deleting project:', error);
        res.status(500).json({ erreur: { message: 'Failed to delete project', details: error.message } });
    }
};
