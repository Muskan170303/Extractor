import { Pinecone } from "@pinecone-database/pinecone";
import { env } from "./config";
import { delay } from "./utils";

let pineconeClientInstance: Pinecone | null = null;

const pc = new Pinecone({
  apiKey: "7cd41279-ac2c-40ef-8b43-34636e17378a",
});

// Create pineconeIndex if it doesn't exist
async function createIndex(client: Pinecone, indexName: string) {
  try {
    await client.createIndex({
      name: indexName,
      dimension: 768,
      metric: "cosine",
      spec: {
        serverless: {
          cloud: "aws",
          region: "us-east-1",
        },
      },
    });
    // await pc.createIndex({
    //   name: "raghav",
    //   dimension: 1536,
    //   metric: "cosine",
    // });
    console.log(
      "Waiting for ${env.INDEX_INIT_TIMEOUT} seconds for index initialization to complete..."
    );
    await delay(env.INDEX_INIT_TIMEOUT);
    console.log("Index created !!");
  } catch (error) {
    console.error("error ", error);
    throw new Error("Index creation failed");
  }
}

// Initialize index and ready to be accessed.
// async function initPineconeClient() {
//   try {
//     const pineconeClient = new Pinecone(); // Create Pinecone instance directly
//     const indexName = env.PINECONE_INDEX_NAME;

//     const existingIndexes = await pineconeClient.listIndexes();

//     // Convert the IndexList to an array and then check for the presence of indexName
//     const indexExists = Object.values(existingIndexes).includes(indexName);

//     if (!indexExists) {
//       await createIndex(pineconeClient, indexName);
//     } else {
//       console.log("Your index already exists. nice !!");
//     }

//     return pineconeClient;
//   } catch (error) {
//     console.error("error", error);
//     throw new Error("Failed to initialize Pinecone Client");
//   }
// }

async function initPineconeClient() {
  try {
    const pineconeClient = new Pinecone();
    // await pineconeClient.init({
    //   apiKey: env.PINECONE_API_KEY,
    //   environment: env.PINECONE_ENVIRONMENT,
    // });
    const indexName = env.PINECONE_INDEX_NAME;

    const existingIndexes = await pineconeClient.listIndexes();
    console.log(existingIndexes.indexes);
    console.log(indexName);
    let kk = false;
    existingIndexes.indexes?.forEach(function (arrayItem) {
      if (arrayItem.name === indexName) {
        kk = true;
      }
    });
    if (!kk) {
      createIndex(pineconeClient, indexName);
    } else {
      console.log("Your index already exists. nice !!");
    }

    return pineconeClient;
  } catch (error) {
    console.error("error", error);
    throw new Error("Failed to initialize Pinecone Client");
  }
}

export async function getPineconeClient() {
  if (!pineconeClientInstance) {
    pineconeClientInstance = await initPineconeClient();
  }

  return pineconeClientInstance;
}
