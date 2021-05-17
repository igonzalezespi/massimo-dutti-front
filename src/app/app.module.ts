import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { shipsReducer, ShipsState } from './main/ship/rx/ship.reducer';
import { ShipsEffects } from './main/ship/rx/ship.effects';
import { AuthInterceptorService } from './auth/auth-interceptor.service';


export interface AppState {
  ships: ShipsState;
}

export const reducers: ActionReducerMap<AppState> = {
  ships: shipsReducer,
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    AuthModule,

    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ShipsEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
