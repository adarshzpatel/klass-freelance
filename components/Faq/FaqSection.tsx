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
          q="What is Klass NFT all about ?"
          a="Klass is a unique digitally drawn stick art .
          They are currently the hottest stick kids in the Ethereum block-chain.."
          />
        <FaqItem
          q="How much does Klass NFT cost ?"
          a="The presale is a FREE mint for whitelisted addresses . You can mint Klass NFT for 0.01 eth during public sales."
          />
        <FaqItem
          q="How many can I mint during pre sale ?"
          a="1 Klass NFT per wallet during presale but you can get more on OpenSea after presale or mint one yourself during public sale."
          />
          <FaqItem 
          q="How many can I mint during public sales ?"
          a="5 per transaction . ERC721A contract optimized for multiple mints ( mint multiple nfts while only paying gas fees for one nft in a transaction)."
           />
        <FaqItem q=" When is the presale ?" a=" May 4th , 2022" />
        <FaqItem q=" When is the public sale ?" a=" May 5th , 2022" />
        <FaqItem q=" What is the total supply ?" a=" 5555" />
        <FaqItem q=" How can I get whitelisted ? " a="Join our discord and follow the procedures listed there ." />
      </div>
          </Container>
    </section>
  );
};

export default FaqSection;
