const fs = require("fs");
const Promise = require("bluebird");

Promise.promisifyAll(fs);


let readDemo = () => {
    const filePath1 = "C:/Users/SHRADDHA/Desktop/Mean/FileSys D2/Day 5.txt";
    const mpromise = fs.readFileAsync(filePath1, { encoding: "utf-8" })



    mpromise
        .then((data) => {
            console.log(data);

            const filePath2 = "C:/Users/SHRADDHA/Desktop/Mean/FileSys D2/Day 5.txt";
            return fs.readFileAsync(filePath2, { encoding: "utf-8" });

        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });

};

readDemo();