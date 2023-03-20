import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemMangaComponent } from './item-manga/item-manga.component';
import { SearchMangaComponent } from './search-manga/search-manga.component';

const routes: Routes = [
  {path:'',component: SearchMangaComponent} ,
  {path:'item-manga',component: ItemMangaComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
