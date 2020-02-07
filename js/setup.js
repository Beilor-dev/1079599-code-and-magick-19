'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var mixArray = function (array) {
  var g;
  var temp;
  for (var i = array.length - 1; i > 0; i--) {
    g = Math.floor(Math.random() * (i + 1));
    temp = array[g];
    array[g] = array[i];
    array[i] = temp;
  }
  return array;
};

var mixedNames = mixArray(WIZARD_NAMES);
var mixedSurnames = mixArray(WIZARD_SURNAMES);
var mixedCoats = mixArray(WIZARD_COATS);
var mixedWizardEyes = mixArray(WIZARD_EYES);

var userDialog = document.querySelector('.setup');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector ('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

// var buildWizardBlock = function(documentFragment, arrayObject) [
//   for (var i = 0; i < arrayObject.length; i++) {
//     documentFragment.appenChild()
//   }
// ]

userDialog.classList.remove('hidden');

userDialog.querySelector('.setup-similar').classList.remove('hidden');