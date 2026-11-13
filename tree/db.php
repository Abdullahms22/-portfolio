<?php

$conn = mysqli_connect("localhost", "root", "", "profile_db2");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

?>