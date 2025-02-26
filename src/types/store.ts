export interface BaseStoreState {
  isLoading: boolean;

  saveToLocalStorage: () => void;
  triggerLoading: () => Promise<void>;
}
