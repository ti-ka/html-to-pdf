using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.IO;
using WkWrap.Core;

namespace Controllers
{
    // This controller is backend support for converting HTML to pdf.
    // Github: https://github.com/ti-ka/html-to-pdf
    public class PdfyController : Controller
    {
        private readonly string _converter;
        public PdfyController(IConfiguration configuration) =>  _converter = configuration["WkHtmlToPdf"];

        [Route("pdfy")]
        public IActionResult Index([FromBody] PdfyModel model)
        {
            var wkhtmltopdf = new FileInfo(_converter);
            var converter = new HtmlToPdfConverter(wkhtmltopdf);
            var pdfBytes = converter.ConvertToPdf(model.Html);
            return File(pdfBytes, "application/pdf", "export.pdf");
        }

        public class PdfyModel
        {
            public string Html { get; set; }
        }
    }
}
