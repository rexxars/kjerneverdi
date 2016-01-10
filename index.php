<?php
header('Expires: ' . gmdate('D, d M Y H:i:s \G\M\T', strtotime('tomorrow')));
header('Last-Modified: ' . gmdate('D, d M Y H:i:s \G\M\T', strtotime('today')));

function getCoreValue() {
    $values = require 'values.php';
    $weekNum = (int) date('W');

    $text  = "Ukas kjerneverdi:\n";
    $text .= isset($values[$weekNum]) ? $values[$weekNum] : 'Udefinert';

    return $text;
}
?><!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ukas kjerneverdi</title>
    <link rel="shortcut icon" href="favicon.svg">
    <link rel="stylesheet" href="css/core.css">
</head>
<body>
    <pre><?php echo getCoreValue(); ?></pre>

    <footer>En tjeneste levert av <a href="http://vaffel.ninja/">VaffelNinja</a></footer>
</body>
</html>

