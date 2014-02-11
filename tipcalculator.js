/*

  Feedback:

  Make it so you can hit return to submit? Key up event
  Make it so the code doesn't run when you enter letters into inputs
  Anonymous function - bad, save with a name ubmitButton.addEventListener( 'click', function() {

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

      numberToTwoDecimalPlaces = function( value ) {
        return value.toFixed(2);
      };

    submitButton.addEventListener( 'click', function() {

      var billTotalValue = billTotal.value,

        tipPercentageValue = tipPercentage.value;

      if ( billTotalValue === '' || tipPercentageValue === '' ) {
        return false;
      }

      var suggestedTipValue = getSuggestedTipValue( billTotalValue, tipPercentageValue ),

        suggestedTotalValue =  ( billTotalValue * 1 ) + suggestedTipValue;

      tip.innerHTML = '&pound;' + numberToTwoDecimalPlaces( suggestedTipValue );

      total.innerHTML = '&pound;' + numberToTwoDecimalPlaces( suggestedTotalValue );

      tip.classList.remove(IS_HIDDEN_CLASS);

      total.classList.remove(IS_HIDDEN_CLASS);

    });

  });
})();

