import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { STUDENTComponent } from './student/student.component';
import { LikeComponent } from './like/like.component';
import { CustomPipeComponent } from './pipe/custom-pipe/custom-pipe.component';
import { CustomPipe } from './custom.pipe';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    STUDENTComponent,
    LikeComponent,
    CustomPipeComponent,
    CustomPipe,
    TableComponent,
    ChildComponent,
    ParentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
