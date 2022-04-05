const NavItem = ({link,text})=>(
  <a
  className="group text-slate-400 hover:text-white duration-300 ease-out hover:scale-110 font-display"
  href={link}

>
  {text}
</a>
)

export default NavItem;