var star = new function() {

  var element = '<li class="topics" data-global-action="favorite">\
    <a class="js-nav js-tooltip js-dynamic-tooltip" data-placement="bottom" href="/favorites" data-component-term="favorite_nav" data-nav="favorite">\
      <span class="Icon Icon--favorite Icon--large"></span>\
      <span class="text">Favorite</span>\
    </a>\
  </li>';
  // $('#global-actions').children().eq(2).after(element);
  var header = document.getElementById('global-actions');
  header.children[2].outerHTML += element;

  console.log('add star in header');
}