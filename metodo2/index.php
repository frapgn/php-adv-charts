<?php $data = [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322]; ?>
<?php // OPPURE
    // include 'database.php'
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Metodo 2</title>
</head>
<body>

    <canvas id="line-chart"></canvas>

    <?php // ----- JAVASCRIPT ----- ?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

    <script>
        var ctx = $('#line-chart');
        var lineChart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [{
                    label: 'Boh',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: <? echo json_encode($data) ?>
                }]
            }
        });
    </script>
    <?php // ----- JAVASCRIPT ----- ?>

</body>
</html>
