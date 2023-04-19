const Gift = require('../models/giftSchema');

const createGift = async (req, res) => {
  try {
    const { txt, store, url } = req.body;
    const newGift = await Gift.create({ txt, store, url });
    res.status(201).json(newGift);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error creating gift' });
  }
};

const getAllGifts = async (req, res) => {
  try {
    const gifts = await Gift.find();
    res.status(200).json(gifts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error getting gifts' });
  }
};

const getGiftById = async (req, res) => {
  const { id } = req.params;
  try {
    const gift = await Gift.findById(id);
    if (!gift) {
      return res.status(404).json({ message: 'Gift not found' });
    }
    res.status(200).json(gift);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error getting gift' });
  }
};

const updateGiftById = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedGift = await Gift.findOneAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedGift) {
      return res.status(404).json({ message: 'Gift not found' });
    }
    res.status(200).json(updatedGift);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error updating gift' });
  }
};

const deleteGiftById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedGift = await Gift.findOneAndDelete(id);
    if (!deletedGift) {
      return res.status(404).json({ message: 'Gift not found' });
    }
    res.status(200).json({ message: 'Gift deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error deleting gift' });
  }
};

module.exports = {
  createGift,
  getAllGifts,
  getGiftById,
  updateGiftById,
  deleteGiftById,
};
