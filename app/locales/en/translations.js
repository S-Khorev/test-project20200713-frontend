import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTestProject20200713ContactLForm from './forms/i-i-s-test-project20200713-contact-l';
import IISTestProject20200713ContactTypeLForm from './forms/i-i-s-test-project20200713-contact-type-l';
import IISTestProject20200713PhoneTypeLForm from './forms/i-i-s-test-project20200713-phone-type-l';
import IISTestProject20200713ContactEForm from './forms/i-i-s-test-project20200713-contact-e';
import IISTestProject20200713ContactTypeEForm from './forms/i-i-s-test-project20200713-contact-type-e';
import IISTestProject20200713PhoneTypeEForm from './forms/i-i-s-test-project20200713-phone-type-e';
import IISTestProject20200713ContactTypeModel from './models/i-i-s-test-project20200713-contact-type';
import IISTestProject20200713ContactModel from './models/i-i-s-test-project20200713-contact';
import IISTestProject20200713PhoneTypeModel from './models/i-i-s-test-project20200713-phone-type';
import IISTestProject20200713PhoneModel from './models/i-i-s-test-project20200713-phone';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test-project20200713-contact-type': IISTestProject20200713ContactTypeModel,
    'i-i-s-test-project20200713-contact': IISTestProject20200713ContactModel,
    'i-i-s-test-project20200713-phone-type': IISTestProject20200713PhoneTypeModel,
    'i-i-s-test-project20200713-phone': IISTestProject20200713PhoneModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'test-project': {
          caption: 'test-project',
          title: 'test-project',
          'i-i-s-test-project20200713-contact-type-l': {
            caption: 'i-i-s-test-project20200713-contact-type-l',
            title: 'i-i-s-test-project20200713-contact-type-l'
          },
          'i-i-s-test-project20200713-phone-type-l': {
            caption: 'i-i-s-test-project20200713-phone-type-l',
            title: 'i-i-s-test-project20200713-phone-type-l'
          },
          'i-i-s-test-project20200713-contact-l': {
            caption: 'i-i-s-test-project20200713-contact-l',
            title: 'i-i-s-test-project20200713-contact-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test-project20200713-contact-l': IISTestProject20200713ContactLForm,
    'i-i-s-test-project20200713-contact-type-l': IISTestProject20200713ContactTypeLForm,
    'i-i-s-test-project20200713-phone-type-l': IISTestProject20200713PhoneTypeLForm,
    'i-i-s-test-project20200713-contact-e': IISTestProject20200713ContactEForm,
    'i-i-s-test-project20200713-contact-type-e': IISTestProject20200713ContactTypeEForm,
    'i-i-s-test-project20200713-phone-type-e': IISTestProject20200713PhoneTypeEForm
  },

});

export default translations;
