input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(100)
        basic.showIcon(IconNames.No)
        basic.pause(100)
        basic.clearScreen()
    }
})
// 1 + 2 + 3+ 4 + 5+....+10
// 
// Count 1 
// Sum = 0 + 1
// Count 2
// Sum = 1+ 2
// Count 3
// Sum = 3 + 3
// Count 4
// Sum = 6+ 4
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 100000000; index++) {
        counter += 1
        sum = sum + counter
    }
    basic.showNumber(sum)
})
let sum = 0
let counter = 0
counter = 0
sum = 0
basic.showNumber(counter)
basic.forever(function () {
	
})
