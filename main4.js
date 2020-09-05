
const Promise = require("bluebird");
const mysql = require("mysql");
const mod = require("./module1");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let data = mod.DB_CONFIG;
console.log(data);

const readRecords = async () => {
    const connection = mysql.createConnection(data);
    await connection.connectAsync();

    let sql = "SELECT * FROM DEPT";
    let results = await connection.queryAsync(sql);

    await connection.endAsync();
    console.log(results);
    return results;

};

readRecords();