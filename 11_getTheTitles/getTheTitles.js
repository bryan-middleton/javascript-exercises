const getTheTitles = function(books) {
        const titles = books.map(book => book.title);
        console.table(titles);
        return titles;
    }

// Do not edit below this line
module.exports = getTheTitles;
