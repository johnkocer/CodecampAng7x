import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuildinPipesComponent } from './buildin-pipes/buildin-pipes.component';
import { LowercasePipePipe } from './lowercase-pipe.pipe';
import { NamePipe } from './name.pipe';
import { EscapehtmlPipe } from './escapehtml.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BuildinPipesComponent,
    LowercasePipePipe,
    NamePipe,
    EscapehtmlPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
