console.log('this is seperate js file');
const pinkButton = document.getElementById('make-pink')
        pinkButton.addEventListener('click', makePink)

        function makePink(){
            document.body.style.backgroundColor= 'pink';
        }

        // option-another
        const makeBlueButton =document.getElementById('make-blue')
       makeBlueButton.addEventListener('click', function makeBlue(){
            document.body.style.backgroundColor= 'blue'
       })

    //    option-final

    document.getElementById('make-orange').addEventListener('click', function(){
        document.body.style.backgroundColor = 'orange';
       })