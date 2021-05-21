import { Component, OnInit, NgZone, OnDestroy, AfterViewInit } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_continentsLow from "@amcharts/amcharts4-geodata/continentsLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Router } from "@angular/router";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import * as moment from "moment";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {
  // Chart
  private chart1: any;
  private chart2: any;
  private chart3: any;

  constructor(private zone: NgZone) {}

  ngOnInit() {
    var calendarEl = document.getElementById("widget-calendar");

    var calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      defaultView: "dayGridMonth",
      selectable: true,
      contentHeight: "auto",

      buttonIcons: {
        prev: " ni ni-bold-left",
        next: " ni ni-bold-right",
      },
      header: {
        right: "next",
        center: "title, ",
        left: "prev",
      },
      defaultDate: "2018-12-01",
      editable: true,
      events: [
        {
          title: "Call with Dave",
          start: "2018-11-18",
          end: "2018-11-18",
          className: "bg-red",
        },

        {
          title: "Lunch meeting",
          start: "2018-11-21",
          end: "2018-11-22",
          className: "bg-orange",
        },

        {
          title: "All day conference",
          start: "2018-11-29",
          end: "2018-11-29",
          className: "bg-green",
        },

        {
          title: "Meeting with Mary",
          start: "2018-12-01",
          end: "2018-12-01",
          className: "bg-blue",
        },

        {
          title: "Winter Hackaton",
          start: "2018-12-03",
          end: "2018-12-03",
          className: "bg-red",
        },

        {
          title: "Digital event",
          start: "2018-12-07",
          end: "2018-12-09",
          className: "bg-warning",
        },

        {
          title: "Marketing event",
          start: "2018-12-10",
          end: "2018-12-10",
          className: "bg-purple",
        },

        {
          title: "Dinner with Family",
          start: "2018-12-19",
          end: "2018-12-19",
          className: "bg-red",
        },

        {
          title: "Black Friday",
          start: "2018-12-23",
          end: "2018-12-23",
          className: "bg-blue",
        },

        {
          title: "Cyber Week",
          start: "2018-12-02",
          end: "2018-12-02",
          className: "bg-yellow",
        },
      ],
    });

    calendar.render();

    //Display Current Date as Calendar widget header
    var mYear = moment().format("YYYY");
    var mDay = moment().format("dddd, MMM D");
    document.getElementsByClassName("widget-calendar-year")[0].innerHTML =
      mYear;
    document.getElementsByClassName("widget-calendar-day")[0].innerHTML = mDay;

    this.getCharts();
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart1) {
        console.log("Chart disposed");
        this.chart1.dispose();
      }
      if (this.chart2) {
        console.log("Chart disposed");
        this.chart2.dispose();
      }
      if (this.chart3) {
        console.log("Chart disposed");
        this.chart3.dispose();
      }
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart1()
      this.getChart2()
      this.getChart3()
    });
  }

  getChart1() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("dash1", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [
      {
        country: "Januari",
        visits: 3025,
      },
      {
        country: "Februari",
        visits: 1882,
      },
      {
        country: "Mac",
        visits: 1809,
      },
      {
        country: "April",
        visits: 1322,
      },
      {
        country: "May",
        visits: 1122,
      },
      {
        country: "Jun",
        visits: 1114,
      },
      {
        country: "Julai",
        visits: 984,
      },
      {
        country: "Ogos",
        visits: 711,
      },
      {
        country: "September",
        visits: 665,
      },
      {
        country: "Oktober",
        visits: 580,
      },
      {
        country: "November",
        visits: 443,
      },
      {
        country: "Disember",
        visits: 441,
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Cursor
    chart.cursor = new am4charts.XYCursor();
  }

  getChart2() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("dash2", am4charts.RadarChart);

    // Add data
    chart.data = [
      {
        category: "Research",
        value: 80,
        full: 100,
      },
      {
        category: "Marketing",
        value: 35,
        full: 100,
      },
      {
        category: "Distribution",
        value: 92,
        full: 100,
      },
      {
        category: "Human Resources",
        value: 68,
        full: 100,
      },
    ];

    // Make chart not full circle
    chart.startAngle = -90;
    chart.endAngle = 180;
    chart.innerRadius = am4core.percent(20);

    // Set number format
    chart.numberFormatter.numberFormat = "#.#'%'";

    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis<am4charts.AxisRendererRadial>());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    // categoryAxis.renderer.labels.template.fontWeight = 500;
    categoryAxis.renderer.labels.template.adapter.add(
      "fill",
      function (fill, target) {
        return target.dataItem.index >= 0
          ? chart.colors.getIndex(target.dataItem.index)
          : fill;
      }
    );
    categoryAxis.renderer.minGridDistance = 10;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;

    // Create series
    let series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueX = "full";
    series1.dataFields.categoryY = "category";
    series1.clustered = false;
    series1.columns.template.fill = new am4core.InterfaceColorSet().getFor(
      "alternativeBackground"
    );
    
    series1.columns.template.fillOpacity = 0.08;
    // series1.columns.template.cornerRadiusTopLeft = 20;
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.radarColumn.cornerRadius = 20;

    let series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueX = "value";
    series2.dataFields.categoryY = "category";
    series2.clustered = false;
    series2.columns.template.strokeWidth = 0;
    series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series2.columns.template.radarColumn.cornerRadius = 20;

    series2.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Add cursor
    chart.cursor = new am4charts.RadarCursor();
  }

  getChart3() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("dash3", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        country: "Perlu pengesahan",
        litres: 501.9,
      },
      {
        country: "Sedang diproses",
        litres: 301.9,
      },
      {
        country: "Selesai",
        litres: 201.1,
      },
      {
        country: "Batal",
        litres: 165.8,
      },
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);
  }
}
