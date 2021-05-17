import { createAction, props } from '@ngrx/store';
import { ShipsPage } from '../ship-page.interface';

export const loadShips = createAction(
  '[Ship] Load ships',
  props<{ page: string }>(),
);

export const loadShipsSuccess = createAction(
  '[Ship] Load ships SUCCESS',
  props<{ data: ShipsPage }>(),
);

export const loadShipsFailure = createAction(
  '[Ship] Load ships FAIL',
  props<{ error: any }>(),
);
