/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { person } from '../../models/person.model';
import { metadataService } from '../../services/metadata/metadata.service'
import { Observable } from 'rxjs';

@Injectable()
export class dataresolverService implements Resolve<any>{
    

    constructor(private metadataService : metadataService, private route : ActivatedRoute){}

    resolve(route: ActivatedRouteSnapshot){
        // throw new Error("Method not implemented.");
        let user;
        user = this.metadataService.getData();
        console.log('resolver service',user)

        let observer = new Observable(observer => {
            observer.next(user);
            observer.complete();
        })
        return observer;

    }


}
