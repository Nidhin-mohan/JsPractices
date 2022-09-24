# DOM

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.


![DOM](/04DOM/1200px-DOM-model.svg.png)


# Accessing Elements

Before we can update a page, we need to find, or select, the element(s) that we want to update. In order to find an element, we need to search through the document. 

- getElementById()

Selects an individual element within a document using a specific id.


- querySelector()

Uses CSS selector to select the first matching element within a document

- getElementsByClassName()

Allows you to select all elements with a given class attribute

- getElementsByTagName()

Locates all elements that match a given tag name

- querySelectorAll()

Uses CSS selector to select one or more elements
