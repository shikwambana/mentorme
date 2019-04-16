/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { inviteService } from '../../services/invite/invite.service';
import { HttpClient } from '@angular/common/http';

import uid from 'tiny-uid';
import { invites } from '../../models/invites.model';
import { metadataService } from '../../services/metadata/metadata.service';
import { MatDialog } from '@angular/material';
import { loaderComponent } from '../loaderComponent/loader.component';

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-invite',
    templateUrl: './invite.template.html'
})

export class inviteComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    fullName: string;
    email: string;

    details = {
        'name': '',
        'email': ''
    }
    invited;
    invites = new invites();
    userObj;
    url = 'http://localhost:24483/api/';

    constructor(private bdms: NDataModelService,
        private inviteService: inviteService,
        private dialog: MatDialog,
        private metadataService: metadataService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        // this.get('invites');        
    }

    openDialog() {
        const dialogRef = this.dialog.open(loaderComponent, {
            data: { message: 'Inviting' },
            width: '250px',
            disableClose: true
        });
    }


    invite() {

        if (this.inviteService.checkInvite(this.details)) {



        } else {

            this.userObj = this.metadataService.getUserObj()

            this.invites = {
                'full_name': this.details.name,
                'email_address': this.details.email,
                'code': uid(12),
                'mentor': this.userObj.username,
                'mentorName': this.userObj.firstName + ' ' + this.userObj.lastName
            }

            this.inviteService.inviteUser(this.invites);
            // this.put('invites', this.invites);
        }

    }


    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
                this.invited = result;
                console.log('got list', result)
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
                console.log(result);
            }, error => {
                // Handle errors here
                console.log(error);

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

    delete(dataModelName, filter) {
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
