import { NavLink } from "react-router-dom";
import { HeaderContainer, NewContactButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import { NewContactionModal } from "../NewContactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Home">
          Inicio
        </NavLink>
        <NavLink to="/sobre" title="About">
          Sobre
        </NavLink>


        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewContactButton>
              Contatos
            </NewContactButton>
          </Dialog.Trigger>

          <NewContactionModal />
        </Dialog.Root>



      </nav>
    </HeaderContainer>
  )
}