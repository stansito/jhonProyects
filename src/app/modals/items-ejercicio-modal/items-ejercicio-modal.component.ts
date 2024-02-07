import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../types';

@Component({
  selector: 'app-items-ejercicio-modal',
  templateUrl: './items-ejercicio-modal.component.html',
  styleUrls: ['./items-ejercicio-modal.component.scss'],
})
export class ItemsEjercicioModalComponent {
  @Input() items: Item[] = [];
  @Input() selectedItems: string = '';
  @Input() title = 'Select Items';

  @Output() selectionCancel = new EventEmitter<void>();
  @Output() selectionChange = new EventEmitter<string>();

  filteredItems: Item[] = [];
  workingSelectedValues: string = '';

  ngOnInit() {
    this.filteredItems = [...this.items];
    this.workingSelectedValues = this.selectedItems;
  }

  trackItems(index: number, item: Item) {
    return item.value;
  }

  cancelChanges() {
    this.selectionCancel.emit();
  }

  confirmChanges() {
    this.selectionChange.emit(this.workingSelectedValues);
  }

  searchbarInput(ev: any) {
    this.filterList(ev.target.value);
  }

  filterList(searchQuery: string | undefined) {
    if (searchQuery === undefined) {
      this.filteredItems = [...this.items];
    } else {
      const normalizedQuery = searchQuery.toLowerCase();
      this.filteredItems = this.items.filter((item) => {
        return item.text.toLowerCase().includes(normalizedQuery);
      });
    }
  }

  selectItem(item: Item) {

    if (item !== null) {
      this.workingSelectedValues = item.text;
    }

    // Confirmar automáticamente los cambios al seleccionar un elemento
    this.confirmChanges(); 
  }

  isItemSelected(item: Item): boolean {
    return this.workingSelectedValues.includes(item.value);
  }
}
