function copyText() {
    var text = document.getElementById("email").innerText;
    
    var tempInput = document.createElement("textarea");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // for mobile devices

    document.execCommand("copy");
    
    document.body.removeChild(tempInput);
    
    var notification = document.getElementById("copyNotification");
    notification.classList.add("show");

    setTimeout(function() {
        notification.classList.remove("show");
    }, 3000);
}