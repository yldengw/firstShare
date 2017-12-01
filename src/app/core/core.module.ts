import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { GrowlModule, PaginatorModule, PanelModule, DialogModule} from 'primeng/primeng';
import {MenubarModule, MenuItem} from 'primeng/primeng';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    GrowlModule,MenubarModule, PaginatorModule, PanelModule, DialogModule
  ],
  providers: []
})
export class CoreModule {

}
