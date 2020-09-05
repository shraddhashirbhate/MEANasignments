

let Promise = require("bluebird");
let mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


const DB_CONFIG = {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "class",
};

const addRecord = async () => {
    let Connection = mysql.createConnection(DB_CONFIG);
    await Connection.connectAsync();

    let sql = "update dept set Dname = 'TRN' where DeptNo=5 ";
    let results = await Connection.queryAsync(sql);

    await Connection.endAsync();

    console.log(results);
    return results;


};

addRecord();