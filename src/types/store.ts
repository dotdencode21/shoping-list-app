export interface BaseStoreState {
  isLoading: boolean;

  saveToLocalStorage?: (key?: string, value?: unknown) => void;
  triggerLoading: () => Promise<void>;
}
