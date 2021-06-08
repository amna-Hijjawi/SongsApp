import {
I18nManager
} from 'react-native';

import strings from '../Translation.js';
const IS_RTL = I18nManager.isRTL;
Strings = IS_RTL ? strings.ar : strings.enUS
// Strings = strings.ar

module.exports = validation = {
  email: {
    presence: {
      message: '^'+Strings.ErrorNoEmail
    },
    format: {
      pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: '^'+Strings.ErrorWrongEmail
    }
  },

  password: {
    presence: {
      message: '^'+Strings.ErrorNoPassword
    },
    length: {
      minimum: 6,
      message: '^'+Strings.ErrorWrongPassword
    }
  },

  passwordUpdate: {
    length: {
      minimum: 6,
      message: '^'+Strings.ErrorWrongPassword
    }
  },

  decimalAmount: {
    presence: {
      message: '^'+Strings.ErrorNoQty
    },
    numericality: {
      greaterThan: 0,
    }
  },

  numberQty: {
    presence: {
      message: '^'+Strings.ErrorNoQty
    },
    numericality: {
      greaterThan: 0,
      message: '^'+Strings.ErrorNoQty
    }
  },
  phoneNo:  {
    presence: {
      allowEmpty: false,
      message: '^'+Strings.ErrorPhone
    },
  },
  text:  {
    presence: {
      allowEmpty: false,
      message: '^'+Strings.ErrorEmpty
    },
  },
  required:  {
    presence: {
      allowEmpty: false,
      message: '^'+Strings.ErrorEmpty
    },
  },

  fname:  {
    presence: {
      allowEmpty: false,
      message: '^'+Strings.FnameError
    },
  },
 

  name:  {
    presence: {
      allowEmpty: false,
      message: '^'+Strings.ErrorEmptyName
    },
  },

  lname:  {
    presence: {
      allowEmpty: false,
      message: '^'+Strings.LnameError
    },
  },

  phone:{
    presence: {
      allowEmpty: false,
      message: '^'+Strings.ErrorPhone
    },
    
    format: {
      pattern: /([0-9]*)$|^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: '^'+Strings.ErrorPhoneFormat
    },
    length: {
      minimum: 7,
      message: '^'+Strings.errorPhoneLength
    }
    
  },
  mobile:  {
    presence: {
      allowEmpty: false,
      message: '^'+Strings.ErrorPhone
    },
    
    format: {
      pattern: /([0-9]*)$|^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: '^'+Strings.ErrorPhoneFormat
    },
    length: {
      minimum: 7,
      message: '^'+Strings.errorPhoneLength
    }
    
  },
};
