import { appwriteHttp } from "../../http";
import { account, uniqueId } from "./config";

export async function getCurrentSession() {
  return await appwriteHttp(() => account.getSession("current"));
}

export async function createEmailPasswordSession(data: {
  email: string;
  password: string;
}) {
  const { email, password } = data;
  return await appwriteHttp(() =>
    account.createEmailPasswordSession(email, password),
  );
}

export async function createAccount(data: { email: string; password: string }) {
  const { email, password } = data;
  return await appwriteHttp(() => account.create(uniqueId, email, password));
}

export async function deleteCurrentSession() {
  return await appwriteHttp(() => account.deleteSession("current"));
}
