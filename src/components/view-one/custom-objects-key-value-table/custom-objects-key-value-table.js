import React from 'react';
import DataTable from '@commercetools-uikit/data-table';
import LoadingSpinner from '@commercetools-uikit/loading-spinner';
import { ErrorMessage } from '@commercetools-uikit/messages';

import { useQuery } from '@apollo/client';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';
import GetCustomObjectsByContainer from './get-custom-objects-by-container.graphql';

import { useIntl } from 'react-intl';
import messages from './messages';

const {
    customObjectKeyLabel,
    customObjectValueLabel,
    loadingMessage,
    errorMessage
} = messages;

const target = GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM;

const CustomObjectsKeyValueTable = ({ container }) => {
    const intl = useIntl();
    const { loading, error, data } = useQuery(GetCustomObjectsByContainer, {
        variables: { 
            container,
            target
        },
      });
    const rows =  data ? data.customObjects.results.map(({key, value}) => ({id: key, key, value})) : [];
    const columns = [
        { key: 'key', label: intl.formatMessage(customObjectKeyLabel)}, 
        { key: 'value', label:intl.formatMessage(customObjectValueLabel)}
    ];
    
    if (loading) return (<LoadingSpinner size="m">{intl.formatMessage(loadingMessage)}</LoadingSpinner>);
    if (error) return (<ErrorMessage>{intl.formatMessage(errorMessage)}</ErrorMessage>);
    return (<DataTable rows={rows} columns={columns} />);    
}
export default CustomObjectsKeyValueTable;