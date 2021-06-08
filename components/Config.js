var _Environments = {
  DEVELOPMENT: {
    DOMAIN: 'http://dev53.hoja-crm.com/API/',
    CHAT_DOMAIN: 'http://dev53.hoja-crm.com',
    PUSH_NOTES_DOMAIN: 'https://www.istanbulit.com',

    APP_NAME: 'Canteen',
  },
  PRODUCTION: {
    DOMAIN: 'http://dev53.istanbulit.net/API/',
    CHAT_DOMAIN: 'http://dev53.istanbulit.net',
    PUSH_NOTES_DOMAIN: 'https://www.istanbulit.com',

    APP_NAME: 'Canteen',
  },
};

// var Environment = _Environments['PRODUCTION'];
module.exports = _Environments['DEVELOPMENT'];
