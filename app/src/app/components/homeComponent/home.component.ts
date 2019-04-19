/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';

import { ModelMethods } from '../../lib/model.methods';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { NDataModelService, NLogoutService } from 'neutrinos-seed-services';
import { metadataService } from '../../services/metadata/metadata.service';

@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html'
})

export class homeComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    user;
    menu;
    constructor(private bdms: NDataModelService, 
        private logoutService: NLogoutService, 
        private router: Router, 
        private metadata : metadataService,
        private activatedRoute : ActivatedRoute) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
            this.metadata.storePersonLocally(data[0]); 
            console.log('home resolve',data)});
        this.metadata.getMenu().subscribe(result => {
            this.menu = result;
            this.menu = this.menu.navbar.mentor;
        });
    }

    logoutUser() {
      this.logoutService.logout();
      this.router.navigate(['/login']);
    }

    get(dataModelName, filter ?, keys ?, sort ?, pagenumber ?, pagesize ?) {
        this.mm.get(dataModelName, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
                this.metadata.storePersonLocally(result[0]); 
            },
            error => {
                // Handle errors here
            });
    }

    getById(dataModelName, dataModelId) {
        this.mm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        this.mm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.mm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.mm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }

    delete (dataModelName, filter) {
        this.mm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    deleteById(dataModelName, dataModelId) {
        this.mm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.mm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }


}
