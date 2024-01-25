/*
employee.interface.ts
Danielle Taplin
1/24/24
*/
import { Item } from './item.interface';

export interface Employee {
    empId: number;
    todo: Item[];
    done: Item[];
}