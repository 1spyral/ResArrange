import { create } from 'zustand';

interface Job {
    description: string;
    setDescription: (description: string) => void;
}

const useJobStore = create<Job>((set) => ({
    description: "",
    setDescription: (description) => set({ description }),
}));

export default useJobStore;