import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent {
    

    onDeleteConfirm(event): void {
        if (window.confirm('Esta seguro de eliminar el cliente seleccionado?')) {
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
}
