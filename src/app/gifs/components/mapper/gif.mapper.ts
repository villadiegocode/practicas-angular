import { Gif } from "../../interfaces/gif.interface";
import { GiphyItem } from "../../interfaces/giphy.interface";


export class GifMapper {

  static mapGiphyItemToGif(item: GiphyItem): Gif{
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url
    }
  }

  static mapGiphyItemsToGifArray(items: GiphyItem[] ){
    return items.map( this.mapGiphyItemToGif );
  }
}
