var axios = require("axios");
/*var FormData = require("form-data");
var data = new FormData();
data.append("name", "sert");
data.append("author", "erttt");
data.append("imageUrl", "ddfdfdf");
data.append("episodes", "[9,5]");*/

var config = {
  method: "post",
  url: "http://localhost:1337/podcasts",
  headers: {
    //...data.getHeaders(),
  },
  data: {
    name: "ert",
    author: "errtd",
    imageUrl: "pop",
    episodes: [9, 5],
  },
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
