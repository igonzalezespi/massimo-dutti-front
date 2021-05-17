import { createFeatureSelector, createSelector } from '@ngrx/store';
import { shipsFeatureKey, ShipsState } from './ship.reducer';

export const getShipsState = createFeatureSelector<ShipsState>(shipsFeatureKey);

export const getShips = createSelector(getShipsState, state => state);
