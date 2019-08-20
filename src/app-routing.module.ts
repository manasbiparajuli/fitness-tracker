import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './app/welcome/welcome.component';
import { SignupComponent } from './app/auth/signup/signup.component';
import { LoginComponent } from './app/auth/login/login.component';
import { TrainingComponent } from './app/training/training.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: 'training', component: TrainingComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}