const { GetAllQuotes, GetRandomQuote, AddQuote } = require("../controllers/quotes.controller");

function convertRouter (express) {

    const router = express.Router();

    router.get('/random/quotes', GetAllQuotes)
    router.get('/random/quotes/random', GetRandomQuote)
    router.post('/random/quotes', AddQuote)

    return router;

}

module.exports = convertRouter;