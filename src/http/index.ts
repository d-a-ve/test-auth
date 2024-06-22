import { AppwriteException } from "appwrite";

export type SuccessResponse<T> = {
  success: true;
  data: T;
};

export type ErrorResponse = {
  success: false;
  error: AppwriteException;
};

export async function appwriteHttp<TRes>(
  apiCallback: () => Promise<TRes>,
): Promise<SuccessResponse<TRes>> {
  try {
    const res = await apiCallback();
    return { success: true, data: res };
  } catch (e: unknown) {
    if (e instanceof AppwriteException) {
      throw {
        success: false,
        error: e,
        // error: { code: e.code, message: e.message, type: e.type },
      };
    }
    throw { sucess: false, e };
  }
}
