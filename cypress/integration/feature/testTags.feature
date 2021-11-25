Feature: testing tags in cucumber

@smokeTest
Scenario: testing tangs by cucumber
  Given User open the my store page
  When user click in "singin" button
  And user type "email@mail.com" in the "email" field in login page
  And user type "123456789" in the "password" field in login page
  And user click in "submmit" button
  Then Then I expect to see "My account" in "header line"

@sanityTest
Scenario: testing tangs by cucumber
  Given User open the my store page
  When user click in "singin" button
  And user type "email@mail.com" in the "email" field in login page
  And user type "888888" in the "password" field in login page
  And user click in "submmit" button
  Then Then I expect to see "My account" in "header line"