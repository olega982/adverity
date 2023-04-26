Feature: User can edit created item 

  Scenario: Verify edit mode display correct item values.
    Given Opened application with the "FirstDog" item created
     When I click "edit" in "FirstDog" created item
     Then I Verify edit state display correct "FirstDog" item values

  Scenario: User craete new item and update all item fields.
    Given Opened application with the "FirstDog" item created
     When I click "edit" in "FirstDog" created item
      And I fill in all input fields with the "SecondDog" data
      And I click "update" button
     Then I verify input fields are empty
     Then I verify initial "SecondDog" data displayed in the View

  Scenario: User create new item and change item fields but cancel the update.
    Given Opened application with the "FirstDog" item created
     When I click "edit" in "FirstDog" created item
      And I fill in all input fields with the "SecondDog" data
      And I click "cancel" button
     Then I verify input fields are empty
     Then I verify initial "FirstDog" data displayed in the View

  Scenario: Verify Nick field has 10 digit limit in edit state.
  Given Opened application with the "FirstDog" item created
   When I click "edit" in "FirstDog" created item
    And I clear "nick" field
    And I type "12345678910" data into "nick" field
    And I click "update" button
   Then I verify "item_nick" field in "FirstDog" item is "1234567891"

  Scenario: Verify Price field accepts numbers only in edit state.
    Given Opened application with the "FirstDog" item created
     When I click "edit" in "FirstDog" created item
      And I clear "price" field
      And I type "Txt!#" data into "price" field
      And I click "update" button
     Then I verify initial "FirstDog" data displayed in the View
  
  Scenario Outline: Verify user is not able to save item with the empty Breed/Nick/Price fields in edit mode.
    Given Opened application with the "FirstDog" item created
     When I click "edit" in "FirstDog" created item
      And I clear "<field>" field
      And I click "update" button
     Then I verify initial "FirstDog" data displayed in the View
  
  Examples:
    |field|
    |breed|
    |nick |
    |price|

# Do i need tests wit the empty fields?