import {
  Component,
  OnInit,
  TemplateRef,
  ElementRef,
  ViewChild,
  NgZone,
  OnDestroy,
} from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import swal from "sweetalert2";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";

import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-maklum-balas",
  templateUrl: "./maklum-balas.component.html",
  styleUrls: ["./maklum-balas.component.scss"],
})
export class MaklumBalasComponent implements OnInit, OnDestroy {
  
  // Chart
  private chart1: any;
  private chart2: any;
  private chart3: any;

  // Table
  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: "61",
      start: "2011/04/25",
      salary: "$320,800",
      status: "1",
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      start: "2011/07/25",
      salary: "$170,750",
      status: "2",
    },
    {
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: "66",
      start: "2009/01/12",
      salary: "$86,000",
      status: "4",
    },
    {
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: "22",
      start: "2012/03/29",
      salary: "$433,060",
      status: "3",
    },
    {
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: "33",
      start: "2008/11/28",
      salary: "$162,700",
      status: "2",
    },
    {
      name: "Brielle Williamson",
      position: "Integration Specialist",
      office: "New York",
      age: "61",
      start: "2012/12/02",
      salary: "$372,000",
      status: "3",
    },
    {
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      age: "59",
      start: "2012/08/06",
      salary: "$137,500",
      status: "1",
    },
    {
      name: "Rhona Davidson",
      position: "Integration Specialist",
      office: "Tokyo",
      age: "55",
      start: "2010/10/14",
      salary: "$327,900",
      status: "4",
    },
    {
      name: "Colleen Hurst",
      position: "Javascript Developer",
      office: "San Francisco",
      age: "39",
      start: "2009/09/15",
      salary: "$205,500",
      status: "1",
    },
    {
      name: "Sonya Frost",
      position: "Software Engineer",
      office: "Edinburgh",
      age: "23",
      start: "2008/12/13",
      salary: "$103,600",
      status: "2",
    },
    {
      name: "Jena Gaines",
      position: "Office Manager",
      office: "London",
      age: "30",
      start: "2008/12/19",
      salary: "$90,560",
      status: "3",
    },
    {
      name: "Quinn Flynn",
      position: "Support Lead",
      office: "Edinburgh",
      age: "22",
      start: "2013/03/03",
      salary: "$342,000",
      status: "4",
    },
    {
      name: "Charde Marshall",
      position: "Regional Director",
      office: "San Francisco",
      age: "36",
      start: "2008/10/16",
      salary: "$470,600",
    },
    {
      name: "Haley Kennedy",
      position: "Senior Marketing Designer",
      office: "London",
      age: "43",
      start: "2012/12/18",
      salary: "$313,500",
    },
    {
      name: "Tatyana Fitzpatrick",
      position: "Regional Director",
      office: "London",
      age: "19",
      start: "2010/03/17",
      salary: "$385,750",
    },
    {
      name: "Michael Silva",
      position: "Marketing Designer",
      office: "London",
      age: "66",
      start: "2012/11/27",
      salary: "$198,500",
    },
    {
      name: "Paul Byrd",
      position: "Chief Financial Officer (CFO)",
      office: "New York",
      age: "64",
      start: "2010/06/09",
      salary: "$725,000",
    },
    {
      name: "Gloria Little",
      position: "Systems Administrator",
      office: "New York",
      age: "59",
      start: "2009/04/10",
      salary: "$237,500",
    },
    {
      name: "Bradley Greer",
      position: "Software Engineer",
      office: "London",
      age: "41",
      start: "2012/10/13",
      salary: "$132,000",
    },
    {
      name: "Dai Rios",
      position: "Personnel Lead",
      office: "Edinburgh",
      age: "35",
      start: "2012/09/26",
      salary: "$217,500",
    },
    {
      name: "Jenette Caldwell",
      position: "Development Lead",
      office: "New York",
      age: "30",
      start: "2011/09/03",
      salary: "$345,000",
    },
    {
      name: "Yuri Berry",
      position: "Chief Marketing Officer (CMO)",
      office: "New York",
      age: "40",
      start: "2009/06/25",
      salary: "$675,000",
    },
    {
      name: "Caesar Vance",
      position: "Pre-Sales Support",
      office: "New York",
      age: "21",
      start: "2011/12/12",
      salary: "$106,450",
    },
    {
      name: "Doris Wilder",
      position: "Sales Assistant",
      office: "Sidney",
      age: "23",
      start: "2010/09/20",
      salary: "$85,600",
    },
    {
      name: "Angelica Ramos",
      position: "Chief Executive Officer (CEO)",
      office: "London",
      age: "47",
      start: "2009/10/09",
      salary: "$1,200,000",
    },
    {
      name: "Gavin Joyce",
      position: "Developer",
      office: "Edinburgh",
      age: "42",
      start: "2010/12/22",
      salary: "$92,575",
    },
    {
      name: "Jennifer Chang",
      position: "Regional Director",
      office: "Singapore",
      age: "28",
      start: "2010/11/14",
      salary: "$357,650",
    },
    {
      name: "Brenden Wagner",
      position: "Software Engineer",
      office: "San Francisco",
      age: "28",
      start: "2011/06/07",
      salary: "$206,850",
    },
    {
      name: "Fiona Green",
      position: "Chief Operating Officer (COO)",
      office: "San Francisco",
      age: "48",
      start: "2010/03/11",
      salary: "$850,000",
    },
    {
      name: "Shou Itou",
      position: "Regional Marketing",
      office: "Tokyo",
      age: "20",
      start: "2011/08/14",
      salary: "$163,000",
    },
    {
      name: "Michelle House",
      position: "Integration Specialist",
      office: "Sidney",
      age: "37",
      start: "2011/06/02",
      salary: "$95,400",
    },
    {
      name: "Suki Burks",
      position: "Developer",
      office: "London",
      age: "53",
      start: "2009/10/22",
      salary: "$114,500",
    },
    {
      name: "Prescott Bartlett",
      position: "Technical Author",
      office: "London",
      age: "27",
      start: "2011/05/07",
      salary: "$145,000",
    },
    {
      name: "Gavin Cortez",
      position: "Team Leader",
      office: "San Francisco",
      age: "22",
      start: "2008/10/26",
      salary: "$235,500",
    },
    {
      name: "Martena Mccray",
      position: "Post-Sales support",
      office: "Edinburgh",
      age: "46",
      start: "2011/03/09",
      salary: "$324,050",
    },
    {
      name: "Unity Butler",
      position: "Marketing Designer",
      office: "San Francisco",
      age: "47",
      start: "2009/12/09",
      salary: "$85,675",
    },
    {
      name: "Howard Hatfield",
      position: "Office Manager",
      office: "San Francisco",
      age: "51",
      start: "2008/12/16",
      salary: "$164,500",
    },
    {
      name: "Hope Fuentes",
      position: "Secretary",
      office: "San Francisco",
      age: "41",
      start: "2010/02/12",
      salary: "$109,850",
    },
    {
      name: "Vivian Harrell",
      position: "Financial Controller",
      office: "San Francisco",
      age: "62",
      start: "2009/02/14",
      salary: "$452,500",
    },
    {
      name: "Timothy Mooney",
      position: "Office Manager",
      office: "London",
      age: "37",
      start: "2008/12/11",
      salary: "$136,200",
    },
    {
      name: "Jackson Bradshaw",
      position: "Director",
      office: "New York",
      age: "65",
      start: "2008/09/26",
      salary: "$645,750",
    },
    {
      name: "Olivia Liang",
      position: "Support Engineer",
      office: "Singapore",
      age: "64",
      start: "2011/02/03",
      salary: "$234,500",
    },
    {
      name: "Bruno Nash",
      position: "Software Engineer",
      office: "London",
      age: "38",
      start: "2011/05/03",
      salary: "$163,500",
    },
  ];
  SelectionType = SelectionType;

  // calendar
  addModal: BsModalRef;
  editModal: BsModalRef;
  @ViewChild("modalAdd") modalAdd: ElementRef;
  @ViewChild("modalEdit") modalEdit: ElementRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered modal-secondary",
  };
  radios = "bg-danger";
  eventTitle = undefined;
  eventDescription;
  eventId;
  event;
  startDate;
  endDate;
  calendar;
  today = new Date();
  y = this.today.getFullYear();
  m = this.today.getMonth();
  d = this.today.getDate();
  events = [
    {
      id: 0,
      title: "Lunch meeting",
      start: "2018-11-21",
      end: "2018-11-22",
      className: "bg-orange",
    },
    {
      id: 1,
      title: "Call with Dave",
      start: new Date(this.y, this.m, 1),
      allDay: true,
      className: "bg-red",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 2,
      title: "Lunch meeting",
      start: new Date(this.y, this.m, this.d - 1, 10, 30),
      allDay: true,
      className: "bg-orange",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 3,
      title: "All day conference",
      start: new Date(this.y, this.m, this.d + 7, 12, 0),
      allDay: true,
      className: "bg-green",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 4,
      title: "Meeting with Mary",
      start: new Date(this.y, this.m, this.d - 2),
      allDay: true,
      className: "bg-blue",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 5,
      title: "Winter Hackaton",
      start: new Date(this.y, this.m, this.d + 1, 19, 0),
      allDay: true,
      className: "bg-red",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 6,
      title: "Digital event",
      start: new Date(this.y, this.m, 21),
      allDay: true,
      className: "bg-warning",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 7,
      title: "Marketing event",
      start: new Date(this.y, this.m, 21),
      allDay: true,
      className: "bg-purple",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 8,
      title: "Dinner with Family",
      start: new Date(this.y, this.m, 19),
      allDay: true,
      className: "bg-red",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 9,
      title: "Black Friday",
      start: new Date(this.y, this.m, 23),
      allDay: true,
      className: "bg-blue",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },

    {
      id: 10,
      title: "Cyber Week",
      start: new Date(this.y, this.m, 2),
      allDay: true,
      className: "bg-yellow",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
  ];
  // calendar

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered",
  };

  // Form
  registerForm: FormGroup;

  constructor(
    private modalService: BsModalService,
    private zone: NgZone,
    private formBuilder: FormBuilder
  ) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key,
      };
    });
  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(selected);
  }
  onActivate(event) {
    this.activeRow = event.row;
  }

  changeView(newView) {
    this.calendar.changeView(newView);

    currentDate: this.calendar.view.title;
  }

  ngOnInit() {
    this.initCalendar();
    this.getCharts();
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
      this.getChart1();
      this.getChart2();
      this.getChart3();
    });
  }

  getChart1() {
    // Themes begin
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("mb1", am4charts.PieChart);

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

  getChart2() {
    // Themes begin
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("mb2", am4charts.XYChart);

    let data = [];
    let value = 50;
    for (var i = 0; i < 300; i++) {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(i);
      value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: date, value: value });
    }

    chart.data = data;

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 60;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.tooltipText = "{value}";

    series.tooltip.pointerOrientation = "vertical";

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.snapToSeries = series;
    chart.cursor.xAxis = dateAxis;

    //chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarX = new am4core.Scrollbar();
  }

  getChart3() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("mb41", am4plugins_timeline.SerpentineChart);
    chart.curveContainer.padding(100, 20, 50, 20);
    chart.levelCount = 3;
    chart.yAxisRadius = am4core.percent(20);
    chart.yAxisInnerRadius = am4core.percent(2);
    chart.maskBullets = false;

    let colorSet = new am4core.ColorSet();

    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";
    chart.dateFormatter.dateFormat = "HH";

    chart.data = [
      {
        category: "",
        start: "2019-01-10 06:00",
        end: "2019-01-10 07:00",
        color: colorSet.getIndex(15),
        text: "I will have\na healthy day today!",
        textDisabled: false,
        icon: "/wp-content/uploads/assets/timeline/timeline0.svg",
      },
      {
        category: "",
        start: "2019-01-10 07:00",
        end: "2019-01-10 08:00",
        color: colorSet.getIndex(14),
        icon: "/wp-content/uploads/assets/timeline/timeline1.svg",
      },
      {
        category: "",
        start: "2019-01-10 08:00",
        end: "2019-01-10 09:00",
        color: colorSet.getIndex(13),
        icon: "/wp-content/uploads/assets/timeline/timeline2.svg",
      },
      {
        category: "",
        start: "2019-01-10 09:00",
        end: "2019-01-10 10:00",
        color: colorSet.getIndex(12),
        icon: "/wp-content/uploads/assets/timeline/timeline2.svg",
      },
      {
        category: "",
        start: "2019-01-10 10:00",
        end: "2019-01-10 12:00",
        color: colorSet.getIndex(11),
        icon: "/wp-content/uploads/assets/timeline/timeline2.svg",
      },
      {
        category: "",
        start: "2019-01-10 12:00",
        end: "2019-01-10 13:00",
        color: colorSet.getIndex(10),
        icon: "/wp-content/uploads/assets/timeline/timeline1.svg",
      },
      {
        category: "",
        start: "2019-01-10 13:00",
        end: "2019-01-10 14:00",
        color: colorSet.getIndex(9),
        text: "One beer doesn't count.",
        textDisabled: false,
        icon: "/wp-content/uploads/assets/timeline/timeline3.svg",
      },
      {
        category: "",
        start: "2019-01-10 14:00",
        end: "2019-01-10 16:00",
        color: colorSet.getIndex(8),
        icon: "/wp-content/uploads/assets/timeline/timeline2.svg",
      },
      {
        category: "",
        start: "2019-01-10 16:00",
        end: "2019-01-10 17:00",
        color: colorSet.getIndex(7),
        icon: "/wp-content/uploads/assets/timeline/timeline4.svg",
      },
      {
        category: "",
        start: "2019-01-10 17:00",
        end: "2019-01-10 20:00",
        color: colorSet.getIndex(6),
        icon: "/wp-content/uploads/assets/timeline/timeline2.svg",
      },
      {
        category: "",
        start: "2019-01-10 20:00",
        end: "2019-01-10 20:30",
        color: colorSet.getIndex(5),
        icon: "/wp-content/uploads/assets/timeline/timeline3.svg",
      },
      {
        category: "",
        start: "2019-01-10 20:30",
        end: "2019-01-10 21:30",
        color: colorSet.getIndex(4),
        icon: "/wp-content/uploads/assets/timeline/timeline3.svg",
      },
      {
        category: "",
        start: "2019-01-10 21:30",
        end: "2019-01-10 22:00",
        color: colorSet.getIndex(3),
        icon: "/wp-content/uploads/assets/timeline/dance.svg",
      },
      {
        category: "",
        start: "2019-01-10 22:00",
        end: "2019-01-10 23:00",
        color: colorSet.getIndex(2),
        icon: "/wp-content/uploads/assets/timeline/timeline5.svg",
      },
      {
        category: "",
        start: "2019-01-10 23:00",
        end: "2019-01-11 00:00",
        color: colorSet.getIndex(1),
        icon: "/wp-content/uploads/assets/timeline/timeline6.svg",
      },
      {
        category: "",
        start: "2019-01-11 00:00",
        end: "2019-01-11 01:00",
        color: colorSet.getIndex(0),
        text: "Damn...",
        textDisabled: false,
        icon: "/wp-content/uploads/assets/timeline/timeline7.svg",
      },
    ];

    chart.fontSize = 10;
    chart.tooltipContainer.fontSize = 10;

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis() as any);
    
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.paddingRight = 25;
    categoryAxis.renderer.minGridDistance = 10;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis() as any);
    
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = { count: 30, timeUnit: "minute" };
    dateAxis.renderer.tooltipLocation = 0;
    dateAxis.renderer.line.strokeDasharray = "1,4";
    dateAxis.renderer.line.strokeOpacity = 0.5;
    dateAxis.tooltip.background.fillOpacity = 0.2;
    dateAxis.tooltip.background.cornerRadius = 5;
    dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor(
      "alternativeBackground"
    );
    dateAxis.tooltip.label.paddingTop = 7;
    dateAxis.endLocation = 0;
    dateAxis.startLocation = -0.5;

    let labelTemplate = dateAxis.renderer.labels.template;
    labelTemplate.verticalCenter = "middle";
    labelTemplate.fillOpacity = 0.4;
    labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor(
      "background"
    );
    labelTemplate.background.fillOpacity = 1;
    labelTemplate.padding(7, 7, 7, 7);

    let series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
    series.columns.template.height = am4core.percent(15);

    series.dataFields.openDateX = "start";
    series.dataFields.dateX = "end";
    series.dataFields.categoryY = "category";
    series.baseAxis = categoryAxis;
    series.columns.template.propertyFields.fill = "color"; // get color from data
    series.columns.template.propertyFields.stroke = "color";
    series.columns.template.strokeOpacity = 0;
    series.columns.template.fillOpacity = 0.6;

    let imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet1.locationX = 1;
    imageBullet1.propertyFields.stroke = "color";
    imageBullet1.background.propertyFields.fill = "color";
    imageBullet1.image = new am4core.Image();
    imageBullet1.image.propertyFields.href = "icon";
    imageBullet1.image.scale = 0.5;
    imageBullet1.circle.radius = am4core.percent(100);
    imageBullet1.dy = -5;

    let textBullet = series.bullets.push(new am4charts.LabelBullet());
    textBullet.label.propertyFields.text = "text";
    textBullet.disabled = true;
    textBullet.propertyFields.disabled = "textDisabled";
    textBullet.label.strokeOpacity = 0;
    textBullet.locationX = 1;
    textBullet.dy = -100;
    textBullet.label.textAlign = "middle";

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.align = "center";
    chart.scrollbarX.width = am4core.percent(75);
    chart.scrollbarX.opacity = 0.5;

    let cursor = new am4plugins_timeline.CurveCursor();
    chart.cursor = cursor;
    cursor.xAxis = dateAxis;
    cursor.yAxis = categoryAxis;
    cursor.lineY.disabled = true;
    cursor.lineX.strokeDasharray = "1,4";
    cursor.lineX.strokeOpacity = 1;

    dateAxis.renderer.tooltipLocation2 = 0;
    categoryAxis.cursorTooltipEnabled = false;

    let label = chart.createChild(am4core.Label);
    label.text = "";
    label.isMeasured = false;
    label.y = am4core.percent(40);
    label.x = am4core.percent(50);
    label.horizontalCenter = "middle";
    label.fontSize = 20;
  }

  initCalendar() {
    this.calendar = new Calendar(document.getElementById("calendar"), {
      plugins: [interaction, dayGridPlugin],
      defaultView: "dayGridMonth",
      selectable: true,
      editable: true,
      events: this.events,
      views: {
        month: {
          titleFormat: { month: "long", year: "numeric" },
        },
        agendaWeek: {
          titleFormat: { month: "long", year: "numeric", day: "numeric" },
        },
        agendaDay: {
          titleFormat: { month: "short", year: "numeric", day: "numeric" },
        },
      },
      // Add new event
      select: (info) => {
        this.addModal = this.modalService.show(this.modalAdd, this.default);
        this.startDate = info.startStr;
        this.endDate = info.endStr;
      },
      // Edit calendar event action
      eventClick: ({ event }) => {
        this.eventId = event.id;
        this.eventTitle = event.title;
        this.eventDescription = event.extendedProps.description;
        this.radios = "bg-danger";
        this.event = event;
        this.editModal = this.modalService.show(this.modalEdit, this.default);
      },
    });
    this.calendar.render();
  }
  getNewEventTitle(e) {
    this.eventTitle = e.target.value;
  }
  getNewEventDescription(e) {
    this.eventDescription = e.target.value;
  }
  addNewEvent() {
    this.events.push({
      title: this.eventTitle,
      start: this.startDate,
      end: this.endDate,
      className: this.radios,
      id: this.events.length,
    });
    this.calendar.addEvent({
      title: this.eventTitle,
      start: this.startDate,
      end: this.endDate,
      className: this.radios,
      id: this.events.length,
    });
    this.addModal.hide();
    this.radios = "bg-danger";
    (this.eventTitle = undefined),
      (this.eventDescription = undefined),
      (this.eventId = undefined),
      (this.event = undefined);
  }
  deleteEventSweetAlert() {
    this.editModal.hide();
    swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn btn-danger",
        cancelButtonClass: "btn btn-secondary",
        confirmButtonText: "Yes, delete it!",
        buttonsStyling: false,
      })
      .then((result) => {
        if (result.value) {
          this.events = this.events.filter(
            (prop) => prop.id + "" !== this.eventId
          );
          this.initCalendar();
          swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            type: "success",
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: false,
          });
        }
      });
    this.radios = "bg-danger";
    (this.eventTitle = undefined),
      (this.eventDescription = undefined),
      (this.eventId = undefined),
      (this.event = undefined);
  }
  updateEvent() {
    this.events = this.events.map((prop, key) => {
      if (prop.id + "" === this.eventId + "") {
        return {
          ...prop,
          title: this.eventTitle,
          className: this.radios,
          description: this.eventDescription,
        };
      } else {
        return prop;
      }
    });
    this.radios = "bg-danger";
    (this.eventTitle = undefined),
      (this.eventDescription = undefined),
      (this.eventId = undefined),
      (this.event = undefined);
    this.initCalendar();
    this.editModal.hide();
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide();
    this.registerForm.reset();
  }

  confirm() {
    swal
      .fire({
        title: "Pengesahan",
        text: "Anda pasti untuk mencipta ini?",
        type: "info",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Pasti",
        showCancelButton: true,
        cancelButtonClass: "btn btn-danger",
        cancelButtonText: "Batal",
      })
      .then((result) => {
        if (result.value) {
          this.register();
        }
      });
  }

  register() {
    swal
      .fire({
        title: "Berjaya",
        text: "Data baru telah dicipta",
        type: "success",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Tutup",
      })
      .then((result) => {
        if (result.value) {
          this.modal.hide();
          this.registerForm.reset();
        }
      });
  }

  reject() {
    swal
      .fire({
        title: "Batal",
        text: "Anda pasti untuk membatalkan ini?",
        type: "warning",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Pasti",
        showCancelButton: true,
        cancelButtonClass: "btn btn-danger",
        cancelButtonText: "Tidak",
      })
      .then((result) => {
        if (result.value) {
          this.cancel();
        }
      });
  }

  cancel() {
    swal
      .fire({
        title: "Berjaya",
        text: "Data telah disahkan batal",
        type: "success",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Tutup",
      })
      .then((result) => {
        if (result.value) {
          this.modal.hide();
          this.registerForm.reset();
        }
      });
  }
}
