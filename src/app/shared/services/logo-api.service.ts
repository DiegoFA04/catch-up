import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoApiService {
  baseURL = 'https://logo.clearbit.com';
  constructor() { }

  getURLToLogo(source: any){
    return `${this.baseURL}/${ new URL(source.url).host }`;
  }
}
