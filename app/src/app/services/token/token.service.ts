/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { NSystemService, NSessionStorageService } from 'neutrinos-seed-services';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class tokenService {

    systemService = NSystemService.getInstance();
    appProperties: any;
    bModellerURL: string;
    token;

    constructor(private http: HttpClient){
        this.appProperties = this.systemService.getVal('properties');
        console.log(this.appProperties);
        this.bModellerURL = this.appProperties.modellerUrl + '/token';
     
    }

    generateToken(){
        if(!this.token){
            this.http.post(this.bModellerURL, {'hi' : 'ola'} ).subscribe(result => {
                this.token = result;
                 console.log('got token');
                 },
                 error => {
                 console.log('failed to get token', error)
             });
        }else{
            console.log('already have token');
        }
       
    }

    getToken(){
        console.log(this.token.accessToken);
        return this.token.accessToken;
    }
}
