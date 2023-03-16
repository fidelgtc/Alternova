import {Component, OnInit} from '@angular/core';
import {SidenavService} from "../../services/sidenav.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  public isExpanded: Boolean;

  constructor(
    private _sidenav: SidenavService
  ) {
    this.isExpanded = localStorage.getItem('isExpanded') == 'true' || false
  }
  ngOnInit() {
    this._sidenav.isExpanded().subscribe(
      data => {
        this.isExpanded = data;
      }
    )
  }
}
