import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
type Props = {
  q: string;
  a: String;
};

const FaqItem = ({ q, a }: Props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            as="div"
            className="flex hover:bg-slate-700 duration-300 mb-1 cursor-pointer justify-between items-center bg-slate-800 p-3 rounded-xl px-4"
          >
            {q}
            {open ? (
              <ChevronUpIcon className="h-6 w-6" />
            ) : (
              <ChevronDownIcon className="h-6 w-6" />
            )}
          </Disclosure.Button>

          <Transition
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-100 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className=" mb-2 px-4 py-2 rounded-xl">
              {a}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default FaqItem;
