
// 注入main.js到页面
const script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.setAttribute("src", chrome.extension.getURL("js/libs/xhr.js"));
document.head.prepend(script);


function execInjectScript(detail){
  let statdata = detail.data
  let staturlData = UrlUtil.urlobject(detail.url)

  let data = JSON.parse(statdata)
  data['roomId']= staturlData.query.roomId
  chrome.runtime.sendMessage(
    {
      type: "DATA_stat",
      data: data,
    },
    (response) => {
      console.log("demo response:", response);
    }
  );
}

$(function () {
  // 传递参数到background页面
  window.addEventListener("injectScript", (event) => {
    console.log("dddd", event.detail);
    execInjectScript(event.detail)
  });

 

 
});
