const timer = ms => new Promise(res => setTimeout(res, ms));
async function load () { 
  while (true) {
    let upload = document.getElementById('statusUploadSpeed').innerHTML;
    let download = document.getElementById('statusDownloadSpeed').innerHTML;

    let ajax = new XMLHttpRequest();
    ajax.open("POST", "http://localhost" , true); //CHANGE THIS LINE TO PHP SCRIPT EXEC LOCATION
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("s=u:"+upload+";d:"+download);

    await timer(3000); 
  }
}
