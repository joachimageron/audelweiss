import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { useStorage } from "../components/providers/StorageProvider";
import { isFunction } from "../utils/isFunction";

function usePersistedState<S = undefined>(key: string): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
function usePersistedState<S>(key: string, initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
function usePersistedState<S>(
  key: string,
  initialState?: S | (() => S),
): [S | undefined, Dispatch<SetStateAction<S | undefined>>] {
  const storage = useStorage();

  const [state, setState] = useState<S | undefined>(() => {
    try {
      return JSON.parse(storage.getItem(key) || "") as S;
    } catch {
      return isFunction(initialState) ? initialState() : initialState;
    }
  });

  useEffect(() => {
    if (state === undefined) {
      storage.removeItem(key);
    } else {
      storage.setItem(key, JSON.stringify(state));
    }
  }, [state]);

  return [state, setState];
}

export default usePersistedState;
