
const SocialLink = ({ link, text,Icon }) => (
  <a className="flex text-slate-200 duration-200 group hover:scale-110  hover:text-white font-display gap-2 items-center" href={link}>

    <Icon className="fill-current  durtion-300" />{text}
  </a>
);

export default SocialLink;
