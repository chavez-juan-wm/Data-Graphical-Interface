google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['School Name in AZ', '2010 Population',],
        ['Crittenton Youth Academy', 8175000],
        ['San Carlos High School', 3792000],
        ['La Puerta High School', 2695000],
        ['Peach Springs School', 2099000],
        ['Trusty Elemantary School', 1526000]
    ]);

    var options = {
        title: 'Population of Largest U.S. Cities',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Population',
            minValue: 0
        },
        vAxis: {
            title: 'City'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}