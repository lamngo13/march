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
  //I want to initialize a dictionary here
  myDictionary: { [key: string]: any } = {
    "bruh": 1,
    "yeet": 2
  };

  objectKeys = Object.keys;
}

