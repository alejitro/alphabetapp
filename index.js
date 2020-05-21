const express = require('express');
const app = express()

app.get('/alphabetapp-game', function(request, response) {
    console.log("My get function works");
        response.send('alphabetapp_game');
});

app.listen(3000,function(){
    console.log("App listening on port 3000");
});

