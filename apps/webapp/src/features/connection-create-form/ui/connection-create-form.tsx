import { Button } from '@webapp/ui-kit'
import {
  ConnectionCreateDto,
  ConnectionEntity,
  ConnectionEntityTypeEnum,
} from '../../../shared/api/generated/connectors'
import { observer } from 'mobx-react-lite'
import { UseFormReturn } from 'react-hook-form'
import { ConnectionCreateValues } from '../model/connection-create.values'
import { FormField, FormSelect } from '@webapp/form'
export const ConnectionCreateForm = observer(
  ({
    form,
    onSubmit,
    loading
  }: {
    loading: boolean
    form: UseFormReturn<ConnectionCreateValues>
    onSubmit: (dto: Partial<ConnectionCreateDto>) => Promise<ConnectionEntity>
  }) => {
    console.log(form.watch())
    return (
      <form
        onSubmit={form.handleSubmit(values =>
          onSubmit({
            ...values,
            type: values.type as ConnectionEntityTypeEnum,
          }),
        )}
        className="flex flex-col gap-7 p-5 min-w-[550px]"
      >
        <FormField control={form.control} name="name" label="Connection name" />
        <FormSelect
          name="type"
          label="Connection type"
          control={form.control}
          options={[
            {
              value: ConnectionEntityTypeEnum.AMAZON_S3_V2,
              label: 'Amazon S3 V2',
            },
            {
              value: ConnectionEntityTypeEnum.CSV_FILE,
              label: 'CSV File',
            },

            {
              value: ConnectionEntityTypeEnum.FTP,
              label: 'FTP',
            },
            {
              value: ConnectionEntityTypeEnum.MSD,
              label: 'MSD',
            },
            {
              value: ConnectionEntityTypeEnum.MS_ACCESS,
              label: 'MS Access',
            },
            {
              value: ConnectionEntityTypeEnum.ORACLE,
              label: 'Oracle',
            },
            {
              value: ConnectionEntityTypeEnum.SALESFORCE,
              label: 'Salesforce',
            },
          ]}
        />
        <FormField control={form.control} name="database" label="Database" />

        <FormField
          control={form.control}
          name="description"
          label="Description"
        />
        <Button loading={loading} filled type="submit" color="green" size="md" className="w-full">
          Create
        </Button>
      </form>
    )
  },
)
