import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import FaqItem from "./FaqItem";

type Props = {};

const FaqSection = (props: Props) => {
  return (
    <section id="faq" className="min-h-screen">
      <Container>

      <Heading text="Frequently Asked Questions" />
      <div className="flex flex-col mt-16 text-lg  md:text-2xl gap-4">
        <FaqItem
          q=" What is Klass NFT all about ?"
          a=" Klass is a unique digitally drawn stick art .
          They are currently the hottest stick kids in the Ethereum block-chain.."
          />
        <FaqItem
          q=" How much does Klass NFT cost ?"
          a=" Since we are planning to be here for long . We have decided to make the presale FREE MINT for whitelisted members."
          />
        <FaqItem
          q=" Can I mint more than 1 Klass NFT during preale"
          a=" 1 Klass NFT per wallet during presale but you can get more on OpenSea after presale or mint one yourself during public sale."
          />
        <FaqItem q=" When is the presale ?" a=" May 4th , 2022" />
        <FaqItem q=" When is the public sale ?" a=" May 5th , 2022" />
        <FaqItem q=" What is the total supply ?" a=" 5555" />
      </div>
          </Container>
    </section>
  );
};

export default FaqSection;
