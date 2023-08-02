import { Blog } from "../data";

const BASIC_URL = import.meta.env.VITE_BASIC_URL;
const url = `${BASIC_URL}/blogs`;

const translateStatusToErrorMessage = (status: number) => {
  switch (status) {
    case 401:
      return "Please login again.";
    case 403:
      return "You do not have permission to view the blogs(s).";
    default:
      return "There was an error retrieving the blogs(s). Please try again.";
  }
};

const checkStatus = (response: Response): Response => {
  if (response.ok) {
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };
    console.log(`log server http error: ${JSON.stringify(httpErrorInfo)}`);

    const errorMessage = translateStatusToErrorMessage(httpErrorInfo.status);
    throw new Error(errorMessage);
  }
};

function parseJSON(response: Response) {
  return response.json();
}

// eslint-disable-next-line
const delay = (ms: number) => {
  return function (x: Response): Promise<Response> {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
};

const blogsAPI = {
  get() {
    return fetch(`${url}`)
      .then(delay(600))
      .then(checkStatus)
      .then(parseJSON)
      .catch((error: TypeError) => {
        console.log("log client error " + error);
        throw new Error(
          "There was an error retrieving the blogs. Please try again."
        );
      });
  },

  async put(blog: Blog) {
    try {
      const response = await fetch(`${url}/${blog.id}`, {
        method: "PUT",
        body: JSON.stringify(blog),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const checkedResponse = checkStatus(response);
      return parseJSON(checkedResponse);
    } catch (error) {
      console.log("log client error " + error);
      throw new Error(
        "There was an error updating the blog. Please try again."
      );
    }
  },
};

export { blogsAPI };
