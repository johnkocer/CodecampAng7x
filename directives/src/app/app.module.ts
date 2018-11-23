import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule, NgControl } from '@angular/forms';


import { AppComponent } from './app.component';
import { BuildinDirectivesComponent } from './buildin-directives/buildin-directives.component';
import { NumbersOnlyDirective } from './numbers-only.directive';
import { NumberPageComponent } from './number-page/number-page.component';
import { PrintScreenDirective } from './print-screen.directive';

@NgModule({
  declarations: [
    AppComponent,
    BuildinDirectivesComponent,
    NumbersOnlyDirective,
    NumberPageComponent,
    PrintScreenDirective
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
