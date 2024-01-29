import PokemonCollection from "@/components/PokemonCollection";
import { getPokemonList } from "@/lib/pokemonAPI";
import Image from "next/image";

export default async function Home() {
  // load in data
  const pokemonList = await getPokemonList();
  return(
    <PokemonCollection pokemonList = {pokemonList}/>
  )
}
