Feature: User can add dog in the View list

  Scenario: User add dog with the valid data
    Given Opened application
     When I fill in all input fields with the "FirstDog" data
      And I click "add" button
     Then I verify initial "FirstDog" data displayed in the View
  
  Scenario: User add dog with the empty Image field.
    Given Opened application
     When I fill in all input fields with the "FirstDog" data
      And I clear "image" field
      And I click "add" button
     Then I verify "item_img" field in "FirstDog" item is "empty"


  Scenario: Verify Nick field has 10 digit limit.
  Given Opened application
    When I fill in all input fields with the "FirstDog" data
    And I clear "nick" field
    And I type "12345678910" data into "nick" field
    And I click "add" button
    Then I verify "item_nick" field in "FirstDog" item is "1234567891"

  Scenario: Verify Price field accepts numbers only.
  Given Opened application
   When I fill in all input fields with the "FirstDog" data
    And I clear "price" field
    And I type "Txt!#" data into "price" field
    And I click "add" button
   Then I verify "FirstDog" item does not exist in the View

  Scenario Outline: Verify user is not able to save item with the empty Breed/Nick/Price field .
    Given Opened application
     When I fill in all input fields with the "FirstDog" data
      And I clear "<field>" field
      And I click "add" button
     Then I verify "FirstDog" item does not exist in the View


  Examples:
    |field|
    |breed|
    |nick |
    |price|