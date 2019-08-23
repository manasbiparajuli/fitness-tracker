import { Subject, config } from 'rxjs';
import { MatSnackBar } from '@angular/material';

export class UIService {
    loadingStateChanged = new Subject<boolean>();

    constructor( private snackbar: MatSnackBar){}

    showSnackbar(message: string, action, duration){
        this.snackbar.open( message, action, {
            duration: duration
        })
    }
}