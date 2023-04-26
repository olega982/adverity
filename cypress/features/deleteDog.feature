Feature: User can delete item

  Scenario: User craete new item and delete it.
    Given Opened application with the "FirstDog" item created
    When I click "delete" in "FirstDog" created item
    Then I verify "FirstDog" item does not exist in the View
    
  Scenario: User delete all items in the list.
    Given Opened application with the "FirstDog" item created
     When I delete all items in the list
     Then "No data" message displayed 

  Scenario: User delete item in the Edit mode.
    Given Opened application with the "FirstDog" item created
    When I click "edit" in "FirstDog" created item
     And I click "delete" in "FirstDog" created item
    Then I verify "FirstDog" item does not exist in the View

  Scenario: User delete updated item.
   Given Opened application with the "FirstDog" item created
    When I click "edit" in "FirstDog" created item
     And I fill in all input fields with the "SecondDog" data
     And I click "update" button
    Then I verify initial "SecondDog" data displayed in the View
    When I click "delete" in "SecondDog" created item
    Then I verify "SecondDog" item does not exist in the View
    Then I verify "FirstDog" item does not exist in the View

  Scenario: User can add item after all items deleted 
    Given Opened application with the "FirstDog" item created
     When I delete all items in the list
     Then "No data" message "is" displayed
     When I fill in all input fields with the "FirstDog" data
      And I click "add" button
     Then I verify initial "FirstDog" data displayed in the View
     Then "No data" message "is not" displayed 



