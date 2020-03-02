<?php

    $mysqli = new mysqli('localhost', 'root', '', 'moekino');

    if(mysqli_connect_errno()) {
        prinf("Соединение не установлено", mysqli_connect_error());
        exit();
    }

    $mysqli->set_charset('utf8');

    // $query = $mysqli->query('SELECT * FROM movie');

    // while ($row = mysqli_fetch_assoc($query)) {
    //     echo $row['name'].$row['year'].'<br>';
    // }

    // $query = "INSERT INTO movie VALUES(null, 'Безумный Макс', 'Описание фильма Безумный Макс', '2015', Now())";
    // $mysqli->query($query);

    // $query = "UPDATE movie SET year = 1990 WHERE id = 3";
    // $mysqli->query($query);

    $query = "DELETE FROM movie WHERE id = 3";
    $mysqli->query($query);

    $mysqli->close();

?>