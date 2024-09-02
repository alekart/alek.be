import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { CvInterface } from '../interfaces/cv.interface';
import { CommonModule } from '@angular/common';
import { TrackClickDirective } from '../directives/track-click.directive';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, TrackClickDirective],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent implements OnInit {
  http: HttpClient = inject(HttpClient);
  data?: CvInterface;

  constructor() {
  }

  ngOnInit(): void {
    this.http.get<CvInterface>('assets/cv.json').subscribe({
      next: (value: CvInterface) => {
        this.data = value;
      }
    })
  }
}
