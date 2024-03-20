import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // <-- Add this line
import { Team } from './team.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
  test = "ASDL:FKHASD:KFHDSA";
  roundNumber = 0;
  //I want to initialize a dictionary here
  leftSide: { [key: string]: any } = {
    "UConn": 1,
    "Stetson": 16,
    "FAU": 8,
    "Northwestern": 9,
    "San Diego State": 5,
    "UAB": 12,
    "Auburn": 4,
    "Yale": 13,
    "BYU": 6,
    "Duquesne": 11,
    "Illinois": 3,
    "Morehead State": 14,
    "Washington": 7,
    "Drake": 10,
    "Iowa State": 2,
    "South Dakota State": 15

  };
  teamArray = []

  teamsleft: Team[] = [
    new Team("UConn", 1, 0),
    new Team("Stetson", 16, 0),
    new Team("FAU", 8, 0),
    new Team("Northwestern", 9, 0),
    new Team("San Diego State", 5, 0),
    new Team("UAB", 12, 0),
    new Team("Auburn", 4, 0),
    new Team("Yale", 13, 0),
    new Team("BYU", 6, 0),
    new Team("Duquesne", 11, 0),
    new Team("Illinois", 3, 0),
    new Team("Morehead State", 14, 0),
    new Team("Washington", 7, 0),
    new Team("Drake", 10, 0),
    new Team("Iowa State", 2, 0),
    new Team("South Dakota State", 15, 0)
  ];

  teamsright: Team[] = [
    new Team("Houston", 1, 0),
    new Team ("Longwood", 16, 0),
    new Team ("Nebreska", 8, 0),
    new Team ("Texas AM", 9, 0),
    new Team ("Wisconsin", 5, 0),
    new Team ("James Madison", 12, 0),
    new Team ("Duke", 4, 0),
    new Team ("Vermont", 13, 0),
    new Team ("Texas Tech", 6, 0),
    new Team ("NC State", 11, 0),
    new Team ("Kentucky", 3, 0),
    new Team ("Oakland", 14, 0),
    new Team ("Florida", 7, 0),
    new Team ("PLACEHOLDER", 10, 0),
    new Team ("Marquette", 2, 0),
    new Team ("Western Kentucky", 15, 0)
  ];

  objectKeys = Object.keys;

  //gets keys of the team
  a(team: any) {
    return Object.keys(team);
  }

  //first round, this MIGHT be universal
  /*
  toggleSelected(team: Team, isLeftSide: boolean): void {
    // Reset selected state for all teams
    this.teamsleft.forEach(t => t.aselected = false);
    this.teamsright.forEach(t => t.aselected = false);

    // Set selected state for the clicked team
    team.aselected = true;

    // Set selected state for the other team in the pair
    if (isLeftSide) {
      const index = this.teamsleft.indexOf(team);
      this.teamsright[index].aselected = false;
    } else {
      const index = this.teamsright.indexOf(team);
      this.teamsleft[index].aselected = false;
    }
  }
  */
 // bracket.component.ts

// bracket.component.ts

// bracket.component.ts

toggleSelected(team: Team, isLeftSide: boolean): void {
  const teams = isLeftSide ? this.teamsleft : this.teamsright;
  
  // If the clicked team is already selected, deselect it
  if (team.aselected) {
    team.aselected = false;
  } else {
    // Deselect the previously selected team from the same pair, if any
    const pairIndex = teams.indexOf(team);
    if (pairIndex !== -1) {
      const otherTeamIndex = pairIndex % 2 === 0 ? pairIndex + 1 : pairIndex - 1;
      if (otherTeamIndex >= 0 && otherTeamIndex < teams.length) {
        teams[otherTeamIndex].aselected = false;
      }
    }
    
    // Select the clicked team
    team.aselected = true;
  }
}





  //end class def
}

