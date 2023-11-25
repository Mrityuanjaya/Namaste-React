# Q1. What is a CDN?

# Q2. crossorigin in script tag while using React cdn?

# Q3. Bundlers - Webpack, Parcel, Vite

# Q4. Two types of dependencies?
# A4. a. Dev Dependencies - packages limited to development
#     b. Normal Dependencies - packages for production

# Q5. Can we have multiple package.json? Yes

# Q6. npm vs npx?
# A6. npm is used to install dependencies whereas npx is used to execute a package

# Q7. type="module" in script tag of App.js in index.html
# A7. This tells the browser that the file is a module and not a browser script

# Q8. What is Parcel doing behind the scenes?
# A8. - Dev Build
#     - Local Server runnning on port 1234
#     - Hot Module Replacement (continuously refreshing the page on every save) done using File Watching Algorithm, written in C++
#     - Caching - Faster Builds
#     - Image Optimization
#     - Minification on Production Build
#     - Bundling
#     - Compress
#     - Consistent Hashing
#     - Code Splitting
#     - Differential Bundling - support older browsers
#     - Better Error Suggestions
#     - Error Diagnostics
#     - Can run on HTTPs
#     - Tree Shaking - remove unused codes
#     - Different dev and prod bundles

# Q9. dist folder?
# A9. Whenever we run the server (dev or prod), Parcel puts the build inside the dist folder.

# Q10. browserslist in package.json?
# A10. Parcel uses this for Compatibility with browsers (can be customized according to the countries, browsers, specific versions of browsers, etc)

# Q11. Babel is an npm package (or library) used to transpile JSX code to React.CreateElement() which further gets convert to JS so that the browser can understand it. Babel also transpiles ES6 code for older versions of browsers.

# JSX => React.CreateElement() => ReactElement (i.e. JS Object) => HTML Element (when we use render function on JS object)
# JSX is not HTML in JavaScript, it just has similar syntax to HTML or XML

# Q12. What is Component Composition?
# A12. Wrapping a component inside another component is Component Composition.