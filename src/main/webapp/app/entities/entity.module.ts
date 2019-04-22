import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'period',
                loadChildren: './period/period.module#SegundoparcialproyectoPeriodModule'
            },
            {
                path: 'project',
                loadChildren: './project/project.module#SegundoparcialproyectoProjectModule'
            },
            {
                path: 'team',
                loadChildren: './team/team.module#SegundoparcialproyectoTeamModule'
            },
            {
                path: 'sprint',
                loadChildren: './sprint/sprint.module#SegundoparcialproyectoSprintModule'
            },
            {
                path: 'student',
                loadChildren: './student/student.module#SegundoparcialproyectoStudentModule'
            },
            {
                path: 'story',
                loadChildren: './story/story.module#SegundoparcialproyectoStoryModule'
            },
            {
                path: 'review',
                loadChildren: './review/review.module#SegundoparcialproyectoReviewModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SegundoparcialproyectoEntityModule {}
