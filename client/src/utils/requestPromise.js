import request from "request";

export const requestPromise = async ({ url, method = "get" }) => {
  return new Promise((resolve, reject) => {
    request[method.toLowerCase()](url, (err, data) => {
      if (err) {
        reject(err);
      }
      // TODO implements log of errors

      resolve(data);
    });
  });
};
