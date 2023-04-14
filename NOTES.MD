Authentication And Authorisation 

## Authentication

Authentication is the process using which we can unqiuely indentify users on our application. This process tells us who the user is. The general signup/login/logout flow is used to authenticate users.

## Authorisation

(Roles)

Authorisation is done on the valid users. 

Authorisation is the process of verifying the access rights of a user.ie. what a user can do on our applications



HOW TO DO AUTHNTICATION

1. Mobile Number
2. OmniAuth  : 3rd party authentication
3. Token based authentication

## You can use modules like 

passport.js



## BUT I will be using JWT

Token Based Auth (JWT)


client                  server



when a client when user send email,password,login

check if we hve a user with this email or not.

if(compare the passward)
we generate a token and send it to the client

Save the token on the client side

Client:
    send the token to the server 
Server: 
    We verify the token 
    if token is valid then we send the data to the client
    else we send an error to the client


`Server` does not `store` the unique `token`

Then how do `server` knows that the `token` send by which user?


FOR THIS WE USE `JWT` (`JSON WEB TOKEN`)

JWT is a `JSON` object which contains the `user` information

To generate the JWT token, we actually use the client credentials 

| 
| username-->Generate JWT token--> Token
| userid  
|

only generate the token when the user is logged in 
token can have expiry time 

stateless authentication

As soon user is logged out the token is invalid

Everytime user logged in we generate a new token 



Don't store the row password in the database

Store the hashed password in the database



Bcrypt is used to hash the password

Bcrypt is a hashing algorithm


`Trigger in a database` is a function which is executed when a particular event occurs


npm i bcrypt

what is a salt?

salt is a random string which is added to the password before hashing

salt is used to make the password more secure


`what is attribute in a database?`

to select the particular column from the table