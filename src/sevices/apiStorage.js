const api = async (url, method, body) => {
  console.log("body", body);
  const baseUrl = "https://tut-tudo-node-api.herokuapp.com";
  return await fetch(`${baseUrl}/${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(body),
  });
};

const getItem = () => api("todos", "GET");

const setItem = async (item) => {
  const todos = await api("todo/create", "POST", item);

  return todos;
};

const updateItem = async (item) => {
  const todos = await api("todo/update", "PUT", item);

  return todos;
};
const removeItem = async (id) => {
  const todos = await api(`${"todo/delete"}/?id=${id}`, "DELETE");
  return todos;
};

const completedItem = async (id) => {
  const todos = await api(`${"todo/complete"}/?id=${id}`, "PATCH");

  return todos;
};

const apiStorage = { setItem, getItem, updateItem, removeItem, completedItem };
export default apiStorage;
