import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LowercasePipePipe } from './lowercase-pipe.pipe';
import { BuildinPipesComponent } from './buildin-pipes/buildin-pipes.component';
import { NamePipe } from './name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LowercasePipePipe,
    BuildinPipesComponent,
    NamePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
