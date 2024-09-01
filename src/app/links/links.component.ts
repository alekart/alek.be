import { Component } from '@angular/core';
import { TrackClickDirective } from '../directives/track-click.directive';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [TrackClickDirective],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent {

}
