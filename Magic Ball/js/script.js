        //Style set in JS
        function Style() {
            var data = {
                "box-sizing": "border-box",
                "background": "purple",
                "height": "500px",
                "width": "500px",
                "margin": "10px auto",
                "border-radius": "100%",
                "padding": "120px 50px",
                "color": "white",
                "font-family": "'Indie Flower', cursive",
                "font-size": "50px",
                "text-align": "center",
                "line-height": "2",
                //Browser prefix
                "-webkit-box-shadow": "0 0 30px yellow",
                "-moz-box-shadow": "0 0 30px yellow",
                "box-shadow": "0 0 30px yellow"
            }
            //Body
            document.body.style.background = "black";
            document.body.style.paddingTop = "150px";
        
        for (key in data) {
            magicEightBall.style[key] = data[key];
        }
          
        //Linker teksten til array        
        magicEightBall.innerHTML = "Klikk på meg for å se din skjebne!";
        }
    
        function getText() {
            //Random tekst Array
            var messages = new Array();
            messages[0] = "Du vil leve lenge!";
            messages[1] = "Du kommer til å bli rik!";
            messages[2] = "Du vil møte den rette!";
            messages[3] = "Du kommer til å gifte deg!";
            messages[4] = "Du vil få barn!";
            messages[5] = "Du vil få en bra jobb!";
            messages[6] = "Du kommer til å lære noe nytt!";
    
        //Math random formelen
        var randNum = Math.floor(Math.random() * messages.length);
            return messages[randNum];
        }
    
        var magicEightBall = document.getElementById("magicEightBall");
            Style();
    
        //onclick funksjonen    
        magicEightBall.onclick = function() {
            var message = getText();
            this.innerHTML = message;
        }
        
        //mouseover funksjonen
        magicEightBall.onmouseover = function() {
            this.style.boxShadow = "0 0 40px grey";
        }
        
        //onmouseout funksjonen
        magicEightBall.onmouseout = function() {
            Style();
        }