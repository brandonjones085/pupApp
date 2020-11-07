import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { RateComponent } from './rate/rate.component'
import { ListComponent } from './list/list.component'
import { UploadComponent } from './upload/upload.component'
import { AppComponent } from "./app.component";


const routes: Routes = [

    { path: "", component: RateComponent},
   
   
    { path: "list",  component: ListComponent},
    { path: "upload", component: UploadComponent }   

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
