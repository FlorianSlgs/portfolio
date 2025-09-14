import { Component } from '@angular/core';

import { Header } from '../../DOM/header/header';

import { Section1 } from '../../DOM/section1/section1';

import { Section2 } from '../../DOM/section2/section2';

@Component({
  selector: 'app-main',
  imports: [Header, Section1, Section2],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}