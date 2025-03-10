import { Link, useActionData, useNavigation, useSubmit } from 'react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Icons } from '@/components/icons';

const emailRegex =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|co|io|info|biz|co.uk|us)$/;

const FormSchema = z.object({
  email: z
    .string()
    .min(5, 'Email is too short')
    .max(320, 'Email is too long')
    .regex(emailRegex, 'Invalid email format')
    .refine((email) => {
      const bannedDomains = [
        'mailinator.com',
        'tempmail.com',
        'disposable.com',
        'fakeinbox.com',
        'guerrillamail.com',
      ];
      const domain = email.split('@')[1];
      return !bannedDomains.includes(domain);
    }, 'Temporary emails are not allowed'),
});

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const submit = useSubmit();
  const navigation = useNavigation();
  const actionData = useActionData() as {
    error?: string;
    message?: string;
  };

  const isSubmitting = navigation.state === 'submitting';

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    try {
      submit(values, { method: 'post', action: '.' });
    } catch {
      toast.error('Something went wrong. Please try again!');
    }
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <Link to="#" className="flex flex-col items-center gap-2 font-medium">
            <div className="flex h-8 w-8 items-center justify-center rounded-md">
              <Icons.logo className="mr-2 h-6 w-6" aria-hidden="true" />
            </div>
            <span className="sr-only">Dir</span>
          </Link>
          <h1 className="text-xl font-bold">Welcome to Dir</h1>
          <div className="text-center text-sm">
            Already had an account?{' '}
            <a href="/login" className="underline underline-offset-4">
              Sign In
            </a>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
            autoComplete="off"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="example@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {actionData?.error && (
              <p className="text-xs text-red-400">{actionData.error}</p>
            )}
            <Button
              type="submit"
              className="mt-2 w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Checking...' : 'Continue'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
