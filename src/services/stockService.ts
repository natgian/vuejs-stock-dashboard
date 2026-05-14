import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_GOOGLESHEETS_BASE_URL,
  params: {
    key: import.meta.env.VITE_GOOGLESHEETS_API_KEY,
  },
});

export async function fetchCompanyData(sheetName: string) {
  try {
    const { data } = await api.get(`/values/$${sheetName}!3:1000`);
    return data;
  } catch (error) {
    console.error("fetching data failed:", error);
    throw error;
  }
}
