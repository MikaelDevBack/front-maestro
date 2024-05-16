import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { DxCheckBoxModule, DxDataGridModule, DxTreeListModule } from 'devextreme-angular'; // Importando DxDataGridModule
import { ProductComponent } from './pages/product/product.component';
import { OrganizationsComponent } from './pages/organizations/organizations.component';
import { StatusComponent } from './pages/status/status.component';
import { WorkflowStatusComponent } from './pages/workflow-status/workflow-status.component';
import { Service } from './pages/workflow-status/workflow-status.service';

@NgModule({
  declarations: [
    AppComponent,
    OrganizationsComponent,
    StatusComponent,
    WorkflowStatusComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    DxCheckBoxModule,
    DxDataGridModule,
    DxTreeListModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
