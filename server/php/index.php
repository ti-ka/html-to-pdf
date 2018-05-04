<?php

$html = "";

if (isset($_REQUEST['html'])) {
    $html = $_REQUEST['html'];
}

if ($html == "") {
    $input = json_decode(file_get_contents('php://input'), true);
    if (isset($input['html'])) {
        $html = $input['html'];
    }
}

if ($html == "") {
    $html = "<p>No html was uploaded</p>";
}

$url = __DIR__ . "/temp/" . time() . uniqid() . ".html";
$pdf = __DIR__ . "/temp/" . time() . uniqid() . ".pdf";

$result = file_put_contents($url, $html, LOCK_EX);


if ($result === false) {
    
    echo "Failed";
    
} else {
    
    $cmd = "wkhtmltopdf --encoding utf-8 $url $pdf";
    exec($cmd);
    
    header("Content-type:application/pdf");
    header("Content-Disposition:inline;filename='export.pdf'");
    readfile($pdf);
    
    unlink($pdf);
    unlink($url);
    
}
