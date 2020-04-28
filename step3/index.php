<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="../favicon.png">
    <title>step3</title>
</head>
<body>

    <style>

        .clearfix:after {
            content: '';
            display: table;
            clear: both;
        }

        .container div {
            float: left;
            width: 500px;
        }

    </style>


    <div class="container clearfix">
        <div>
            <canvas id="line-chart"></canvas>
        </div>
        <div>
            <canvas id="pie-chart"></canvas>
        </div>
    </div>

    <div class="container clearfix">
        <div>
            <canvas id="pie-chart-php"></canvas>
        </div>
        <div>
            <canvas id="teams-line-chart"></canvas>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <script src="js/main.js" charset="utf-8"></script>
</body>
</html>
