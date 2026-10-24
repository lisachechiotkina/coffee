const { MongoClient } = require('mongodb');
var data = require("./data.js").data; // Подключаем наш файл с данными

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'coffee';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('drinks');

  // Вставляем данные из data.js
  const insertResult = await collection.insertMany(data);
  console.log('Inserted documents =>', insertResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());