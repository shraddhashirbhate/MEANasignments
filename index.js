

const fs = require("fs");



let readDemo = () => {

    let filePath = "C:/Users/SHRADDHA/Desktop/Mean/helloPromise D2/Day2.txt";
    fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
        console.log(data);
    });
}

let readDemoWithException = () => {


    let filePath = "C:/Users/SHRADDHA/Desktop/Mean/helloPromise D2/Day2.txt";
    fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
        console.log(data);
    });

}

readDemo();
