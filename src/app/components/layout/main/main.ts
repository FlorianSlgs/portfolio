import { Component } from '@angular/core';

import { Header } from '../../DOM/header/header';

import { Section1 } from '../../DOM/section1/section1';

@Component({
  selector: 'app-main',
  imports: [Header, Section1],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}