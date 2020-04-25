<?php

    include 'data.php';
    // $guest = [];
    // $employee = [];
    // $clevel = [];

    $filtered = [];

    if (!empty($_GET)) {
        foreach ($graphs as $key => $value) {
            if ($_GET['level'] == 'guest') {
                if ($value['access'] == 'guest') {
                    $filtered[$key] = $value;
                }
            }
            if ($_GET['level'] == 'employee') {
                if ($value['access'] == 'guest' || $value['access'] == 'employee' ) {
                    $filtered[$key] = $value;
                }
            }
            if ($_GET['level'] == 'clevel') {
                $filtered[$key] = $value;
            }
        }
    }

?>
