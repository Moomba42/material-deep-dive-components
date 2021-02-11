import { CdkRow } from '@angular/cdk/table';
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
                template: '<ng-container cdkCellOutlet></ng-container>',
                host: {
                    'class': 'mat-row iv-row',
                    'role': 'row',
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'ivRow',
                providers: [{ provide: CdkRow, useExisting: IvRow }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3RhYmxlL2l2aW9uL3Jvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW1CLE1BQU0sRUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZFLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFDakQsTUFBTSxFQUFpQixTQUFTLEVBQ3hDLGlCQUFpQixFQUNwQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsTUFBTSxFQUFZLE1BQU0sUUFBUSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUVqRCxnR0FBZ0c7QUFlaEcsTUFBTSxPQUFPLEtBQU0sU0FBUSxNQUFNO0lBZGpDOztRQXNCVyxtQkFBYyxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO0lBd0IvRSxDQUFDO0lBdEJHLElBQ0ksVUFBVTtRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFDSSxZQUFZO1FBQ1osT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFHRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLFdBQVcsQ0FBQyxPQUFzQjtRQUVyQyxJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDN0M7SUFDTCxDQUFDOzs7WUE1Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSw2Q0FBNkM7Z0JBQ3ZELElBQUksRUFBRTtvQkFDRixPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixNQUFNLEVBQUUsS0FBSztpQkFDaEI7Z0JBQ0QsK0ZBQStGO2dCQUMvRiwrQ0FBK0M7Z0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxPQUFPO2dCQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFDLENBQUM7YUFDckQ7OztxQkFHSSxTQUFTLFNBQUMsU0FBUzt1QkFFbkIsS0FBSzs2QkFHTCxNQUFNO3lCQUdOLFdBQVcsU0FBQyx1QkFBdUI7MkJBS25DLFdBQVcsU0FBQyx5QkFBeUI7c0JBS3JDLFlBQVksU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDREtfUk9XX1RFTVBMQVRFLCBDZGtSb3csIENka1Jvd0RlZn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ29tcG9uZW50LFxuICAgIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25DaGFuZ2VzLFxuICAgIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQsXG4gICAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFJvdywgTWF0Um93RGVmfSBmcm9tICcuLi9yb3cnO1xuaW1wb3J0IHtNYXRSaXBwbGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG4vKiogRGF0YSByb3cgdGVtcGxhdGUgY29udGFpbmVyIHRoYXQgY29udGFpbnMgdGhlIGNlbGwgb3V0bGV0LiBBZGRzIHRoZSByaWdodCBjbGFzcyBhbmQgcm9sZS4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaXYtcm93LCB0cltpdi1yb3ddJyxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250YWluZXIgY2RrQ2VsbE91dGxldD48L25nLWNvbnRhaW5lcj4nLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ2NsYXNzJzogJ21hdC1yb3cgaXYtcm93JyxcbiAgICAgICAgJ3JvbGUnOiAncm93JyxcbiAgICB9LFxuICAgIC8vIFNlZSBub3RlIG9uIENka1RhYmxlIGZvciBleHBsYW5hdGlvbiBvbiB3aHkgdGhpcyB1c2VzIHRoZSBkZWZhdWx0IGNoYW5nZSBkZXRlY3Rpb24gc3RyYXRlZ3kuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhbGlkYXRlLWRlY29yYXRvcnNcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBleHBvcnRBczogJ2l2Um93JyxcbiAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogQ2RrUm93LCB1c2VFeGlzdGluZzogSXZSb3d9XSxcbn0pXG5leHBvcnQgY2xhc3MgSXZSb3cgZXh0ZW5kcyBNYXRSb3cgaW1wbGVtZW50cyBPbkNoYW5nZXN7XG5cbiAgICBAVmlld0NoaWxkKE1hdFJpcHBsZSkgcmlwcGxlOiBNYXRSaXBwbGU7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZWxlY3RlZDogYm9vbGVhbjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pdi1yb3ctc2VsZWN0ZWQnKVxuICAgIGdldCBpc1NlbGVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZDtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLml2LXJvdy1zZWxlY3RhYmxlJylcbiAgICBnZXQgaXNTZWxlY3RhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZENoYW5nZS5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KCF0aGlzLnNlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmKHRoaXMucmlwcGxlKSB7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZS5kaXNhYmxlZCA9ICF0aGlzLmlzU2VsZWN0YWJsZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19