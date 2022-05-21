const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 60 * 1 });

const verifyCache = (req, res, next) => {
  const id = req.params.id;
  if (id.trim() === "") {
    return res.status(400).json({ error: "Invalid id" });
  }
  try {
    const cachedMovie = cache.get(id);
    if (cachedMovie) {
      res.status(200).json(cachedMovie);
    } else {
      next();
    }
  } catch (err) {
    const error = new Error(err);
    error.status = 500;
    throw error;
  }
};

module.exports = { verifyCache, cache };
