const get = (req, res, err, result) => {
  if (err) {
    console.log('[restructureData] Err: ', err);
    res.status(500).send(err);
  } else {
    res.status(200).send(result.rows);
  }
};

const post = (req, res, err, result) => {
  if (err) {
    res.status(500).send(err);
  } else {
    res.sendStatus(201);
  }
};

const put = (req, res, err, result) => {
  if (err) {
    res.status(500).send(err);
  } else {
    res.sendStatus(204);
  }
};

module.exports = { get, post, put };