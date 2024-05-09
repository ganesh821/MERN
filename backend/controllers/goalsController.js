const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message : 'Get Goals Controller'})
})

const setGoals = asyncHandler(async(req, res) => {
    // console.log(req.body)
    if(!req.body.text) {
        res.status(400)
        throw new Error('please Enter the valid text')
    }
    res.status(200).json({message : 'set Goals Controller'})
})

const putGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message:`put Goals ${req.params.id}`})
})

const deleteGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message:`delete Goals ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoals,
    putGoals,
    deleteGoals

}