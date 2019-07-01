import express from 'express';
import Book from './book';

const router = express.Router();

router.get('/', (req, res) => {
  Book.find()
    .then(articles => {
      res.json(articles);
    })
    .catch(err => {
      res.status(500).json({
        message: err.message || 'Some error occurred while fetching articles.'
      });
    });
});

router.get('/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => {
      if (!book) {
        return res.status(404).json({
          message: 'Book not found with id ' + req.params.id
        });
      }
      res.json(book);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).json({
          message: 'Artcile not found with id ' + req.params.id
        });
      }
      return res.status(500).json({
        message: 'Error retrieving book with id ' + req.params.id
      });
    });
});

router.post('/add', (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      message: 'Title Content can not be empty'
    });
  }

  const book = new Book(req.body);

  book
    .save()
    .then(data => {
      res.json({ message: ' Book created succesfully', data });
    })
    .catch(err => {
      res.status(500).json({
        message: err.message || 'Failed to save the book in the database.'
      });
    });
});

/*router.put('/edit/:id', (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      message: 'Note content can not be empty'
    });
  }

  Book.findByIdAndUpdate(req.params.id,req.body,{ new: true })
    .then(book => {
      if (!book) {
        return res.status(404).json({error: 'Failed Updating Book with ' + req.params.id});
      }
      res.json({ message: 'Book Updated Successfully', book});
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).json({
          message: 'Book not found with id ' + req.params.id
        });
      }
      return res.status(500).json({
        message: 'Error updating note with id ' + req.params.id
      });
    });
});*/

router.post('/edit',(req,res)=>{
  Book.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,book)=>{
      if(err) return res.status(400).send(err);
      res.json({success:true, book})
  })
})

router.delete('/delete/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id)
    .then(book => {
      if (!book) {
        return res.status(404).json({
          message: 'Book not found with id ' + req.params.id
        });
      }
      res.json({ message: 'Book deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Book not found with id ' + req.params.id
        });
      }
      return res.status(500).send({
        message: 'Could not delete book with id ' + req.params.id
      });
    });
});

export default router;