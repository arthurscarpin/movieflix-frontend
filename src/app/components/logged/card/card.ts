import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgClass],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() duration: string = '';
  @Input() ageRating: string = '';
  @Input() approvalRating: number = 0;
  @Input() providerLogo: string = '';
  @Input() isTop10: boolean = false;
  @Input() releaseDate: string = '';

  getRatingClass(): string {
    return this.approvalRating >= 50 ? 'rating-good' : 'rating-bad';
  }
}
