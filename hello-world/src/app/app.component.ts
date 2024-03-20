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
    new Team("South Dakota State", 15, 0),

    //now for the next one
    new Team("UNC", 1, 0),
    new Team("Wagner", 16, 0),
    new Team("Mississippi State", 8, 0),
    new Team("Michigan State", 9, 0),
    new Team("Saint Mary's", 5, 0),
    new Team("Grand Canyon", 12, 0),
    new Team("Alabama", 4, 0),
    new Team("Charleston", 13, 0),
    new Team("Clemson", 6, 0),
    new Team("New Mexico", 11, 0),
    new Team("Bayor", 3, 0),
    new Team("Colgate", 14, 0),
    new Team("Dayton", 7, 0),
    new Team("Neveda", 10, 0),
    new Team("Arizona", 2, 0),
    new Team("Long Beach State", 15, 0),
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
    new Team ("PLACEHOLDER1", 10, 0),
    new Team ("Marquette", 2, 0),
    new Team ("Western Kentucky", 15, 0),

    //more teams
    new Team("Purdue", 1, 0),
    new Team("PLACEHOLDER2", 16, 0),
    new Team("Utah State", 8, 0),
    new Team("TCU", 9, 0),
    new Team("Gonzaga", 5, 0),
    new Team("McNesse", 12, 0),
    new Team("Kansas", 4, 0),
    new Team("Samford", 13, 0),
    new Team("South Carolina", 6, 0),
    new Team("Oregon", 11, 0),
    new Team("Creighton", 3, 0),
    new Team("Akron", 14, 0),
    new Team("Texas", 7, 0),
    new Team("PLACEHOLDER3", 10, 0),
    new Team("Tennessee", 2, 0),
    new Team("Saint Peters", 15, 0)
  ];

  teamsleft2: Team[] = [
    new Team("Placeholder4", 1, 0),
    new Team("Placeholder5", 1, 0),
    new Team("Placeholder6", 1, 0),
    new Team("Placeholder7", 1, 0),
    new Team("Placeholder8", 1, 0),
    new Team("Placeholder9", 1, 0),
    new Team("Placeholder10", 1, 0),
    new Team("Placeholder11", 1, 0),
    new Team("Placeholder12", 1, 0),
    new Team("Placeholder13", 1, 0),
    new Team("Placeholder14", 1, 0),
    new Team("Placeholder15", 1, 0),
    new Team("Placeholder16", 1, 0),
    new Team("Placeholder17", 1, 0),
    new Team("Placeholder18", 1, 0),
    new Team("Placeholder19", 1, 0)
  ];
  teamsleft3: Team[] = [
    new Team("Placeholder20", 1, 0),
    new Team("Placeholder21", 1, 0),
    new Team("Placeholder22", 1, 0),
    new Team("Placeholder23", 1, 0),
    new Team("Placeholder24", 1, 0),
    new Team("Placeholder25", 1, 0),
    new Team("Placeholder26", 1, 0),
    new Team("Placeholder27", 1, 0)

  ];
  teamsleft4: Team[] = [
    new Team("Placeholder28", 1, 0),
    new Team("Placeholder29", 1, 0),
    new Team("Placeholder30", 1, 0),
    new Team("Placeholder31", 1, 0)
  ];

  teamsright2: Team[] = [
    new Team("Placeholder32", 1, 0),
    new Team("Placeholder33", 1, 0),
    new Team("Placeholder34", 1, 0),
    new Team("Placeholder35", 1, 0),
    new Team("Placeholder36", 1, 0),
    new Team("Placeholder37", 1, 0),
    new Team("Placeholder38", 1, 0),
    new Team("Placeholder39", 1, 0),
    new Team("Placeholder40", 1, 0),
    new Team("Placeholder41", 1, 0),
    new Team("Placeholder42", 1, 0),
    new Team("Placeholder43", 1, 0),
    new Team("Placeholder44", 1, 0),
    new Team("Placeholder45", 1, 0),
    new Team("Placeholder46", 1, 0),
    new Team("Placeholder47", 1, 0)
  ];

  teamsright3: Team[] = [
    new Team("Placeholder48", 1, 0),
    new Team("Placeholder49", 1, 0),
    new Team("Placeholder50", 1, 0),
    new Team("Placeholder51", 1, 0),
    new Team("Placeholder52", 1, 0),
    new Team("Placeholder53", 1, 0),
    new Team("Placeholder54", 1, 0),
    new Team("Placeholder55", 1, 0)

  ];

  teamsright4: Team[] = [
    new Team("Placeholder56", 1, 0),
    new Team("Placeholder57", 1, 0),
    new Team("Placeholder58", 1, 0),
    new Team("Placeholder59", 1, 0)
  ];

  teamsright5: Team[] = [
    new Team("Placeholder62", 1, 0),
    new Team("Placeholder63", 1, 0),
  ];

  teamsleft5: Team[] = [
    new Team("Placeholder60", 1, 0),
    new Team("Placeholder61", 1, 0),
  ];

  teamsleftfinal = new Team("Placeholder64", 1, 0);
  teamsrightfinal = new Team("Placeholder65", 1, 0);
  champion = new Team("Placeholder66", 1, 0);

  



  objectKeys = Object.keys;

  //gets keys of the team
  a(team: any) {
    return Object.keys(team);
  }



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

