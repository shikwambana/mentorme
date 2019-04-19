/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { invites } from '../../models/invites.model'
import { commonService } from '../../services/common/common.service';
import { metadataService} from '../../services/metadata/metadata.service'
@Injectable()
export class inviteService {

    invites = new invites();
    userObj;
    url = 'http://localhost:24483/api';
    
    constructor(
        private http: HttpClient, 
        public common : commonService,
        // private metadataService : metadataService
        ){}

    //check if user already on the system
    checkInvite(invite: { 'name': string; 'email': string; }){

        let token = sessionStorage.getItem('accessToken');

        let found: boolean = false;

        let data = {
            'invite' : invite,
            'token' : token
        }

        //check in invites collection
        // this.http.post(this.url + '/checkInvite', data).subscribe(result => {
        //     console.log('found', result)
        //     found = true;
        // }, err => {
        //     console.log('found', err)
        //     found = false;
        // });

        return found;
    }

    inviteUser(inviteDetails: invites){
        console.log('running');
        let invited:  boolean;

        //fix email error ======================================
        this.http.post(this.url + '/invite', inviteDetails).subscribe(result => {
            console.log(result);
            invited = true;
        }, err=> {
            console.log(err);
            invited = false;
        });

        //make true just for now
        invited = true;
        return invited;
    }   


}
