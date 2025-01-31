import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../components/mapper/gif.mapper';
import { map } from 'rxjs';

@Injectable({providedIn: 'root'})

export class GifService {
  private http = inject( HttpClient );
  private urlApi = environment.apiUrl;

  trendingGifs = signal<Gif[]>([]);
  isLoading = signal(true);
  params = {
    api_key : environment.giphyApiKey,
    limit: 25
  }

  constructor(){
    this.loadTrendingGifs();
  }

  loadTrendingGifs(){
    this.http.get<GiphyResponse>(`${this.urlApi}/gifs/trending`, {
      params: {
        ...this.params
      }
    }).subscribe( (resp)=> {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.set(gifs);
      this.isLoading.set(false);
    });


  }

  searchGifs(query: string){
   return this.http.get<GiphyResponse>(`${this.urlApi}/gifs/search`, {
      params: {
        ...this.params,
        q: query
      }
    }).pipe( map( resp => GifMapper.mapGiphyItemsToGifArray(resp.data)));
    //TODO: Histirial

  }



}
