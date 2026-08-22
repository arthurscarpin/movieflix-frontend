import { Component } from '@angular/core';
import { Header } from "../../../components/not-logged/header/header";
import { ResetPassword } from '../../../components/not-logged/reset-password/reset-password';

@Component({
  selector: 'app-forgot-password',
  imports: [Header, ResetPassword],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {}
