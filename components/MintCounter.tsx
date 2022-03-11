import { MinusIcon, PlusIcon } from "@heroicons/react/outline";

type MintCounterProps = {
  count: number;
  setCount: any
};

const MintCounter = ({ count, setCount }:MintCounterProps) => {
  const increment = () => {
    if (count + 1 <= 5) setCount((count) => count + 1);
  };
  const decrement = () => {
    if (count - 1 > 0) setCount((count) => count - 1);
  };

  const styles = {
    counterContainer: `flex items-center gap-4 `,
    counterBtn: `w-8 h-8 bg-slate-700 bg-opacity-75 hover:bg-slate-600 active:scale-95 duration-100 ease-out active:border border-slate-400 rounded p-1 cursor-pointer`,
    countText: `font-display select-none font-bold text-2xl`,
  };

  return (
    <div className="p-4 w-full grid place-items-center">
      <p className="text-xm mb-2  text-slate-300 font-display">Quantity</p>
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