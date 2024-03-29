import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from"@angular/common/http";
import{ ProductDataService} from '../services/product-data.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(public router: Router,private productData:ProductDataService, private http:HttpClient) { }


  Accounts=[
    {
      username:'utkarsh',
      password:'goyal',
      cart:[]
    },
    {
      username:'jatin',
      password:'garg',
      cart:[]
    },{
      username:'satyam',
      password:'pandey',
      cart:[]
    }

  ];
  count:any=0;

  onSubmit(data:any){
    console.log(data);
    if(data.username===''||data.password===''){
      alert("please fill all the required fields")
      return
    }
    
    this.http.post("http://localhost:4000/user/signup",data)
    .subscribe((result:any)=>{
        // const temp=JSON.parse(JSON.stringify(result))
        // console.log(Object.keys(temp))
        console.log(result)
        alert('User registered.Now you will be directed to login page')
        this.router.navigate(['']);
    },
    (error:any)=>{
      console.log(error.error.message);
      alert(error.error.message)
    })
  }
  addUser(username:any,password:any){
    if(localStorage.getItem(username.value)){
      alert('Username already exist.Please enter a valid username');
      return;
    }
    else{
      // this.Accounts.push({username:username.value,password:password.value,cart:[]});
      let data={username:username.value,password:password.value,cart:[],wishlist:[],quantities:[]}
      localStorage.setItem(username.value,JSON.stringify(data))
      
      this.productData.setUser(this.Accounts);
      this.productData.setCurrentUser(username.value);
      this.router.navigate(['home']);
    }
  }

  ngOnInit(): void {
  }

}
