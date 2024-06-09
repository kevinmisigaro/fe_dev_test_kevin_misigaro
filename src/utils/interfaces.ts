export interface IPost {
  authorId: number;
  body: string;
  id: number;
  title: string;
  isFavorite?: boolean;
}

export interface IComment {
  postId: number;
  text: string;
  profileId: number;
}

export interface IUserProfile{
    id: number
    name: string
    email: string
    imageUrl: string
}