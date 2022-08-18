import axios from 'axios';

const API_URL = 'http://localhost:9090';

const URL = `${API_URL}/questionaires`;

export const getQuestionaires = async () => {
  try {
    const {data} = await axios.get(URL);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getQuestionaire = async id => {
  try {
    const {data} = await axios.get(`${URL}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

// export const createQuestioanire = async (name) => {
//   try {
//     const { data } = await axios.post(`${URL}`, { name });
//     return data;
//   } catch (error) {
//     console.log(error);
//     throw new Error(error);
//   }
// };

// export const deleteQuestionaire = async (id) => {
//   try {
//     const { data } = await axios.delete(`${URL}/${id}`);
//     return data;
//   } catch (error) {
//     console.log(error);
//     throw new Error(error);
//   }
// };
