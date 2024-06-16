import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { CustomFormFieldProps } from '@/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { icons } from '@/lib/icons';

export const CustomIconSelect = ({
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
        <FormItem className='w-full'>
          <FormLabel>{label}</FormLabel>
          <div className='flex flex-col w-full'>
            <FormControl>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <SelectTrigger className='text-2xl'>
                  <SelectValue
                    placeholder='Select a icon'
                    className='text-3xl'
                  />
                </SelectTrigger>
                <SelectContent>
                  {icons.map(({ iconName, icon }) => {
                    const Icon = icon;
                    return (
                      <SelectItem
                        key={iconName}
                        value={iconName}
                        className='text-xl'
                      >
                        <Icon />
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
