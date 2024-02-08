import { ReactNode } from 'react';

function FormControl({ children }: { children: ReactNode }) {
  return <div className="mb-[18px] flex flex-col group">{children}</div>;
}

function Label(props: { children?: ReactNode; htmlFor: string }) {
  return (
    <label
      htmlFor={props.htmlFor}
      className="mb-1.5 text-sm group-focus-within:text-primary"
    >
      {props.children}
    </label>
  );
}

function Input(props: { id: string; placeholder: string }) {
  return (
    <input
      type="text"
      id={props.id}
      placeholder={props.placeholder}
      className="border-2 border-gray-300 px-4 py-5 rounded-xl text-sm focus:border-primary focus:outline-none"
    />
  );
}

FormControl.Label = Label;
FormControl.Input = Input;

export default FormControl;
