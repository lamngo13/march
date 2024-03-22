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
  currteamleft: Team[] = [];
  currteamright: Team[] = [];
  holderleft: Team[] = [];
  holderright: Team[] = [];

  selectedNames: string[] = [];
  toholdleft0: Team[] = [];
  toholdright0: Team[] = [];
  toholdleft1: Team[] = [];
  toholdright1: Team[] = [];
  toholdleft2: Team[] = [];
  toholdright2: Team[] = [];
  toholdleft3: Team[] = []; 
  toholdright3: Team[] = [];
  toholdleft4: Team[] = [];
  toholdright4: Team[] = [];
  toholdleftfinal: Team = new Team("leftholder", 0, 0); // Add an initializer or assign a value
  toholdrightfinal: Team = new Team("rightholder", 0, 0); // Add an initializer or assign a value
  toholdchampion: Team = new Team("championholder", 0, 0); // Add an initializer or assign a value
  okafor = false;

  showFull = false;

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

  teamsleft1: Team[] = [
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

  teamsleft2: Team[] = [
    new Team("Placeholder20", 1, 0),
    new Team("Placeholder21", 1, 0),
    new Team("Placeholder22", 1, 0),
    new Team("Placeholder23", 1, 0),
    new Team("Placeholder24", 1, 0),
    new Team("Placeholder25", 1, 0),
    new Team("Placeholder26", 1, 0),
    new Team("Placeholder27", 1, 0)

  ];
  teamsleft3: Team[] = [
    new Team("Placeholder28", 1, 0),
    new Team("Placeholder29", 1, 0),
    new Team("Placeholder30", 1, 0),
    new Team("Placeholder31", 1, 0)
  ];

  teamsright1: Team[] = [
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

  teamsright2: Team[] = [
    new Team("Placeholder48", 1, 0),
    new Team("Placeholder49", 1, 0),
    new Team("Placeholder50", 1, 0),
    new Team("Placeholder51", 1, 0),
    new Team("Placeholder52", 1, 0),
    new Team("Placeholder53", 1, 0),
    new Team("Placeholder54", 1, 0),
    new Team("Placeholder55", 1, 0)

  ];

  teamsright3: Team[] = [
    new Team("Placeholder56", 1, 0),
    new Team("Placeholder57", 1, 0),
    new Team("Placeholder58", 1, 0),
    new Team("Placeholder59", 1, 0)
  ];

  teamsright4: Team[] = [
    new Team("Placeholder62", 1, 0),
    new Team("Placeholder63", 1, 0),
  ];

  teamsleft4: Team[] = [
    new Team("Placeholder60", 1, 0),
    new Team("Placeholder61", 1, 0),
  ];

  teamsleftfinal = new Team("LEFTFINAL", 1, 0);
  teamsrightfinal = new Team("RIGHTFINAL", 1, 0);
  champion = new Team("CHAMPION", 1, 0);

  
  ngOnInit() {
    this.currteamleft = this.teamsleft;
    this.currteamright = this.teamsright;
  }

  submitround1() {
    console.log("submitround1 clicked");

    //give holder data
    if (this.roundNumber == 0) {
      //this.toholdleft0 = this.currteamleft.slice();
      //this.toholdright0 = this.currteamright.slice();
      
      for (var i of this.currteamleft) {
        this.selectedNames.push(i.name);
      }
      for (var i of this.currteamright) {
        this.selectedNames.push(i.name);
      }

      for (const team of this.currteamleft) {
        const newTeam = new Team(team.name, team.seed, team.wins, team.selected);
        this.toholdleft0.push(newTeam);
    }

    // Create new teams for this.toholdright0
    for (const team of this.currteamright) {
        const newTeam = new Team(team.name, team.seed, team.wins, team.selected);
        this.toholdright0.push(newTeam);
    }
      
      console.log("lam0")
      console.log(this.toholdleft0)
      console.log(this.toholdright0)
      //return;
    }

    if (this.roundNumber == 1) {
      //this.toholdleft0 = this.currteamleft.slice();
      //this.toholdright0 = this.currteamright.slice();
      
      for (var i of this.currteamleft) {
        this.selectedNames.push(i.name);
      }
      for (var i of this.currteamright) {
        this.selectedNames.push(i.name);
      }

      for (const team of this.currteamleft) {
        const newTeam = new Team(team.name, team.seed, team.wins, team.selected);
        this.toholdleft1.push(newTeam);
    }

    // Create new teams for this.toholdright0
    for (const team of this.currteamright) {
        const newTeam = new Team(team.name, team.seed, team.wins, team.selected);
        this.toholdright1.push(newTeam);
    }
      
      console.log("lam1")
      console.log(this.toholdleft1)
      console.log(this.toholdright1)
      //return;
    }

    if (this.roundNumber == 2) {
      //this.toholdleft0 = this.currteamleft.slice();
      //this.toholdright0 = this.currteamright.slice();
      
      for (var i of this.currteamleft) {
        this.selectedNames.push(i.name);
      }
      for (var i of this.currteamright) {
        this.selectedNames.push(i.name);
      }

      for (const team of this.currteamleft) {
        const newTeam = new Team(team.name, team.seed, team.wins, team.selected);
        this.toholdleft2.push(newTeam);
    }

    // Create new teams for this.toholdright0
    for (const team of this.currteamright) {
        const newTeam = new Team(team.name, team.seed, team.wins, team.selected);
        this.toholdright2.push(newTeam);
    }
      
      console.log("lam2")
      console.log(this.toholdleft2)
      console.log(this.toholdright2)
      //return;
    }

    if (this.roundNumber == 3) {
      //this.toholdleft0 = this.currteamleft.slice();
      //this.toholdright0 = this.currteamright.slice();
      
      for (var i of this.currteamleft) {
        this.selectedNames.push(i.name);
      }
      for (var i of this.currteamright) {
        this.selectedNames.push(i.name);
      }

      for (const team of this.currteamleft) {
        const newTeam = new Team(team.name, team.seed, team.wins, team.selected);
        this.toholdleft3.push(newTeam);
    }

    // Create new teams for this.toholdright0
    for (const team of this.currteamright) {
        const newTeam = new Team(team.name, team.seed, team.wins, team.selected);
        this.toholdright3.push(newTeam);
    }
      
      console.log("lam3")
      console.log(this.toholdleft3)
      console.log(this.toholdright3)
      //return;
    }

    if (this.roundNumber == 4) {
      //this.toholdleft0 = this.currteamleft.slice();
      //this.toholdright0 = this.currteamright.slice();
      
      for (var i of this.currteamleft) {
        this.selectedNames.push(i.name);
      }
      for (var i of this.currteamright) {
        this.selectedNames.push(i.name);
      }

      for (const team of this.currteamleft) {
        const newTeam = new Team(team.name, team.seed, team.wins, team.selected);
        this.toholdleft4.push(newTeam);
    }

    // Create new teams for this.toholdright0
    for (const team of this.currteamright) {
        const newTeam = new Team(team.name, team.seed, team.wins, team.selected);
        this.toholdright4.push(newTeam);
    }
      
      console.log("lam4")
      console.log(this.toholdleft4)
      console.log(this.toholdright4)
      //return;
    }

    //check if the right number of teams are selected by enumeration
    //so like the length of the array of selected teams should be 8
    //or 64 32 16 8 4 2 1
    //maybe do this after current team
    //maybe do something janky with holder
    //or make new holders


    this.roundNumber += 1; // iteratre round number - useful in html

    //check for final team
    if (this.currteamleft.length == 2) {
      console.log("here")
      this.teamsleftfinal = this.currteamleft[0];
      this.teamsrightfinal = this.currteamright[0];

      //reset their selected status
      this.teamsleftfinal.selected = false;
      this.teamsrightfinal.selected = false;

      //reset current teams for later logic
      this.currteamleft = []
      return;
    }

    console.log("ROUND NUMBER: " + this.roundNumber)
    if (this.roundNumber == 6) {
      console.log("YEAER")
      if (this.teamsleftfinal.selected) {
        this.champion = this.teamsleftfinal;
        return;
      } else {
        this.champion = this.teamsrightfinal;
        return;
      }
    }

    //reset holders
    this.holderleft = [];
    this.holderright = [];

    //todo add error checking
    //console.log(this.currteamleft)
    //console.log(this.currteamright)
    //console.log("a")



    for (var i of this.currteamleft) {
      if (i.selected) {
        this.holderleft.push(i);
      }
    }
    console.log("b")
    for (var i of this.currteamright) {
      if (i.selected) {
        this.holderright.push(i);
      }
    }
    this.currteamleft = this.holderleft;
    this.currteamright = this.holderright;

    //reset the selected teams
    for (var i of this.currteamleft) {
      i.selected = false;
    }
    for (var i of this.currteamright) {
      i.selected = false;
    }

    //this.teamsleft1 = this.currteamleft;
    //this.teamsright1 = this.currteamright;

    

    console.log("submitround")
  }


  objectKeys = Object.keys;

  //gets keys of the team
  a(team: any) {
    return Object.keys(team);
  }

  //debug function for selecting half teams
  selecthalf() {
    console.log("selectHalfTeams clicked");
    var should = true;
    for (var i of this.currteamleft) {
      if (should) {
        i.selected = true;
      }
      should = !should;
    }
    var should = true;
    for (var i of this.currteamright) {
      if (should) {
        i.selected = true;
      }
      should = !should;
    }
    console.log(this.currteamleft)
    console.log(this.currteamright)
  }

  dbg() {
    console.log("debug")
    console.log(this.teamsleft)
  }


  //selectTeam(team: Team): void {
   // console.log("ASDF")
  //}
  selectTeam(team: Team): void {
    console.log("selectTeam for " + team.name);
    console.log("selected: " + team.selected);
    const teams = this.currteamleft.includes(team) ? this.currteamleft : this.currteamright;
    
    // If the clicked team is already selected, deselect it
    if (team.selected) {
      team.selected = false;
    } else {
      // Deselect the previously selected team from the same pair, if any
      const pairIndex = teams.indexOf(team);
      if (pairIndex !== -1) {
        const otherTeamIndex = pairIndex % 2 === 0 ? pairIndex + 1 : pairIndex - 1;
        if (otherTeamIndex >= 0 && otherTeamIndex < teams.length) {
          teams[otherTeamIndex].selected = false;
        }
      }
      
      // Select the clicked team
      team.selected = true;
    }
  }

  /*
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
*/




  //end class def
}

