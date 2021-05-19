import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import { CarouselConfig } from "ngx-bootstrap/carousel";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { Router } from "@angular/router";
import swal from "sweetalert2";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";
import * as moment from "moment";

import {
  LiveChatWidgetModel,
  LiveChatWidgetApiModel,
} from "@livechat/angular-widget";

const FC_TOKEN = "66be7290-cfe1-4a79-93b5-f76fb00c8b37"
const FC_URL = "https://wchat.freshchat.com"

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, AfterViewInit {
  
  public isLiveChatWidgetLoaded: boolean = false;
  public liveChatApi: LiveChatWidgetApiModel;

  @ViewChild("liveChatWidget", { static: false })
  public liveChatWidget: LiveChatWidgetModel;

  constructor(
    private router: Router,
    private modalService: BsModalService
  ) {}

  onChatLoaded(api: LiveChatWidgetApiModel): void {
    this.liveChatApi = api;
    this.isLiveChatWidgetLoaded = true;

    // Sometimes it can happen that LC_Invite is is still being loaded when onChatLoaded is called. To ensure that LC_Invite is loaded you can give additional check to onChatLoaded function:
    // api.on_after_load = () => {
    //   this.liveChatApi = api;
    //   this.isLiveChatWidgetLoaded = true;
    // };
  }

  onChatWindowMinimized() {
    console.log("minimized");
  }

  onChatWindowOpened() {
    console.log("opened");
  }

  openChatWindow(): void {
    if (this.isLiveChatWidgetLoaded) {
      this.liveChatWidget.openChatWindow();

      // You can also use methods directly on liveChatApi instance
      // for more details plese read our documentation
      // https://developers.livechatinc.com/docs/extending-ui/extending-chat-widget/javascript-api/#methods
      // this.liveChatApi.open_chat_window();
    }
  }

  hideChatWindow() {
    if (this.isLiveChatWidgetLoaded) {
      this.liveChatWidget.minimizeChatWindow();

      // You can also use methods directly on liveChatApi instance
      // for more details plese read our documentation
      // https://developers.livechatinc.com/docs/extending-ui/extending-chat-widget/javascript-api/#methods
      // this.liveChatApi.minimize_chat_window();
    }
  }

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
  }

  ngAfterViewInit() {

  }
}
