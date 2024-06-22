const appwrite = {
  BASE_URL: import.meta.env.VITE_BACKEND_BASE_API_URL,
  PROJECT_ID: import.meta.env.VITE_PROJECT_ID,
};

export default {
  APPWRITE: appwrite,
};
