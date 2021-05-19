import { Component, NgZone, OnDestroy, OnInit, TemplateRef } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import swal from "sweetalert2";
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
  selector: "app-aduan",
  templateUrl: "./aduan.component.html",
  styleUrls: ["./aduan.component.scss"],
})
export class AduanComponent implements OnInit, OnDestroy {
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

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered",
  };

  // Form
  registerForm: FormGroup;

  constructor(
    private zone: NgZone,
    private modalService: BsModalService,
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

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ]))
    })
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
    let chart = am4core.create("adu1", am4charts.XYChart);
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
        country: "Mei",
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
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("adu2", am4charts.PieChart);

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

  getChart3() {
    // Themes begin
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("adu3", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        country: "A",
        litres: 501.9,
      },
      {
        country: "B",
        litres: 301.9,
      },
      {
        country: "C",
        litres: 201.1,
      },
      {
        country: "D",
        litres: 165.8,
      },
      {
        country: "E",
        litres: 139.9,
      },
    ];

    chart.innerRadius = 60;

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
    this.registerForm.reset()
  }

  confirm() {
    swal.fire({
      title: "Pengesahan",
      text: "Anda pasti untuk mencipta ini?",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Pasti",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      cancelButtonText: "Batal"
    }).then((result) => {
      if (result.value) {
        this.register()
      }
    })
  }

  register() {
    swal.fire({
      title: "Berjaya",
      text: "Data baru telah dicipta",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Tutup"
    }).then((result) => {
      if (result.value) {
        this.modal.hide()
        this.registerForm.reset()
      }
    })
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
