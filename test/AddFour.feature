Feature: Add four to a number

  Scenario: We add four
    Given we start at 0
    Then we're at 0
    When we do math
    And we do math
    And we do math
    And we do math
    Then we're at 4
