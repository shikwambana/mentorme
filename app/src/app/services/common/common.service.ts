/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class commonService {

    constructor(private snackbar: MatSnackBar){}

    public alertsnackbar(message, button?, duration = 5000) {
        message = message.charAt(0).toUpperCase() + message.substring(1);
        message = message.replace(/([A-Z])/g, ' $1').trim();
        this.snackbar.open(message, button, {
            duration: duration
        })
        return message;
    }

}
