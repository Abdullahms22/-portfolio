<?php

header("Content-Type: text/xml; charset=UTF-8");

include "db.php";

$q = "SELECT id, email, phone FROM contact";

$result = mysqli_query($conn, $q);

echo "<?xml version='1.0' encoding='UTF-8'?>";

echo "<contacts>";

while ($row = mysqli_fetch_assoc($result)) {

    echo "<contact>";

    echo "<id>" . $row['id'] . "</id>";

    echo "<email>" . $row['email'] . "</email>";

    echo "<phone>" . $row['phone'] . "</phone>";

    echo "</contact>";

}

echo "</contacts>";

?>