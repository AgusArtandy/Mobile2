import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[]=[
    {
      id:'r1',
      title:'Gado-Gado',
      imageUrl:'https://i2.wp.com/www.thewanderingmatilda.com/wp-content/uploads/2018/06/Gado-Gado-Indonesian-Satay-Salad.jpeg.jpeg?fit=1080%2C1080&ssl=1',
      ingridients:['Lontong','Kankung','Bumbu Kacang']
    },
    {
      id:'r2',
      title:'Pecel',
      imageUrl:'https://cdns.klimg.com/merdeka.com/i/w/news/2019/03/13/1060401/670x335/cara-membuat-bumbu-pecel-yang-enak-dan-tahan-lama-disimpan.jpg',
      ingridients:['Lontong','Kankung','Bumbu Kacang']
    },
    {
      id:'r3',
      title:'Sate',
      imageUrl:'https://rasamalaysia.com/wp-content/uploads/2009/11/sate-recipe-sate-babi-sate-ayam-thumb.jpg',
      ingridients:['Lontong','Daging','Bumbu Kacang']
    },
  ];

  constructor() { }

  getAllRecipes(){
    return[...this.recipes];
  }

  getRecipe(recipeId: string){
    return this.recipes.find(r=> r.id == recipeId)
  }

  hapusresep(recipeId:string){
    var find_recipe = this.recipes.find(r=> r.id == recipeId);
    var idx = this.recipes.indexOf(find_recipe);

    if(idx !== -1){
      return this.recipes.splice(idx,1);
    }
  }
}
