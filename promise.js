function serverRequestsample(serverResp){
    return new Promise(function(resolve,reject){
        if(serverResp){
            resolve("server response success");
        } else reject("There was some Error");
    })
}

serverRequestsample(true).then(function(successMsg){
    console.log(successMsg);
},function(ErrMsg){
    console.log(ErrMsg);
});
serverRequestsample(false).then(function(successMsg){
    console.log(successMsg);
},function(ErrMsg){
    console.log(ErrMsg);
});

//.then handler with two callback functions to handle resolve and reject
//Promise is an object which will have either success or Failure Msg