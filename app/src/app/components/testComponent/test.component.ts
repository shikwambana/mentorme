/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { tokenService } from '../../services/token/token.service';

/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */

@Component({
    selector: 'bh-test',
    templateUrl: './test.template.html'
})

export class testComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

    constructor(private bdms: NDataModelService, private tokenService: tokenService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {

    }

    public changeListener(files: FileList) {
        if (files && files.length > 0) {
            let file: File = files.item(0);
            let reader: FileReader = new FileReader();
            reader.readAsText(file);
            reader.onload = (e) => {
                let csv: string = reader.result as string;
                this.csvJSON(csv);
            }
        }
    }

    // convert csv to json
    csvJSON(csv) {
        var lines = csv.split("\n");
        // console.log('lines',lines)
        var result = [];
        var headers = lines[0].split(";");
        // console.log('headers',headers)

        // loop through all the lines excpet the first 1 (index = 0) 
        for (var i = 1; i < lines.length-1; i++) {
            var obj = {};
            // if(lines[2]){
            //     lines[2] = lines[2].split(',')
            //     console.log(lines[2])
            // }
            var currentline = lines[i].split(";");
            // console.log('add currentline', currentline)

            // loop through the skipped line (headers = lines[0])
            for (var j = 0; j < headers.length-1; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
            // this.put('resource',obj)
        }
            // console.log(result)
            sessionStorage.setItem('resource',JSON.stringify(result))

        // this.tokenService.getNewToken().then(res => {
        // })

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
                console.log(result)
            }, error => {
                // Handle errors here
                console.log(error)                
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
