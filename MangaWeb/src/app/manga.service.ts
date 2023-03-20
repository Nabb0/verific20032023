import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor(private http: HttpClient) {  }

  SearchManga(query:string){
    const url =`https://api.jikan.moe/v4/manga?q=${query}`;

    let ObsManga = this.http.get(url);
    return ObsManga;
  }
}