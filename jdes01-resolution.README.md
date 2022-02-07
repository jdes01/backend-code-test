# Ok! so this is my very first attempt at resolving this backend code test. Here Ill try to explain as detailed as I can every decision I make. Wish me luck I guess.

## Stage 1:
- First of all, even though I consider it kinda over-engineering, Ill dockerize the test. It might be useful later on, specially when dealing w/ mongo.
- I modified a bit the package.json so watch-node auto-refreshes my code while working on it.

- Ill encapsulate business rules (name & description format) in value objects with their own test.

- Our createGenially application service will receive scalar types, so Ill create a createGenially controller in the infra layer that will use the application service. It will instantiate the repository & the createGenially Command and will invoke the service. I create Its test.
Im afraid Im not really sure if repeating the same business logic I used in the value objects at the controller, to assert http request parameters are well-formated, is the cleanest option. Maybe Id have to handle errors better.

- Now Ill create a test for InMemoryGeniallyRepository.delete(), ill modify this function, then ill create the deleteGeniallyService test, then modify the service and create the command, and then ill create the deleteGeniallyController.test and the controller itself

- Exactly the same process for renameGenially.

### About stage 1: 
- Using InMemoryGeniallyRepository in application layer tests instead of mocking the IGeniallyRepository may not be a good decision.
- Not really sure about using an 'GeniallyRepository.update()' method at renameGeniallyService since I just need to update the name.
- I thought that only using post for create/update/delete instead of also using delete & put could be useful when storing domain events. Again, not really sure about this.


## Stage 2:
- Ok so the first step will be to create a mongo container in our docker-compose file. We will create volumes for the data stored, for the db.js script and for out .env file. In our .env file we will store our credentials.
- The first time we use 'docker-compose up' after building, the mongo container may fail. It must be related with the db script. We just need to do ctrl-c and 'docker-compose up' again (without docker rm, build or anything) and it will work fine every time we use it now on. 
- Once we start it up, we will run 'docker exec -it code-test-db bash' and 'mongosh -u $user -p $password' with the user and password we specified at .env

- I created the 'geniallys' collection once I entered mongosh with 'use genially' to create the db and 'db.createCollection("geniallys")' to create the first collection.

- Now we will install mongosh and mongoose dependencies with npm.

- I created a MongoGeniallyRepository which implements IGeniallyRepository. Once we create the methods demanded by the interface, we just need to inject to use it in our controllers so we can inject it in our application services.

### About stage 2: 
- Again, tests quality aint the best;
- Again, since I didnt want to violate any CQRS principle, I decided that my commands wouldnt return values. The problem comes when, for example, my deleteGeniallyController asks deleteGeniallyService to delete a genially with a given id, the controller wont be aware of the service not finding a genially with the same id. 

