This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Other support infromation i used in developing the app
CSS:  Tachyons: https://unpkg.com/tachyons@4.2.1/css/tachyons.min.css
PrisMa: Prisma client, Database
GraphQL Playground
graphql-yoga

## view screenshots
On screenshots folder


## Project Structure
my-test
    node_modules
    public
    server(consist of my GraphQL backend)
        - index.js =>Linked to [resolvers folder]
        - resolvers
            -Link.js
            -Mutation.js
            -Query.js
            -Subscription.js (ignore not properly working)
            -User.js
            -Vote.js

    src (Consist of the web app)
        -index.js => Linked to [Components folder] and [styles folder]
        -components
            App.js => 
            -Header.js (returns the header for the web app)
            -Link.js (contains jsx for each car on the feeds)
            -LinkList.js (contains the list for the  car feeds)
            - CreateLink (create new car product has admin)
            - Login (ability to login and sign up has admin)
            - search (to serach for cars by filtering the result) (ignore, not properly working)

## instruction for building, testing and running the app
1. Open command prompt
2. cd file location for the server [my-test/server]
3. Start local server by caling [node src/index.js] on the server location
4. server is located at [http://localhost:4000/]
5. Next, start the app by opening new command prompt
6. cd app location [my-test]
7. call [npm start]
8. web app located at http://localhost:3000                       


## test app 
1. firstly the app loads newest cars
2. scroll below and click next to view other cars on the list
3. click on Top ranking cars button on the header to view top ranking cars
4. click on Admin login to login to the admin view
	4.1 You can use my default login details 
		email adress: test@test.com
		password: 1234
	4.2 or create a new admin account if the above doesn't work
	
	Note: theres a bit of latency due to the AWS location US:1

5. 	You can upvote cars by clicking on the upvote button by the car images
6  You can add new cars to the feed list by clicking on add new car
7. Logout has admmin to view from customer view
	

