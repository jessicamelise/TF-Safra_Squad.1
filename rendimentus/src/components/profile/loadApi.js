export const loadProducts = async () => {
  try {
    // "https://jsonbox.io/box_ddb0ab5da8d69da8c315/myProducts"
    const getProductsApi = await fetch("api.json", { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } });
    const response = await getProductsApi.json();
    return response;
  }
  catch (err) {
    console.error("We got a problem to fetch the information", err);
  };
};

export const loadBanks = async () => {
  try {
    // "https://jsonbox.io/box_ddb0ab5da8d69da8c315/banks"
    const getBanksApi = await fetch("api.json", { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } });
    const response = await getBanksApi.json();
    return response;
  }
  catch (err) {
    console.error("We got a problem to fetch the information", err);
  };
};