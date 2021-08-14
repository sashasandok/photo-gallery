const User = require('../models/User')

const getUserList = async (req, res, next) => {
  await User.find({}).exec((err, doc)=>{
    if(err) return res.status(400).json({ success: false, err});
    res.status(200).json({ success: true, items: doc })
  })
}

const createUser = async (req, res, next) => {
  await User.create(req.body)
  .then((doc) => res.status(200).json({ success: true, item: doc }))
  .catch((err) => res.status(400).json({ success: false, err}))
}

const updateUser = async (req, res, next) => {
  const id = req.params.id
  await User.findOneAndUpdate({ _id: id }, req.body, {new: true}).exec((err, doc)=>{
    if(err) return res.status(400).json({ success: false, err});
    res.status(200).json({ success: true, item: doc })
  })
}

const deleteUser = async (req, res, next) => {
  const id = req.params.id
  await User.findOneAndDelete({ _id: id }).exec((err, doc)=>{
    if(err) return res.status(400).json({ success: false, err});
    res.status(200).json({ success: true, item: doc })
  })
}

module.exports = {
  getUserList,
  createUser,
  updateUser,
  deleteUser,
}