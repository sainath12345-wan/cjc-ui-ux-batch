    // Problem 1:
    // You are given a decimal number representing a product price: productPrice = 49.99. You want to calculate the price without any cents.
    // Use Math.floor() to get the integer part of the price.

    let productPrice = 49.99;
    document.writeln(`The Price Of Product With Cent = ${productPrice} <br>`)
    let priceWithoutCent = Math.floor(productPrice);
    document.writeln(`The Price Of Product Without Cent = ${priceWithoutCent} <br><br>`)


    // Problem 2:
    // You’re creating a pagination system. If you divide 103 items among 10 pages, how many full pages will be displayed before the last incomplete one?
    // Use Math.floor() on 103/10.

    let totalItems = 103;
    document.writeln(`The Total Items = ${totalItems} <br>`)
    let fullPageCompleted = Math.floor(103 / 10);
    document.writeln(`${fullPageCompleted} full pages will be displayed before the last incomplete one. <br><br>`)
    

    // Problem 3:
    // You are baking cookies. One tray holds 8 cookies. You want to bake 25 cookies.
    // Use Math.ceil() to calculate how many trays you’ll need.

    let totalCookies = 25;
    let oneTrayHoldCookies = 8;
    document.writeln(`Total cookies = ${totalCookies}<br>`)
    document.writeln(`Total Cookies Hold By Single Tray = ${oneTrayHoldCookies}<br>`)
    let totalNumberOfTray = Math.ceil(totalCookies/oneTrayHoldCookies)
    document.writeln(`Total Number Of Trays = ${totalNumberOfTray}<br><br>`)

    // Problem 4:
    // You are calculating days required to complete a task that takes 1.7 days.
    // Use Math.ceil() to round up the number of days.

    let daysRequiredToCompleteTaks = 1.7;
    document.writeln(`Days Required To Complete a taks = ${daysRequiredToCompleteTaks} <br>`)
    let numberOfDays = Math.ceil(daysRequiredToCompleteTaks);
    document.writeln(`Number Of Days = ${numberOfDays}<br><br>`)

    // Problem 5:
    // Your average game score is 67.4. You want to display a rounded version of it.
    // Use Math.round() to round the score.

    let averageGameScore = 67.4;
    document.writeln(`Average Game Score = ${averageGameScore}<br>`)
    let roundedAverageGameScore = Math.round(averageGameScore);
    document.writeln(`Rounded Average Game Score = ${roundedAverageGameScore} <br><br>`)

    // Problem 6:
    // A product rating is 4.6. You want to display a whole number rating.
    // Use Math.round() to find the nearest integer rating.

    let productRating = 4.6;
    let roundedProductRating = Math.round(productRating);
    document.writeln(`The Product Rating Without Rounded = ${productRating}<br>`)
    document.writeln(`The Product Rating With Rounded = ${roundedProductRating}<br><br>`)


    // Problem 7:
    // You calculate the difference in temperature between day and night as -15.
    // Use Math.abs() to display this as a positive difference.

    let differenceInTemperature = -15;
    let absoluteTemperature = Math.abs(differenceInTemperature);
    document.writeln(`The Difference In Temperature between Day and Night = ${differenceInTemperature} <br>`)
    document.writeln(`The Absolute Temperture = ${absoluteTemperature}<br><br>`)

    // Problem 8:
    // A stock’s profit/loss value is -250.
    // Use Math.abs() to show the magnitude of change.

    let stockProfitOrLoss = -250;
    let magnitudeOfChange = Math.abs(stockProfitOrLoss);
    document.writeln(`Stock's Profit/Loss value = ${stockProfitOrLoss} <br>`)
    document.writeln(`Magnitude Of Change = ${magnitudeOfChange}<br><br>`)

    // Problem 9:
    // You want to calculate the area of a square with side = 6.
    // Use Math.pow(6, 2) to calculate the area.

    let side = 6;
    let areaOfSquare = Math.pow(side , 2);
    document.writeln(`Side Of Square = ${side} <br>`)
    document.writeln(`The Area Of Square = ${areaOfSquare}<br><br>`)


    // Problem 10:
    // You want to find 2 raised to the power of 5.
    // Use Math.pow(2, 5).

    let base = 2;
    let exponent = 5;
    let power = Math.pow(base,exponent)
    document.writeln(`Base = ${base}<br>`)
    document.writeln(`Exponent = ${exponent} <br>`)
    document.writeln(`${base} raised to the power of ${exponent} is ${power} <br><br>`)


    // Problem 11:
    // You want to find the length of a side of a square whose area is 64.
    // Use Math.sqrt(64).

    let areaOfSquare1 = 64;
    let sideOfSqaure = Math.sqrt(areaOfSquare);
    document.writeln(`The Area Of Square = ${areaOfSquare} <br>`);
    document.writeln(`The side of the Square = ${sideOfSqaure} <br><br>`)
    
    // Problem 12:
    // Find the square root of 225 to determine the side length of a square.
    // Use Math.sqrt(225).

    let areaOfSquare2 = 64;
    let sideOfSqaure2 = Math.sqrt(areaOfSquare2);
    document.writeln(`The Area Of Square = ${areaOfSquare2} <br>`);
    document.writeln(`The side of the Square = ${sideOfSqaure2} <br><br>`)
    
    
    
    // Problem 13:
    // You are given the volume of a cube as 1000. Find the length of one side.
    // Use Math.cbrt(1000) to get the cube root.

    let volumeOfCube = 1000;
    let sideOfCube = Math.cbrt(volumeOfCube);
    document.writeln(`The Volume Of Cube = ${volumeOfCube} <br>`);
    document.writeln(`The side of the Cube = ${sideOfCube} <br><br>`)
    
    // Problem 14:
    // Find the cube root of 27 to determine the side length of a cube.
    // Use Math.cbrt(27).
    
    let volumeOfCube1 = 27;
    let sideOfCube1 = Math.cbrt(volumeOfCube1);
    document.writeln(`The Volume Of Cube = ${volumeOfCube1} <br>`);
    document.writeln(`The side of the Cube = ${sideOfCube1} <br><br>`)
    
    




