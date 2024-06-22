import { Account, Client, ID, Models } from "appwrite";
import config from "../../config";

const client = new Client()
  .setEndpoint(config.APPWRITE.BASE_URL)
  .setProject(config.APPWRITE.PROJECT_ID);

export const account = new Account(client);
export const uniqueId = ID.unique();
export type { Models as AppwriteModels };
