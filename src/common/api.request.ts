export const METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

const getTwitterOAuth:IAPI = {
  uri: "/twitter/oauth",
  method: METHOD.GET,
};

const getUser:IAPI = {
  uri: "/user",
  method: METHOD.GET,
  authenticated: true,
};


export const apiRequest = {
  getTwitterOAuth,
  getUser
};

export interface IAPI {
  uri: string;
  method: string;
  authenticated?: boolean;
  useFullUri?: boolean;
}
