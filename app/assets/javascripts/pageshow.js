var pageElements = [];
var formId = 0;

function populateElements() {
  $.get('/pages/' + window.location.href.split("/pages/")[1] + '.json').done(function(data) {
    pageElements = data['elements'].map(function(el){
      element = new Element(el);
      return element;
    });
  });
}

function getElement() {
  formId = parseInt($('#changer [name="id"]').val());
  el = pageElements.find(idGet);
  return el;
}

function idGet(element){
  return element.id === formId;
}
//addding page/text color funct - if stateemnet for page vs text
function applyChanges(el) {
  el.changeElement();
}

function applyOrSave(e){
  el = getElement();
  if ($(e.target).val() === "Apply changes") {
    applyChanges(el);
  }
  else if ($(e.target).val() === "Save these changes") {
    el.updateElement();
  }
}

$(document).ready(function() {
  populateElements();
  $('#changer :submit').on('click', function(e) {
    e.preventDefault();
    applyOrSave(e);
  });
});
