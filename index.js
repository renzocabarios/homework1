const fs = require('fs')

var jsonObj = {}
var word = "cat"
try {
    const data = fs.readFileSync('dummy.txt', 'UTF-8');
    const lines = data.split(/\r?\n/);
    jsonObj["apicollection"] = word
    var int = 0;
    lines.forEach((line) => {
        var words = {}
        lowered = line.toLowerCase()
        if(lowered.includes(word)){
            console.log(line);
            int = int + 1;
            lowered = line.toLocaleLowerCase()
            if(lowered.includes("get")){
                jsonObj[line.slice(14)] = "GET" ;
            }else if(lowered.includes("update")){
                jsonObj[line.slice(14)] = "UPDATE" ;
            }else if(lowered.includes("delete")){
                jsonObj[line.slice(14)] = "DELETE" ;
            }else if(lowered.includes("fetch")){
                jsonObj[line.slice(14)] = "FETCH" ;
            }   
        }
    });
} catch (err) {
    console.error(err);
}

fs.writeFile ("input.json", JSON.stringify(jsonObj), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);

