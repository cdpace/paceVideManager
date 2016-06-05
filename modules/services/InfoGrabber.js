var infoGrabber = function(http){
    var key = "A98288B9B05F6401";    
    var username = "cdpace";
    var userKey = "99C109F401F2CAF0";
    var apiHost = "https://api.thetvdb.com/";
    
    function Authenticate(responseCallback){
        var options = {
            host : apiHost,
            port : 80,
            path : "login",
            method: "POST",
            headers : {
                "Content-type" : "application/json"
            }
        };
        
        var data = {
            apikey: key,
            username: username,
            userKey: userKey
        };
        
        var req = http.request(options,function(res){
            responseCallback();
        });
        
        req.write(JSON.stringify(data));
        req.end();
        
    }
    
    Authenticate(function(){
        console.log("done");
    })
}

module.exports = function(http){
    var instance = new infoGrabber(http);
    
    return instance;
}