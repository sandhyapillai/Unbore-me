var Promise = function(){
    var callFn =[];
    
    
    this.done=function(callbackFun){
        callFn.push(callbackFun)
        return this;
    }
    
    this.resolve=function(response){
        
        for(var i=0;i<callFn.length;i++){
            
            callFn[i](response)
        }
        
        
    }
}

function ajaxCall() {
   var promise = new Promise;

    
   setTimeout(function(){
      promise.resolve({
          fake: 'data'
      });
   }, 1000)

   return promise;
}





(function(){
   var tweets = ajaxCall();

   // Part 1 (basic)
   tweets.done(function(response){
       console.log("Part 1");
       console.log(response);
       
   });
    

   // Part 2 (handle chaining and multiple callbacks)
   tweets.done(function(response){
       console.log("Part 2 - 1");
       console.log(response);
   }).done(function(response){
       console.log("Part 2 - 2");
       console.log(response);
   });

   /* // Part 3 (handle callback after promise has resolved)
   setTimeout(function(){
      tweets.done(function(response){
        console.log("Part 3");
           console.log(response);
       })
   }, 2000); */

   /*// Part 4 (create utility to handle multi promises)
   var tweets2 = ajaxCall();
   when(tweets, tweets2).done(function(t1, t2){
        console.log("Part 4");
        console.log(t1, t2);
   })*/
})();
