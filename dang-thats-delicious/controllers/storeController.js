exports.myMiddleware = (req, res, next) => {
  req.name = 'Joey';
  if(req.name === 'Joey') {
    throw Error('That is a stupid name');
  }
  next();
}

exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index');
}