function domToPdf(el) {
  
    if (!(el instanceof HTMLElement)) {
        alert('The parameter is not an HTML Element.');
        return;
    }

    if (el == null) {
        alert('The element does not exist.');
        return;
    }
  
    var html = el.outerHTML;
    html = extractCss() + html;

    htmlToPdf(html);
}

function htmlToPdf(html) {
  
    var url = window.pdfyServer || "https://dev.tika.me/pdfy/";
    var params = JSON.stringify({ html: html });
  
    var http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.responseType = 'blob';

    http.onload = function() {
        if (this.status == 200) {
            var blob = new Blob([this.response], {type: 'image/pdf'});
            var a = document.createElement("a");
            a.style = "display: none";
            document.body.appendChild(a);
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'download.pdf';
            a.click();
            window.URL.revokeObjectURL(url);
        } else {
            alert('An error occurred. Could not get pdf. Please retry.')
            console.log(http);
        }
    }
    http.send(params);
}

function extractCss() {
    var sheets = document.styleSheets
    var css = ""
    for (var i in sheets) {
        var sheet = sheets[i];
        if (sheet.href) {
            css += '\n<link rel="stylesheet" href='+ sheet.href + ' />';
        } else {
            css += '\n<style>';
            for (var j in sheet.rules) {
                var rule = sheet.rules[j];
                if (rule.cssText)
                    css += '\n' + rule.cssText;
            }
            css += '\n</style>';
        }
    }
    return css;
}


// Extension method for HTML Element
HTMLElement.prototype.getPdf = function() {
    domToPdf(this);
};


// Extension method for HTML String
String.prototype.getPdf = function() {
    htmlToPdf(this);
};

