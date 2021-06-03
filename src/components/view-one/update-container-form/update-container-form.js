import React from 'react';
import TextInput from '@commercetools-uikit/text-input';
import PrimaryButton from '@commercetools-uikit/primary-button';
import Spacings from '@commercetools-uikit/spacings';
import Constraints from '@commercetools-uikit/constraints';
import FieldLabel from '@commercetools-uikit/field-label';

import { useIntl } from 'react-intl';
import messages from './messages';

const UpdateContainerForm = ({ updateContainerCallback }) => {
    const intl = useIntl();

    const [containerValue, setContainerValue] = React.useState('');
     
    const handleTextInputChange = (event) => {setContainerValue(event.target.value)};
    
    const handleUpdateContainer = (event) => {
        event.preventDefault(); // prevent default form submission behavior
        updateContainerCallback(containerValue);
    };

    return (
        <form onSubmit={handleUpdateContainer}>
            <Constraints.Horizontal max={4}> 
                <Spacings.Stack scale="m">
                    <FieldLabel
                        title={intl.formatMessage(messages.containerInputLabel)}
                        hasRequiredIndicator={true}
                        htmlFor="updateContainer"
                        horizontalConstraint={7}
                    />
                    <TextInput
                        name="name"
                        id="updateContainer"
                        onChange={handleTextInputChange}
                        value={containerValue}
                    />
                    <PrimaryButton
                        label={intl.formatMessage(messages.updateContainerNameSubmitButtonLabel)}
                        type="submit"
                        onClick={() => {/* do nothing */}}
                        isDisabled={false}
                        horizontalConstraint={4}
                    />        
                </Spacings.Stack>
            </Constraints.Horizontal>
        </form>
    );
}
export default UpdateContainerForm;