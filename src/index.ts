import express, {Request, Response, NextFunction} from 'express';
import usersRoute from './routes/users.route';

const app = express();

//Configurações da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rotas
app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => { 
    res.status(200).send({foo: 'bar'});
});

//Inicalização do Servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000.')
})