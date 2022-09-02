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
            var resp = httpGet("https://raw.githubusercontent.com/The-Developer-Nate/Base64ToRedirect/main/home.html");
            page.innerHTML = resp;
            //document.write(resp)
        } else if (pagename == "b64Encode") {
            var resp = httpGet("https://raw.githubusercontent.com/The-Developer-Nate/Base64ToRedirect/main/b64encode.html");
            page.innerHTML = resp;
            //document.write(resp)
        } else if (pagename == "sites") {
            var resp = httpGet("https://raw.githubusercontent.com/The-Developer-Nate/Base64ToRedirect/main/sites.html");
            page.innerHTML = reps;
        }
}
// window.open('https://thedevnate.github.io/Base64ToRedirect/done.html', 'Done!', 'width=1280,height=720,fullscreen=yes')
window.LP = LoadPage;
