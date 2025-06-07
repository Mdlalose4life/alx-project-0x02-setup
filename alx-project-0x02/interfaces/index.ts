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
    tittle: string;
    style: string;
  }