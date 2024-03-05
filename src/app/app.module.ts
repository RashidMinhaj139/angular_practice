import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Welcome2Component } from './welcome2/welcome2.component';
import { Welcome3Component } from './welcome3/welcome3.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
// import { CommonModule } from '@angular/common';
// import { NgIf } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    Welcome2Component,
    Welcome3Component,
    ErrorComponent,
    LoginComponent,
    SignupComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
    // CommonModule
    // NgIf
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
