const status = (response) => {
  if (response.ok) return response;
  var error = new Error(response.statusText || response.status);
  error.response = response;
  console.log(error);
  throw error;
};

const json = (response) => response.json();

const postJSON = (qs) => {
  return fetch(qs).then(status).then(json);
};

export default postJSON;
