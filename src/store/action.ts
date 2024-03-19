import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../types/city';
import { SortOption } from '../components/const';

export const changeCity = createAction<CityName>('changeCity');
export const setSortType = createAction<SortOption>('setSortType');
