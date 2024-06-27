import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "../recipes/recipe.model";
import {Ingredient} from "../shared/ingredient.models";
import {ShoppingListService} from "./shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  constructor(private slService: ShoppingListService) {
  }

  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "Simple Test", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Meatfoodgroup.jpg/330px-Meatfoodgroup.jpg",
      [
        new Ingredient('ground beef', 2),
        new Ingredient('mustard', 5)
      ]),
    new Recipe("A Test Recipe 2", "Simple Test 2", "https://upload.wikimedia.org/wikipedia/commons/d/d8/Channelcat.jpg", [
      new Ingredient('fish', 5),
      new Ingredient('red pepper', 2)
    ]),
    new Recipe("A Test Recipe 3", "Simple Test 3", "https://upload.wikimedia.org/wikipedia/commons/5/56/Tondo_Minotaur_London_E4_MAN.jpg", [
      new Ingredient('Apple', 6),
      new Ingredient('Bananas', 3)
    ])
  ];

  getRecipes():Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
