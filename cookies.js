<script type='text/javascript'>

    $(document).ready(function(){

        checkCookie();

    function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
}
}
return "";
}

function checkCookie() {
    var user=getCookie("tryCookie");
    if (user != "") {
        $('#dialog').html('');
    } else {
        $('#dialog').dialog({ modal: true, width: 'auto' });
    user = "user";
       if (user != "" && user != null) {
        setCookie("tryCookie", user, 0.0002);
    }
 }
}

});

</script>