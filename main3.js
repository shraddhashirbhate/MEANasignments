
const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "class"
};

const readRecords = async () => {
    let Connection = mysql.createConnection(DB_CONFIG);
    await Connection.connectAsync();

    let sql = "SELECT * FROM EMP1";
    let results = await Connection.queryAsync(sql);

    await Connection.endAsync();

    console.log(results);
    return results;
};

readRecords();