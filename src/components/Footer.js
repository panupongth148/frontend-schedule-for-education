
import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  FooterItem
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "black", 
                   textAlign: "center", 
                   marginTop: "-60px",
                   fontWeight: "bold" }}>
        ScheduleForOnlineEducation
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterItem>62070042</FooterItem>
            <FooterItem>62070120</FooterItem>
            <FooterItem>62070148</FooterItem>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterItem>Chanathip</FooterItem>
            <FooterItem>Piyaparn</FooterItem>
            <FooterItem>Panupong</FooterItem>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterItem>Amoncheewasilapakul</FooterItem>
            <FooterItem>Sukmakanan</FooterItem>
            <FooterItem>Thongbainoi</FooterItem>
          </Column>
          <Column>
            <Heading>Github</Heading>
            <FooterLink href="https://github.com/fchana">
              <i>
                <span style={{ marginLeft: "10px" }}>
                fchana
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://github.com/panupongth148">
              <i>
                <span style={{ marginLeft: "10px" }}>
                panupongth148
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://github.com/it62070120/it62070120">
              <i>
                <span style={{ marginLeft: "10px" }}>
                it62070120
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;