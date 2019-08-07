/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { metadataService } from '../../services/metadata/metadata.service'

@Injectable()
export class dataresolverService implements Resolve<any>{
    

    constructor(private metadataService : metadataService){}

    resolve(){
        return this.metadataService.getData();

    }


}
