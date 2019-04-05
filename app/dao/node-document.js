const connection = require('./connection-factory');

class MongoDocument {
    save() {
        if (this._id) {
            return connection.then((conn) => {
                return conn.db
                    .collection(this.collection)
                    .updateOne({_id: this._id}, {$set: this});
            });
        }
        return connection.then((conn) => {
            return conn.db
                .collection(this.collection)
                .insertOne(this);
        });
    }
    static find (query = {}, sort = {}, limit = 5, collection) {
        return connection.then((conn) => {
            return conn.db
                .collection(this.collection)
                .find(query)
                .sort(sort)
                .limit(limit)
                .toArray();
        });
    }
}

module.exports = MongoDocument;