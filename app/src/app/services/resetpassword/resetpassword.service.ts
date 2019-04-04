/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NSystemService, NSessionStorageService } from 'neutrinos-seed-services';
import { tokenService } from '../../services/token/token.service';

@Injectable()
export class resetpasswordService {

    systemService = NSystemService.getInstance();
    appProperties: any;
    bModellerURL: string;

    constructor(private http: HttpClient, private tokenService: tokenService) {
        this.appProperties = this.systemService.getVal('properties');
        // console.log(this.appProperties);
        this.bModellerURL = this.appProperties.modellerUrl + '/reset';
    }

    reset(username: string, password: string) {
        console.log(username, password)

        let body = {
            "userKey": username,
            "password": password,
            "sendMail": true,
            "sendMailKey": username
          }

          
        
        this.tokenService.getToken().subscribe(result => {
            
            let headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + result.accessToken });
                let options = { headers: headers };

            this.http.patch(this.bModellerURL, body, options).subscribe(results => {
                console.log('pwd reset', results)
            }, error => {
                console.log('failed to reset', error)
            })

        }, error => {

        })

    }

}
