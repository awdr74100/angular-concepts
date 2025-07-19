import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './shared/components/button/button';
import { Header } from './shared/components/header/header';
import { Counter } from './shared/components/counter/counter';
import { environment } from '../environments/environment';
// import { InlineSVGComponent } from "ng-inline-svg-2/lib_commonjs/inline-svg.component";

// import { SvgIconComponent } from '@ngneat/svg-icon';
// import { SvgIconComponent } from "../../node_modules/.pnpm/angular-svg-icon@19.1.1_@an_0e1c5c0e16b69a6a074482848888bcc1/node_modules/angular-svg-icon/lib/svg-icon.component";
import { SvgIconComponent, SvgIconRegistryService } from 'angular-svg-icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Header, Counter, SvgIconComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('Signal Title');
  message = 'Hello World';
  buttonText = signal('Cancel');
  iconReg = inject(SvgIconRegistryService);

  constructor() {
    this.iconReg.loadSvg('/icons/user.svg', 'user')?.subscribe();
  }

  keyUpHandler(event: KeyboardEvent) {
    console.log(event);
  }

  ngOnInit(): void {
    console.log(environment.apiUrl);
  }
}
