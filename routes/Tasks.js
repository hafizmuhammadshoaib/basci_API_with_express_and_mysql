var express = require('express');
var router = express.Router();
var Task = require('../models/Task');

router.get('/:id?', (req, res, next) => {
    if (req.params.id) {
        Task.getTaskById(req.params.id, (err, rows) => {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        Task.getAllTasks((err, rows) => {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
});
router.post('/ins/', (req, res, next) => {
    Task.addTask(req.body, (err, rows) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});
router.delete('/del/:id?', (req, res, next) => {
    Task.deleteTask(req.params.id,(err,count)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(count);
        }
    });
});

router.put('/upd/:id?',(req,res,next)=>{
    Task.updateTask(req.params.id,req.body,(err,rows)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
    res.json({error:"No content"});
});
module.exports = router;