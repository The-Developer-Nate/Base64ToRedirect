var page = document.getElementById("p");
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
function LoadPage(pagename) {
    var resp = httpGet("https://raw.githubusercontent.com/The-Developer-Nate/Base64ToRedirect/main/home.html");
    alert(resp);
    page.innerHTML = '';
    document.write(resp);
}

export {LoadPage as void}