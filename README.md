
# **Daily Journal Part 5**
In parts 1-4 we have made a functioning Daily Journal app.  The only thins is that is does not persist the data.  Now that we have learned about using json-server to mimic an API with GET, PUT, POST and DELETE, finish up your Daily Journal to include these functionalities.

![Journal_5](https://user-images.githubusercontent.com/85176043/194803047-1b62a0ba-5577-4a35-bc77-35452168b645.jpg)


Requirements

- Refactor Daily Journal to fetch all the data from a json file in your mockDB directory served through json-server.
    - Include Fetch calls to GET and POST the data
    - You may need to restructure the files.  Use Sink Repair as a guide if needed.
- Empty the form fields once you

### Bonus

- Add a Delete button to each Journal Entry.  On clicking on this button, the entry should be deleted from the json file.
- Add an edit button to each Journal Entry.  On clicking this button, a form with the current values populated should be displayed.  There should be a save button displayed that updates the entry when clicked and displays the edited values.
    - optional to reuse the form you already have
