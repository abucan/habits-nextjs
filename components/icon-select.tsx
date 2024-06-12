import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { CustomFormFieldProps } from '@/types';
import { HiAcademicCap } from 'react-icons/hi';
import { HiCalculator } from 'react-icons/hi';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const icons = [
  {
    iconName: 'cap',
    icon: <HiAcademicCap />,
  },
  {
    iconName: 'cap-2',
    icon: <HiCalculator />,
  },
];

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
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <div className='flex flex-col w-full'>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className='w-[80px]'>
                  <SelectValue defaultValue={field.name} />
                </SelectTrigger>
                <SelectContent>
                  {icons.map(({ iconName, icon }) => (
                    <SelectItem key={iconName} value={iconName}>
                      {icon}
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
