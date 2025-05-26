import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';


@Component({
    selector: 'app-error',
    imports: [ButtonModule, RippleModule, RouterModule, ButtonModule],
    standalone: true,
    templateUrl:'./error.component.html'
})
export class ErrorComponent {}
