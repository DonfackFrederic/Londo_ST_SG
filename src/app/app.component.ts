import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CandidaturesComponent } from './candidatures/candidatures.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CandidaturesComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SG_app';
}
