# Running Chess-Tests.Spec

- Ensure dev dependencies are installed in /qa-interview 
- Ensure playwright is installed in /chess-ui-e2e
```
npx playwright install
  ```
- in /qa-interview run:
  ```
  pm2 start
  ```
  then run the playwright tests
  ```
  npx playwright test

