import app from './app.js';

const port = process.env.PORT || 3000

app.get('/',(req,res)=> res.send('Hi'))
app.listen(port,()=> console.log(`App listening at PORT: http://localhost:${port}`))
