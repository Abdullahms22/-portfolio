<?php

header("Content-Type: text/xml; charset=UTF-8");

include "db.php";

$q = "SELECT id, skill_name FROM skills";

$result = mysqli_query($conn, $q);

echo "<?xml version='1.0' encoding='UTF-8'?>";

echo "<skills>";

while ($row = mysqli_fetch_assoc($result)) {

    echo "<skill>";

    echo "<id>" . $row['id'] . "</id>";

    echo "<skill_name>" . $row['skill_name'] . "</skill_name>";

    echo "</skill>";

}

echo "</skills>";

?>