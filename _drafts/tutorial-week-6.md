##### Tutorial Week 5: Media Queries

*What are Media Queries?*
- Media queries can be set up to apply css/scss styles when specific conditions relating to the viewing device are met.

*Why should i use them?*
- For our uses, media queries are great for setuping up a responive (instead of adaptaptive) web page. You can apply certain styles based on the viewport width to make the item look/work better on phones, tablets, or monitors.

*How are they used?*  
- ex: the following example will turn the background color black for any viewport width over 750px
```
@media (min-width: 750px) {
  background-color: black;
}
```
- for mobile first design, you would use minimun widths to change styles (from the default mobile settings) as the viewport widened past the designated break points (min-widths).
- for desktop first design, maximum widths are used to change the styles as the viewport narrowed past the designated break points (max-widths).

