# Interactive Quiz

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Objective:
Create a small, interactive quiz application using JavaScript or a JavaScript framework of your choice (e.g., React, Vue, Angular). This application should not require any backend services.

Estimated development time: 3-4 hours

### Requirements:
1. The quiz should consist of 10 questions. Each question should have one correct answer out of four possible options.
2. The application should display one question at a time and allow the user to select an answer.
3. After an answer is selected, the application should provide immediate feedback (indicating whether the answer was correct or incorrect) and then proceed to the next question.
4. At the end of the quiz, the application should display the user's score and offer the option to retake the quiz.

At this point package the codebase as deliverable 1 (e.g. zip file)

### Additional requirements:
1. Implement a "life" system: The user should start the quiz with 3 lives. Each incorrect answer results in the loss of one life. If all lives are lost before the quiz ends, the quiz is over, and the score is displayed.
2. Add question weights: Each question should have a weight (difficulty level) associated with it, which affects the final score. Questions should be displayed in increasing order of difficulty. The final score should reflect the total weight of the correctly answered questions.
3. Introduce a "hint" feature: For each question, the user has the option to request a hint, which will eliminate two incorrect options. However, using a hint will halve the weight of the question for scoring purposes.

Again package the codebase as deliverable 2

### Bonus
If you finish early and want to further demonstrate your skills, consider adding some additional features, like a timer, question categories, or animations. However, these are entirely optional and should only be attempted after the main requirements have been fully met.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
