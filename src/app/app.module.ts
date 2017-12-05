import { QuillEditorModule } from 'ng2-quill-editor';
import { AuthGuard } from './shared/auth-guard.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EChartOptionDirective1 } from './chart/echart-option.directive';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { SidernavComponent } from './shared/layout/sidernav/sidernav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { NeedAuthGuard } from './shared/service/no-auth.directive';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { EditorComponent } from './editor/editor.component';
import { AmapComponent } from './amap/amap.component';
import { TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';
import { Http } from '@angular/http';
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    SidernavComponent,
    DashboardComponent,
    ChartComponent,
    EChartOptionDirective1,
    EditorComponent,
    AmapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    CoreModule,
    QuillEditorModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
  ],
  providers: [NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
