import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./pages/index/index.component";
import {AboutComponent} from "./pages/about/about.component";
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { UpdateComponent } from './pages/update/update.component';
import { CdnComponent } from './pages/cdn/cdn.component';
import { StructureComponent } from './pages/structure/structure.component';

const routes: Routes = [
  {path: 'home', component: IndexComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'about', component: AboutComponent},
  {path: 'getting-started', component: GettingStartedComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'cdn', component: CdnComponent},
  {path: 'structure', component: StructureComponent},
  // {path: 'sample', component: },
  // {path: '', component: },
  // {path: '', component: },
  // {path: '', component: },
  // {path: '', component: },
  // {path: '', component: },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
