/*
Explanation:

There are a series of checkboxes, when a checkbox is checked it uses `counter-increment: section;` to increment the counter, in essence it allows counting of checked checkboxes. The buttons are checkboxes that change position, with green unchecked at the top and moving to the red checked
The action happens on the boundary of the checked checkboxes on top and the unchecked checkboxes under (it's possible all checkboxes are checked or unchecked, in which no checkboxes may be present on top or bottom and a default blank div is shown)

...
[x] <- These are stacked on the bottom under those after
[x] <- These are stacked on the bottom under those after
[x] <- These are stacked on the bottom with this checkbox clickable as it is stacked on top
[ ] <- These placed on top with this checkbox clickable as others are hidden
[ ] <- These placed on the top but are hidden
[ ] <- These placed on the top but are hidden
...

Checkboxes are stacked by using css grid where multiple elements given the same grid area will stack where the last element is clickable.
With this the checked checkboxes are ordered in a way that is easy to deal with and can be assigned to the decrement area and left. Just need to add a small background coloured shadow to hide the checkboxes stacked under the top giving the corners an ugly pixelated look.
The unchecked checkboxes if left would stack such that the last checkbox would be checked. With the ability to see upward at the checked checkboxes it just requires finding a checked checkbox followed by an unchecked one and select all inputs to hide.
*/

