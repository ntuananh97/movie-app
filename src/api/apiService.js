// Example POST method implementation:
function getApi(url = "", data = {}) {
  if (
    data.method === "POST" ||
    data.method === "PUT" ||
    data.method === "DELETE"
  ) {
    data.body = JSON.stringify(data.body);
  }

  const setting = {
    ...data,
  };

  return fetch(url, setting)
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => {
      console.log("err", err);
    });
}

export default getApi
