import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperSecretComponent } from './super-secret/super-secret.component';
import { SubscriberPageComponent } from './subscriber-page/subscriber-page.component';

import { AdminGuard } from './core/admin.guard';
import { CanReadGuard } from './core/can-read.guard';


const routes: Routes = [
  { path: 'content', component: SubscriberPageComponent, canActivate: [CanReadGuard] },
  { path: 'secret', component: SuperSecretComponent, canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
