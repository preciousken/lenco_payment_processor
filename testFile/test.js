const express = require('express');
const app = express();

// middlewares
const firstMiddleware = async(req,res,next)=>{
    try {
        let status = 'pending'

        if(status === 'pending'){
            res.send('the transaction dey pend')
            next()
        }
    } catch (error) {
        res.send(error)
        return;
    }
}

// recurring task
const recurringTask = async () =>{
    let count = 0
    const re_query = setInterval(() => {
        count++;
        console.log('recurring task and count is '+count)

        if(count === 5){
            console.log('recurring task done cancel');
            clearInterval(re_query)
        }
    }, 5000);

   
}

app.post('/try',firstMiddleware ,async(req,res)=>{
recurringTask()
})

app.listen('5000',()=>{
    console.log('app listening on port 5000');
})