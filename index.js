const app = require('./server/server');

app.listen(process.env.PORT || 3050, () => {
  console.log('Listening on 3050');
});
  