import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacePage } from './face';

@NgModule({
  declarations: [
    FacePage,
  ],
  imports: [
    IonicPageModule.forChild(FacePage),
  ],
})
export class FacePageModule {}
