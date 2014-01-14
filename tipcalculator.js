/*

  Feedback:

  Use single var statements in each scope (our styleguide) DONE

  Indentation should use 2 spaces (our styleguide) DONE

  Inconsistent indentation. If you start doing this early on it will become natural quickly. 
  Improves code readability. DONE

  Consider writing functions that perform your calculations. This improves other peoples 
  understanding of what the code does as the function name will tell them.

  Consider adding £ signs into your tip and total DONE

  Add a trailing 0 to the tip / total values if required.
   --> function that converts numbers to currency
 +
  Round tip and total values to 2 decimal places

  Consider only displaying the Tip and Total spaces after the calculation
    class e.g. is-hidden and then toggle it on when the form is submitted DONE

  Make it so you can hit return to submit? Key up event

*/

(function() {
  'use strict';
  document.addEventListener( 'DOMContentLoaded', function() {

  var billTotal = document.querySelector('#bill-total'),

      tipPercentage = document.querySelector('#tip-percentage'),

      submitButton = document.querySelector('#submit-button'),

      tip = document.querySelector('#tip-result'),

      total = document.querySelector('#total-result'),

      IS_HIDDEN_CLASS = 'is-hidden',

      getSuggestedTipValue = function( billTotalValue, tipPercentageValue ){
          return ( billTotalValue / 100 ) * tipPercentageValue;
      },

      formatCurrency = function( value ) {
        var valueAsString = '' + value,
          valueParts = valueAsString.split('.'),
          pence = valueParts[1],
          penceLength = pence.length;
        
        if ( penceLength === 1 ) {

          valueParts[1] = valueParts[1] + '0';

// Got as far as splitting the value, need to join value parts together again then return from function 


        }

        console.log(valueParts);


      };

    submitButton.addEventListener( 'click', function() {

      var billTotalValue = billTotal.value,

        tipPercentageValue = tipPercentage.value;

        console.log( billTotalValue, tipPercentageValue )


      if ( billTotalValue === '' || tipPercentageValue === '' ) {
        return false;
      }

      // if billtotalvalue is an empty string
      // or
      // tippercentagevalue is an empty string
      // return false

      var suggestedTipValue = getSuggestedTipValue( billTotalValue, tipPercentageValue ),

        suggestedTotalValue =  ( billTotalValue * 1 ) + suggestedTipValue;

      formatCurrency( suggestedTipValue );

      tip.innerHTML = '&pound;' + suggestedTipValue;

      total.innerHTML = '&pound;' + suggestedTotalValue;

      tip.classList.remove(IS_HIDDEN_CLASS);

      total.classList.remove(IS_HIDDEN_CLASS);

    });

  });
})();

