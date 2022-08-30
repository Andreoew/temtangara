import { Envelope, FacebookLogo, InstagramLogo, LinkedinLogo, WhatsappLogo, YoutubeLogo } from "phosphor-react";
import { FooterContainerDiv } from "./styles";

export function Footer() {
  return (
    <FooterContainerDiv>
      <div>
        <a href="" target="_blank">
          <WhatsappLogo size={32} />
        </a>
      </div>
      <div>
        <a href="" target="_blank">
          <Envelope size={32} />
        </a>
      </div>
      <div>
        <a href="" target="_blank">
          <LinkedinLogo size={32} />
        </a>
      </div>
      <div>
        <a href="" target="_blank">
          <InstagramLogo size={32} />
        </a>
      </div>
      <div>
        <a href="" target="_blank">
          <YoutubeLogo size={32} />
        </a>
      </div>
      <div>
        <a href="" target="_blank">
          <FacebookLogo size={32} />
        </a>
      </div>
    </FooterContainerDiv>

  )
}