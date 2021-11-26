import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] =[
    new Recipe('A Test Recipe', 
               'This is simply a test', 
              'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg'), 
    new Recipe('Another Test Recipe', 
              'This is simply a test', 
             'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
