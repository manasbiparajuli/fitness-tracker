import { MatSnackBar } from '@angular/material';

export class UIService {

    constructor( private snackbar: MatSnackBar){}

    showSnackbar(message: string, action: any, duration: number){
        this.snackbar.open( message, action, {
            duration: duration
        })
    }
}