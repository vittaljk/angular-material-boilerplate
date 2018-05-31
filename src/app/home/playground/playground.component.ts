import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { forEach } from '@angular/router/src/utils/collection';
import * as _ from 'underscore';

type allowedTypes = 'position' | 'name' | 'weight' | 'symbol' | 'select' | 'action' | 'size';

@Component({
    selector: 'app-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit, AfterViewInit {
    theme = 'primary-theme';
    tiles = [
        { cols: 2, rows: 2, text: 'first' },
        { cols: 2, rows: 2, text: 'second' },
        { cols: 2, rows: 2, text: 'third' }
    ];
    displayedColumns: allowedTypes[] = ['select', 'position', 'name', 'weight', 'symbol', 'action'];
    // displayedColumns = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
    @ViewChild(MatPaginator) myPaginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    selection = new SelectionModel<Element>(true, []);

    constructor() {
        console.log(this.dataSource);
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.myPaginator;
        this.dataSource.sort = this.sort;
    }

    ngOnInit() {}

    selected(row): void {
        console.log(row);
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.data.forEach(row => this.selection.select(row));
    }

    addColumn(): void {
        this.displayedColumns.push('size');
        ELEMENT_DATA.forEach(data => {
            _.extend(data, { size: 'x' });
        });
        this.dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
    }
}

export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: Element[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' }
];
