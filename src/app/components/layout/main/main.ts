import { Component } from '@angular/core';

import { Header } from '../../DOM/header/header';

import { Section1 } from '../../DOM/section1/section1';
import { Section2 } from '../../DOM/section2/section2';
import { Section3 } from '../../DOM/section3/section3';
import { Section4 } from './../../DOM/section4/section4';
import { Section5 } from '../../DOM/section5/section5';
import { Footer } from '../../DOM/footer/footer';

@Component({
  selector: 'app-main',
  imports: [Header, Section1, Section2, Section3, Section4, Section5, Footer],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}