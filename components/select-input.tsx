import { useFormContext } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { CustomFormFieldProps } from '@/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export const CustomSelect = ({
  name,
  label,
  placeholder,
  list,
  isEdit,
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
                disabled={isEdit}
              >
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {list &&
                    list.map((item, ind) => (
                      <SelectItem key={ind} value={item}>
                        {item}
                      </SelectItem>
                    ))}
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
