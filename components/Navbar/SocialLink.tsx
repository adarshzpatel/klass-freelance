import toast from "react-hot-toast";

type Props = {
  link?: string;
  text: string;
  Icon: any;
};
const SocialLink = ({ link, text, Icon }: Props) => {
  const handleNoLink = () => {
    if (!link) {
      toast("Coming Soon !", {
        icon: "⚡",
      });
    }
  };
  if (!link) {
    return (
      <div onClick={handleNoLink} className="flex cursor-pointer text-slate-200 duration-200 group hover:scale-110  hover:text-white font-display gap-2 items-center">
        <Icon className="fill-current  durtion-300" />
        {text}
      </div>
    );
  }
  return (
    <a
      className="flex text-slate-200 duration-200 group hover:scale-110  hover:text-white font-display gap-2 items-center"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <Icon className="fill-current  durtion-300" />
      {text}
    </a>
  );
};

export default SocialLink;
