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