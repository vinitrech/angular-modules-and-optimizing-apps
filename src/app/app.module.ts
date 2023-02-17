import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header.component";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core.module";
import {AuthModule} from "./auth/auth.module";
// There should not be unused imports here, they would be bundled even if not used.

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
    ],
    imports: [ // Eager imports
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        HttpClientModule,
        ShoppingListModule, // Components, directives, pipes work standalone inside modules, so every module needs its own imports. The only exception are services, which can be declared in the AppModule only once, and used application wide
        SharedModule,
        CoreModule,
        AuthModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
