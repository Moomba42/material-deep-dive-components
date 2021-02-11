import { CDK_ROW_TEMPLATE, CdkRow, } from '@angular/cdk/table';
import { MatRow } from '@angular/material/table';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
/** Data row template container that contains the cell outlet. Adds the right class and role. */
export class IvRow extends MatRow {
}
IvRow.decorators = [
    { type: Component, args: [{
                selector: 'iv-row, tr[iv-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'mat-row',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3RhYmxlL2l2aW9uL3Jvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLE1BQU0sR0FDUCxNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFDSCxNQUFNLEVBQ1QsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXBGLGdHQUFnRztBQWVoRyxNQUFNLE9BQU8sS0FBTSxTQUFRLE1BQU07OztZQWRoQyxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsSUFBSSxFQUFFO29CQUNGLE9BQU8sRUFBRSxTQUFTO29CQUNsQixNQUFNLEVBQUUsS0FBSztpQkFDaEI7Z0JBQ0QsK0ZBQStGO2dCQUMvRiwrQ0FBK0M7Z0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxPQUFPO2dCQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFDLENBQUM7YUFDckQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDREtfUk9XX1RFTVBMQVRFLFxuICBDZGtSb3csXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQge1xuICAgIE1hdFJvd1xufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIERhdGEgcm93IHRlbXBsYXRlIGNvbnRhaW5lciB0aGF0IGNvbnRhaW5zIHRoZSBjZWxsIG91dGxldC4gQWRkcyB0aGUgcmlnaHQgY2xhc3MgYW5kIHJvbGUuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2l2LXJvdywgdHJbaXYtcm93XScsXG4gICAgdGVtcGxhdGU6IENES19ST1dfVEVNUExBVEUsXG4gICAgaG9zdDoge1xuICAgICAgICAnY2xhc3MnOiAnbWF0LXJvdycsXG4gICAgICAgICdyb2xlJzogJ3JvdycsXG4gICAgfSxcbiAgICAvLyBTZWUgbm90ZSBvbiBDZGtUYWJsZSBmb3IgZXhwbGFuYXRpb24gb24gd2h5IHRoaXMgdXNlcyB0aGUgZGVmYXVsdCBjaGFuZ2UgZGV0ZWN0aW9uIHN0cmF0ZWd5LlxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YWxpZGF0ZS1kZWNvcmF0b3JzXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgZXhwb3J0QXM6ICdpdlJvdycsXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IENka1JvdywgdXNlRXhpc3Rpbmc6IEl2Um93fV0sXG59KVxuZXhwb3J0IGNsYXNzIEl2Um93IGV4dGVuZHMgTWF0Um93IHtcbn0iXX0=