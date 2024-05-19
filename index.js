const fs = require('fs');
const { json } = require('react-router-dom');

fs.readFile('./data.json', 'utf8', (err, data) => {
  if (!err) {
    const newdata = JSON.parse(data);
    console.log(newdata);
    let ageTotal = 0;
    newdata.forEach(element => {
        ageTotal+=element.age
    });
    console.log(ageTotal)
    fs.writeFile('result.txt', String(ageTotal/3),(err,data)=>{
        if(!err){
            console.log('ffe')
        }else{
            console.log(err)
        }
    })

  } else {
    console.error(err);
  }
});
