/*
(function(){

    chrome.webRequest.onBeforeRequest.addListener(function(details){
        
        console.log(details);
        
        return {
            redirectUrl: OPTIONS.REDIRECT_URL
        };
    },{
    types: [
        OPTIONS.TYPE_OF_PAGES
    ],
    urls: Chocolate.blockWebRequest()
    },["blocking"])
    
}());

*/

(function(){

    chrome.webRequest.onBeforeRequest.addListener(function(details){
        
        console.log(details);
        
        return {
            cancel: (function(){
                return true
            })
        };
    },{
    types: [
        OPTIONS.TYPE_OF_PAGES
    ],
    urls: Chocolate.blockWebRequest()
    },["blocking"])
    
}());