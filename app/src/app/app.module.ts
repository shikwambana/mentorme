import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { appDeclarations, appBootstrap, appProviders, appEntryComponents } from './config/declarations';
import { appImportModules } from './config/import-modules';
import { CountdownModule } from "ng2-countdown-timer";
import { MatInputModule, MatSelectModule } from '@angular/material';



@NgModule({
  declarations: [...appDeclarations],
  imports: [...appImportModules, CountdownModule, MatInputModule, MatSelectModule],
  providers: [...appProviders],
  entryComponents: [...appEntryComponents],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [...appBootstrap]
})
export class AppModule { }
