Feature: Increment operator

  Scenario: We operate once
    Given we start at 0
    Then we're at 0
    When we do math
    Then we're at 1
    And we cheer!

  Scenario: We operate twice
    Given we start at 0
    Then we're at 0
    When we do math
    Then we're at 1
    When we do math
    Then we're at 2
    And we cheer!