import { MinusIcon, PlusIcon } from "@heroicons/react/outline";
import toast from "react-hot-toast";

type MintCounterProps = {
  count: number;
  setCount: any;
  maxLimit: number;
};

const MintCounter = ({ count, setCount,maxLimit }:MintCounterProps) => {
  const increment = () => {
    if (count + 1 <= maxLimit) setCount((count) => count + 1);
    else toast.error("You can mint max "+ maxLimit +" nfts per transaction.");
  };
  const decrement = () => {
    if (count - 1 > 0) setCount((count) => count - 1);
    else toast.error("Mint quantity cannot be 0.");
  };

  const styles = {
    counterContainer: `flex items-center gap-4 `,
    counterBtn: `h-6 w-6 md:w-8 md:h-8 bg-slate-700 bg-opacity-75 hover:bg-slate-600 active:scale-95 duration-100 ease-out active:border border-slate-400 rounded p-1 cursor-pointer`,
    countText: `font-display select-none font-bold text-xl md:text-3xl`,
  };

  return (
    <div className="p-4 w-full grid place-items-center">
      <div className={styles.counterContainer}>
        <button className="bg-none hue-rotate-0 p-0 ">
          <MinusIcon onClick={decrement} className={styles.counterBtn} />
        </button>
        <p className={styles.countText}>{count}</p>
        <button className="bg-none hue-rotate-0 p-0 ">
          <PlusIcon onClick={increment} className={styles.counterBtn} />
        </button>
      </div>
    </div>

  );
};
export default MintCounter;