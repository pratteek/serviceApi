const express = require('express');
 const app = express();
 app.use(express.json());
  
 const services = [
 {
         id: 1,
         ServiceName: "E-Line",
         property: "frame delay",
         threshold: "100 ms",
         status: "inActive"
 }
 ,
 {
         id: 1,
         ServiceName: "E-LAN",
         property: "frame loss",
         threshold: "80 ms",
         status: "inActive"
 }
 ,
 {
     id: 1,
     ServiceName: "Metro Ethernet",
     property: "Ping",
     threshold: "35 ms",
     status: "Active"
 },
 {
     id: 1,
     ServiceName: "E-Tree",
     property: "Latency",
     threshold: "120 ms",
     status: "inActive"
 },
 {
     id: 1,
     ServiceName: "MPLS",
     property: "Jitter",
     threshold: "44 ms",
     status: "Active"
 },
 {
     id: 1,
     ServiceName: "E-LAN",
     property: "frame delay",
     threshold: "66 ms",
     status: "inActive"
 }
 
 ]
  
 //READ Request Handlers
 app.get('/', (req, res) => {
 res.send('Hey there!!');
 });
  
 app.get('/api/services', (req,res)=> {
 res.send(services);
 });
  
 app.get('/api/services/:id', (req, res) => {
 const service = services.find(c => c.id === parseInt(req.params.id));
  
 if (!service) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
 res.send(service);
 });
  
 
  
 //PORT ENVIRONMENT VARIABLE
 const port = process.env.PORT || 8080;
 app.listen(port, () => console.log(`Listening on port ${port}..`));