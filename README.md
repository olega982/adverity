Hello Adverity Team 🙌
Let me tell you a few things before you review my task:

1. Before every test i create a new item in order not to depend from the app data.
2. I use own "test_id" locators even i can easilly use the default one. (Trying to follow best practices as well🤞)
3. While testing the application i assume the fields have the following basic validation:

    Breed: ✅ Accept all symbols.
           ❌ Do not accept empty values.

    Nick: ✅ Accept all symbols.
           ❌ Do not accept empty values.
           ❌ Do not accept more then 10 symbols.

    Price: ✅ Accept numbers only.
           ❌ Do not accept empty values.

    Image: ✅ Accept all symbols.
           ❌ Do not accept empty values.

4. I have tests that fail in edit state according to requirements from point 3. 