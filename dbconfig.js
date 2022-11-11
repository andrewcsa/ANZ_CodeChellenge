const config = {
    user: 'andrew1',
    password: 'test123',
    server: '127.0.0.1',
    dbName: 'customers',
    options:{
        instancename:'./SQLEXPRESS',
        trustedconnection: true,
        enableArithAbort: true,
        encrypt: false,
    },
    port:1433

}

module.exports = config;