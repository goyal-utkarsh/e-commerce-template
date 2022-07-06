import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

country=new Subject();

  products=[
    {img:"/assets/photos/t-shirt.jpeg",name:"T-Shirt",category:['Mens','Clothing'],brand:'Puma',price:50,countries:['INDIA','USA','CHINA']},
    {img:"/assets/photos/tablet.jpeg",name:"Tablet",category:['Technology','Clothing'],brand:'Samsung',price:500,countries:['INDIA','SPAIN','CHINA']},
    {img:"/assets/photos/sports-tee.jpeg",name:"Sports T-Shirt",category:['Mens','Clothing'],brand:'Nike',price:40,countries:['SPAIN','USA']},
    {img:"/assets/photos/sport-shoe.jpeg",name:"Sports Shoes",category:['Mens','Women','Kids','Clothing'],brand:'Adidas',price:80,countries:['INDIA','CHINA']},
    {img:"/assets/photos/sofa.jpeg",name:"Sofa-set",category:['Household','Interior'],brand:'Godrej',price:1000,countries:['SPAIN','USA','CHINA']},
    {img:"/assets/photos/scul-bag.jpeg",name:"School Bags",category:['Bags','Kids'],brand:'American Tourister',price:55,countries:['INDIA','USA']},
    {img:"/assets/photos/purse.jpeg",name:"Purse",category:['Women','Bags'],brand:'Skybags',price:45,countries:['INDIA','USA','SPAIN']},
    {img:"/assets/photos/men-cloth.jpeg",name:"Shirt",category:['Mens','Clothing'],brand:'Peter England',price:50,countries:['INDIA','USA','CHINA','SPAIN']},
    {img:"/assets/photos/girl-top.jpeg",name:"Girld Top",category:['Women','Clothing'],brand:'Roadster',price:40,countries:['USA']},
    {img:"/assets/photos/frock.jpeg",name:"Frock",category:['Kids','Clothing'],brand:'Nykaa',price:45,countries:['SPAIN','USA','CHINA']},
    {img:"/assets/photos/cupboard.jpeg",name:"CupBoard",category:['Household','Interior'],brand:'Puma',price:450,countries:['USA','CHINA']}
  ]
  constructor() { }

  setCountry(country:any){
    this.country.next(country)
  }
}