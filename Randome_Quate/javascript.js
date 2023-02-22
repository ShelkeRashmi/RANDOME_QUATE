// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

let max = 10;
let min = 0;
let colors =
    ["blue", "crimson", "red", "green", "orange", "purple", "pink", "grey", "indigo", "brown", "yellow"];

document.addEventListener('DOMContentLoaded', function () {

    const cont = new XMLHttpRequest();
    cont.open("GET", "https://quotesondesign.com/wp-json/wp/v2/posts", true);
    cont.send();

    cont.onload = function () {
        const json = JSON.parse(cont.responseText);
        max = (json.length) - 1;
        index = Math.floor(Math.random() * (max - min) + min);
        document.getElementById("text").innerHTML = json[index].content.rendered;
        document.getElementById("author").innerHTML = json[index].title.rendered;

        $(":header").css("color", colors[index]);
        $("body").css("background-color", colors[index]);
        $("button").css("background-color", colors[index]);


        document.getElementById("new-quote").onclick = function () {
            index = Math.floor(Math.random() * (max - min) + min)
            document.getElementById("text").innerHTML = json[index].content.rendered;
            document.getElementById("author").innerHTML = json[index].title.rendered;
            $(":header").css("color", colors[index]);
            $(":header").hide().fadeIn(1000);
            $("body").css("background-color", colors[index]);
            $("button").css("background-color", colors[index]);


        };


        document.getElementById("tweet-quote").onclick =
            function () {
                $("a").attr("href", "https://twitter.com/intent/tweet?text=" + document.getElementById("text").textContent + " " + "- " + document.getElementById("author").textContent)

                console.log($("a").attr("href"))
            }


    }
});
