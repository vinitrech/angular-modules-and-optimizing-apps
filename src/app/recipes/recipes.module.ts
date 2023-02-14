import {NgModule} from "@angular/core";
import {RecipeComponent} from "./recipe.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";
import {AppRoutingModule} from "../app-routing.module";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        RecipeComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeStartComponent,
        RecipeEditComponent,
        RecipeItemComponent,
    ], imports: [
        AppRoutingModule,
        CommonModule, // Common Module is the BrowserModule, but it should only be used in AppModule. So with CommonModule, we can get access to the ngIf and ngFor, for example.
        ReactiveFormsModule
    ],
    exports: [
        RecipeComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeStartComponent,
        RecipeEditComponent,
        RecipeItemComponent,
    ]
})
export class RecipesModule {

}
