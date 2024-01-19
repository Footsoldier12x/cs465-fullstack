/* GET homepage */
const index = (req, res) => {
    res.index('index', {title: 'Travlr Getaways'});
};
module.exports = {
    index
};