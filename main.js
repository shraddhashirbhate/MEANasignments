const fs = require("fs");

let readDemo = () => {
    const filePath = "C:/Users/SHRADDHA/Desktop/Mean/helloPromise D2/Day2.txt";
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

    console.log(fileContent);

}

let readDemoWithException = () => {
    try {
        const filePath = "C:/Users/SHRADDHAs/Desktop/Mean/helloPromise D2/Day2.txt";
        const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

        console.log(fileContent);
    } catch{
        console.log("error occurred: no such file or directory");
    }

}

readDemo();
readDemoWithException();