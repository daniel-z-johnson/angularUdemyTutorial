import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "Simple Test", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Meatfoodgroup.jpg/330px-Meatfoodgroup.jpg"),
    new Recipe("A Test Recipe 2", "Simple Test 2", "https://upload.wikimedia.org/wikipedia/commons/d/d8/Channelcat.jpg"),
    new Recipe("A Test Recipe 3", "Simple Test 3", "https://upload.wikimedia.org/wikipedia/commons/5/56/Tondo_Minotaur_London_E4_MAN.jpg")
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
