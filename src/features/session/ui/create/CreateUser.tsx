import { useCreateUser } from '../../model/hooks/useCreate';
import { useResetSessionError } from '../../model/hooks/useResetSessionError';

import { EmailIcon } from '@/shared/assets/icons/EmailIcon';
import { LockIcon } from '@/shared/assets/icons/LockIcon';
import { PersonIcon } from '@/shared/assets/icons/PersonIcon';
import {
  DEFAULT,
  DEFAULT_CLASS,
  ERROR,
  ERROR_CLASS,
  VALID,
  VALID_CLASS,
} from '@/shared/constant/classes';
import { applyClass } from '@/shared/lib/apply-class';
import { Button } from '@/shared/ui/button/Button';
import { CustomInput } from '@/shared/ui/input/Input';

export const CreateUser = () => {
  const { Controller, control, errors, handleSubmit, onSubmit, status } = useCreateUser();

  const { error: createError, handleResetError } = useResetSessionError();

  return (
    <form onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
      <div className='flex flex-col px-[4.5px]'>
        <Controller
          render={({ field, fieldState }) => (
            <CustomInput
              {...field}
              icon={
                <PersonIcon
                  fill={applyClass(
                    errors.userName?.message ?? createError,
                    ERROR,
                    VALID,
                    fieldState.isTouched,
                    DEFAULT
                  )}
                />
              }
              className={applyClass(
                errors.userName?.message ?? createError,
                ERROR_CLASS,
                VALID_CLASS,
                fieldState.isTouched,
                DEFAULT_CLASS
              )}
              onChange={(value) => {
                field.onChange(value);
                handleResetError();
              }}
              errors={errors.userName}
              placeholder='Name'
              type='text'
              gap='mb-4'
            />
          )}
          control={control}
          name='userName'
        />
        <Controller
          render={({ field, fieldState }) => (
            <CustomInput
              {...field}
              icon={
                <EmailIcon
                  fill={applyClass(
                    errors.email?.message ?? createError,
                    ERROR,
                    VALID,
                    fieldState.isTouched,
                    DEFAULT
                  )}
                />
              }
              className={applyClass(
                errors.email?.message ?? createError,
                ERROR_CLASS,
                VALID_CLASS,
                fieldState.isTouched,
                DEFAULT_CLASS
              )}
              onChange={(value) => {
                field.onChange(value);
                handleResetError();
              }}
              placeholder='email@test.com'
              errors={errors.email}
              type='text'
              gap='mb-4'
            />
          )}
          control={control}
          name='email'
        />

        <Controller
          render={({ field, fieldState }) => (
            <CustomInput
              icon={
                <LockIcon
                  fill={applyClass(
                    errors.password?.message ?? createError,
                    ERROR,
                    VALID,
                    fieldState.isTouched,
                    DEFAULT
                  )}
                />
              }
              errors={errors.password}
              placeholder='password'
              type='password'
              gap='mb-4'
              {...field}
              className={applyClass(
                errors.password?.message ?? createError,
                ERROR_CLASS,
                VALID_CLASS,
                fieldState.isTouched,
                DEFAULT_CLASS
              )}
              onChange={(value) => {
                field.onChange(value);
                handleResetError();
              }}
            />
          )}
          control={control}
          name='password'
        />
      </div>

      <Button
        className='w-full rounded-md bg-black py-[13px] font-medium text-white disabled:bg-neutral-300 disabled:text-white'
        disabled={status === 'pending'}
        type='submit'
      >
        Создать аккаунт
      </Button>
    </form>
  );
};