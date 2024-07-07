import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgrammeComponent } from './component/programme/programme.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'programme', component: ProgrammeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
