import express from 'express';
import axios from 'axios'; //for requesting the adress info

//----------------------------------------------------------------------------------------------

const app = express();
const PORT = 5000;

//----------------------------------------------------------------------------------------------

app.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'null');//form file is stored in the local file system
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
}); //using json data in the whole application

app.get('/', (req, res) =>{res.send('<h1>homepage</h1>')}); //homepage

app.get('/adress', async (req, res) => { //requesting adress information
    const adressInfo = await axios.get('https://viacep.com.br/ws/'+req.query.cep+'/json/')
    res.send(adressInfo.data)
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

//----------------------------------------------------------------------------------------------