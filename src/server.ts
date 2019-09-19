import app from './app';
import { environment } from '../environments/environment';

app.listen(environment.port, () => {
  console.log('Express server listening on port', environment.port);
});
