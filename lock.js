$(function () {
  let lockKeyVals;
  let lockInitVals;

  $('#start').click(function () {
    lockKeyVals = [...Array(3)].map(
      () => Math.floor(Math.random() * 10000) % 10
    );
    lockInitVals = [...Array(3)].map(
      () => Math.floor(Math.random() * 10000) % 10
    );

    $('#start').hide();
    $('input').attr('value', (i, c) => lockInitVals[i]);
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
    for (let i = 0; i < 3; i++) {
      console.log(i, parseInt($('input').eq(i).val()), lockKeyVals[i]);
      if (parseInt($('input').eq(i).val()) === lockKeyVals[i]) {
        matches++;
      }
      console.log(matches);
    }
    if (matches >= 3) {
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
