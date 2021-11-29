import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] =[
        new Recipe('Steak', 
                   'A delicious steak with fries', 
                   'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg',
                   [
                       new Ingredient('Meat', 1),
                       new Ingredient('Potatoes', 5),
                       new Ingredient('Onion', 1)

                   ]), 
        new Recipe('Pasta', 
                  'Incredible pasta al Pesto',
                  'https://cdn.pixabay.com/photo/2016/11/23/18/31/pasta-1854245_1280.jpg',
                  [
                      new Ingredient('Pasta', 1),
                      new Ingredient('Tomatoes', 2),
                      new Ingredient('Pesto Sauce', 1)
                  ])
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}