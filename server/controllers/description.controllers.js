const fs = require('fs');
module.exports.getDescription = (req, res) =>{
    const data = fs.readFileSync('data.json');
    const info = JSON.parse(data);
    res.send(info);
}
module.exports.changeDescription = (req, res) =>{
    const {name, description} = req.body;
    const data = fs.readFileSync('data.json');
    const users = JSON.parse(data);
    users[0].name = name;
    users[0].description = description;
    fs.writeFileSync('data.json',JSON.stringify(users));
    res.send(users);
}