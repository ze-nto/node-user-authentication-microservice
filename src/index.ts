import express from 'express';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

//Configurações da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rotas
app.use(usersRoute);
app.use(statusRoute);
app.use(authorizationRoute);

//Error Handler
app.use(errorHandler);

//Inicalização do Servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000.')
})