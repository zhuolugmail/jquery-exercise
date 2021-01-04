$(function () {
  let current = 0;

  $('.page>a')
    .filter((i, c) => c.text === 'Next')
    .click((e) => {
      e.preventDefault();
      if (current < $('.page').length - 1) current++;
      updateDisplay();
    });
  $('.page>a')
    .filter((i, c) => c.text === 'Prev')
    .click((e) => {
      e.preventDefault();
      if (current > 0) current--;
      updateDisplay();
    });

  function updateDisplay() {
    $('.page').hide();

    let currentPage = $('.page').eq(current);
    if (current === 0) {
      currentPage.children('a').first().css({ visibility: 'hidden' });
    } else if (current === $('.page').length - 1) {
      currentPage.children('a').last().css({ visibility: 'hidden' });
    }
    currentPage.show();
  }

  updateDisplay();
});

/*
     <div class="page">
        <h1>Second</h1>
        <p>This is the second page</p>
        <a href="#">Prev</a>
        <a href="#">Next</a>
      </div>
      */
