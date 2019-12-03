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

- Don't touch these two lines of code inside the `script` tag if you want your html and css appear in the docs.

  ```javascript
  const docHtml = "{{html}}";
  const docCss = "{{css}}";
  ```
