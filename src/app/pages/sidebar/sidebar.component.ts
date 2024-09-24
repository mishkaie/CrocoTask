import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  options = [
    { name: 'Croco', icon: 'assets/images/icons/sidebar/croco-logo.svg'},
    { name: 'Sport', icon: 'assets/images/icons/sidebar/sport.svg' },
    { name: 'Live', icon: 'assets/images/icons/sidebar/live.svg' },
    { name: 'Slots', icon: 'assets/images/icons/sidebar/slots.svg' },
    { name: 'Casino', icon: 'assets/images/icons/sidebar/casino.svg' }
  ];

  onOptionClick(option: any) {
  }
}
