function CreateIframe (src,h){
  var iframe = document.createElement ('iframe');
  iframe.src = src;
  iframe.width ='100%';
  if (h === undefined){
    h = window.innerHeight || document.ducumentElement.clientHeight;
  }
  iframe.height = h;
  iframe.frameBorder = '0';

  document.body.appendChild(iframe);
  console.log("succeed to add Iframe");
  return 1;
}

