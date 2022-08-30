import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ContactionContext } from '../../contexts/Contexts';
import * as z from 'zod';

import { CloseButton, Content, Overlay } from './styles';


const newContactionFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.number(),
  message: z.string(),
})

type newContactionFormInputs = z.infer<typeof newContactionFormSchema>

export function NewContactionModal() {
  const { createContaction } = useContext(ContactionContext)

  const {
    register,
    handleSubmit,
    formState : { isSubmitting },
    reset,
  } = useForm<newContactionFormInputs>({
    resolver: zodResolver(newContactionFormSchema),
  })

  async function handleCreateNewContaction(data: newContactionFormInputs) {
    const { name, email, phone, message } = data;

    await createContaction({
      name,
      email,
      phone,
      message,
    })
    
    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Vamos responder em breve</Dialog.Title>

        <CloseButton>
          <X size={24}/>
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewContaction)}>
          <input 
            type="text" 
            placeholder="Nome completo" 
            required 
            {...register('name')}
          />
          <input 
            type="email" 
            placeholder="Email" 
            
            {...register('email')}
          />
          <input 
            type="number"  
            placeholder="Telefone" 
            required 
            {...register('phone', { valueAsNumber: true })}
          />
          <textarea 
            placeholder="Mensagem" 
            required 
            {...register('message')}
          />

          <button type="submit" disabled={isSubmitting}>
            Enviar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}