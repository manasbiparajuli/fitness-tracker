import { NgModule } from '@angular/core';
import { 
    MatIconModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
} from '@angular/material';
import { MatButtonModule } from '@angular/material/button'

@NgModule({
    imports: [
        MatButtonModule, 
        MatIconModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatDatepickerModule, 
        MatNativeDateModule, 
        MatCheckboxModule, 
        MatSidenavModule, 
        MatToolbarModule, 
        MatListModule, 
        MatTabsModule, 
        MatCardModule, 
        MatSelectModule, 
        MatProgressSpinnerModule, 
        MatDialogModule, 
        MatTableModule,
        MatSortModule,
        MatPaginatorModule],

    exports: [
        MatButtonModule, 
        MatIconModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatDatepickerModule, 
        MatNativeDateModule, 
        MatCheckboxModule, 
        MatSidenavModule, 
        MatToolbarModule, 
        MatListModule, 
        MatTabsModule, 
        MatCardModule, 
        MatSelectModule, 
        MatProgressSpinnerModule, 
        MatDialogModule, 
        MatTableModule,
        MatSortModule,
        MatPaginatorModule],
    
},)

export class MaterialModule {}