var Todo = require('./todo/routes');
var Rss = require('./rss/routes');
var TwitterParser = require('./twitter/routes');
var Mom = require('./mom/routes');
var TableScraper = require('./table_scraper/routes');

module.exports = function(app) {
    Todo(app);
    Rss(app);
    TwitterParser(app);
    Mom(app);
    TableScraper(app);
};
