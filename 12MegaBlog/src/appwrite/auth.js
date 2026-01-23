// Authentication service using Appwrite SDK

import conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";      // Client and Account are class and ID is helper or utility object

export class AuthService{
    client = new Client();
    account;

    constructor(){                               // when object is created, constructor is called. Whenever someone creates object of AuthService than the client and account will be created.
        this.client                              // this refers to the current object. Here this.client refers to authService.client
            .setEndpoint(conf.appwriteUrl)       // this.client ke andar yeh dono values aa gayi
            .setProject(conf.appwriteProjectId); // this.client ke andar yeh dono values aa gayi
        
        this.account = new Account(this.client);    // creating account object. this.client is passed to Account class constructor. client object is passed to account after setting endpoint and project id into client object.
    }

    // async wraps values into Promises, await unwraps Promises into values. Simply, async await return Promises.
    
    async createAccount({email, password, name}){            // crateAccount is a method and we don't use function keyword here because this is class method.
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);            
            if(userAccount)
            {
                return this.login({email, password});     // automatically login after account creation
            }
            else{
                return userAccount;
            }
        }
        catch (error){
            throw error;
        }
    }

    async login({email, password}){                // passing object with email and password as an argument. Destructuring.
        try {
            return await this.account.createEmailPasswordSession
            (email, password);
        }
        catch (error){
            throw error;
        }
    }

    async getCurrentUser(){           // to get details of current logged in user
        try{
            return await this.account.get();        // returns details of current logged in user as a Promise
        }
        catch (error){
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;     // if there is any error, return null
    }

    async logout(){
        try{
            await this.account.deleteSessions();             // deletes all active user sessions and returns a Promise
        }
        catch{
            console.log("Appwrite service :: logout :: error", error);
        }
    }
} 

const authService = new AuthService();                          // object

export default  authService;



// What is a method?

// A method is a function that belongs to an object or a class.
// Here, createAccount, login, getCurrentUser, and logout are methods of the AuthService class.

// When you write:

// const authService = new AuthService();


// 👉 JavaScript creates a new object like this (conceptually):

// {
//   client: Client {},
//   account: Account {}
// }


// This object is stored in authService.


// Step 2: What does this point to HERE?

// Inside the constructor:

// constructor() {
//     this.client.setEndpoint(...)
// }


// At this moment:

// this === authService


// So this line actually means:

// authService.client.setEndpoint(...)