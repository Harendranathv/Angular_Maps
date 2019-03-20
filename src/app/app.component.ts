import { Component } from '@angular/core';
declare var google;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularmaps';

  ngOnInit()
  {
     google.charts.load('current', {
        'packages':['geomap'],
        'mapsApiKey': 'AIzaSyBzqH4SikGehqc0Vehw6gzrY7an3n6p0HU'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);
      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
            ['Regions', 'Popularity'],
            ['New York', 200],
            ['Texas', 500],
            ['California', 600]
            
        ]);
         var options = {};
         options['region'] = 'US';
         options['resolution'] = 'provinces';
         
        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        chart.draw(data, options);
      }
  }
}