import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, createJSONStorage } from 'zustand/middleware';

export enum Status {
  email = 'email',
  reset = 'reset',
  none = 'none',
}

type State = {
  email: string | null;
  status: Status;
};

const initialState: State = {
  email: null,
  status: Status.none,
};

type Actions = {
  setAuth: (email: string, status: Status) => void;
  clearAuth: () => void;
};

const useAuthStore = create<State & Actions>()(
  persist(
    immer((set) => ({
      ...initialState,

      setAuth: (email, status) =>
        set((state) => {
          state.email = email || null;
          state.status = status;
        }),

      clearAuth: () => set(initialState),
    })),
    {
      name: 'auth-credentials', // key for sessionStorage
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAuthStore;
