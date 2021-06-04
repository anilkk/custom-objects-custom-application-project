import React from 'react';
import TextInput from '@commercetools-uikit/text-input';
import PrimaryButton from '@commercetools-uikit/primary-button';
import Spacings from '@commercetools-uikit/spacings';
import Constraints from '@commercetools-uikit/constraints';
import FieldLabel from '@commercetools-uikit/field-label';
import { FormDialog } from '@commercetools-frontend/application-components';

import { useIntl } from 'react-intl';
import messages from './messages';

const UpdateContainerForm = ({ updateContainerCallback }) => {
    const intl = useIntl();

    const [containerValue, setContainerValue] = React.useState('');
    const [isFormOpen, setIsFormOpen] = React.useState(false);
     
    const handleCloseForm = () => setIsFormOpen(false);
    
    const handleUpdateContainer = (event) => {
        event.preventDefault(); // prevent default form submission behavior
        updateContainerCallback(containerValue);
        setIsFormOpen(false);
    };

    return (
        <Constraints.Horizontal max={4}> 
            {!containerValue && <PrimaryButton
                label={intl.formatMessage(messages.AddContainerNameButtonLabel)}
                onClick={() => {setIsFormOpen(true)}}
                isDisabled={false}
                horizontalConstraint={4}
            />}
            {containerValue && <PrimaryButton
                label={intl.formatMessage(messages.updateContainerNameButtonLabel)}
                onClick={() => {setIsFormOpen(true)}}
                isDisabled={false}
                horizontalConstraint={4}
            />}
            <FormDialog
                title={intl.formatMessage(messages.FormTitle)}
                isOpen={isFormOpen}
                onClose={handleCloseForm}
                onSecondaryButtonClick={handleCloseForm}
                onPrimaryButtonClick={handleUpdateContainer}
            >
                <Spacings.Stack scale="m">
                    <FieldLabel
                        title={intl.formatMessage(messages.containerInputLabel)}
                        hasRequiredIndicator={true}
                        htmlFor="updateContainer"
                        horizontalConstraint={7}
                    />
                    <TextInput id="updateContainer" value={containerValue} onChange={(event) => {
                        setContainerValue(event.target.value);
                    }} />
                </Spacings.Stack>
            </FormDialog>
        </Constraints.Horizontal>
    );
}
export default UpdateContainerForm;