import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor() { }

  private expanded = new Subject<boolean>();

  isExpanded(): Observable<boolean> {
    return this.expanded.asObservable();
  }

  click(): void {
    localStorage.setItem( 'isExpanded', <string><any> !(localStorage.getItem('isExpanded') == 'true' || false) )
    this.expanded.next( localStorage.getItem('isExpanded') == 'true' || false );
  }
}
