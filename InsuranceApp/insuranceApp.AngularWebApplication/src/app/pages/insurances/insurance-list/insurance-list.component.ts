import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html'
})
export class InsuranceListComponent {
    

    onDeleteConfirm(event): void {
        if (window.confirm('Esta seguro de eliminar la Poliza seleccionada?')) {
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
}
