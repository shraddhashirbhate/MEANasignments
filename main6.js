
const Promise = require("bluebird");
const mysql = require("mysql");
const mod = require("./module1");
const ConnectionConfig = require("mysql/lib/ConnectionConfig");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const data = mod.DB_CONFIG;

const deleteRecord = async () => {

    const Connection = mysql.createConnection(data);
    await Connection.connectAsync();
    let sql = "Delete from emp1 where empno=6";
    let results = await Connection.queryAsync(sql);
    await Connection.endAsync();
    console.log(results);
    return results;
};

const readRecord = async () => {

    const Connection1 = mysql.createConnection(data);
    await Connection1.connectAsync();
    let sql = "SELECT * FROM EMP1";
    let results1 = await Connection1.queryAsync(sql);
    await Connection1.endAsync();
    console.log(results1);
    return results1;
};


deleteRecord();
readRecord();