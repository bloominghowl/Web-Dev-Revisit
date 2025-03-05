# Reading the Docs

## Instructions

There are many tools that a web developer may need that are on the [MDN documentation for client-side tooling](https://developer.mozilla.org/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview). Select 3 tools not covered in the lesson, explain why a web developer would use it, and search for a tool that falls under this category and share its documentation. Do not use the same tool example on MDN docs.

## Rubric

Exemplary | Adequate | Needs Improvement
--- | --- | -- |
|Explain why web developer would use tool| Explain how, but not why developer would use tool| Did not mention how or why a developer would use tool  |
| 0. **Linters** are used for error checking and style guide. Eg. [Pylint](https://pylint.readthedocs.io/en/stable/) | **How to use:** Select a Linter thats appropriate for a programming language, configure the Linter and voila! It's ready to use. *Downside*, developers might become too reliant on linters and may not develop their debugging and code review skills.  |  |
| 1. **Type Checkers** are tools that help check that your code has the appropriate types of data in their right palces. Eg. [mypy](https://mypy.readthedocs.io/en/stable/)| **How to use:** Choose a type checker that's appropriate for the programming language in use, add type annotations to your code to specify the expected type of variables, function parameters and ruturn values, then run the type checker to analyze your code. Review the type checker's output to fix the errors if any. *Downside*, adding and maintaining type annotations can be time-consuming, expecially in large codedases. |  |
| 2. **Testing Tools** automatically run tests against your code to make sure they behave as they expexted to. Eg. [Jenkins](https://www.jenkins.io/doc/) | **How to use:** Choose and install a Testing Framework, write test cases, run the tests, and review the test results. *Downside*, testing tools give a sense of false security, as tests may not cover all edge cases or potential issues. |  |