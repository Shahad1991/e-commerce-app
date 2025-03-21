import { MongoClient, Db, ServerApiVersion } from 'mongodb';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDb() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const uri = "mongodb+srv://@cluster0.41vvd.mongodb.net/?appName=Cluster0";

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  await client.connect();

  cachedClient = client;
  cachedDb = client.db('e-commerce-site');

  return { client, db: client.db('e-commerce-site') }
}