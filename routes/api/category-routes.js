const router = require('express').Router();
const {
  Category,
  Product
} = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
      //todo find all categories
      // be sure to include its associated Products
      Category.findAll({
          attributes: {
            include: [{
              model: Product,
              attributes: ['id', 'product_name', 'price', 'stock', 'category_is']
            }]
          }
        })
        .then(dbCategoryData => res.json(dbCategoryData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });

      router.get('/:id', (req, res) => {
        //todo find one category by its `id` value
        // be sure to include its associated Products
        Category.findOne({
            attributes: {
              include: [{
                model: Product,
                attributes: ['id', 'product_name', 'price', 'stock', 'category_is']
              }]
            }
          })
          .then(dbCategoryData => {
            if (!dbCategoryData) {
              res.status(404).json({
                message: 'No category found with this id'
              });
              return;
            }
            res.json(dbCategoryData);
          })
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          })
      })

      router.post('/', (req, res) => {
        //todo create a new category
        Category.create({
          category_name: req.body.category_name

        })
        then(dbCategoryData => res.json(dbCategoryData))
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          })

      });

      router.put('/:id', (req, res) => {
        //todo update a category by its `id` value
        Category.update({
            category_name: req.body.category_name,

          }, {
            where: {
              id: req.params.id
            }
          })
          .then(dbCategoryData => {
            if (!dbCategoryData) {
              res.status(404).json({
                message: 'No post found with this id'
              });
              return;
            }
            res.json(dbCategoryData);
          })
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
      });

      router.delete('/:id', (req, res) => {
        //todo delete a category by its `id` value
        Category.destroy({
            where: {
              id: req.params.id
            }
          })
          .then(dbCategoryData => {
            if (!dbCategoryData) {
              res.status(404).json({
                message: 'No category found with this ID'
              });
              return;
            }
            res.json(dbCategoryData);
          })
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          })
      });

      module.exports = router;