import { MatSnackBar } from '@angular/material';

export class UIService {

    constructor( private snackbar: MatSnackBar){}

    showSnackbar(message: string, action, duration){
        this.snackbar.open( message, action, {
            duration: duration
        })
    }
}