let day = new Date().getDay();
    console.log(day)

let fullDate = new Date().toLocaleDateString();
    document.write(`<br\>${fullDate}`)

    var quotes = [
        'The world isn\'t perfect. But it\'s there for us, doing the best it can....that\'s what makes it so damn beautiful.',
        'Fear is not evil. It tells you what weakness is. And once you know your weakness you can become stronger as well as kinder',
        'Whatever you lose, you\'ll find it again. But what you throw away you\'ll never get back.',
        'Thinking you’re no-good and worthless is the worst thing you can do',
    ]
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    



    if (day === 4 || day === 5) {
        alert("Have a Great weekend!")
    } else if (day === 0 || day === 1 || day === 2 || day === 3 || day === 4) {
        alert(randomNumber)
    }

let employee = prompt("Employee ID or Username");
    document.write("<br\>Employee:" + " " + employee);
            console.log(employee);

 /*let hoursWorked = 34*/       
let hoursWorked = Math.floor(Math.random() * 60);
    document.write("<br\>Your current hours worked:" + " " + hoursWorked);
    console.log(hoursWorked);

    if (hoursWorked > 35) {
        alert("You are about to reach overtime!")
        document.write("<br\>You are about to reach overtime!")
    } else if (hoursWorked < 60) {
        alert("You have reached above Overtime!")
        document.write("You have reached above Overtime!")
    }
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]








    


