var hck = {};


hck.getUrl = function() {
  chrome.tabs.query({
    'active': true,
    'windowId': chrome.windows.WINDOW_ID_CURRENT
  }, function(tabs) {
    //alert(tabs[0].url);
  });

};


hck.getUrl();

document.addEventListener('mouseup',function(event)
{
  var sel = window.getSelection().toString();
   alert(sel);
  if(sel.length)
    chrome.extension.sendRequest({'message':'setText','data': sel},function(response){

    })

})
