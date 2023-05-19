import {Request, Response, Router} from 'express';
import {randomBytes} from 'crypto';

const router = Router();

const books = new Map();

router.get('/', async (req: Request, res: Response) => {
  try {
    const retVals = Array.from(books.values());
    console.debug(`Returning the books ${JSON.stringify(retVals)}`);

    res.status(200).json(retVals);
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const book = {
      id: 'ebb3d966-74e4-11ed-8db0-136d663b98e7',
      title: 'Some Title',
      author: 'Some Author',
    };

    console.debug(`Returning the book [${JSON.stringify(book)}]`);

    res.status(200).json(book);
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    console.debug(`Creating the book [${JSON.stringify(req.body)}]`);

    const id = randomBytes(4).toString('hex');

    books.set(id, {
      id,
      ...req.body,
    });

    res.status(201).json(books.get(id));
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    books.set(bookId, {
      id: bookId,
      ...req.body,
    });

    console.debug(`Updating the book [${JSON.stringify(books.get(bookId))}]`);

    res.status(200).json(books.get(bookId));
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    console.debug(`Deleting the book by id [${req.params.id}]`);

    res.status(200).json({
      id: req.params.id,
      title: 'Some Title',
      author: 'Some Author',
    });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

export default router;
