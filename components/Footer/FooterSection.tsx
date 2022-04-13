import React from "react";
import Container from "../Container";
import DiscordIcon from "../Icons/Discord";
import TwitterIcon from "../Icons/Twitter";
import OpenSeaIcon from "../Icons/OpenSea";
import NavItem from "../Navbar/NavItem";
import SocialLink from "../Navbar/SocialLink";
import {
  DISCORD_LINK,
  OPENSEA_LINK,
  TWITTER_LINK,
} from "../../constants/social";

const FooterSection = () => {
  return (
    <section className="bg-gradient-to-t from-slate-900  mt-16 border-t border-slate-600  ">
      <Container>
        <div className="flex flex-wrap justify-between gap-8">
          <div className="w-full sm:max-w-fit">
            <h1 className="font-display italic text-xl font-bold text-slate-50">
              Klass
            </h1>
            <p className="text-gray-400 text-sm">Copyright@2022</p>
          </div>
          <div className="flex flex-col gap-2  text-slate-200">
            <NavItem text="Roadmap" link="#roadmap" />
            <NavItem text="Team" link="#team" />
            <NavItem text="FAQ" link="#faq" />
            <NavItem text="About" link="#about" />
          </div>
          <div className="flex flex-col gap-2  text-slate-200">
            <SocialLink Icon={DiscordIcon} link={DISCORD_LINK} text="Discord" />

            <SocialLink Icon={OpenSeaIcon} link={OPENSEA_LINK} text="OpenSea" />

            <SocialLink Icon={TwitterIcon} link={TWITTER_LINK} text="Twitter" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FooterSection;
