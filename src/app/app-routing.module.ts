import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [{
    path: '', redirectTo: '/recipes', pathMatch: "full"
},
    {
        path: 'recipes',
        loadChildren: () => import('./recipes/recipes.module').then(module => module.RecipesModule)
        // this tells angular to lazy load the module
    }]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes) // forRoot should be used only once, inside other modules it is correct to use forChild
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {

}
