import axios from "axios";

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_URL}/recordings`;
axios.defaults.headers.post["Content-Type"] = "application/json";

const http = async <T>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: any
): Promise<T> => {
  try {
    const response = await axios({
      method,
      data,
    });

    return response.data;
  } catch (error: any) {
    if (error.request) {
      // Network error
      console.error("Network error:", error.request);
    }

    throw error;
  }
};

export default http;
