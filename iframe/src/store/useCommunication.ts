import { create } from "zustand";

export interface Communication {
  message: string;
  test: string;
}

export interface CommunicationStore {
  data: Communication;
  setData: <K extends keyof Communication>(key: K, value: Communication[K]) => void;
}

const useCommunication = create<CommunicationStore>((set, get) => ({
  data: {
    message: "",
    test: "",
  },
  setData: (key, value) => {
    set({ data: { ...get().data, [key]: value } });
  },
}));

export default useCommunication;
