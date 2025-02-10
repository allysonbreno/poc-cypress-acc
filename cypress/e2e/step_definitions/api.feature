Feature: Api demoqa

  Scenario: Api demoqa
    Given create a user 
    When generate token
    When confirm create user
    When list available books
    When rent two books
    Then list the details of books purchased by the user