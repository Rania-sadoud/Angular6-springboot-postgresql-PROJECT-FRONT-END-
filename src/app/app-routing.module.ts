import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PresentationComponent } from './RGAA/presentation/presentation.component';
import { ListCatComponent } from './RGAA/cat/list-cat/list-cat.component';
import { DetailsCatComponent } from './RGAA/cat/details-cat/details-cat.component';
import { SearchCatComponent } from './RGAA/cat/search-cat/search-cat.component';


import { DetailsRgaacatComponent } from './RGAA/rgaa-cat/details-rgaacat/details-rgaacat.component';
import { ListRgaacatComponent } from './RGAA/rgaa-cat/list-rgaacat/list-rgaacat.component';
import { SmallListRgaacatComponent } from './RGAA/rgaa-cat/small-list-rgaacat/small-list-rgaacat.component';

import { AddRgaaComponent } from './RGAA/rgaa-cat/add-rgaa/add-rgaa.component';

import { RgaaInfosFinaleComponent } from './RGAA/rgaa-cat/rgaa-infos-finale/rgaa-infos-finale.component';
import { ModifRgaaComponent } from './RGAA/rgaa-cat/rgaa-infos-finale/modif-rgaa/modif-rgaa.component';
import { ModifCatComponent } from './RGAA/rgaa-cat/list-rgaacat/modif-cat/modif-cat.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
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
const routes: Routes = [
  { path: 'RGAA/présentation',component: PresentationComponent},
  {path: 'RGAA/catégories',component: ListCatComponent},
  {path: 'RGAA/catégories/Détails', component: DetailsCatComponent}, 
  {path:'RGAA/catégories/Recherche',component: SearchCatComponent},

  {path: 'RGAA/rgaaofcat/:rgaa_catid',component: ListRgaacatComponent},
  {path: 'RGAA/rgaacat/Détails', component: DetailsRgaacatComponent},
  
  {path: 'RGAA/Ajouter/:rgaa_catid_foradd', component: AddRgaaComponent},
  {path: 'RGAA/Informations/:rgaacatid/:rgaa_id', component:  RgaaInfosFinaleComponent },
  {path: 'RGAA/ModifierRgaa/:rgaacatid/:rgaa_idmodif', component: ModifRgaaComponent },
  {path: 'RGAA/ModifierCategorieRgaa/:rgaa_catidmodif', component:ModifCatComponent },
  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'accordions', component: AccordionsComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'progressbar', component: ProgressbarComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'dropdowns', component: DropdownComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'tabs', component: TabsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
