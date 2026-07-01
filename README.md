## Codewars Katas

Hi there! i'm Jouvan 👋  
This is my daily coding exercise repository. I store my **Codewars** solutions here to track my learning progress.

### 📊 Stats 
![Codewars](https://www.codewars.com/users/jouvanprb/badges/large)

###  📁 Repository Structure

There's a folder for each kata nested in its own kyu

```ascii
├── 6-kyu/
│   ├── multiple of 3or5/
│   │   ├── index.js
│   │   └── index.test.js
│   └── ...
│
├── 7-kyu/
│   ├── String ends with?/
│   │   ├── index.js
│   │   └── index.test.js
│   └── ...
```

### 🛠️ Setup 
This repo uses **Mocha** + **Chai** to run unit tests.

```bash
npm install
```


#### 🚀 How to Run a Test

1. Test All Challenges:
```bash
npm test
```

2. Test One Specific Challenge:
```bash 
# From root folder
npx mocha "folder-name/file-name/index.test.js"
```

#### File Test Structure
Each challenge has 2 files:

- `index.js` -> Contains the solution
- `index.test.js` -> Contains test cases

#### 🔄 Convert Test from Codewars Format
Some test files from Codewars use the `Test.assertEquals` format. Convert to **Mocha/Chai**:

| Format Codewars | Format Mocha/Chai |
|-----------------|-------------------|
| `const Test = require('@codewars/test-compat')` | `const { assert } = require('chai')` |
| `Test.assertEquals(actual, expected)` | `assert.strictEqual(actual, expected)` |
| `Test.assertSimilar(actual, expected)` | `assert.deepEqual(actual, expected)` |
| `Test.expect(condition)` | `assert.isTrue(condition)` |
| `Test.assertNotEquals(actual, expected)` | `assert.notStrictEqual(actual, expected)` |
| `Test.expectError(fn)` | `assert.throws(fn)` |

### Important Notes
- Test file **must** import the function: `const functionName = require('./index')`
- Make sure `index.js` exports the function: `module.exports = functionName`
- Run `npm test` before pushing to ensure all tests pass