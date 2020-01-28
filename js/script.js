var fireballSize = 22;

var getFireballSpeed = function (left) {
   if (true===left) {
    return 5;
     } else {
    return 2;
  }
}

var wizardSpeed = 3;
var wizardWidth = 70;

var calcWizardHeight = 1.337 * wizardWidth;

var getWizardHeight = function (wizardWidth) {
    var calcWizardHeight = 1.337 * wizardWidth;
    return calcWizardHeight;
  },

  getWizardX = function(width) {
    return (width-wizardWidth) / 2;
  },

  getWizardY = function(height) {
    return  height * 0.63;
  }

var WizardHeight = getWizardHeight (wizardWidth);


