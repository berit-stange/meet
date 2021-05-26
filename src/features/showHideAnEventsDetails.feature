Feature: show and hide details

Scenario: An event element is collapsed by default
Given main page is loaded
When the user the user scrolls down
Then the user should see a list of all events

Scenario: User can expand an event to see its details 
Given all elements are collapsed
When user clicks button to show details
Then details should be expanded for user to see the details

Scenario: User can collapse an event to hide its details
Given user has expanded event details
When the user clicks button to hide deatils
Then element should be collapsed 