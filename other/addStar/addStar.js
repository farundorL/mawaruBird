var star = new function() {

  var element = '<li class="likes-nav" data-global-action="likes">\
    <a class="js-nav js-tooltip js-dynamic-tooltip" data-placement="bottom" href="/i/likes" data-component-term="likes_nav" data-nav="likes">\
      <span class="Icon Icon--favorite Icon--large" style="font-size: 22pt; line-height: 0.7em;">♥</span>\
      <span class="text" style="margin-left: 0px;">Likes</span>\
    </a>\
  </li>';
  // $('#global-actions').children().eq(2).after(element);
  var header = document.getElementById('global-actions');
  header.children[2].outerHTML += element;

  console.log('add star in header');
}