import { create } from "zustand";
import imgaeMovies from "../images/poster-background.jpg";
type StoreType = {
  image: string;
  setImage: (img: string) => void;
};

export const useStoreHyperMovies = create<StoreType>()((set) => ({
  image: imgaeMovies.src,
  setImage: (img: string) => {
    set({ image: img });
  },
}));
