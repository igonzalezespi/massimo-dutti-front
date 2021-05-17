import { Action, createReducer, on } from '@ngrx/store';
import { loadShipsFailure, loadShipsSuccess } from './ship.actions';
import { Ship } from '../ship.interface';

export const shipsFeatureKey = 'ships';

export interface ShipsState {
  count: number;
  results: Ship[];
}

export const initialState: ShipsState = {
  count: 0,
  results: [],
};

const reducer = createReducer(
  initialState,
  on(loadShipsSuccess, (state, action) => ({
    ...state, ...action.data,
  })),
  on(loadShipsFailure, (state, error) => ({ ...state, error })),
);

export const shipsReducer = (state: ShipsState | undefined, action: Action) => reducer(state, action);
