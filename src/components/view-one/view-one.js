import React from 'react';
import Text from '@commercetools-uikit/text';
import UpdateContainerForm from './update-container-form';
import CustomObjectsKeyValueTable from './custom-objects-key-value-table';
import CreateOrUpdateCustomObjectsForm from './create-or-update-custom-objects-form';
import Spacings from '@commercetools-uikit/spacings';

import { useIntl } from 'react-intl';
import messages from './messages';

const ViewOne = () => {
    const intl = useIntl();
    
    const [containerValue, setContainerValue] = React.useState('');
    const handleUpdateContainer = (value) => setContainerValue(value);

    return (
        <Spacings.Stack scale="m">
            {!containerValue && <Text.Headline as="h3">{intl.formatMessage(messages.addContainerMessage)}</Text.Headline>}
            {containerValue && <Text.Headline as="h3">{intl.formatMessage(messages.selectedContainerMessage)} <b>{containerValue}</b></Text.Headline>}
            <UpdateContainerForm updateContainerCallback={handleUpdateContainer} />
            <CreateOrUpdateCustomObjectsForm container={containerValue} />
            {containerValue && <CustomObjectsKeyValueTable container={containerValue} />}
        </Spacings.Stack>
    );
};
ViewOne.displayName = 'ViewOne';

export default ViewOne;
