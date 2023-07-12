### Greg Stillwell

By ****
Greg Stillwell

### Technologies Used
- Html
- css
- js

### Description
This is a website that every number you type that has 1,2,3 in the number will turn into beep, boop or wont you be my neighbor.

### Setup/Installation Requirements
- clone this repository: `$ git clone https://github.com/GregStillwell/neighborhood`
- open `index.html` in a web browser.
- right click and click on 'open with live server'
- type a number and see your results

### Known Bugs
- None at this time.

### Test:

Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(0);
Expected Output: [0]

Test: "It should replace numbers that contain a "1" with "Beep"
Code: beepBoop(1)
Expected Output: [0,"Beep"]

Test: "It should replace numbers that contain a "2" with "Boop"
Code: beepBoop(2)
Expected Output: [0, "Beep", "Boop"]

Test: :It should replace numbers thats contain a "3" with "Wont you be my neighbor" 
Code: beepboop(3)
Expected Output: [0,"beep, "beep", Wont you be my neighbor"]

Test : it should replace double digit numbers that ends with 3 with "'Wont you be my neighbor"
Code: beepboop(13)
Expected Output:  [0 'beep', 'boop', 'Wont you be my neighbor?', 4, 5, 6, 7, 8, 9, 'beep', 'beep', 'boop', 'Wont you be my neighbor?']

Test : it should replace double digit numbers that ends with one with "Beep"
Code: beepboop(11)
Expected Output:  [0 'beep', 'boop', 'Wont you be in my neighbor?', 4, 5, 6, 7, 8, 9, 'beep', 'beep', ]

Test : it should replace double digit numbers that ends with 2 with "boop"
Code: beepboop(12)
Expected Output:  [0 'beep', 'boop', 'Wont you be my neighbor?', 4, 5, 6, 7, 8, 9, 'beep', 'beep' 'boop', ]

### License

Copyright (c) [2023] [Gregory leon Stillwell]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.