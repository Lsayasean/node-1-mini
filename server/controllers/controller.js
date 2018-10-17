let books = [];
let id = 1;

module.exports = {
    getAllBooks: (req, res) => {
        res.status(200).send(books) // res.status sets default
    },

    createBook: (req, res) => {
        let  {title, author} = req.body;
        let newBook ={
            title: title,
            author: author,
            id: id
        }
        id++;
        books.push(newBook)
        res.status(200).send(books); // set status and send off stats(200)
    }
} 