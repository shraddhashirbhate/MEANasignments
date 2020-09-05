const fs = require("fs");

const promise = require("bluebird");
Promise.promisifyAll(fs);

let readDemo = async () => {

    try{
        console.log("Hello World");
    const filePath1 = "C:/Users/SHRADDHA/Desktop/Mean/FileSys D2/Day 5.txt";

    //If a method returns PROMISE then we can use await infront of that method.

    const data1 = await fs.readFileAsync(filePath1, { encoding: "utf-8" });
    console.log(data1);

    const filePath2 = "C:/Users/SHRADDHA/Desktop/Mean/FileSys D2/Day 5.txt";
    const data2 = await fs.readFileAsync(filePath2, { encoding: "utf-8" });
    console.log(data2);


    const filePath3 = "C:/Users/SHRADDHA/Desktop/Mean/FileSys D2/Day 5.txt";
    const data3 = await fs.readFileAsync(filePath3, { encoding: "utf-8" });
    console.log(data3);
    }catch (err) {
        console.log(err);
    }
    
};

readDemo();