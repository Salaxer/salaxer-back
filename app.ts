import createError from 'http-errors';
import express, { Express} from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import contactRouter from './routes/contact.js'
import { fileURLToPath } from 'url';
import cors from 'cors'
import dot from 'dotenv'
dot.config();

const app:Express = express();
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const allowedOrigins = [''];
if (process.env.URL_CLIENT) {
  allowedOrigins.push(process.env.URL_CLIENT);
}

const options: cors.CorsOptions = {
  origin: allowedOrigins,
  methods: ['POST'],
};

app.use(cors(options));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact', contactRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err:any, req:any, res:any, next:any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500).json({
    message: err.message,
    error: err
});
});
app.listen(5000, function () {
  console.log('Node server is running..');
});
export default app;
