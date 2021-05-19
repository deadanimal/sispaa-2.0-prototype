import { Component, OnInit, ElementRef } from "@angular/core";
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from "@angular/router";
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from "@angular/common";
import { NotifyService } from "src/app/shared/handler/notify/notify.service";
import { UsersService } from "src/app/shared/services/users/users.service";
import { User } from "src/app/shared/services/users/users.model";
import { JwtService } from "src/app/shared/handler/jwt/jwt.service";
import { LoadingBarService } from "@ngx-loading-bar/core";

@Component({
  selector: "app-home-navbar",
  templateUrl: "./home-navbar.component.html",
  styleUrls: ["./home-navbar.component.scss"],
})
export class HomeNavbarComponent implements OnInit {
  // Image
  imgLogo = "assets/img/logo/jata-negara.png";

  focus;
  listTitles: any[];
  location: Location;

  sidenavOpen: boolean = true;

  // Data
  user: User;

  // Image
  imgAvatar = "assets/img/default/avatar.png";

  constructor(
    location: Location,
    private userService: UsersService,
    private jwtService: JwtService,
    private notifyService: NotifyService,
    private element: ElementRef,
    private router: Router,
    private loadingBar: LoadingBarService
  ) {
    this.user = this.userService.user;
    this.location = location;
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }
      if (event instanceof NavigationEnd) {
        // Hide loading indicator

        if (window.innerWidth < 1200) {
          document.body.classList.remove("g-sidenav-pinned");
          document.body.classList.add("g-sidenav-hidden");
          this.sidenavOpen = false;
        }
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });
  }

  ngOnInit() {
    console.log("as: ", this.user);
  }
  openPage(path: string) {
    this.router.navigate([path]);
  }

  setActive(path: string) {
    if (this.router.url.includes(path)) {
      return "text-white";
    } else {
      return "";
    }
  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return "Dashboard";
  }

  navigatePage(path: String) {
    if (path == "notifications") {
      return this.router.navigate(["/global/notifications"]);
    } else if (path == "login") {
      return this.router.navigate(["/auth/login"]);
    } else if (path == "register") {
      return this.router.navigate(["/auth/register"]);
    } else if (path == "home") {
      return this.router.navigate(["/auth/login"]);
    }
  }

  successMessage() {
    let title = "Success";
    let message = "Loging in right now";
    this.notifyService.openToastr(title, message);
  }

  logout() {
    this.jwtService.destroyToken("accessToken");
    this.jwtService.destroyToken("removeToken");
    this.navigatePage("home");
  }

  openSearch() {
    document.body.classList.add("g-navbar-search-showing");
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-showing");
      document.body.classList.add("g-navbar-search-show");
    }, 150);
    setTimeout(function () {
      document.body.classList.add("g-navbar-search-shown");
    }, 300);
  }

  closeSearch() {
    document.body.classList.remove("g-navbar-search-shown");
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-show");
      document.body.classList.add("g-navbar-search-hiding");
    }, 150);
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-hiding");
      document.body.classList.add("g-navbar-search-hidden");
    }, 300);
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-hidden");
    }, 500);
  }

  openSidebar() {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
      this.sidenavOpen = false;
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
      this.sidenavOpen = true;
    }
  }

  toggleSidenav() {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
      this.sidenavOpen = false;
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
      this.sidenavOpen = true;
    }
  }

  goPage1() {
    this.router.navigate(["/pages/cart"]);
  }

  goPageMain() {
    this.router.navigate(["/pages/home"]);
  }
}
