import { Pokemon } from "@/interface/interface";
import Link from "next/link";
import React from "react";


export function PokemonCard ({ name }: Pokemon){
  return (
    <Link
      href={name}
      className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      key={name + "Card"}
    >
      <h2 className={`text-2xl font-semibold`}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
    </Link>
  );
};

