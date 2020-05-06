import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClassListComponent } from './mailer/classes/class-list/class-list.component';
import { ClassItemComponent } from './mailer/classes/class-list/class-item/class-item.component';
import { VisitorListComponent } from './mailer/visitors/visitor-list/visitor-list.component';
import { VisitorDetailComponent } from './mailer/visitors/visitor-list/visitor-detail/visitor-detail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { HeaderComponent } from './header/header/header.component';
import { MailerComponent } from './mailer/mailer.component';
import { MessageComponent } from './message/message.component';
import { SettingsComponent } from './settings/settings.component';
import { HighlightDirective } from './shared/highlight.directive';
import { ClassDetailComponent } from './mailer/classes/class-detail/class-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassListComponent,
    ClassItemComponent,
    VisitorListComponent,
    VisitorDetailComponent,
    DropdownDirective,
    HeaderComponent,
    MailerComponent,
    MessageComponent,
    SettingsComponent,
    HighlightDirective,
    ClassDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
