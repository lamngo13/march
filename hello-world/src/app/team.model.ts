// team.model.ts
export class Team {
    name: string;
    seed: number;
    wins: number;
    selected: boolean;

  
    constructor(name: string, seed: number, wins: number) {
      this.name = name;
      this.seed = seed;
      this.wins = wins;
      this.selected = false;
    }
  }
  