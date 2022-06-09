const skillsList =require ('../data/mySkills');
const studiesList = require('../data/myStudies');
const worksList = require ('../data/myWorks')

const mainController= {

    //! Methode Page Principal
    getHomePage: function(req,res){
        res.render('home')
    },


    //! Methode  Page Profil
    getProfilPage: function(req,res){
        const me =  {
    
            nom: "Raymond",
            prenom:"Clément",
            age:28,
            localisation:"Angers"
    
        }
        console.log(me);
        res.render('profil',{me})
    },

    //! Methode Skills Page
    getSkillsPage: function(req,res){
        
        console.log(skillsList);
        res.render('skills',{skillsList})
    },

    //! Methode Work Page
    getWorksPage: function(req,res){
        res.render('works', {
            studiesList,
            worksList
        })
    },

    //! Methode Contact Page
    getContactPage: function(req,res){
        res.render('contact')
    },

};

module.exports= mainController