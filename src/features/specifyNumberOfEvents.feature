Feature: Specify number of events

Scenario: When user has not specified a number, default number "24" will be used for list
Given app is loaded
When user has not specified a number
Then the user should see list of events of default length "24"

Scenario: User can change the number of events they want to see 
Given list with correct number events is loaded
When user puts in number in input field
Then the list of events should be limited to the number of events user has chosen