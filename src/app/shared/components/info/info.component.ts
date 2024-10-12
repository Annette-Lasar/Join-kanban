import { Component, Input } from '@angular/core';

@Component({
  selector: 'join-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  @Input() infoText: string = '';

}
