import React from 'react';
import TextInput from '@commercetools-uikit/text-input';
import PrimaryButton from '@commercetools-uikit/primary-button';
import Constraints from '@commercetools-uikit/constraints';
import Spacings from '@commercetools-uikit/spacings';
import FieldLabel from '@commercetools-uikit/field-label';
import { FormDialog } from '@commercetools-frontend/application-components';

import { useMutation } from '@apollo/client';
import CreateOrUpdateCustomObject from './create-or-update-custom-object.graphql';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';

import { useIntl } from 'react-intl';
import messages from './messages';

const {
    keyInputLabel,
    valueInputLabel,
    formTitle,
    openFormButtonLabel
} = messages;

const target = GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM;

const CreateOrUpdateCustomObjectsForm = ({ container }) => {
    const intl = useIntl();
    const [isFormOpen, setIsFormOpen] = React.useState(false);
    const [key, setKey] = React.useState('');
    const [value, setValue] = React.useState('');

    const [createOrUpdateCustomObject] = useMutation(CreateOrUpdateCustomObject, {
        variables: {
          target,
          "customObjectDraft": {
            key,
            value: `\"${value}\"`,
            container
          }
        }
    });

    const handleOpenForm = () => setIsFormOpen(true);
    const handleCloseForm = () => setIsFormOpen(false);
    const handleCreateOrUpdateCustomObject = () => {
        if (key.length > 0 && value.length > 0) {
            createOrUpdateCustomObject();
        }
        setIsFormOpen(false);
    };

    return (
        <Constraints.Horizontal max={4}> 
            <PrimaryButton
                label={intl.formatMessage(openFormButtonLabel)}
                onClick={handleOpenForm}
                isDisabled={!container}
                horizontalConstraint={4}
            />
            <FormDialog
                title={intl.formatMessage(formTitle)}
                isOpen={isFormOpen}
                onClose={handleCloseForm}
                onSecondaryButtonClick={handleCloseForm}
                onPrimaryButtonClick={handleCreateOrUpdateCustomObject}
            >
                <Spacings.Stack scale="m">
                    <FieldLabel
                        title={intl.formatMessage(keyInputLabel)}
                        hasRequiredIndicator={true}
                        htmlFor="createOrUpdateCustomObjectKey"
                        horizontalConstraint={7}
                    />
                    <TextInput id="createOrUpdateCustomObjectKey" value={key} onChange={(event) => {
                        setKey(event.target.value)
                    }} />
                    <FieldLabel
                        title={intl.formatMessage(valueInputLabel)}
                        hasRequiredIndicator={true}
                        htmlFor="createOrUpdateCustomObjectValue"
                        horizontalConstraint={7}
                    />
                    <TextInput id="createOrUpdateCustomObjectValue" value={value} onChange={(event) => {
                        setValue(event.target.value)
                    }} />
                </Spacings.Stack>
            </FormDialog>
        </Constraints.Horizontal>
    );
}
export default CreateOrUpdateCustomObjectsForm;