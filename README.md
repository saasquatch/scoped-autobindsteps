# Scoped `autoBindSteps` for jest-cucumber

A replacement autoBindSteps function for use with `jest-cucumber`.

Currently, the `jest-cucumber` implementation of `autoBindSteps` stores all steps and feature files in the global scope. This can be a problem if you would like to use the same step names across different files but don't want them to conflict. This package solves that problem.

Each function call of autoBindSteps only binds the features and steps that you provide in that call.

## Comparison

Here's a comparison between this implementation vs the original implementation of `autoBindSteps`

### Original

This is what happens with `autoBindSteps` from `jest-cucumber`.

```typescript
const allFeatures = loadFeatures(FEATURE_PATH + "*.feature");
const allSteps = [/* steps here */];

// all of the steps are bound to all of the features
autoBindSteps(allOfMyFeatures, allOfMySteps);
```

You might think that this keeps them separate, but it still mixes them together.

```typescript
import {redSteps, blueSteps} from "./mySteps"

const redFeature = loadFeature(FEATURE_PATH + "Red.feature")
const blueFeature = loadFeature(FEATURE_PATH + "Blue.feature")

// this
autoBindSteps([redFeature], [redSteps])
autoBindSteps([blueFeature], [blueSteps])

// does the same thing as this
autoBindSteps([redFeature, blueFeature], [redSteps, blueSteps])
```

This way of doing things means that each step name must be unique. This becomes a problem when you have a large number of steps names, and as a result, the feature files can get quite verbose.

### Scoped

This is what happens with `autoBindSteps` from this package.

```typescript
import {redSteps, blueSteps} from "./mySteps"

const redFeature = loadFeature(FEATURE_PATH + "Red.feature")
const blueFeature = loadFeature(FEATURE_PATH + "Blue.feature")

// scopes are kept completely separate
autoBindSteps([redFeature], [redSteps])
autoBindSteps([blueFeature], [blueSteps])
```

Because of this, there can be steps in `redSteps` and `blueSteps` that have the exact same name and don't confict because they're only bound to one file.

This is nice because you can turn step names like this

```
press the red button in the yellow spaceship once
```

into step names like this

```
press the button once
```