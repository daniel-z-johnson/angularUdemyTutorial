import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "Simple Test", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Meatfoodgroup.jpg/330px-Meatfoodgroup.jpg")
  ];
}
