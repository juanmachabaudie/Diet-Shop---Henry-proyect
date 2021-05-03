const server = require('express').Router();
const { Category, Product } = require('../db.js');

//Devuelve todas las categorias
server.get('/', (req, res, next) => {
    Category.findAll()
        .then(categories => {
            res.status(200).json(categories);
        })
        .catch(error => {
            res.json({error: error})
        });
});

//Crea una categoria con la informacion enviada por body de un form
server.post('/', (req, res) => {
    console.log(req.body) 
    Category.findOrCreate(
        {
            where: { name: req.body.name }  
        })
        .then(category => {
            return res.status(200).json(category)
        })
        .catch(error => {
            res.json({error: error})
        });
});

//Devuelve la categoria buscada por id pasado por params
server.get('/:id', (req, res) => {

    Category.findByPk(req.params.id, {
        include: { model: Product}
    })
        .then(category => {
            return res.status(200).json(category);
        })

        .catch(error => {
            res.json({error: error})
        });

})

//Esta ruta es para modificar una categoria
//Encontrara la categoria segun el id pasado por params
//Y la modificara con datos enviados por body
server.put('/:id', (req, res) => {
    Category.findByPk(req.params.id)
        .then(category => {
            category.update({name: req.body.name })
            res.status(200).send('Category modified');
        })
        .catch(error => {
            res.json({error: error})
        });
})


//Esta ruta elimina una categoria buscandola por id pasado por params
server.delete('/:id', (req, res) => {
    Category.destroy({where: {id: req.params.id}})
    .then(() => {
        return res.status(200).send('The category has been removed from database')
    })
    .catch(error => {
        res.json({error: error})
    });
})

module.exports = server;
