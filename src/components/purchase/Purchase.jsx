import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const Purchase = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="logo">
          <span>by</span><span>trend</span>
        </div>
        <input
          {...register('itemName', { required: t('item_name') + ' is required' })}
          placeholder={t('item_name')}
          className="form-input"
        />
        {errors.itemName && <p className="error">{errors.itemName.message}</p>}

        <input
          {...register('quantity', { required: t('quantity') + ' is required', valueAsNumber: true })}
          type="number"
          placeholder={t('quantity')}
          className="form-input"
        />
        {errors.quantity && <p className="error">{errors.quantity.message}</p>}

        <input
          {...register('price', { required: t('price') + ' is required', valueAsNumber: true })}
          type="number"
          placeholder={t('price')}
          className="form-input"
        />
        {errors.price && <p className="error">{errors.price.message}</p>}

        <textarea
          {...register('description')}
          placeholder={t('description')}
          className="form-input"
        />

        <button type="submit" className="form-button">{t('continue')}</button>
      </form>
    </div>
  );
}

export default Purchase;
