import { createAction } from '@reduxjs/toolkit';
import { SortType } from '../components/const';

export const changeCity = createAction<string>('changeCity');
export const fillOfferList = createAction('fillOfferList');
export const setSortType = createAction<SortType>('setSortType');
