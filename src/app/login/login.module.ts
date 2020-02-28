import { InputFeedbackComponent } from './components/input-feedback/input-feedback.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing.module';

@NgModule({
    declarations: [
        LoginComponent,
        InputFeedbackComponent
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule
    ]
})
export class LoginModule {}
