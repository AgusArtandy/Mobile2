import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1',
      'Gading Apartment',
      '2BR, Luas dan Cozy Bener!',
      'https://sg2-cdn.pgimgs.com/developer-listing/4029807/OUPHO.96835633.V800/Apartemen-Gardenia-Bogor-Bogor-Indonesia.jpg',
      10000000
    ),
    new Place(
      'p2',
      'Serpong Apartment',
      'Apartment Romantis Bener!',
      'https://s3-ap-southeast-1.amazonaws.com/assets-blog.spacestock.com/uploads/2018/11/11203742/Apartemen-795x470.jpg',
      12500000
    ),
    new Place(
      'p3',
      'BSD Apartment',
      'Apartment Murah Meriah',
      'https://www.gulalives.co/wp-content/uploads/2018/07/apartemen.jpg',
      5500000
    ),

  ];

  get places(){
    return[...this._places];
  }
}
