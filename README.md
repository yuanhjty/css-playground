# css-playground

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Usage

1. Run `npm run serve` to start the project. View existing works.
2. Copy `src/views/AATemplate.vue` and rename the copy.
3. Write your html inside the `Example` tag. For example:
   
   ```html
   <Example>
     <div class="demo">
       <span>demo content</span>
     </div>
   </Example>
   ```
4. Write your css inside the `style` tag. For example:

   ```css
   <style scoped>
   .demo {
     color: red;
   }
   </style>
   ```

## Note

- If you want your html and css appear in the docs, don't touch these two lines of code inside the `script` tag: 

  ```javascript
  const docHtml = "{{html}}";
  const docCss = "{{css}}";
  ```

  And don't touch `:html="html"` and `:css="css"` in the `Example` tag:

  ```javascript
  <Example :html="html" :css="css">
  ```

- Only one `Example` element is supported in a view file.
