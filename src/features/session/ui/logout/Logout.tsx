import { useLogout } from '../../model/hooks/useLogout';

import { Button } from '@/shared/ui/button/Button';

export const Logout = () => {
  const { handleLogout } = useLogout();
  return (
    <Button
      className='mb-4 flex flex-row items-center rounded-md border border-neutral-300 px-[21px] py-1.5 duration-100 ease-in hover:bg-zinc-200'
      onClick={handleLogout}
    >
      <>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 25 26'
          className='mr-2.5'
          height='26'
          fill='none'
          width='25'
        >
          <path
            d='M12.5 3.625C7.33032 3.625 3.125 7.83032 3.125 13C3.125 18.1697 7.33032 22.375 12.5 22.375C15.6647 22.375 18.4692 20.8033 20.166 18.3955L18.8965 17.4922C17.4835 19.5002 15.1489 20.8125 12.5 20.8125C8.17566 20.8125 4.6875 17.3243 4.6875 13C4.6875 8.67566 8.17566 5.1875 12.5 5.1875C15.1489 5.1875 17.4805 6.49976 18.8965 8.50781L20.166 7.60449C18.4692 5.19666 15.6647 3.625 12.5 3.625ZM18.2373 9.31348L17.1143 10.4365L18.8965 12.2188H9.375V13.7812H18.8965L17.1143 15.5635L18.2373 16.6865L21.3623 13.5615L21.8994 13L21.3623 12.4385L18.2373 9.31348Z'
            fill='black'
          />
        </svg>
        <span className='font-medium'>Выйти</span>
      </>
    </Button>
  );
};