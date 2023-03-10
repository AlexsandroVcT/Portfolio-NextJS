import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 40, text: "Projetos de código aberto" },
  { number: 15, text: "Scripts" },
  { number: 7000, text: "Inscrito no Instagram" },
  { number: 40, text: "Estrelas do Github" },
];

export default function Acomplishments() {
  <Section>
    <SectionTitle>Conquistas Pessoais</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number.toLocaleString("en-IN")}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>;
}
