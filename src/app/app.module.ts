import { BrowserModule } from '@angular/platform-browser';
import { NgModule , PLATFORM_ID, APP_ID, Inject} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'Dev-123456'}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
      const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
      console.log(`Running ${platform} with appId=${appId}`);
  }
}
