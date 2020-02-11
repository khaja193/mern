import React from "react";

import axios from "axios";

var str = "http://localhost:3000/api/contests/";

/*axios.get('api/contests/'+1)
		.then(resp=>{
			console.log(resp.data);
			})
		.catch(console.error);
		*/

export const fetchingContest = contestId =>
  axios
    .get(str + contestId)
    .then(resp => {
      return resp.data;
    })
    .catch(console.error);
