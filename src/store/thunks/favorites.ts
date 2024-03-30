import { Endpoint } from '../../components/const';
import { createAppAsyncThunk } from '../../hooks';
import { FavoritesStatus } from '../../types/favorites';
import { Offer } from '../../types/offer';

type ChangeProps = {
  offerId: string;
  status: FavoritesStatus;
};

type ChangeResponse = {
  offer: Offer;
  status: FavoritesStatus;
};

const fetchFavorites = createAppAsyncThunk<Offer[], undefined>(
  'favorites/fetchAll',
  async (_arg, { extra: api }) => {
    const response = await api.get<Offer[]>(Endpoint.Favorite);

    return response.data;
  }
);

const changeFavorites = createAppAsyncThunk<ChangeResponse, ChangeProps>(
  'favorites/change',
  async ({ offerId, status }, { extra: api }) => {
    const response = await api.post<Offer>(
      `${Endpoint.Favorite}/${offerId}/${status}`
    );

    return { offer: response.data, status };
  }
);

export { fetchFavorites, changeFavorites };
