import { NgModule } from '@angular/core';

import { SegundoparcialproyectoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SegundoparcialproyectoSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SegundoparcialproyectoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SegundoparcialproyectoSharedCommonModule {}
