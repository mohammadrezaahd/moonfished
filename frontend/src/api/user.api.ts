import axios from "axios";
import { IApiResponse } from "../interfaces/apiResponse";
import { IUserCreate, IUserGet } from "../models/user.dto";
import { API_URL } from "../constants/urls";
import { AXIOS_HEADERS } from "../constants/axiosObjs";

const creatUser = async (
  data: IUserCreate
): Promise<IApiResponse<IUserGet>> => {
  try {
    const response = await axios.post(`${API_URL}/auth/register/`, data, {
      headers: AXIOS_HEADERS,
      withCredentials: true,
    });
    if (response.status === 201) {
      return {
        data: response.data,
        message: "User created",
        succeed: true,
      };
    } else {
      throw new Error("User creation failed");
    }
  } catch (err) {
    console.log("Unknown error occurred", err);
    throw err;
  }
};

export const userApi = { creatUser };
