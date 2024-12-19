import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { CardComponent } from "./shared/card/card.component";
import { TasksModule } from "./tasks/tasks.module";
@NgModule({
    declarations:[AppComponent,
        HeaderComponent,
        UserComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,TasksModule]
})
export class AppModule{

}