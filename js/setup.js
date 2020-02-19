'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var COUNT_WIZARDS = 4;
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var ESCAPE_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var mixArray = function (array) {
  var test;
  var temp;
  for (var i = array.length - 1; i > 0; i--) {
    test = Math.floor(Math.random() * (i + 1));
    temp = array[test];
    array[test] = array[i];
    array[i] = temp;
  }
  return array;
};

var mixedNames = mixArray(WIZARD_NAMES);
var mixedSurnames = mixArray(WIZARD_SURNAMES);
var mixedCoats = mixArray(WIZARD_COATS);
var mixedWizardEyes = mixArray(WIZARD_EYES);

var userDialog = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

var userNameInput = userDialog.querySelector('.setup-user-name');

var setupPlayer = userDialog.querySelector('.setup-player');
// var fireball = userDialog.querySelector('.setup-fireball');
// var wizardCoatColor = setupPlayer.querySelector('.wizard-coat');
// var wizardEyeColor = setupPlayer.querySelector('.wizard-eyes');
// var playerCharacteristicInputData = setupPlayer.querySelectorAll('input');


var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

var fragment = document.createDocumentFragment();

var wizards = [];


var createArrayObjects = function (arrayObjects) {
  for (var i = 0; i < COUNT_WIZARDS; i++) {
    arrayObjects[i] = {
      name: mixedNames[i] + ' ' + mixedSurnames[i],
      coatColor: mixedCoats[i],
      eyesColor: mixedWizardEyes[i]
    };
  }
  return arrayObjects;
};

var drawWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var buildWizardBlock = function (documentFragment, arrayObject) {
  for (var i = 0; i < arrayObject.length; i++) {
    documentFragment.appendChild(drawWizard(arrayObject[i]));
  }
  return similarListElement.appendChild(documentFragment);
};

var onPopupEscapeButtonPress = function (evt) {
  if (evt.keyCode === ESCAPE_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscapeButtonPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscapeButtonPress);
};

var testInputHandler = function (evt) {
  var target = evt.target;
  if (target.validity.valueMissing) {
    target.setCustomValidity('Обязательное поле');
  } else if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (target.value.length > 25) {
    target.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else {
    target.setCustomValidity('');
  }
  return target;
};

var inputFocusHandler = function () {
  document.removeEventListener('keydown', onPopupEscapeButtonPress);
};

var inputBlurHandler = function () {
  document.addEventListener('keydown', onPopupEscapeButtonPress);
};

// Блок изменений цвета мантии, глаз и фаерболла по нажатию
var renderEyeColor = function () {
  var renderedEyeColor = WIZARD_EYES[Math.floor(Math.random() * WIZARD_EYES.length)];

  return renderedEyeColor;
};

var renderCoatColor = function () {
  var renderedCoatColor = WIZARD_COATS[Math.floor(Math.random() * WIZARD_COATS.length)];

  return renderedCoatColor;
};

var renderFireballColor = function () {
  var renderedFireballColor = FIREBALL_COLORS[Math.floor(Math.random() * FIREBALL_COLORS.length)];

  return renderedFireballColor;
};

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat ');
var wizardCoatInfo = document.querySelector('input[name=coat-color]');
var onCoatClick = function () {
  var nextColor = renderCoatColor(WIZARD_COATS, wizardCoatInfo.value);
  wizardCoat.setAttribute('style', 'fill: ' + nextColor);
  wizardCoatInfo.setAttribute('value', nextColor);
};

var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes ');
var wizardEyesInfo = document.querySelector('input[name=eyes-color]');
var onEyesClick = function () {
  var nextColor = renderEyeColor(WIZARD_EYES, wizardEyesInfo.value);
  wizardEyes.setAttribute('style', 'fill: ' + nextColor);
  wizardEyesInfo.setAttribute('value', nextColor);
};

var wizardFireball = document.querySelector('.setup-fireball-wrap');
var wizardFireballInfo = wizardFireball.querySelector('input');
var onFireballClick = function () {
  wizardFireballInfo.setAttribute('value', renderFireballColor(FIREBALL_COLORS, wizardFireballInfo.value));
  wizardFireball.setAttribute('style', 'background-color:' + wizardFireballInfo.value);
};

// var fireballandWizardColorClickHandler = function (evt) {
//   var targetElement = evt.target;

//   if (targetElement === wizardEyeColor) {
//     playerCharacteristicInputData[0].value = renderEyeColor();
//     wizardEyeColor.style.fill = playerCharacteristicInputData[0].value;
//   } else if (targetElement === wizardCoatColor) {
//     // playerCharacteristicInputData[1].value = renderCoatColor();
//     // wizardCoatColor.style.fill = playerCharacteristicInputData[1].value;
//   } else if (targetElement === fireball) {
//     playerCharacteristicInputData[2].value = renderFireballColor();
//     fireball.style = 'background-color:' + playerCharacteristicInputData[2].value;
//   }

//   return targetElement;
// };
setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

userNameInput.addEventListener('focus', inputFocusHandler);

userNameInput.addEventListener('blur', inputBlurHandler);

userNameInput.addEventListener('input', testInputHandler);

// setupPlayer.addEventListener('click', fireballandWizardColorClickHandler);
wizardCoat.addEventListener('click', onCoatClick);
wizardEyes.addEventListener('click', onEyesClick);
wizardFireball.addEventListener('click', onFireballClick);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

createArrayObjects(wizards);

buildWizardBlock(fragment, wizards);
