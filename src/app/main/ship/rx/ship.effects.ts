import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { exhaustMap, map } from 'rxjs/operators';
import { loadShips, loadShipsSuccess } from './ship.actions';
import { ShipsPage } from '../ship-page.interface';

@Injectable()
export class ShipsEffects {
  loadShips$ = createEffect(() => this.actions$.pipe(
    ofType(loadShips),
    exhaustMap(({ page }) => this.http.get<ShipsPage>(`/api/ships?page=${page}`).pipe(
      map(data => loadShipsSuccess({ data })),
    )),
  ));

  constructor(private actions$: Actions, private readonly http: HttpClient) { }
}
