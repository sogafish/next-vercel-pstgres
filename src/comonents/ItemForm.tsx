import { Item } from '@prisma/client';
import { useForm } from 'react-hook-form';
import { METHODS } from 'http';

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

  console.log(watch("title"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="title" {...register("title", { required: true })} />
      {errors.title && <span>This field is required</span>}
      <input placeholder="description" {...register("description")} />
      <input type="submit" />
    </form>
  );
};
