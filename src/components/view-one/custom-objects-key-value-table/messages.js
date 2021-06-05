import { defineMessages } from 'react-intl';

export default defineMessages({
    customObjectKeyLabel: {
        id: 'CustomObjectsKeyValueTable.customObjectKeyLabel',
        description: 'Custom Object key label',
        defaultMessage: 'Key',
    },
    customObjectValueLabel: {
        id: 'CustomObjectsKeyValueTable.customObjectValueLabel',
        description: 'Custom Object value label',
        defaultMessage: 'Value',
    },
    loadingMessage: {
        id: 'CustomObjectsKeyValueTable.loadingMessage',
        description: 'Loading message still waiting for the server response',
        defaultMessage: 'Loading',
    },
    errorMessage: {
        id: 'CustomObjectsKeyValueTable.errorMessage',
        description: 'Something went wrong fetching Custom Object data',
        defaultMessage: 'Something went wrong',
    }
});