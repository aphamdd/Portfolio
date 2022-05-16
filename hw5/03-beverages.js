$(document).ready(function () {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

  const addDrinksToDOM = (drinks) => {
    console.log(drinks.strDrink);
    

    $('#drinks').append( // container
      $('<div>')
        .css({
          display: 'inline-grid',
          alignItems: 'center',
        })
        .append( // card
          $('<div>')
            .css({
              width: '250px',
              height: '280px',
              backgroundColor: '#f5f5f5',
              margin: '4px',
              borderRadius: '0.2rem'
            })
            .append( // image
              $('<img>', {src: drinks.strDrinkThumb})
                .css({
                  width: '200px',
                  height: '200px',
                  marginTop: '10px',
                  borderRadius: '0.2rem'
                })
            )
            .append( // text
              $('<p>')
                .css({
                  fontWeight: 'bold',
                })
                .text(drinks.strDrink)
            )
            .on('mouseenter', function() {
              $(this).css({
                backgroundColor: 'purple',
                color: 'white'
              })
            })
            .on('mouseleave', function() {
              $(this).css({
                backgroundColor: '#f5f5f5',
                color: 'black'
              })
            })
        )
    );
  };

  const fetchData = (url) => {
    $.ajax ({
      type: 'GET',
      url: url,
      success: (data) => {
        data.drinks.forEach((drinks) => {
          addDrinksToDOM(drinks);
        });

      },

      error: (error) => {
        console.error(error);
        $('#drinks').append($('<div>').text('An error occurred.'));
      },

      complete: () => {
        $('#loading').remove();
      }
    });
  };

  fetchData(url);
});
