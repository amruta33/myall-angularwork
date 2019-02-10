import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box.component';
import { MainCntComponent } from './main-cnt/main-cnt.component';
import { FootComponent } from './foot.component';
import { DatabingingComponent } from './databinging/databinging.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalcComponent } from './calc/calc.component';
import { DirectivesComponent } from './directives/directives.component';

import { MagicDirective } from './directives/magic.directive';
import { InputzoomDirective } from './directives/inputzoom.directive';
import { OppIfDirective } from './directives/opp-if.directive';
import { InfoCardComponent } from './directives/info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    MainCntComponent,
    FootComponent,
    DatabingingComponent,
    DataBindingComponent,
    CalcComponent,
    DirectivesComponent,

    MagicDirective,

    InputzoomDirective,

    OppIfDirective,

    InfoCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
