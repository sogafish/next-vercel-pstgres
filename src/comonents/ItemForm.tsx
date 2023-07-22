import { Item } from '@prisma/client';
import { useForm } from 'react-hook-form';
import { METHODS } from 'http';
import { css } from '../../styled-system/css';

type Props = {
  successCallback: (v: Item) => void;
};

type FormData = {
  title: string;
  description?: string;
};

export const ItemForm = ({ successCallback }: Props) => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    fetch('/api/item', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    .then(async (data: Response) => {
      const res = await data.json();
      reset();
      successCallback(res?.data);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css({ flexDirection: 'column', display: 'flex' })}>
    <input className={titleInputStyle} placeholder="title" {...register("title", { required: true })} />
    {errors.title ?
      <span className={css({ fontSize: '12px', color: 'red.400' })}>This field is required</span>
      : <span className={css({ height: 4 })} />
    }
    <textarea className={descriptionInputStyle} placeholder="description" {...register("description")} />
    <button type="submit" className={buttonStyle}>SUBMIT</button>
    </form>
  );
};

const titleInputStyle = css({
  borderWidth: '1px',
  borderColor: 'gray.300',
  borderRadius: 4,
  padding: 1,
});

const descriptionInputStyle = css({
  mt: 4,
  borderWidth: '1px',
  borderColor: 'gray.300',
  borderRadius: 4,
  padding: 1,
});
const buttonStyle = css({
  mt: 4,
  borderWidth: '1px',
  borderColor: 'gray.300',
  borderRadius: 4,
  display: 'inline-block',
  padding: 1,
  width: 'auto',
  background: 'BEAVER',
  cursor: 'pointer',
  color: 'white',
  _hover: {
    background: 'PALE_DOGWOOD'
  },
});
