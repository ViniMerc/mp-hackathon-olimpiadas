import { apiOlympic } from "../api/apiOlympic";

export default async () => {
  try {
    const { data } = await apiOlympic.get(`/disciplines`);
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
