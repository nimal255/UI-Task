import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
 {path:'',component:SidenavComponent},
 {path:'quotes',component:QuotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
