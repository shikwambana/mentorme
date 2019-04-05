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
    token: string;

    constructor(private http: HttpClient, private tokenService: tokenService) {
        this.appProperties = this.systemService.getVal('properties');
        // console.log(this.appProperties);
        this.bModellerURL = this.appProperties.modellerUrl + '/reset';
    }

    reset(username: string, password: string) {
        console.log(username, password)

        let body = {
            "userKey": 'j0pznt8',
            "password": password,
            "sendMail": false,
            "sendMailKey": username
          }

          
        this.token = this.tokenService.getToken();
        console.log(this.token);

        let data = {
            'body' : body,
            'token' : this.token
        }

        // this.tokenService.getToken().subscribe(result => {
            
            let headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token });
                let options = { headers: headers };

            this.http.post(this.bModellerURL, data, options).subscribe(results => {
                console.log('pwd reset', results)
            }, error => {
                console.log('failed to reset', error)
            })

        // }, error => {

        // })

    }

}
