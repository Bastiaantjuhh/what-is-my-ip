<?php

header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");

$array = [
    "ip" => $_SERVER["REMOTE_ADDR"]
];

echo json_encode($array);

?>