import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrudComponent } from "./crud/crud.component";
import { ListMeetingsComponent } from "./list-meetings/list-meetings.component";

const appRoutes: Routes = [
  
    { path: 'home', component: ListMeetingsComponent},
    { path: 'crud', component: CrudComponent  },
    {path : '**' , redirectTo : 'home'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRouting {

}