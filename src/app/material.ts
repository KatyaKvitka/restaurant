import { NgModule } from '@angular/core';
import {
  MatSidenavModule, MatNativeDateModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule,
  MatFormFieldModule, MatInputModule, MatRadioModule, MatListModule, MatMenu,
} from '@angular/material';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [  MatSidenavModule, MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule,FormsModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,],

  exports: [  MatSidenavModule, MatNativeDateModule,FormsModule,
    MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,],

})

export  class  MyMaterialModule { }
