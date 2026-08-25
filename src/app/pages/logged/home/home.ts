import { Component } from '@angular/core';
import { Card } from '../../../components/logged/card/card';
import { Header } from '../../../components/logged/header/header';

@Component({
  selector: 'app-home',
  imports: [Header, Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
}
