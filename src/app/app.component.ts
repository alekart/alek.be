import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { TrackClickDirective } from './directives/track-click.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TrackClickDirective, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
