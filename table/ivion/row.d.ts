import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MatRow } from '../row';
import { MatRipple } from '@angular/material/core';
/** Data row template container that contains the cell outlet. Adds the right class and role. */
export declare class IvRow extends MatRow implements OnChanges {
    ripple: MatRipple;
    selected: boolean;
    selectedChange: EventEmitter<boolean>;
    get isSelected(): boolean;
    get isSelectable(): boolean;
    onClick(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
