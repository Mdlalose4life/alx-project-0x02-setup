export interface CardProps{
    title: string;
    content: string;
}

export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: { title: string; content: string }) => void;
  }

  export interface ButtonProps {
    size: 'small' | 'medium' | 'large'
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  }


export interface PostProps {
    title: string;
    content: string;
    userId: string;
}

export interface UserProps {
  name: string;
  email: string;
  address: string;
}