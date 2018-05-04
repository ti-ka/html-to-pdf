# html-to-pdf
The simplest html-to-pdf Javascript Library:

Usage:
```
<script type="text/javascript" src="https://raw.githubusercontent.com/ti-ka/html-to-pdf/master/pdfy.js">
```

Then:
```
document.querySelector("body").getPdf();
```

Or simple string:
```
"<p>Hi, there</p>".getPdf();
```

---
# Advanced usage:
1. Define your own server: (Install wkhtmltopdf and copy the php-server files)
```
window.pdfyServer = "/server/php/index.php";
```

Currently uses: "https://dev.tika.me/pdfy/" (Availability not guaranteed)
