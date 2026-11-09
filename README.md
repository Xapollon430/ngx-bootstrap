# ngx-bootstrap Typeahead disabled while open

1. With Node 24.15 or later, run `npm install` and `npm run dev`.
2. Click **Disable in 2.5 seconds** and immediately type **A** in Fruit.
3. Wait for **Disabled: true**, then click **Apricot**.
4. The disabled form value changes from A to Apricot and the selection event count reaches 1.

The example uses Angular reactive forms and Bootstrap's standard stylesheet.
