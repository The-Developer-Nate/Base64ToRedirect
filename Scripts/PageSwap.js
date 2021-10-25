var page = document.getElementById("page");
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
function LoadPage(pagename) {
    if (pagename == "home") {
        
        page.innerHTML = '';
        var resp = httpGet("https://raw.githubusercontent.com/The-Developer-Nate/Base64ToRedirect/main/home.html");
        document.write(resp)
    } else if (pagename == "b64Encode") {
        
        page.innerHTML = '';
        var resp = httpGet("https://raw.githubusercontent.com/The-Developer-Nate/Base64ToRedirect/main/b64encode.html");
        document.write(resp)
    } else if (pagename == "secEncode") {
        page.innerHTML = '';
        document.write("This page is a work in progress")
    }
    
}

window.LP = LoadPage;