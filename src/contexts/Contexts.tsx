import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/api";

interface Contaction {
  id: number;
  name: string;
  email: string;
  phone: number;
  message: string;
  createdAt: string; 
}

interface CreateContactionInput {
  name: string;
  email: string;
  phone: number;
  message: string;
}

interface ContactionContextType {
  contactions: Contaction[];
  fetchContaction: (query: string) => Promise<void>;
  createContaction: (data: CreateContactionInput) => Promise<void>;
}

interface ContactionPoviderProps {
  children: ReactNode
}

export const ContactionContext = createContext({} as ContactionContextType);

export function ContactionsProvider({ children }: ContactionPoviderProps) {
  const [ contactions, setContactions ] = useState<Contaction[]>([])   

  async function fetchContaction(query?: string) {
    const response = await api.get('contactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,        
      }
    })

    setContactions(response.data);    
  }

  async function createContaction(data: CreateContactionInput) {
    const { name, email, phone, message } = data;
    const response = await api.post('contactions', {
      name,
      email,
      phone,
      message,
      createdAt: new Date(),
    });
    console.log(response.data)

    setContactions(state => [response.data, ...state])
  }

  useEffect(() => {
    fetchContaction()
  }, []);

  return (
    <ContactionContext.Provider value={{
      contactions,
       fetchContaction,
       createContaction,
       
    }}>
      {children}
    </ContactionContext.Provider>
  );
}

