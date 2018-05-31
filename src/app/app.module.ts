import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: "home", loadChildren: "./home/home.module#HomeModule" }
  ];

@NgModule({
  declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes)
    ],
  providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
