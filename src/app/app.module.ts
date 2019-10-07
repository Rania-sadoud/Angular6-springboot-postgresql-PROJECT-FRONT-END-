import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { PresentationComponent } from './RGAA/presentation/presentation.component';
import { ListCatComponent } from './RGAA/cat/list-cat/list-cat.component';
import { DetailsCatComponent } from './RGAA/cat/details-cat/details-cat.component';
import { SearchCatComponent } from './RGAA/cat/search-cat/search-cat.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { SmallListComponent } from './RGAA/cat/small-list/small-list.component';

import { DetailsRgaacatComponent } from './RGAA/rgaa-cat/details-rgaacat/details-rgaacat.component';
import { ListRgaacatComponent } from './RGAA/rgaa-cat/list-rgaacat/list-rgaacat.component';
import { SmallListRgaacatComponent } from './RGAA/rgaa-cat/small-list-rgaacat/small-list-rgaacat.component';
import { AddRgaaComponent } from './RGAA/rgaa-cat/add-rgaa/add-rgaa.component';
import { RgaaInfosFinaleComponent } from './RGAA/rgaa-cat/rgaa-infos-finale/rgaa-infos-finale.component';
import { ModifRgaaComponent } from './RGAA/rgaa-cat/rgaa-infos-finale/modif-rgaa/modif-rgaa.component';
import { ModifCatComponent } from './RGAA/rgaa-cat/list-rgaacat/modif-cat/modif-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    PresentationComponent,
    ListCatComponent,
    DetailsCatComponent,
     ButtonsComponent,
     DashboardComponent,
    FormsComponent,
    ButtonsComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    AlertsComponent,
    AccordionsComponent,
    BadgesComponent,
    ProgressbarComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    DropdownComponent,
    TooltipsComponent,
    CarouselComponent,
    TabsComponent,
    SearchCatComponent,
    DetailsUploadComponent,
    ListUploadComponent,
    FormUploadComponent,
    SmallListComponent,
    DetailsRgaacatComponent,
    ListRgaacatComponent,
    SmallListRgaacatComponent,
    AddRgaaComponent,
    RgaaInfosFinaleComponent,
    ModifRgaaComponent,
    ModifCatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    
  ],
  providers: [],
  exports: [ DetailsCatComponent,  SmallListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
