# MlFrontEnd

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.13.

The application is composed by 3 main components that are:

1. A header with a search bar
2. The display of the results searched
3. The details of a specific item

I wrote bellow some thoughts about how to improve the SEO, UX, Performance and Scalability in the application.

## SEO in the application

Since this app is a SPA (single page application) there are specific challenges regarding SEO, due to the fact that the searches mechanisms may have difficulties to index the content that is being rendered dynamically.

To address this issue, the following action may be implemented to improve the SEO of the application:

1. Enable Server Side Rendering (SSR) in the application.
   - By using SSR, the server can pre-render the HTML page before sending it to the browser which will help the crawlers to find its content and index it.

## User Experience in the application

To improve User Experience in the application the following suggestions could be implemented:

1. Autocomplete feature in the search bar
   - While entering the product, the search bar could make suggestions in real time to improve the user experience.

2. Keep track of a Search history
   - We could save the last searches in the localStorage and show them when the input bar gain focus

3. Implement a Loading spinner or shimmer
   - We could implement a spinner or a shimmer when the HTTP requests are being made to give user feedback.

4. Handle errors and not found content
   - We could implement error messages or an error screen to give feedback from a error in the application. Also, we need to handle search scenarios that would have no results. In the application, I'm returning an empty array of items if no content is found. We could use this information to display a not found page, for example.

## Performance in the application

In this theme, I believe that the SSR would also help to improve the performance of the application since the LCP (Largest Contentful Paint) would be smaller.

I'm already using angular signals which are more performatic to make updates in the app.
I'm also using lazy loading in the routes to only load code when needed.

1. Use the ngOptimizedImage directive to adopt performance best practices for loading images.

2. It would be good to enable compression on the CDN to make files even smaller to download.

3. Have a good contract between the front-end and the back-end to only return fields that are going to be used

## Scalability in the application

Regarding this theme, here are some thoughts that I think are important to address:

1. Have small components that are not dependable so it would be easier to refactor or expand based on them.

2. Implement pagination to handle results

3. Implement observability

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
