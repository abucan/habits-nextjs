import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { CustomFormFieldProps } from '@/types';

export const CustomFormField = ({
  name,
  label,
  placeholder,
}: CustomFormFieldProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <div className='flex flex-col w-full'>
            <FormControl>
              <input
                className='text-input'
                placeholder={placeholder}
                {...field}
                type={name === 'password' ? 'password' : 'text'}
              />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
