import { ref, onMounted } from "vue";
import { fetchCompanyData } from "@/services/stockService";

const companies = ["AAPL", "AMZN", "GOOG", "META", "MSFT", "NVDA", "TSLA"];

export function useStockData() {
  const companyData = ref<Record<string, string[][]>>({});

  onMounted(async () => {
    const results = await Promise.all(companies.map((company) => fetchCompanyData(company)));

    companies.forEach((company, index) => {
      companyData.value[company] = results[index];
    });

    console.log(companyData.value);
  });

  return { companyData };
}
