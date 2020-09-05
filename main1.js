let Promise = require("bluebird");
let mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "mean",
};

const readRecord = async () => {
    let connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let sql = "SELECT * FROM USERS";
    let results = await connection.queryAsync(sql);

    await connection.endAsync();

    console.log(results);
    return results;

};

readRecord();