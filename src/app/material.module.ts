import { NgModule } from '@angular/core';
import { 
    MatIconModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
} from '@angular/material';
import { MatButtonModule } from '@angular/material/button'

@NgModule({
    imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule],
    exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,     MatNativeDateModule, MatCheckboxModule]
},)

export class MaterialModule {}