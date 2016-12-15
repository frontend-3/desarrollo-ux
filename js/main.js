document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.input').forEach( function( inputEl ) {
    inputEl.addEventListener( 'focus', onInputFocus );
    inputEl.addEventListener( 'blur', onInputBlur );
  });

  function onInputFocus( ev ) {
    ev.target.parentNode.classList.add('row-form--filled' );
  }

  function onInputBlur( ev ) {
    if( ev.target.value.trim() === '' ) {
      ev.target.parentNode.classList.remove('row-form--filled' );
    }
  }

}, false);
