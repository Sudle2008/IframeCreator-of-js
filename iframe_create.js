function CreateIframe (src,fd,h){
  var iframe = document.createElement ('iframe');
  iframe.src = src;
  iframe.width ='100%';
  if (h === undefined){
    h = window.innerHeight || document.ducumentElement.clientHeight;
  }
  iframe.height = h;
  iframe.frameBorder = '0';
  if (fd){
    iframe.sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts";
  }
  if (!src.includes("//")){
    src = "https://" + src;
  }
  document.body.appendChild(iframe);
  console.log("succeed to add Iframe");
  return 1;
}

