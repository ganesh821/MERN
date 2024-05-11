const asyncHandler = require('express-async-handler')
const Goal = require('../model/goalModel');

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json(goals);
});
const setGoals = asyncHandler(async(req, res) => {
    // console.log(req.body)
    if(!req.body.text) {
        res.status(400)
        throw new Error('please Enter the valid text')
    }
    
    const goal = await Goal.create({
        text : req.body.text,
    });
    res.status(200).json(goal)
})

const putGoals = asyncHandler(async(req, res) => {

    const goal = await Goal.findById(req.params.id);

    if(!goal) {
        res.status(400);
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{
        new : true
    })

    res.status(200).json(updatedGoal)
})

const deleteGoals = asyncHandler(async (req, res) => {
    const goalId = req.params.id;

    const goal = await Goal.findById(goalId);
    if (!goal) {
        return res.status(404).json({ error: 'Goal not found' });
    }

    await Goal.findByIdAndDelete(goalId);

    res.status(200).json({ id: goalId });
});

module.exports = {
    getGoals,
    setGoals,
    putGoals,
    deleteGoals

}