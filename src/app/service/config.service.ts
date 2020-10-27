import { Injectable } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }
  
}

export function routerTransition() {
	return slideToLeft();
}

function slideToLeft() {
	return trigger('routerTransition', [
		transition(':enter', [
			style({transform: 'translateX(100%)', position:'fixed', width:'100%'}),
			animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
			]),
		transition(':leave', [
			style({transform: 'translateX(0%)', position:'fixed', width:'100%'}),
			animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
			])
		]);
}

