import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_SHEETDB_BASE_URL,
});

export async function fetchData(endpoint: string = "") {
  try {
    const { data } = await api.get(`/${endpoint}`);
    return data;
  } catch (error) {
    console.error("fetching stocks failed:", error);
    throw error;
  }
}
