import axios from "axios";

export const DOMAIN_URI = "https://xqua.com";
const TWITTER_CLIENT_ID = "WENTOUd2dFV1c29HbngwVzdZd1M6MTpjaQ";
const TWITTER_ROOT_AUTH = "https://twitter.com/i/oauth2/authorize";
const TWITTER_REDIRECT_URL = "http://www.localhost:3000";

export function getExchangeRate() {
  const apiUrl = "https://api.coinbase.com/v2/exchange-rates";

  const queryParams = {
    currency: "ETH",
    rates: "USDT",
  };

  return axios
    .get(apiUrl, { params: queryParams })
    .then((response) => {
      if (response.data && response.data.data && response.data.data.rates) {
        const exchangeRate = response.data.data.rates.USDT;
        return exchangeRate;
      } else {
        return 0;
      }
    })
    .catch((error) => {
      console.error("_E_getExchangeRate", error);
      return 0;
    });
}

export function getTwitterOauthUrl() {
  const options = {
    redirect_uri: `${TWITTER_REDIRECT_URL}/oauth/twitter`, // client url cannot be http://localhost:3000/ or http://127.0.0.1:3000/
    client_id: TWITTER_CLIENT_ID,
    state: "state",
    response_type: "code",
    code_challenge: "y_SfRG4BmOES02uqWeIkIgLQAlTBggyf_G7uKT51ku8",
    code_challenge_method: "S256",
    scope: ["users.read", "tweet.read", "follows.read", "follows.write"].join(
      " ",
    ), // add/remove scopes as needed
  };
  const qs = new URLSearchParams(options).toString();
  // console.log(`${TWITTER_ROOT_AUTH}?${qs}`);
  return `${TWITTER_ROOT_AUTH}?${qs}`;
}
