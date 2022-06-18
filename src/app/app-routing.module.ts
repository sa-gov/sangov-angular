import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./pages/index/index.component";
import {AboutComponent} from "./pages/about/about.component";
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { UpdateComponent } from './pages/update/update.component';
import { CdnComponent } from './pages/cdn/cdn.component';
import { StructureComponent } from './pages/structure/structure.component';
import { AccessibilityComponent } from './pages/accessibility/accessibility.component';
import { AgencyDirectoryComponent } from './pages/agency-directory/agency-directory.component';
import { AgencyProfileComponent } from './pages/agency-profile/agency-profile.component';
import { BusinessProfileComponent } from './pages/business-profile/business-profile.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GeneralLandingComponent } from './pages/general-landing/general-landing.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ProfileLandingComponent } from './pages/profile-landing/profile-landing.component';
import { SearchDirectoryComponent } from './pages/search-directory/search-directory.component';
import { SerpComponent } from './pages/serp/serp.component';
import { ServiceDirectoryComponent } from './pages/service-directory/service-directory.component';
import { ServiceProfileComponent } from './pages/service-profile/service-profile.component';
import { ShortcutsComponent } from './pages/shortcuts/shortcuts.component';
import { UseComponent } from './pages/use/use.component';

const routes: Routes = [
  {path: 'home', component: IndexComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'about', component: AboutComponent},
  {path: 'accessibility', component: AccessibilityComponent},
  {path: 'agency-directory', component: AgencyDirectoryComponent},
  {path: 'agency-profile', component: AgencyProfileComponent},
  {path: 'business-profile', component: BusinessProfileComponent},
  {path: 'cdn', component: CdnComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'general-landing', component: GeneralLandingComponent},
  {path: 'getting-started', component: GettingStartedComponent},
  {path: 'instructions', component: InstructionsComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'profile-landing', component: ProfileLandingComponent},
  {path: 'search-directory', component: SearchDirectoryComponent},
  {path: 'serp', component: SerpComponent},
  {path: 'service-directory', component: ServiceDirectoryComponent},
  {path: 'service-profile', component: ServiceProfileComponent},
  {path: 'shortcuts', component: ShortcutsComponent},
  {path: 'structure', component: StructureComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'use', component: UseComponent},
  // {path: 'sample', component: },
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
