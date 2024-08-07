import { apiPokemon } from "../api/apiPokemon";

export default async () => {
  try {
    const { data } = await apiPokemon.get(`/pokemon?limit=121&offset=0`);
    return {
      success: true,
      code: 200,
      data,
    };
  } catch (error) {
    return {
      success: false,
      code: error.response.status,
      data: {},
    };
  }
};
