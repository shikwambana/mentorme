/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { person } from '../../models/person.model';
import { metadataService } from '../../services/metadata/metadata.service'

@Injectable()
export class dataresolverService implements Resolve<object>{
    

    constructor(private metadataService : metadataService){}

    resolve(route: import("@angular/router").ActivatedRouteSnapshot, 
    state: import("@angular/router").RouterStateSnapshot): 
    object | import("rxjs").Observable<object> | Promise<object> {
        // throw new Error("Method not implemented.");
        return this.metadataService.getData();
    }

}
