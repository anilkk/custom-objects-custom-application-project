import React from 'react';
import DataTable from '@commercetools-uikit/data-table';
import LoadingSpinner from '@commercetools-uikit/loading-spinner';
import { ErrorMessage } from '@commercetools-uikit/messages';

import { useQuery } from '@apollo/client';
import GetCustomObjectsByContainer from './get-custom-objects-by-containers.graphql';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';

import { useIntl } from 'react-intl';
import messages from './messages';

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
        { key: 'key', label: intl.formatMessage(messages.customObjectKeyLabel)}, 
        { key: 'value', label:intl.formatMessage(messages.customObjectValueLabel)}
    ];
    
    if (loading) return (<LoadingSpinner size="m">Loading</LoadingSpinner>);
    if (error) return (<ErrorMessage>{intl.formatMessage(messages.errorMessage)}</ErrorMessage>);
    return (<DataTable rows={rows} columns={columns} />);    
}
export default CustomObjectsKeyValueTable;