import React, { useState } from 'react';
import TextInput from '@commercetools-uikit/text-input';
import PrimaryButton from '@commercetools-uikit/primary-button';
import Spacings from '@commercetools-uikit/spacings';
import Constraints from '@commercetools-uikit/constraints';
import FieldLabel from '@commercetools-uikit/field-label';
import { FormDialog } from '@commercetools-frontend/application-components';

import { useIntl } from 'react-intl';
import messages  from './messages';

const { 
    containerInputLabel, 
    formTitle, 
    addContainerNameButtonLabel, 
    updateContainerNameButtonLabel 
} = messages;

const UpdateContainerForm = ({ updateContainerCallback }) => {
    const intl = useIntl();

    const [containerValue, setContainerValue] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(false);
     
    const handleOpenForm = () => setIsFormOpen(true);
    const handleCloseForm = () => setIsFormOpen(false);
    const handleOnChangeContainerName = (event) => setContainerValue(event.target.value);
    const handleUpdateContainer = (event) => {
        event.preventDefault(); // prevent default form submission behavior
        updateContainerCallback(containerValue);
        setIsFormOpen(false);
    };

    return (
        <Constraints.Horizontal max={4}> 
            {containerValue ? 
            <PrimaryButton
                label={intl.formatMessage(updateContainerNameButtonLabel)}
                onClick={handleOpenForm}
            />: 
            <PrimaryButton
                label={intl.formatMessage(addContainerNameButtonLabel)}
                onClick={handleOpenForm}
            />}
            <FormDialog
                title={intl.formatMessage(formTitle)}
                isOpen={isFormOpen}
                onClose={handleCloseForm}
                onSecondaryButtonClick={handleCloseForm}
                onPrimaryButtonClick={handleUpdateContainer}
            >
                <Spacings.Stack scale="m">
                    <FieldLabel
                        title={intl.formatMessage(containerInputLabel)}
                        hasRequiredIndicator={true}
                        htmlFor="updateContainer"
                    />
                    <TextInput 
                        id="updateContainer" 
                        value={containerValue} 
                        onChange={handleOnChangeContainerName} 
                        horizontalConstraint={4}
                    />
                </Spacings.Stack>
            </FormDialog>
        </Constraints.Horizontal>
    );
}
export default UpdateContainerForm;