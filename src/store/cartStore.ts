import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CourseDetails } from '@/assets/data/providerData';

type State = {
  items: CourseDetails[];
};

const initialState: State = {
  items: [],
};

type Actions = {
  addItem: (item: CourseDetails) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const useCartStore = create<State & Actions>()(
  persist(
    immer((set) => ({
      ...initialState,

      addItem: (item: CourseDetails) =>
        set((state: { items: CourseDetails[] }) => {
          if (state.items.some((i) => i.id === item.id)) {
            return;
          }
          state.items.push(item);
        }),

      removeItem: (id: string) =>
        set((state: { items: CourseDetails[] }) => {
          state.items = state.items.filter(
            (item: CourseDetails) => item.id !== id
          );
        }),
      clearCart: () =>
        set((state: { items: CourseDetails[] }) => {
          state.items = [];
        }),
    })),
    {
      name: 'cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
