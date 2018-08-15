const express = require('express');
const router = express.Router();

router.get('/',  (req,res,next) => {
    posts = [
        {title: "Canh Ga", comments: "N/A", ingredients: "Ga Va Trung", author:"Cong Do", vegan: true, duration: "1phut", rating: 5, content: "Lam the nay lam the no la ngon lanh vcl hehehehe"},
        {title: "Com rang trung", comments: "N/A", ingredients: "Ga Va Trung", author:"Cong Do", vegan: true, duration: "1phut", rating: 5, content: "Lam the nay lam the no la ngon lanh vcl hehehehe"},
        {title: "Thit luoc", comments: "N/A", ingredients: "Ga Va Trung", author:"Cong Do", vegan: true, duration: "1phut", rating: 5, content: "Lam the nay lam the no la ngon lanh vcl hehehehe"},
        {title: "Banh my chien", comments: "N/A", ingredients: "Ga Va Trung", author:"Cong Do", vegan: true, duration: "1phut", rating: 5, content: "Lam the nay lam the no la ngon lanh vcl hehehehe"},
        {title: "Canh Ga", comments: "N/A", ingredients: "Ga Va Trung", author:"Cong Do", vegan: true, duration: "1phut", rating: 5, content: "Lam the nay lam the no la ngon lanh vcl hehehehe"},
        {title: "Canh Ga", comments: "N/A", ingredients: "Ga Va Trung", author:"Cong Do", vegan: true, duration: "1phut", rating: 5, content: "Lam the nay lam the no la ngon lanh vcl hehehehe"},
    ]
    res.json({posts : posts});
});

module.exports = router;
