const config = require('config');
const app = require('./app');

const port = config.get('port') || 30001;

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
