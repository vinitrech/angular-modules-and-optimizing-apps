import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {AuthComponent} from "./auth/auth.component";

const appRoutes: Routes = [{
    path: '', redirectTo: '/recipes', pathMatch: "full"
},
    {
        path: 'shopping-list', component: ShoppingListComponent
    },
    {
        path: 'auth', component: AuthComponent
    }]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes) // forRoot should be used only once, inside other modules it is correct to use forChild
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {

}
