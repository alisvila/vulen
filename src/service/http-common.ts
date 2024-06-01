import axios, { AxiosRequestConfig } from "axios";
import { lockManager } from "./tokenHelper";


export default axios.create({
    baseURL: `${process.env.NEXT_AUTHENTICATION_BACKEND_HOST}`,
    headers: {
        "Content-type": "application/json"
    }
});

const tokenManager = lockManager();

type RequestParams = {
    baseURL?: string;
    params?: object;
    headers?: {
      method?: string;
      contentType?: string;
    };
    body?: any;
  };
  
  export async function sendRequest(
    url: string,
    { baseURL, params, headers, body }: RequestParams
  ) {
    const token = await tokenManager();
  
    // Store the last active time in the local storage to be shared between tabs. 
    // This time will then be used by an interval to automatically log out the user 
    // if they have been inactive for more than a specific period of time
    if (!url.includes('unread') && !url.includes('envelope')) {
      localStorage.setItem("lastActive", String(Date.now()))
    }
  
    const options: AxiosRequestConfig = {
      url,
      baseURL: baseURL ?? `${process.env.NEXT_PUBLIC_STA_BACKEND_HOST}/`,
      method: headers?.method ?? "GET",
      params,
      headers: {
        "Content-Type": headers?.contentType ?? "application/json",
        ...(token && { Authorization: `Bearer  ${token.accessToken}` }),
        ...headers
      },
      ...(body && { data: body }),
    };
  
    return axios(options).catch((err) => {
      if (err.response.status === 403) {
        console.log(`Unauthorized.`);
      }
      if (err.response.status === 400) {
        console.log(`Data error.`, err.response.data);
        throw err.response;
      }
      if (err.response.status === 413) {
        console.log(`Data error.`, err.response.data);
        throw err.response;
      }
      if (err.response.status === 500) {
        console.log(`Server error.`);
        throw err.response;
      }
      console.log(`request to ${url} has been refused with error: ${err}`);
      throw err.response;
    });
  }
  