import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ICartItem } from '@base/types';

type StoreProps = {
  children: ReactNode;
};

type StoreContextType = {
  items: ICartItem[];
  setItems: React.Dispatch<React.SetStateAction<ICartItem[]>>;
};

const StoreContext = createContext<StoreContextType>({} as StoreContextType);

export const Store: FC<StoreProps> = ({ children }) => {
  const [items, setItems] = useState<ICartItem[]>([]);

  const cartItemsVal = useMemo(() => ({ items, setItems }), [items]);

  return (
    <StoreContext.Provider value={cartItemsVal}>
      {children}
    </StoreContext.Provider>
  );
};

export const useCartContext = () => useContext(StoreContext);
