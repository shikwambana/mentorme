/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import uid from 'tiny-uid';
import { invites } from '../../models/invites.model'
import { metadataService } from '../../services/metadata/metadata.service';

@Injectable()
export class inviteService {

    invites = new invites();
    userObj;
    url = 'http://localhost:24483/api/invite';
    
    constructor(
        private http: HttpClient, 
        private metadataService : metadataService
        ){}

    inviteUser(inviteDetails){
        // console.log('running');
        this.http.post(this.url, inviteDetails).subscribe(result => {
            console.log(result);
        });
        
    }


}
