import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test.',
      'https://www.simplyrecipes.com/thmb/YSlSLYrnOBfkzE3rD_uMSnA8dlA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-LEAD-3-8aa37af554cf4445a1e3e54fdc66e974.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Another Recipe',
      'This is a test.',
      'https://www.simplyrecipes.com/thmb/YSlSLYrnOBfkzE3rD_uMSnA8dlA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-LEAD-3-8aa37af554cf4445a1e3e54fdc66e974.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 2)]
    ),
  ];

  getRecipes() {
    // arrays are reference objects, use empty slice to create copy
    return this.recipes.slice();
  }
}
