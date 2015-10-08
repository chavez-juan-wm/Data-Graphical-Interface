google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic()
{

    var data = google.visualization.arrayToDataTable
    ([
        ['School Name in AZ', 'Money Received', { role: 'style' }],
        ['Crittenton Youth Academy', 915959, 'color: gold'],
        ['San Carlos High School', 928654, 'color: silver'],
        ['La Puerta High School', 634503, 'color: red'],
        ['Peach Springs School', 880050, 'color: blue'],
        ['Rice Elementary School', 204246, 'color: green']
    ]);

    var options =
    {
        title: 'Money Schools Received in Arizona',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Money Received',
            minValue: 0
        },
        vAxis:
        {
            title: 'School Name in AZ'
        },
        backgroundColor: 'gray'
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}