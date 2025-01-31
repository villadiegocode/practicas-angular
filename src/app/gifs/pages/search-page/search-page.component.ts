import { Component, inject, signal } from '@angular/core';
import { GifsListComponent } from "../../components/gifs-list/gifs-list.component";
import { Gif } from '../../interfaces/gif.interface';
import { GifService } from '../../services/gifs.service';


@Component({
  selector: 'app-search-page',
  imports: [GifsListComponent],
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent {
  gifs = signal<Gif[]>([]);
  gifService = inject(GifService);

  onSearch(query: string){
    this.gifService.searchGifs(query).subscribe( resp => {
      this.gifs.set(resp)

    });



  }
 }
