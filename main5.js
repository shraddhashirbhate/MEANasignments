

const Promise = require("bluebird");
const mysql = require("mysql");
const mod = require("./module1");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const data = mod.DB_CONFIG;
console.log(data);

const addRecords = async () => {
    const Connection = mysql.createConnection(data);
    await Connection.connectAsync();

    let sql = " INSERT INTO EMP1 (EMPNO, ENAME) VALUES ?";
    let values = [
        [4, "Shraddha"],
        [5, "Rushabh"],
        [6, "Manushi"],
        [7, "Raj"]
    ];

    let results = await Connection.queryAsync(sql, [values]);

    await Connection.endAsync();
    console.log(results);
    return results;

};

addRecords();