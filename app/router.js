const express = require('express');
const router = express.Router();

const mainController = require('./controller/mainController')

//* Route Menu principal
router.get('/', mainController.getHomePage)

//* Route Presentation
router.get('/myProfil', mainController.getProfilPage)

//* Route Skills
router.get('/mySkills', mainController.getSkillsPage)

//* Route Experience
router.get('/myWorks', mainController.getWorksPage)

//* Route contact
router.get('/ContactMe', mainController.getContactPage)



module.exports = router