var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//create a route here to do the update to the database

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        res.status(200).end();
    });
});


router.post("/api/burgers", function (req, res) {
    console.log('IN THE POST ROUTE!')
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], function (result) {
        res.json({ id: result.insertId });
    }
    );
});



module.exports = router;
