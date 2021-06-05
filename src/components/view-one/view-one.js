import React from 'react';
import Text from '@commercetools-uikit/text';
import Spacings from '@commercetools-uikit/spacings';

import UpdateContainerForm from './update-container-form';
import CustomObjectsKeyValueTable from './custom-objects-key-value-table';
import CreateOrUpdateCustomObjectsForm from './create-or-update-custom-objects-form';

import { useIntl } from 'react-intl';
import messages from './messages';
const {
    addContainerMessage,
    selectedContainerMessage
} = messages;

const ViewOne = () => {
    const intl = useIntl();
    
    const [containerValue, setContainerValue] = React.useState('');
    const handleUpdateContainer = (value) => setContainerValue(value);

    return (
        <Spacings.Stack scale="m">
            {containerValue?
            <Text.Headline as="h3">
                {intl.formatMessage(selectedContainerMessage)} <b>{containerValue}</b>
            </Text.Headline>:
            <Text.Headline as="h3">
                {intl.formatMessage(addContainerMessage)}
            </Text.Headline>}
            <UpdateContainerForm updateContainerCallback={handleUpdateContainer} />
            {containerValue && <CreateOrUpdateCustomObjectsForm container={containerValue} />}
            {containerValue && <CustomObjectsKeyValueTable container={containerValue} />}
        </Spacings.Stack>
    );
};
ViewOne.displayName = 'ViewOne';

export default ViewOne;