export const loadApiGetUsers = async () => {
  // `https://jsonbox.io/box_ddb0ab5da8d69da8c315/client`
  try {
    const getUsersApi = await fetch("api.json", { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } });
    const response = await getUsersApi.json();
    return response;
  }
  catch (err) {
    console.error("We got a problem to fetch the information", err);
  };
};