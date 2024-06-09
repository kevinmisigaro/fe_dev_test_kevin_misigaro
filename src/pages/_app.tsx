import "@/styles/globals.css";
import { FavoritesProvider } from "@/utils/states/FavoritesContext";
import { MyUserProfileProvider } from "@/utils/states/MyUserProfileContext";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyUserProfileProvider>
      <FavoritesProvider>
        <Component {...pageProps} />
      </FavoritesProvider>
    </MyUserProfileProvider>
  );
}
