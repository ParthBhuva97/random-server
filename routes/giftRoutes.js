const express = require('express');
const router = express.Router();
const giftController = require('../controllers/giftController');

router.get('/', giftController.getAllGifts);
router.get('/:giftId', giftController.getGiftById);
router.post('/', giftController.createGift);
router.put('/:giftId', giftController.updateGiftById);
router.delete('/:giftId', giftController.deleteGiftById);

module.exports = router;
