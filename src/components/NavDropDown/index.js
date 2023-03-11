import React from "react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";

import {
  DropDownContainer,
  DropDownIcon,
  DropDownItem,
  DropDownItemDesc,
  DropDownItemTitle,
  DropDownTextContainer,
} from "./NavDropDown";

export default function NavDropDown(props) {
  return (
    <DropDownContainer active={props.isOpen}>
      <DropDownItem href="#" target="_blank" rel="noreferrer">
        <DropDownIcon>
          <AiFillPhone />
        </DropDownIcon>
        <DropDownTextContainer>
          <DropDownItemTitle>Telefone</DropDownItemTitle>
          <DropDownItemDesc>
            Vamos nos reunir e bater um papo?'
          </DropDownItemDesc>
        </DropDownTextContainer>
      </DropDownItem>
      <DropDownItem href="#" target="_blank" rel="noreferrer">
        <DropDownIcon>
          <AiOutlineMail />
        </DropDownIcon>
        <DropDownTextContainer>
          <DropDownItemTitle>Email</DropDownItemTitle>
          <DropDownItemDesc>
            Envie um email que irei ta entrando em contato o mais rapido
            possivel
          </DropDownItemDesc>
        </DropDownTextContainer>
      </DropDownItem>
      <DropDownItem href="#" target="_blank" rel="noreferrer">
        <DropDownIcon>
          <FaLocationArrow />
        </DropDownIcon>
        <DropDownTextContainer>
          <DropDownItemTitle>Endereço</DropDownItemTitle>
          <DropDownItemDesc>Maceio-AL</DropDownItemDesc>
        </DropDownTextContainer>
      </DropDownItem>
    </DropDownContainer>
  );
}
