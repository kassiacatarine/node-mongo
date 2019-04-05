const client = require('mongodb').MongoClient;
const config = require('../../config/database');

const ConnectionFactory = client.connect(config.uri, config.options).then((conn) => {
    return {
        db: conn.db(config.db),
        close: () => conn.close()
    }
});

module.exports = ConnectionFactory;