import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {LoaderService} from "../services/loader.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{

  isDarkTheme: boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public loaderService: LoaderService) {
    // console.log(this.isDarkTheme);
  }

  ngOnInit() {
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
  }

  themeSelection() {
    localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light")
  }

}
