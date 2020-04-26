
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var querystring = window.location.search;
console.log(querystring);
var urlParams = new URLSearchParams(querystring);

var accessLevel = urlParams.get('level');
console.log(accessLevel);

$.ajax({
    url: 'fatturato/',
    method: 'GET',
    data: {
        level: accessLevel
    },
    success: function(fatturato) {
        var type = fatturato.type;
        var fatt = fatturato.data;
        var color = getRandomColor();
        buildLineChart(type, months, fatt, 'rgba(0,0,0,0.1)', color);
    },
    error: function() {

    }
});

$.ajax({
    url: 'fatturato_by_agent/',
    method: 'GET',
    data: {
        level: accessLevel
    },
    success: function(fatturato_by_agent) {
        var type = fatturato_by_agent.type;
        var fatt4Agent = fatturato_by_agent.data;

        var names = [];
        var fatt = [];
        for (var name in fatt4Agent) {
            names.push(name);
            fatt.push(fatt4Agent[name]);
        }
        // console.log(names, fatt);
        var colors = [];

        for (var i = 0; i < names.length; i++) {
            colors.push(getRandomColor());
        }

        buildPieChart($('#pie-chart'), type, names, fatt, colors);
    },
    error: function() {

    }
});

$.ajax({
    url: 'fatturato_by_agent_php/',
    method: 'GET',
    data: {
        level: accessLevel
    },
    success: function(fatturato_by_agent_php) {

        var colors = [];

        for (var i = 0; i < 10; i++) {
            colors.push(getRandomColor());
        }

        buildPieChart($('#pie-chart-php'), fatturato_by_agent_php.tipo, fatturato_by_agent_php.nomi_agenti, fatturato_by_agent_php.fatturato_agenti, colors);
    },
    error: function() {

    }
});

$.ajax({
    url: 'team_efficiency/',
    method: 'GET',
    data: {
        level: accessLevel
    },
    success: function(team_efficiency) {
        var type = team_efficiency.type;

        var bgColor = 'rgba(0,0,0,0.1)';
        var datasets = [];

        for (var teamName in team_efficiency.data) {
            var object = {
                label: teamName,
                backgroundColor: bgColor,
                borderColor: getRandomColor(),
                data: team_efficiency.data[teamName]
            }

            datasets.push(object);
        }
        // console.log(datasets);

        buildTeamsLineChart(type, months, datasets);
    },
    error: function() {

    }
});

// $.ajax({
//     url: 'permissions_filter.php' + querystring,
//     method: 'GET',
//     success: function(data) {
//         console.log(data);
//     }
// });

var lol = "#"+((1<<24)*Math.random()|0).toString(16); // colore random da record

function buildLineChart(type, labels, data, bgColor, borderColor) {
    var ctx = $('#line-chart');
    var lineChart = new Chart(ctx, {
        // The type of chart we want to create
        type: type,

        // The data for our dataset
        data: {
            labels: labels,
            datasets: [{
                label: 'Fatturato',
                backgroundColor: bgColor,
                borderColor: borderColor,
                data: data
            }]
        }
    });
}

function buildTeamsLineChart(type, labels, datasets) {
    var ctx = $('#teams-line-chart');
    var lineChart = new Chart(ctx, {
        // The type of chart we want to create
        type: type,

        // The data for our dataset
        data: {
            labels: labels,
            datasets: datasets
        }
    });
}

function buildPieChart(selettore, type, labels, data, bgColors) {
    var ctx = selettore;
    var lineChart = new Chart(ctx, {
        // The type of chart we want to create
        type: type,
        data: {
            datasets: [{
                data: data,
                backgroundColor: bgColors
            }],
            labels: labels
        }
    });
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
