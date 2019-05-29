import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../crud.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  title = 'Restourant list';

  items: any;
  itemName: string;
  itemAge: number;
  itemAddress: string;

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.read_Items().subscribe(data => {

      this.items = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Age: e.payload.doc.data()['Age'],
          Address: e.payload.doc.data()['Address'],
        };
      })
      console.log(this.items);

    });
  }

  CreateRecord() {
    let record = {};
    record['Name'] = this.itemName;
    record['Age'] = this.itemAge;
    record['Address'] = this.itemAddress;

      this.crudService.create_NewItem(record).then(resp => {
        this.itemName = '';
        this.itemAge = undefined;
        this.itemAddress = '';
        console.log(resp);
      })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.crudService.delete_Item(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Age'] = recordRow.EditAge;
    record['Address'] = recordRow.EditAddress;

    this.crudService.update_Item(recordRow.id, record);
    recordRow.isEdit = false;
  }
}
