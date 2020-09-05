/* TO ACCESS THE FILES PARALLELLY */


const fs = require("fs");

let readFileDemo = () => {

    let filePath1 = "C:/Users/SHRADDHA/Desktop/Mean/helloPromise D2/Day2.txt"
    //Read File 1
    fs.readFile(filePath1, { encoding: "utf-8" }, (err, data) => {
        //File 1 done
        console.log("1", data);
    });

    //Read file-2
    let filePath = "C:/Users/SHRADDHA/Desktop/Mean/FileSys D2/Day 5.txt"
    fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
        //File 2 done
        console.log("2", data);
    });


    //Read file-3
    let filePath3 = "C:/Users/SHRADDHA/Desktop/Mean/FileSys D2/Day 5.txt"
    fs.readFile(filePath3, { encoding: "utf-8" }, (err, data) => {
        //File 3 done
        console.log("3", data);
    });

};

readFileDemo();