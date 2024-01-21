import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglerecipeComponent } from './singlerecipe/singlerecipe/singlerecipe.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CardcontainerComponent } from './cardcontainer/cardcontainer.component';

const routes: Routes = [

  {path:'',component:CardcontainerComponent},
  {path:'category/:category',component:CardcontainerComponent},
  {path:'search/:keyword',component:CardcontainerComponent},
  {path:'recipe/:id',component:SinglerecipeComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
