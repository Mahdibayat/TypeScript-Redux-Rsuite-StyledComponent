import axios from "axios";

const get = (url: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        if (response) {
          resolve(response.data);
        } else {
          throw response;
        }
      })
      .catch((error) => {
        if (!!error.response) reject(error.response.data);
      });
  });
};

const API = {
  coin: {
    tokens: () => {
      return get("https://tokens.pancakeswap.finance/coingecko.json");
    },
  },
};

export default API;
