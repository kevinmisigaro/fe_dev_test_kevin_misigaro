import { createContext, useState, useEffect, ReactNode, FC } from 'react';
import { IPost } from '../interfaces';

interface FavoritesContextValue {
  favoritePosts: IPost[];
  toggleFavorite: (post: IPost) => void;
}

export const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: FC<FavoritesProviderProps> = ({ children }) => {
  const [favoritePosts, setFavoritePosts] = useState<IPost[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoritePosts');
    if (storedFavorites) {
      setFavoritePosts(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoritePosts', JSON.stringify(favoritePosts));
  }, [favoritePosts]);

  const toggleFavorite = (post: IPost) => {
    setFavoritePosts((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some(favPost => favPost.id === post.id);
      if (isAlreadyFavorite) {
        return prevFavorites.filter(favPost => favPost.id !== post.id);
      } else {
        return [...prevFavorites, { ...post, isFavorite: true }];
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favoritePosts, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
