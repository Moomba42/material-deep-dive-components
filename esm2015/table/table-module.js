/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { MatRecycleRows, MatTable } from './table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatCell, MatCellDef, MatColumnDef, MatFooterCell, MatFooterCellDef, MatHeaderCell, MatHeaderCellDef, } from './cell';
import { MatFooterRow, MatFooterRowDef, MatHeaderRow, MatHeaderRowDef, MatRow, 
// IvRow,
MatRowDef, MatNoDataRow } from './row';
import { MatTextColumn } from './text-column';
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { IvRow } from './ivion/row';
const EXPORTED_DECLARATIONS = [
    // Table
    MatTable,
    MatRecycleRows,
    // Template defs
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatFooterCellDef,
    MatFooterRowDef,
    // Cell directives
    MatHeaderCell,
    MatCell,
    MatFooterCell,
    // Row directives
    MatHeaderRow,
    MatRow,
    IvRow,
    MatFooterRow,
    MatNoDataRow,
    MatTextColumn,
];
export class MatTableModule {
}
MatTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CdkTableModule,
                    MatCommonModule,
                    MatRippleModule,
                ],
                exports: [MatCommonModule, EXPORTED_DECLARATIONS],
                declarations: EXPORTED_DECLARATIONS,
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3RhYmxlL3RhYmxlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxjQUFjLEVBQUUsUUFBUSxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQ2pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsT0FBTyxFQUNQLFVBQVUsRUFDVixZQUFZLEVBQ1osYUFBYSxFQUNiLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsZ0JBQWdCLEdBQ2pCLE1BQU0sUUFBUSxDQUFDO0FBQ2hCLE9BQU8sRUFDTCxZQUFZLEVBQ1osZUFBZSxFQUNmLFlBQVksRUFDWixlQUFlLEVBQ2YsTUFBTTtBQUNOLFNBQVM7QUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUNiLE1BQU0sT0FBTyxDQUFDO0FBQ2YsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUMsZUFBZSxFQUFFLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3hFLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFFbEMsTUFBTSxxQkFBcUIsR0FBRztJQUM1QixRQUFRO0lBQ1IsUUFBUTtJQUNSLGNBQWM7SUFFZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtJQUNWLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUVmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsT0FBTztJQUNQLGFBQWE7SUFFYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLE1BQU07SUFDTixLQUFLO0lBQ0wsWUFBWTtJQUNaLFlBQVk7SUFFWixhQUFhO0NBQ2QsQ0FBQztBQVdGLE1BQU0sT0FBTyxjQUFjOzs7WUFUMUIsUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxjQUFjO29CQUNkLGVBQWU7b0JBQ2YsZUFBZTtpQkFDbEI7Z0JBQ0gsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLHFCQUFxQixDQUFDO2dCQUNqRCxZQUFZLEVBQUUscUJBQXFCO2FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRSZWN5Y2xlUm93cywgTWF0VGFibGV9IGZyb20gJy4vdGFibGUnO1xuaW1wb3J0IHtDZGtUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbmltcG9ydCB7XG4gIE1hdENlbGwsXG4gIE1hdENlbGxEZWYsXG4gIE1hdENvbHVtbkRlZixcbiAgTWF0Rm9vdGVyQ2VsbCxcbiAgTWF0Rm9vdGVyQ2VsbERlZixcbiAgTWF0SGVhZGVyQ2VsbCxcbiAgTWF0SGVhZGVyQ2VsbERlZixcbn0gZnJvbSAnLi9jZWxsJztcbmltcG9ydCB7XG4gIE1hdEZvb3RlclJvdyxcbiAgTWF0Rm9vdGVyUm93RGVmLFxuICBNYXRIZWFkZXJSb3csXG4gIE1hdEhlYWRlclJvd0RlZixcbiAgTWF0Um93LFxuICAvLyBJdlJvdyxcbiAgTWF0Um93RGVmLFxuICBNYXROb0RhdGFSb3dcbn0gZnJvbSAnLi9yb3cnO1xuaW1wb3J0IHtNYXRUZXh0Q29sdW1ufSBmcm9tICcuL3RleHQtY29sdW1uJztcbmltcG9ydCB7TWF0Q29tbW9uTW9kdWxlLCBNYXRSaXBwbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtJdlJvd30gZnJvbSAnLi9pdmlvbi9yb3cnO1xuXG5jb25zdCBFWFBPUlRFRF9ERUNMQVJBVElPTlMgPSBbXG4gIC8vIFRhYmxlXG4gIE1hdFRhYmxlLFxuICBNYXRSZWN5Y2xlUm93cyxcblxuICAvLyBUZW1wbGF0ZSBkZWZzXG4gIE1hdEhlYWRlckNlbGxEZWYsXG4gIE1hdEhlYWRlclJvd0RlZixcbiAgTWF0Q29sdW1uRGVmLFxuICBNYXRDZWxsRGVmLFxuICBNYXRSb3dEZWYsXG4gIE1hdEZvb3RlckNlbGxEZWYsXG4gIE1hdEZvb3RlclJvd0RlZixcblxuICAvLyBDZWxsIGRpcmVjdGl2ZXNcbiAgTWF0SGVhZGVyQ2VsbCxcbiAgTWF0Q2VsbCxcbiAgTWF0Rm9vdGVyQ2VsbCxcblxuICAvLyBSb3cgZGlyZWN0aXZlc1xuICBNYXRIZWFkZXJSb3csXG4gIE1hdFJvdyxcbiAgSXZSb3csXG4gIE1hdEZvb3RlclJvdyxcbiAgTWF0Tm9EYXRhUm93LFxuXG4gIE1hdFRleHRDb2x1bW4sIFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENka1RhYmxlTW9kdWxlLFxuICAgICAgICBNYXRDb21tb25Nb2R1bGUsXG4gICAgICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICBdLFxuICBleHBvcnRzOiBbTWF0Q29tbW9uTW9kdWxlLCBFWFBPUlRFRF9ERUNMQVJBVElPTlNdLFxuICBkZWNsYXJhdGlvbnM6IEVYUE9SVEVEX0RFQ0xBUkFUSU9OUyxcbn0pXG5leHBvcnQgY2xhc3MgTWF0VGFibGVNb2R1bGUge31cbiJdfQ==