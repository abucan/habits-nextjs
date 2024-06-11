declare interface CustomFormFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
}

declare interface AuthHeaderProps {
  type: 'login' | 'register';
  title?: string;
  description?: string;
}

declare interface RegisterProps {
  username?: string;
  email: string;
  password: string;
}

declare interface LoginProps {
  email: string;
  password: string;
}

declare interface SidebarItemProps {
  icon: IconType;
  label: string;
  href: string;
  isPro?: boolean;
  isDisabled?: boolean;
}
