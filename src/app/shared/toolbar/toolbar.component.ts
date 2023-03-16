import {Component, OnDestroy, OnInit} from '@angular/core';
import {SidenavService} from "../../services/sidenav.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy{

  public isExpanded: Boolean;
  constructor(
    private _sidenav: SidenavService
  ) {
    this.isExpanded = false;
 }

 ngOnInit() {

    this._sidenav.isExpanded().subscribe(
      data => {
          this.isExpanded = data;
      }
    )
 }

 public sidenav(): void{
    this._sidenav.click();
 }
  ngOnDestroy(): void {
  }
}
