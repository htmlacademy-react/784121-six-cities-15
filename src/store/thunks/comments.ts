import { Review } from '../../types/review';
import { createAppAsyncThunk } from '../../hooks';
import { Endpoint } from '../../components/const';
import { Offer } from '../../types/offer';

type PostCommentProps = {
  body: {
    comment: string;
    rating: number;
  };
  offerId: Offer['id'];
};

const fetchComments = createAppAsyncThunk<Review[], Offer['id']>(
  'comments/fetch',
  async (offerId, { extra: api }) => {
    const response = await api.get<Review[]>(`${Endpoint.Comments}/${offerId}`);

    return response.data;
  }
);

const postComment = createAppAsyncThunk<Review, PostCommentProps>(
  'comments/post',
  async ({ body, offerId }, { extra: api }) => {
    const response = await api.post<Review>(
      `${Endpoint.Comments}/${offerId}`,
      body
    );

    return response.data;
  }
);

export const commentsThunks = { fetchComments, postComment };
