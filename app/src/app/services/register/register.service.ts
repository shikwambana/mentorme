/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class registerService {

    url = 'http://localhost:24483/api/register-email';

    constructor(private http: HttpClient){}

    register(person){

        this.http.post(this.url, person).subscribe(result => {
            console.log(result);
        });
    }
}
