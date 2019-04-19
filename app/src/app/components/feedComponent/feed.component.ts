/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { mentorService } from '../../services/mentor/mentor.service';

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-feed',
    templateUrl: './feed.template.html'
})

export class feedComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    menteesList;
    constructor(private bdms: NDataModelService, private mentorService : mentorService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    card = [
        {
            'name' : 'Lesego Matsobane',
            'category' : 'social',
            'date' : '22 March 2019',
            'content' : 'Added three new mentors'
        },
         {
            'name' : 'Jacket Nyambo',
            'category' : 'spiritual',
            'date' : '15 March 2019',
            'content' : 'Did devotion 5 days in a row'
        },
         {
            'name' : 'Jacket Nyambo',
            'category' : 'spiritual',
            'date' : '13 March 2019',
            'content' : 'Did devotion 5 days in a row'
        },
         {
            'name' : 'Sipho Dibakoane',
            'category' : 'emotional',
            'date' : '10 March 2019',
            'content' : 'Brought 4 people to church'
        },
         {
            'name' : 'Vuyo Shabangu',
            'category' : 'mental',
            'date' : '5 March 2019',
            'content' : 'Passed all his modules during engineering week'
        }
        
    ]
    
    ngOnInit() {

        this.menteesList = this.mentorService.menteeList();
        console.log(this.menteesList)
    }

    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
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
