var page = document.getElementById("p1")
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
function LoadPage(pagename) {
    if (pagename == "home") {
        var resp = httpGet("https://raw.githubusercontent.com/The-Developer-Nate/Base64ToRedirect/main/home.html");
        page.innerHTML = resp;
    }
}