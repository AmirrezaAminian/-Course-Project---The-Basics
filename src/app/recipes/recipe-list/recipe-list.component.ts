import { Component , OnInit ,  Output , EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe('A Test Recipe' , 'This is simply a test' , 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg') ,
    new Recipe('A Test Recipe' , 'This is simply a test' , 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')

  ] ;

  constructor(){

  }

  ngOnInit(){

  }

  onRecipeSelected(recipe: Recipe){
      this.recipeWasSelected.emit(recipe);
  }
}
