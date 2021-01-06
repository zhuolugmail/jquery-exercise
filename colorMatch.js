$(function () {
  const genRandom = (bound) => Math.floor(Math.random() * bound);
  const getColorComp = () => genRandom(256);
  const randomColor = () =>
    `rgb(${getColorComp()},${getColorComp()},${getColorComp()})`;

  const colors = [...Array($('.square').length)].map(randomColor);

  let shuffledColorIndex = [...Array($('.square').length)].map((e, i) => i);

  function shuffle(arr) {
    const newArr = [...arr];
    function swap(i, j) {
      if (i !== j) {
        let tmp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = tmp;
      }
    }
    for (let i = 0; i < arr.length; i++) {
      let j = genRandom(arr.length);
      swap(i, j);
    }
    return newArr;
  }

  function regenerate() {
    shuffledColorIndex = shuffle(shuffledColorIndex);
    $('#panel').css('background-color', colors[genRandom(colors.length)]);
    $('.square').map((i, c) => {
      $(c).css('background-color', colors[shuffledColorIndex[i]]);
    });
  }

  regenerate();

  $('.square').click(function (e) {
    if (
      $(this).css('background-color') === $('#panel').css('background-color')
    ) {
      $('#panel').text('Great job!');
      if ($(this).text() === '') $(this).text(1);
      else $(this).text(parseInt($(this).text()) + 1);
    } else {
      $('#panel').text('Oops, try again.');
    }
    regenerate();
  });
});
