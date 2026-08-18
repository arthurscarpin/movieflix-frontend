import { Component } from '@angular/core';

import { Header } from "../../../components/not-logged/header/header";
import { SingnIn } from '../../../components/not-logged/singn-in/singn-in';

@Component({
  selector: 'app-login',
  imports: [Header, SingnIn],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {}
