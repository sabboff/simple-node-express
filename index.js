const express = require("express");
const cors = require('cors');
const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Heyy, wow i am learning node js and express with nodemon....!');
});

const users = [
    {id: 0, name: 'sabbir', email:'sabbir@gmail.com', phone:'0169999999' },
    {id: 1, name: 'asif', email:'asif@gmail.com', phone:'0169999999' },
    {id: 2, name: 'sakib', email:'sakib@gmail.com', phone:'0169999999' },
    {id: 3, name: 'rakib', email:'rakib@gmail.com', phone:'0169999999' },
    {id: 4, name: 'rafi', email:'rafi@gmail.com', phone:'0169999999' },
    {id: 5, name: 'emon', email:'emon@gmail.com', phone:'0179999999' },

];


                                        // query

app.get('/users', (req, res)=>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
        }
        else{
            res.send(users);
        }
});

                                        // post method

app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
});


                                    // normal getting useers
app.get('/users', (req, res)=>{
    res.send(users); 

});


                                // dynamic api
app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user); 

});



                                    // consoleLog port``
app.listen(port,()=>{
    console.log('listening to port', port)
});

