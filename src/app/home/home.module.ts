import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground/playground.component';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TypoComponent } from './typo/typo.component';

const routes: Routes = [{ path: '', component: PlaygroundComponent }, { path: 'typo', component: TypoComponent }];

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatSelectModule,
        MatCardModule,
        MatIconModule,
        FormsModule,
        MatGridListModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule,
        RouterModule.forChild(routes)
    ],
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [PlaygroundComponent, ParentComponent, ChildComponent, TypoComponent]
})
export class HomeModule {}
