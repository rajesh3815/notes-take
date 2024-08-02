import axios from "axios";

const staticUrl = "http://localhost:3000";
export const addGroup = async (heading, color) => {
  try {
    const data = await axios.post(`${staticUrl}/api/v1/heading/createHeading`, {
      heading,
      color,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAllGroups = async () => {
  try {
    const data = await axios.get(`${staticUrl}/api/v1/heading/getAllheader`);
    return data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const addMessageNote = async (heading, text) => {
  try {
    const data = await axios.post(`${staticUrl}/api/v1/message/createNote`, {
      heading,
      text,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getGroupByMessage = async (heading) => {
  try {
    const data = await axios.get(
      `${staticUrl}/api/v1/message/getAllnote/${heading}`
    );
    return data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
