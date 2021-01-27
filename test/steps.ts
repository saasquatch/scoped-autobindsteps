import { loadFeature, StepDefinitions } from "jest-cucumber";
import { autoBindSteps } from "../dist/scoped-autobindsteps";

let CheerSteps: StepDefinitions = ({ and }) => {
  and("we cheer!", () => {
    console.log("Woohoo!");
  });
};

let IncrementSteps: StepDefinitions = ({ given, when, then }) => {
  let state: number;
  given(/^we start at ([^\s]+)$/, (initStr: string) => {
    const init = +initStr;
    expect(init).not.toBeNaN();
    state = init;
  });
  when("we do math", () => {
    state++;
  });
  then(/^we're at ([^\s]+)$/, (resultStr: string) => {
    const result = +resultStr;
    expect(state).toBe(result);
  });
};

let DecrementSteps: StepDefinitions = ({ given, when, then }) => {
  let state: number;
  given(/^we start at ([^\s]+)$/, (initStr: string) => {
    const init = +initStr;
    expect(init).not.toBeNaN();
    state = init;
  });
  when("we do math", () => {
    state--;
  });
  then(/^we're at ([^\s]+)$/, (resultStr: string) => {
    const result = +resultStr;
    expect(state).toBe(result);
  });
};

const incrementFeature = loadFeature("./test/Increment.feature")
const decrementFeature = loadFeature("./test/Decrement.feature")
const add3Feature = loadFeature("./test/AddThree.feature")
const add4Feature = loadFeature("./test/AddFour.feature")

autoBindSteps([incrementFeature], [IncrementSteps, CheerSteps])
autoBindSteps([decrementFeature], [DecrementSteps, CheerSteps])
autoBindSteps([add3Feature, add4Feature], [IncrementSteps])