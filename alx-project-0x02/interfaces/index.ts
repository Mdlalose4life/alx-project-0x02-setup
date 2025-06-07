export interface CardProps{
    title: string;
    content: string;
}

export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: { title: string; content: string }) => void;
  }

  export interface ButtonProp {
    tittle: string;
    style: string;
  }