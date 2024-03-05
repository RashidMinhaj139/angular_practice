import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { Welcome2Component } from './welcome2/welcome2.component';
import { Welcome3Component } from './welcome3/welcome3.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome2', component: Welcome2Component  ,canActivateChild:[RouteGuardService]},
  { path: 'welcome3/:name', component: Welcome3Component  ,canActivateChild:[RouteGuardService]},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'listtodos', component: ListTodosComponent ,canActivateChild:[RouteGuardService]},
  { path: 'menu', component: MenuComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
