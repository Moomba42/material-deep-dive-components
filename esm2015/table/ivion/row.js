import { CDK_ROW_TEMPLATE } from '@angular/cdk/table';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatRow } from '../row';
import { MatRipple } from '@angular/material/core';
/** Data row template container that contains the cell outlet. Adds the right class and role. */
export class IvRow extends MatRow {
    constructor() {
        super(...arguments);
        this.selectedChange = new EventEmitter();
    }
    get isSelected() {
        return this.selected;
    }
    get isSelectable() {
        return this.selectedChange.observers.length > 0;
    }
    onClick() {
        this.selectedChange.emit(!this.selected);
    }
    ngOnChanges(changes) {
        if (this.ripple) {
            this.ripple.disabled = !this.isSelectable;
        }
    }
}
IvRow.decorators = [
    { type: Component, args: [{
                selector: 'iv-row, tr[iv-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'mat-row iv-row',
                    'role': 'row',
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'ivRow',
                providers: [{ provide: MatRow, useExisting: IvRow }]
            },] }
];
IvRow.propDecorators = {
    ripple: [{ type: ViewChild, args: [MatRipple,] }],
    selected: [{ type: Input }],
    selectedChange: [{ type: Output }],
    isSelected: [{ type: HostBinding, args: ['class.iv-row-selected',] }],
    isSelectable: [{ type: HostBinding, args: ['class.iv-row-selectable',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3RhYmxlL2l2aW9uL3Jvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQzlDLE1BQU0sRUFBaUIsU0FBUyxFQUNoQyxpQkFBaUIsRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUM5QixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFakQsZ0dBQWdHO0FBZWhHLE1BQU0sT0FBTyxLQUFNLFNBQVEsTUFBTTtJQWRqQzs7UUFzQlcsbUJBQWMsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQXdCL0UsQ0FBQztJQXRCRyxJQUNJLFVBQVU7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELElBQ0ksWUFBWTtRQUNaLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBR0QsT0FBTztRQUNILElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSxXQUFXLENBQUMsT0FBc0I7UUFFckMsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQzdDO0lBQ0wsQ0FBQzs7O1lBNUNKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixJQUFJLEVBQUU7b0JBQ0YsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsTUFBTSxFQUFFLEtBQUs7aUJBQ2hCO2dCQUNELCtGQUErRjtnQkFDL0YsK0NBQStDO2dCQUMvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsT0FBTztnQkFDaEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBQyxDQUFDO2FBQ3JEOzs7cUJBR0ksU0FBUyxTQUFDLFNBQVM7dUJBRW5CLEtBQUs7NkJBR0wsTUFBTTt5QkFHTixXQUFXLFNBQUMsdUJBQXVCOzJCQUtuQyxXQUFXLFNBQUMseUJBQXlCO3NCQUtyQyxZQUFZLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q0RLX1JPV19URU1QTEFURX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ29tcG9uZW50LFxuICAgIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uQ2hhbmdlcyxcbiAgICBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCxcbiAgICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Um93fSBmcm9tICcuLi9yb3cnO1xuaW1wb3J0IHtNYXRSaXBwbGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG4vKiogRGF0YSByb3cgdGVtcGxhdGUgY29udGFpbmVyIHRoYXQgY29udGFpbnMgdGhlIGNlbGwgb3V0bGV0LiBBZGRzIHRoZSByaWdodCBjbGFzcyBhbmQgcm9sZS4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaXYtcm93LCB0cltpdi1yb3ddJyxcbiAgICB0ZW1wbGF0ZTogQ0RLX1JPV19URU1QTEFURSxcbiAgICBob3N0OiB7XG4gICAgICAgICdjbGFzcyc6ICdtYXQtcm93IGl2LXJvdycsXG4gICAgICAgICdyb2xlJzogJ3JvdycsXG4gICAgfSxcbiAgICAvLyBTZWUgbm90ZSBvbiBDZGtUYWJsZSBmb3IgZXhwbGFuYXRpb24gb24gd2h5IHRoaXMgdXNlcyB0aGUgZGVmYXVsdCBjaGFuZ2UgZGV0ZWN0aW9uIHN0cmF0ZWd5LlxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YWxpZGF0ZS1kZWNvcmF0b3JzXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgZXhwb3J0QXM6ICdpdlJvdycsXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE1hdFJvdywgdXNlRXhpc3Rpbmc6IEl2Um93fV0sXG59KVxuZXhwb3J0IGNsYXNzIEl2Um93IGV4dGVuZHMgTWF0Um93IGltcGxlbWVudHMgT25DaGFuZ2Vze1xuXG4gICAgQFZpZXdDaGlsZChNYXRSaXBwbGUpIHJpcHBsZTogTWF0UmlwcGxlO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgc2VsZWN0ZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaXYtcm93LXNlbGVjdGVkJylcbiAgICBnZXQgaXNTZWxlY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pdi1yb3ctc2VsZWN0YWJsZScpXG4gICAgZ2V0IGlzU2VsZWN0YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRDaGFuZ2Uub2JzZXJ2ZXJzLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCghdGhpcy5zZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkXG4gICAge1xuICAgICAgICBpZih0aGlzLnJpcHBsZSkge1xuICAgICAgICAgICAgdGhpcy5yaXBwbGUuZGlzYWJsZWQgPSAhdGhpcy5pc1NlbGVjdGFibGU7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==