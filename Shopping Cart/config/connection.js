const mongoClient = require('mongodb').MongoClient;
const state = {
    db: null
};

const connect =  (done)=> {
    const url = 'mongodb://localhost:27017/';
    const dbname = 'shopping';

    mongoClient.connect(url)
    .then((data)=>{
        state.db=data.db(dbname);
        done();
    })
   
};
const get=()=>{
     return state.db;
    
}

exports.connect = connect
exports.get = get