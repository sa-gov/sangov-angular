import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlertBannerComponent } from './ssi/alert-banner/alert-banner.component';
import { AskBarComponent } from './ssi/ask-bar/ask-bar.component';
import { AutosuggestComponent } from './ssi/autosuggest/autosuggest.component';
import { BrandingComponent } from './ssi/branding/branding.component';
import { BrandingFullWidthComponent } from './ssi/branding-full-width/branding-full-width.component';
import { BrandingFullWidthIconsComponent } from './ssi/branding-full-width-icons/branding-full-width-icons.component';
import { BrandingLightgreyComponent } from './ssi/branding-lightgrey/branding-lightgrey.component';
import { ClipboardBarComponent } from './ssi/clipboard-bar/clipboard-bar.component';
import { GlobalFooterComponent } from './ssi/global-footer/global-footer.component';
import { GoogleCseComponent } from './ssi/google-cse/google-cse.component';
import { HeaderLargeBannerComponent } from './ssi/header-large-banner/header-large-banner.component';
import { HeaderPrimaryBannerComponent } from './ssi/header-primary-banner/header-primary-banner.component';
import { HeaderSingleBannerComponent } from './ssi/header-single-banner/header-single-banner.component';
import { HeaderSlideshowBannerComponent } from './ssi/header-slideshow-banner/header-slideshow-banner.component';
import { LocationBarComponent } from './ssi/location-bar/location-bar.component';
import { MobileControlsComponent } from './ssi/mobile-controls/mobile-controls.component';
import { NavigationComponent } from './ssi/navigation/navigation.component';
import { NewsComponent } from './ssi/news/news.component';
import { SearchComponent } from './ssi/search/search.component';
import { SearchMobileComponent } from './ssi/search-mobile/search-mobile.component';
import { SearchResultsComponent } from './ssi/search-results/search-results.component';
import { SearchResultsStandaloneComponent } from './ssi/search-results-standalone/search-results-standalone.component';
import { SectionCounterPieChartsComponent } from './ssi/section-counter-pie-charts/section-counter-pie-charts.component';
import { SectionDataVisualizationsComponent } from './ssi/section-data-visualizations/section-data-visualizations.component';
import { SectionFooter2Component } from './ssi/section-footer2/section-footer2.component';
import { SectionGreenBuildingsComponent } from './ssi/section-green-buildings/section-green-buildings.component';
import { SectionGreenStatsComponent } from './ssi/section-green-stats/section-green-stats.component';
import { SectionIconBlocksComponent } from './ssi/section-icon-blocks/section-icon-blocks.component';
import { SectionInfoBlocksComponent } from './ssi/section-info-blocks/section-info-blocks.component';
import { SectionMobileGalleryComponent } from './ssi/section-mobile-gallery/section-mobile-gallery.component';
import { SectionOpenDataComponent } from './ssi/section-open-data/section-open-data.component';
import { SectionRelatedLinksComponent } from './ssi/section-related-links/section-related-links.component';
import { SectionServiceAdvertisementComponent } from './ssi/section-service-advertisement/section-service-advertisement.component';
import { SectionServiceFaqComponent } from './ssi/section-service-faq/section-service-faq.component';
import { SectionServiceGroupComponent } from './ssi/section-service-group/section-service-group.component';
import { SectionServiceIconsComponent } from './ssi/section-service-icons/section-service-icons.component';
import { SectionServicePanesComponent } from './ssi/section-service-panes/section-service-panes.component';
import { ServiceCardComponent } from './ssi/service-card/service-card.component';
import { SettingsBarComponent } from './ssi/settings-bar/settings-bar.component';
import { UtilityHeaderComponent } from './ssi/utility-header/utility-header.component';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { AccessibilityComponent } from './pages/accessibility/accessibility.component';
import { AppRoutingModule } from './app-routing.module';
import { AgencyDirectoryComponent } from './pages/agency-directory/agency-directory.component';
import { AgencyProfileComponent } from './pages/agency-profile/agency-profile.component';
import { BusinessProfileComponent } from './pages/business-profile/business-profile.component';
import { CdnComponent } from './pages/cdn/cdn.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GeneralLandingComponent } from './pages/general-landing/general-landing.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ProfileLandingComponent } from './pages/profile-landing/profile-landing.component';
import { SearchDirectoryComponent } from './pages/search-directory/search-directory.component';
import { SerpComponent } from './pages/serp/serp.component';
import { ServiceDirectoryComponent } from './pages/service-directory/service-directory.component';
import { ServiceProfileComponent } from './pages/service-profile/service-profile.component';
import { ShortcutsComponent } from './pages/shortcuts/shortcuts.component';
import { StructureComponent } from './pages/structure/structure.component';
import { UpdateComponent } from './pages/update/update.component';
import { UseComponent } from './pages/use/use.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertBannerComponent,
    AskBarComponent,
    AutosuggestComponent,
    BrandingComponent,
    BrandingFullWidthComponent,
    BrandingFullWidthIconsComponent,
    BrandingLightgreyComponent,
    ClipboardBarComponent,
    GlobalFooterComponent,
    GoogleCseComponent,
    HeaderLargeBannerComponent,
    HeaderPrimaryBannerComponent,
    HeaderSingleBannerComponent,
    HeaderSlideshowBannerComponent,
    LocationBarComponent,
    MobileControlsComponent,
    NavigationComponent,
    NewsComponent,
    SearchComponent,
    SearchMobileComponent,
    SearchResultsComponent,
    SearchResultsStandaloneComponent,
    SectionCounterPieChartsComponent,
    SectionDataVisualizationsComponent,
    SectionFooter2Component,
    SectionGreenBuildingsComponent,
    SectionGreenStatsComponent,
    SectionIconBlocksComponent,
    SectionInfoBlocksComponent,
    SectionMobileGalleryComponent,
    SectionOpenDataComponent,
    SectionRelatedLinksComponent,
    SectionServiceAdvertisementComponent,
    SectionServiceFaqComponent,
    SectionServiceGroupComponent,
    SectionServiceIconsComponent,
    SectionServicePanesComponent,
    ServiceCardComponent,
    SettingsBarComponent,
    UtilityHeaderComponent,
    IndexComponent,
    AboutComponent,
    AccessibilityComponent,
    AgencyDirectoryComponent,
    AgencyProfileComponent,
    BusinessProfileComponent,
    CdnComponent,
    ContactComponent,
    GeneralLandingComponent,
    GettingStartedComponent,
    InstructionsComponent,
    PrivacyComponent,
    ProfileLandingComponent,
    SearchDirectoryComponent,
    SerpComponent,
    ServiceDirectoryComponent,
    ServiceProfileComponent,
    ShortcutsComponent,
    StructureComponent,
    UpdateComponent,
    UseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
