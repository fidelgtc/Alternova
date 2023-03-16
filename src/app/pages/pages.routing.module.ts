import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {HomeModule} from "./home/home.module";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent },
      { path: '**', redirectTo: 'home'}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HomeModule
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
