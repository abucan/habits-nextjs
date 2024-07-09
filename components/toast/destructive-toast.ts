import { useToast } from '../ui/use-toast';

export const showToast = () => {
  const { toast } = useToast();

  toast({
    variant: 'destructive',
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
  });
};
