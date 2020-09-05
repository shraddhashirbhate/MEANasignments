const fs = require("fs");
const Promise = require("bluebird");

Promise.promisifyAll(fs);


let readDemo = () => {
    const filePath1 = "C:/Users/SHRADDHA/Desktop/Mean/FileSys D2/Day 5.txt";

    //Promise
    const mpromise = fs.readFileAsync(filePath1, { encoding: "utf-8" });

    //Success
    mpromise.then((data) => {
        console.log(data);
    });

    mpromise.catch((err) => {
        console.log(err);
    });
};

readDemo();