(function () {
 

  var app = { ts: new Date().getTime() };

  chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
     
    },
    { urls: ["<all_urls>"] },
    ["requestBody"]
  );

  function sendStat(data) {
	var RESTAPI = localStorage.getItem("restApi")
	var SHAkEY = localStorage.getItem("key")

	if(RESTAPI&&SHAkEY){
		let rand =  Math.random();
		let timestamp =   Date.now();
		let key = SHAkEY;
		let arr = [key, rand, timestamp]
		let signature = sha1.hex(arr.sort().join(""));
		console.log("signature",signature);
		
		$.ajax({
				url:`${RESTAPI}?rand=${rand}&timestamp=${timestamp}&signature=${signature}`,
				contentType: "application/json; charset=utf-8",
				data: JSON.stringify(data),
				type:"POST",
				success:function(a){
					 console.log(a);
				}
		});
	}
    
  }

   
  chrome.runtime.onMessage.addListener((msg) => {
    if (msg.type === "DATA_stat") {
		
		let statData =  msg.data
		console.log(statData)
		sendStat(statData)


    }
  });

   
})();
