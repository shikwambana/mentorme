/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NSystemService, NSnackbarService } from 'neutrinos-seed-services';
import { Router } from '@angular/router';
import { tokenService } from '../../services/token/token.service';

@Injectable()
export class mentorService {
    myheaders: HttpHeaders;
    appProperties: any;
    systemService = NSystemService.getInstance();
    bModellerURL: string;
    token: any;
    mentees;

    constructor(private http: HttpClient,
        private snackBarService: NSnackbarService,
        private tokenService: tokenService,
        private router: Router) {
        this.appProperties = this.systemService.getVal('properties');
        console.log(this.appProperties);
        this.bModellerURL = this.appProperties.modellerUrl;
        this.myheaders = new HttpHeaders();
    }


    getMentees(menteeList) {
        console.log('getting mentees');

        this.token = this.tokenService.getToken();
        
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        let options = { headers: headers };

        let data = {
            'mentees': menteeList,
            'token': this.token
        }
        
        return this.http.post(this.bModellerURL + '/getMentees', data , options).subscribe( result => {
            this.mentees = result;
            console.log('got the mentees',result)
        }, error => {
            console.log('cant get mentees',error)
        });

        // return this.person.mentoring.mentees;

    }

    menteeList(){
        return this.mentees;
    }

}
