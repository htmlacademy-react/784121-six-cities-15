import { Offer } from '../../types/offer';
import { Endpoint } from '../../components/const';
import { createAppAsyncThunk } from '../../hooks';

export const fetchAllOffers = createAppAsyncThunk<Offer[], undefined>(
  'fetchOffers/all',
  async (_arg, { extra: api }) => {
    const response = await api.get<Offer[]>(Endpoint.Offers);

    return response.data;
  }
);

export const fetchOffer = createAppAsyncThunk<Offer, string>(
  'fetchOffers/one',
  async (offerId, { extra: api }) => {
    const response = await api.get<Offer>(`${Endpoint.Offers}/${offerId}`);

    return response.data;
  }
);

export const fetchNearBy = createAppAsyncThunk<Offer[], string>(
  'fetchOffers/near',
  async (offerId, { extra: api }) => {
    const response = await api.get<Offer[]>(
      `${Endpoint.Offers}/${offerId}/nearby`
    );

    return response.data;
  }
);
