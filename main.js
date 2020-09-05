const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


const DB_CONFIG = {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "mean",
};

/*  const DB_CONFIG = {
    host: "localhost",
    user: "root",
    password: "",
    database: "mean",
}; */

const addrecord = async () => {

    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let sql = "INSERT INTO USERS (NAME, EMAIL, MOBILENO) VALUES (?, ?, ?)";
    let results = await connection.queryAsync(sql, ["Kaustubh", "kH@gmail.com", "777895623"]);

    await connection.endAsync();
    console.log(results);
    return results;
};

addrecord();
