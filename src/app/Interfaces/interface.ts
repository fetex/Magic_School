export interface House {
  _id: string;
  name: string;
  mascot: string;
  headOfHouse: string;
  houseGhost: string;
  founder: string;
  __v: number;
  school?: string;
  members: Member[];
  values: string[];
  colors: string[];
}

export interface Member {
  _id: string;
  name: string;
  role: string;
  house: string;
  school: string;
  __v: number;
  ministryOfMagic: boolean;
  orderOfThePhoenix: boolean;
  dumbledoresArmy: boolean;
  deathEater: boolean;
  bloodStatus: string;
  species: string;
  patronus?: string;
  alias?: string;
  boggart?: string;
  wand?: string;
}
