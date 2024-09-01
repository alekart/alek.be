import { Component } from '@angular/core';
import { LinksComponent } from '../links/links.component';
import { TrackClickDirective } from '../directives/track-click.directive';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [LinksComponent, TrackClickDirective],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {

}
