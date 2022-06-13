import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./pages/index/index.component";
import {AboutComponent} from "./pages/about/about.component";

const routes: Routes = [
  {path: 'home', component: IndexComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
