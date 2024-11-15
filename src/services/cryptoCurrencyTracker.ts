import { ApiResponseI } from "../types/services/api"
import { GetCryptoCurrenciesParamsI } from "../types/services/cryptoCurrencyTracker"
import { get } from "./configs/apiRequest"

export const getCryptoCurrencies = async (params: GetCryptoCurrenciesParamsI): Promise<ApiResponseI> => {  
  const response = await get({
    url: '/api/v3/coins/markets',
    queryParams: {
      order: 'market_cap_desc',
      page: 1,
      per_page: 50,
      vs_currency: params.vs_currency,
    }
  })
  return response;
}