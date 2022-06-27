import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req);
  res.status(200).json({
    hola: "Hola como esta",
    lala: "Yogabagaba"
  })
});

export default router;
