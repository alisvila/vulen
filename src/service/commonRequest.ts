import { sendRequest } from "./http-common";

export async function fetchWithToken(url: string, params?: object) {
  return sendRequest(url, { ...params }).then((res) => {
    return res?.data;
  });
}

export async function postWithToken(
  url: string,
  data: object,
  contentType?: string
) {
  const options = {
    headers: {
      method: "POST",
      contentType: contentType ?? "application/json",
    },
    body: { ...data },
  };
  return sendRequest(url, options).then((res) => {
    return res?.data;
  });
}

export async function putWithToken(
  url: string,
  data: object,
  contentType?: string
) {
  const options = {
    headers: {
      method: "PUT",
      contentType: contentType ?? "application/json",
    },
    body: { ...data },
  };
  return sendRequest(url, options).then((res) => {
    return res?.data;
  });
}

export async function patchWithToken(
  url: string,
  data: object,
  contentType?: string
) {
  const options = {
    headers: {
      method: "PATCH",
      contentType: contentType ?? "application/json",
    },
    body: { ...data },
  };
  return sendRequest(url, options).then((res) => {
    return res?.data;
  });
}

export async function deleteWithToken(url: string | null) {
  if (url == undefined) {
    return;
  } else {
    const options = {
      headers: {
        method: "DELETE",
      },
    };
    return sendRequest(url, options).then((res) => {
      return res?.data;
    });
  }
}
