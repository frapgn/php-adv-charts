<?php
    include '../permissions_filter.php';

    if (!empty($_GET)) {
        $team_efficiency = $filtered['team_efficiency'];
        header('Content-Type: application/json');
        echo json_encode($team_efficiency);
    }
?>
