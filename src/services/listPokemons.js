import { apiPokemon } from "../api/apiPokemon";

export default async () => {
  try {
    const { data } = await apiPokemon.get(`/pokemon?limit=100000&offset=0`);
    console.log(data);
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
