const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  //todo find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  //todo find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  //todo create a new tag
});

router.put('/:id', (req, res) => {
  //todo update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  //todo delete on tag by its `id` value
});

module.exports = router;
