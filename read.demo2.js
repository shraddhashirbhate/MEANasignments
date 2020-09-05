const fs = require("fs");
const Promise = require("bluebird");

//Promisification of fs module
Promise.promisifyAll(fs);

let readDemo = () => {
    //fs.readFile();

    /* This method is not a part of FS module */
    //we are able to use this because of Promisification.

    const filePath = "C:/Users/SHRADDHA/Desktop/Mean/FileSys D2/Day 5.txt";
    fs.readFileAsync(filePath, { encoding: "utf-8" }).then((data) => {
        //file 1 done
        console.log("1 ", data);


        const filePath1 = "C:/Users/SHRADDHA/Desktop/Mean/FileSys D2/Day 5.txt";
        return fs.readFileAsync(filePath, { encoding: "utf-8" });
    })

        .then((data) => {
            console.log("2 ", data);
        });

};

readDemo();
