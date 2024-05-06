import { Router } from 'express';
import { sample_film, sample_tags } from '../data';
import asyncHandler from 'express-async-handler';
import { FilmModel } from '../models/film.model';
const router = Router();

router.get(
  '/seed',
  asyncHandler(async (req, res) => {
    const filmsCount = await FilmModel.countDocuments();
    if (filmsCount > 0) {
      res.send('Seed is already done!');
      return;
    }

    await FilmModel.create(sample_film);
    res.send('Seed Is Done!');
  })
);

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const films = await FilmModel.find();
    res.send(films);
  })
);

router.get(
  '/search/:searchTerm',
  asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const films = await FilmModel.find({ name: { $regex: searchRegex } });
    res.send(films);
  })
);

router.get(
  '/tags',
  asyncHandler(async (req, res) => {
    const tags = await FilmModel.aggregate([
      {
        $unwind: '$tags',
      },
      {
        $group: {
          _id: '$tags',
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          name: '$_id',
          count: '$count',
        },
      },
    ]).sort({ count: -1 });

    const all = {
      name: 'All',
      count: await FilmModel.countDocuments(),
    };

    tags.unshift(all);
    res.send(tags);
  })
);

router.get(
  '/tag/:tagName',
  asyncHandler(async (req, res) => {
    const films = await FilmModel.find({ tags: req.params.tagName });
    res.send(films);
  })
);

router.get(
  '/:filmId',
  asyncHandler(async (req, res) => {
    const film = await FilmModel.findById(req.params.filmId);
    res.send(film);
  })
);

export default router;