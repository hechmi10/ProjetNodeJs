const express = require('express');
const twig = require('twig');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);

app.set('view engine', 'twig');
app.use(express.json());

const projectRoutes=require('./backend/routes/projectRoutes');
app.use('/project',projectRoutes);

app.get('/',(req,res)=>{
  res.render('accueil');
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});