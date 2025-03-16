# fullstack-open-part0
Part 0 Exercises


Exercise 0.4

sequenceDiagram
  participant browser
  participant server

  browser ->> server: POST https://studies.cs.helsinki.fi/exampleapp/new-note
  activate server
  server -->> browser: 201 Created
  deactivate server

  Note right of browser: Server stores new note

  browser->>server: GET https://stuidies.cs.helsinki.fi/exampleapp/data.json
  activate server
  server-->>browser: JSON updated with new note
  deactivate server

  Note right of browser: Browser re-render notes with new info

--

Exercise 0.5

sequenceDiagram
  participant browser
  participant server
  
  browser ->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
  activate server
  server-->>browser: HTML document
  deactivate server

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  activate server
  server-->>browser: CSS file
  deactivate server

  browser->>server GET https://studies.cs.helsinki.fi/exampleapp/spa.js
  activate server
  server-->>browser: Javascript file
  deactivate server

  Note right of browser: Browser executes Javascript and ask for data

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  activate server
  server-->>browser: JSON with notes
  deactivate server

  Note right of browser: Browser renders notes without reloading page

--

Exercise 0.6

sequenceDiagram
  participant browser
  participant server

  Note right of browser: User writes new note and UI updates immediately 

  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  activate server
  server-->>browser: 201 created
  deactivate server

  Note right of browser: Server stores the note, but UI is updated before it

--
