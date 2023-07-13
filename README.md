# e2e-node

### used patterns

- repositories: repository pattern / data mapper pattern  
[] abstract communication with database with repository: it is a contract with methods not implementeds   
[] what is diference DAO (data access object) between Repository

- in memory database: embeded on application and running during tests

- inversion dependency principle  
[] application layer

- command / query segregation  
[] write/update/delete actions WITHOUT RETURN (commands)   
[] select query actions RETURN DATA ROWS 


// TO BE DONE:
- factory pattern

### requeriments 

docker and nodejs v20+

`$ docker compose up` to run postgres on docker  
`$ yarn test` to run unit tests  
`$ yarn test:e2e` to run e2e tests  