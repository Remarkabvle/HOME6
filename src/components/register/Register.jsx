import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    navigate('/purchase'); 
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="logo">
          <span>by</span><span>trend</span>
        </div>
        <input
          {...register('firstName', { required: t('first_name') + ' is required' })}
          placeholder={t('first_name')}
          className="form-input"
        />
        {errors.firstName && <p className="error">{errors.firstName.message}</p>}

        <input
          {...register('lastName', { required: t('last_name') + ' is required' })}
          placeholder={t('last_name')}
          className="form-input"
        />
        {errors.lastName && <p className="error">{errors.lastName.message}</p>}

        <input
          {...register('birthDate', { required: t('birth_date') + ' is required' })}
          type="date"
          placeholder={t('birth_date')}
          className="form-input"
        />
        {errors.birthDate && <p className="error">{errors.birthDate.message}</p>}

        <div className="radio-group">
          <label>
            <input
              {...register('gender', { required: t('gender') + ' is required' })}
              type="radio"
              value="female"
              className="form-radio"
            />
            {t('female')}
          </label>
          <label>
            <input
              {...register('gender', { required: t('gender') + ' is required' })}
              type="radio"
              value="male"
              className="form-radio"
            />
            {t('male')}
          </label>
        </div>
        {errors.gender && <p className="error">{errors.gender.message}</p>}

        <input
          {...register('skype')}
          placeholder={t('skype')}
          className="form-input"
        />

        <input
          {...register('promo')}
          placeholder={t('promo')}
          className="form-input"
        />

        <button type="submit" className="form-button">{t('continue')}</button>
      </form>
    </div>
  );
}

export default Register;
