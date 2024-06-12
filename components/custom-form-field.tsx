import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { CustomFormFieldProps } from '@/types';
import { Textarea } from './ui/textarea';

export const CustomFormField = ({
  name,
  label,
  placeholder,
  isTextArea,
}: CustomFormFieldProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='w-full'>
          <FormLabel>{label}</FormLabel>
          <div className='flex flex-col w-full'>
            <FormControl>
              {!isTextArea ? (
                <input
                  className='text-input'
                  placeholder={placeholder}
                  {...field}
                  type={name === 'password' ? 'password' : 'text'}
                />
              ) : (
                <Textarea
                  placeholder={placeholder}
                  className='resize-none'
                  {...field}
                />
              )}
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
