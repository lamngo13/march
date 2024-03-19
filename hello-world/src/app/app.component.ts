import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // <-- Add this line

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

  objectKeys = Object.keys;
}

