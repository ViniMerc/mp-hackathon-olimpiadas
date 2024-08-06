import { apiPokemon } from "../api/apiPokemon";

export default async (name) => {
  try {
    const { data } = await apiPokemon.get(`/pokemon/${name}`);
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
