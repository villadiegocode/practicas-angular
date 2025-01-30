import { Component, computed, inject, signal } from '@angular/core';
import { GifsListComponent } from "../../components/gifs-list/gifs-list.component";
import { GifService } from '../../services/gifs.service';
import { single } from 'rxjs';


@Component({
  selector: 'app-trending-page',
  imports: [GifsListComponent],
  templateUrl: './trending-page.component.html',

})
export class TrendingPageComponent {


  gifService = inject( GifService );


 }
