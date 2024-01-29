"use client"
import { PokemonGridProps } from "@/interface/interface";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { PokemonCard } from "./PokemonCard";

const PokemonCollection = ({ pokemonList }: PokemonGridProps) => {
  const [searchText, setSearchText] = useState("");
  console.log(pokemonList);
  

  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  // save the filtered array of objects
  const filteredPokemonList = searchFilter(pokemonList);

  return (
    <>
      <div>
        <h3 className="text-2xl py-6 text-center">Search For Your Pokemon!</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <label htmlFor="pokemonName">Pokemon Name</label>
          <Input
            type="text"
            value={searchText}
            autoComplete="off"
            id="pokemonName"
            placeholder="Charizard, Pikachu, etc."
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon Collection</h3>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-5 lg:text-left">
      {filteredPokemonList.map((pokemon: any) => {
        return <PokemonCard name={pokemon.name} key={pokemon.name}/>;
      })}
      </div>
    </>
  );
};

export default PokemonCollection;
