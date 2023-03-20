import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MangaService } from '../manga.service';

@Component({
  selector: 'app-search-manga',
  templateUrl: './search-manga.component.html',
  styleUrls: ['./search-manga.component.css']
})
export class SearchMangaComponent {
  query!:string;
ObsManga!:Observable<object>; 
result!:any;

constructor(public Manga :MangaService){

}
submit(query:HTMLInputElement):void{
  if (!query.value) {
    return;
  }
  this.query=query.value;
  this.ObsManga =this.Manga.SearchManga(this.query);
  this.ObsManga.subscribe((data) => {this.result=data;console.log(this.result)});
  
  
}
}