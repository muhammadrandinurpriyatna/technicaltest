export type Movie = {
    Title: string;
    imdbID: string;
    Poster: string;
};
  
export type ApiResponse = {
    Search: Movie[];
    totalResults: string;
    Response: string;
    Error?: string;
};
  