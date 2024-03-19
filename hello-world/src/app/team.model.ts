// team.model.ts
export class Team {
    name: string;
    seed: number;
    wins: number;
  
    constructor(name: string, seed: number, wins: number) {
      this.name = name;
      this.seed = seed;
      this.wins = wins;
    }
  }
  