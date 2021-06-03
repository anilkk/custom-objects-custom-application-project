import React from 'react';
import Text from '@commercetools-uikit/text';
import UpdateContainerForm from './update-container-form';
import Spacings from '@commercetools-uikit/spacings';

const ViewOne = () => {
    const [containerValue, setContainerValue] = React.useState('');
    const handleUpdateContainer = (value) => setContainerValue(value);

    return (
        <Spacings.Stack scale="m">
            {containerValue && <Text.Headline as="h3">Current selected container is {containerValue}</Text.Headline>}
            <UpdateContainerForm updateContainerCallback={handleUpdateContainer} />
        </Spacings.Stack>
    );
};
ViewOne.displayName = 'ViewOne';

export default ViewOne;
