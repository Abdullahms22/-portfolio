<?php

header("Content-Type: text/xml; charset=UTF-8");

include "db.php";

$q = "SELECT id, project_name FROM projects";

$result = mysqli_query($conn, $q);

echo "<?xml version='1.0' encoding='UTF-8'?>";

echo "<projects>";

while ($row = mysqli_fetch_assoc($result)) {

    echo "<project>";

    echo "<id>" . $row['id'] . "</id>";

    echo "<project_name>" . $row['project_name'] . "</project_name>";

    echo "</project>";

}

echo "</projects>";

?>