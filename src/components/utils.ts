function getRating({ rating }: { rating: number }) {
  const STARS_COUNT = 5;
  const TOTAL_WIDTH_PERCENTAGE = 100;

  return (TOTAL_WIDTH_PERCENTAGE / STARS_COUNT) * rating;
}

export default getRating;
