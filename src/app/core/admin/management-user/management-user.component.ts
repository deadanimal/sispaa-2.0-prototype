import {
  Component,
  OnInit,
  OnDestroy,
  NgZone,
  TemplateRef,
} from "@angular/core";
import { User } from "src/assets/mock/admin-user/users.model";
import { MocksService } from "src/app/shared/services/mocks/mocks.service";

import * as moment from "moment";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
am4core.useTheme(am4themes_animated);

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
  selector: "app-management-user",
  templateUrl: "./management-user.component.html",
  styleUrls: ["./management-user.component.scss"],
})
export class ManagementUserComponent implements OnInit, OnDestroy {
  // Table
  entries: number = 5;
  selected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any = [
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

  // Chart
  private chart: any;
  

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered",
  };

  // Form
  registerForm: FormGroup;
  registerFormMessages = {
    name: [{ type: "required", message: "Name is required" }],
    email: [
      { type: "required", message: "Email is required" },
      { type: "email", message: "A valid email is required" },
    ],
  };

  constructor(
    private mockService: MocksService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private zone: NgZone
  ) {
    this.tableTemp = this.tableRows.map((prop, key) => {
      return {
        ...prop,
        id: key,
      };
    });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: new FormControl("", Validators.compose([Validators.required])),
      email: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.email])
      ),
    });
    this.getCharts();
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }


  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart();
    });
  }

  getChart() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

    chart.data = [
      {
        country: "Januari",
        value: 3025,
      },
      {
        country: "Februari",
        value: 1882,
      },
      {
        country: "Mac",
        value: 1809,
      },
      {
        country: "April",
        value: 1322,
      },
      {
        country: "May",
        value: 1122,
      },
      {
        country: "Jun",
        value: -1114,
      },
      {
        country: "Julai",
        value: -984,
      },
      {
        country: "Ogos",
        value: 711,
      },
      {
        country: "September",
        value: 665,
      },
      {
        country: "Oktober",
        value: -580,
      },
      {
        country: "November",
        value: 443,
      },
      {
        country: "Disember",
        value: 441,
      },
    ];

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.minGridDistance = 40;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    let series = chart.series.push(new am4charts.CurvedColumnSeries());
    series.dataFields.categoryX = "country";
    series.dataFields.valueY = "value";
    series.tooltipText = "{valueY.value}";
    series.columns.template.strokeOpacity = 0;

    series.columns.template.fillOpacity = 0.75;

    let hoverState = series.columns.template.states.create("hover");
    hoverState.properties.fillOpacity = 1;
    hoverState.properties.tension = 0.4;

    chart.cursor = new am4charts.XYCursor();

    // Add distinctive colors for each column using adapter
    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    chart.scrollbarX = new am4core.Scrollbar();
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
        title: "Confirmation",
        text: "Are you sure to create this new user?",
        type: "info",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-info",
        confirmButtonText: "Confirm",
        showCancelButton: true,
        cancelButtonClass: "btn btn-danger",
        cancelButtonText: "Cancel",
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
        title: "Success",
        text: "A new user has been created!",
        type: "success",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Close",
      })
      .then((result) => {
        if (result.value) {
          this.modal.hide();
          this.registerForm.reset();
        }
      });
  }
}
