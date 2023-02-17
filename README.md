# Note-IFY
NOTE-IFY APP
Developed by Harun Hurtic
----------------------------------------------------------------------------------------------
Version: 3.0.0
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
Changes & Implementations:
----------------------------------------------------------------------------------------------

-Created and coded the main functionality of the app. To post and delete notes to the server.

-The user can now add and delete notes from the server, as well as they get
saved as a .json file, so that the notes are saved even if the server restarts. 

-Added a translations feature to the app
----------------------------------------------------------------------------------------------
It could be possible to use this feature in your own app. How to use the translations:

1. Add a reference to the module, like the one in this app: "<script src="./js/translate.js"></script>"
2. Then make sure to use the "data-lang="label_name" attribute on all text you want to be able to be translated. You can call the label what you want, as long as it's unique.
3. Create a .json file for every language you plan on in a folder called "translations". 

In this case it would be created a en.json file inside the "translations" folder. In these .json files, be sure to set up the label names in this format:

{
    "app-title": "Note-IFY",
    "language_label": "Språk:",
    "new-note-label": "Nytt notat:",
    "add-note-button": "Legg til notat"
  }

4. Choose the way the user gets to select the language (usually with a dropdown or button) in HTML, having the option to translate to and give them language names, for example English = "en" etc. Be sure to give the dropdown or button the id 'language-select'. The module has the eventlistener on onChange. If you want to change this, do it in the module.

An example in how this could be setup in the HTML file:

"<div id="language-selector">
            <label for="language-select" data-lang="language_label">Language:</label>
            <select id="language-select">
              <option value="en" selected>English</option>
              <option value="no">Norwegian</option>
            </select>
        </div>
    </nav>"

5. On the server side, be sure to add this line:
"app.use('/translations', express.static('translations'));"
Make sure that all references are correct. If you want to change the folder name or where the "translations" folder is located, be sure to change
the reference to the file inside the "translate.js" file as well. Voila!
----------------------------------------------------------------------------------------------

-Created a folder structure for the future of the app

Possible changes in the future:
-The user should be able to change existing notes.
-A login feature?
-The delete button should also be translated as well as the error text.
-Colors and contrasts are good with , but maybe make it more visually pleasing?

----------------------------------------------------------------------------------------------
