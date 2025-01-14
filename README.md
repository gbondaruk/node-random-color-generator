# Node.js Random Color Generator

When a user enters node index.js in the command line, a block of 31x9 # characters colored with a random color (using hex code, e.g. #ff0000) should be generated.

```
node index.js
```

[sample](https://user-images.githubusercontent.com/1935696/92607675-b56bd700-f2b4-11ea-9085-67af9369fa71.png)

In addition to `node index.js`, it should also be able to accept the request for a:

- hue (eg. green or red or blue)
- luminosity (eg. light or dark)

...and then generate random colors that match those choices.

`node index.js red`

[sample red & dark blue](https://user-images.githubusercontent.com/1935696/92607766-daf8e080-f2b4-11ea-9d6d-3bd8501da443.png)

## TODOs

- [ ] Figure out how to generate a random color
- [ ] Figure out how to distinguish colors by hue and luminosity
- [ ] Figure out how to receive command line arguments for hue and luminosity
- [ ] Figure out how to print the color surrounded by a "hashtag" box & in the random color

- - [ ] Figure out how to adjust dimensions of hashtag box based on user submitted dimensions
