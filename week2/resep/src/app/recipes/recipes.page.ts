import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  resep : Recipe;  
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  itemClickListener(recipeId){
    console.log(this.recipesService.getRecipe(recipeId));
  }

  hapusdata(recipeId){
    this.recipesService.hapusresep(recipeId);
  }
}