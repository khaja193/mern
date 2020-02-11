import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "./src/components/App";

import axios from "axios";
import config from "./config";

var str = config.serverUrl + "/api/contests";

const getApiUrl = contestId => {
  if (contestId) {
    console.log(str + "/" + contestId);
    return str + "/" + contestId;
  }
  console.log("withoutIdurl" + contestId);
  return str;
};

const getInitialData = (contestId, apiData) => {
  //console.log('called'+contestId);
  if (contestId) {
    console.log("withId");
    return {
      currentcontestId: apiData.id,
      contests: {
        [apiData.id]: apiData
      }
    };
  }
  return {
    contests: apiData.contests
  };
};

const serverRender = contestId =>
  axios.get(getApiUrl(contestId)).then(resp => {
    const initialData = getInitialData(contestId, resp.data);
    return {
      initialMarkup: ReactDOMServer.renderToString(
        <App initialData={initialData} />
      ),
      initialData: getInitialData(contestId, resp.data)
    };
  });

export default serverRender;
