$(function () {
  let lockKeyVals;
  let lockInitVals;

  $('#start').click(function () {
    lockKeyVals = [...Array($('input').length)].map(
      () => Math.floor(Math.random() * 10000) % 10
    );
    lockInitVals = [...Array($('input').length)].map(
      () => Math.floor(Math.random() * 10000) % 10
    );

    $('#start').hide();
    for (let i = 0; i < $('input').length; i++) {
      $('input').eq(i).val(lockInitVals[i]);
    }
    update();
    $('#container').show();
  });

  function color(val, lockVal) {
    return val < lockVal ? 'red' : val > lockVal ? 'blue' : 'green';
  }

  function update() {
    $('.num').css('background-color', (i, c) => {
      let val = $('input').eq(i).val();
      return color(val, lockKeyVals[i]);
    });
    let matches = 0;
    for (let i = 0; i < $('input').length; i++) {
      if (parseInt($('input').eq(i).val()) === lockKeyVals[i]) {
        matches++;
      }
    }
    if (matches >= $('input').length) {
      $('#info-box h3')
        .html('Lock Opened!')
        .parent()
        .css('background-color', 'green')
        .click(function () {
          $('#container').hide();
          $('#start').show();
        });
    } else {
      $('#info-box h3')
        .html('Locked')
        .parent()
        .css('background-color', 'black');
    }
  }

  $('input').click(function () {
    update();
  });
});
