/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { person } from '../../models/person.model';
import { metadataService } from '../../services/metadata/metadata.service'

@Injectable()
export class inviteresolverService implements Resolve<any>{
    

    constructor(private metadataService : metadataService, private route : ActivatedRoute){}

    resolve(route: ActivatedRouteSnapshot){
        // throw new Error("Method not implemented.");
        let user;
        user = this.metadataService.getCategory();
        console.log('resolver service',user)
        return user;

    }

}
