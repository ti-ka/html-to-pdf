# html-to-pdf
The simplest html-to-pdf Javascript Library: Print "Hello-World": https://dev.tika.me/pdfy/?html=Hello-World

Usage:
```
<script type="text/javascript" src="pdfy.js">
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

# Dotnet Project for Server
https://github.com/ti-ka/pdfy-server-dotnet
