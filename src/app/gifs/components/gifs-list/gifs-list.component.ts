import { Component, input } from '@angular/core';
import { GifsItemComponent } from "./gifs-item/gifs-item.component";
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'gifs-list',
  imports: [GifsItemComponent],
  templateUrl: './gifs-list.component.html',
})
export class GifsListComponent {
  gifs = input.required<Gif[]>();
 }
