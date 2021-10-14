const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  //todo find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  //todo find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  //todo create a new category
});

router.put('/:id', (req, res) => {
  //todo update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  //todo delete a category by its `id` value
});

module.exports = router;
