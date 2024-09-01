import { Component } from '@angular/core';
import { LinksComponent } from '../links/links.component';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [LinksComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {

}
