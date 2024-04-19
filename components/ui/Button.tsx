interface ButtonProps {
  icon: JSX.Element;
  notificationCount?: number;
}

export default function UIButton({ icon, notificationCount }: ButtonProps) {
  return (
    <button type='button' className='relative'>
      {icon}
      {notificationCount && (
        <span className='absolute w-4 h-4 text-[8px] rounded-full bg-orange-600 text-slate-50 -top-2 -right-1 flex items-center justify-center z-10'>
          {notificationCount}
        </span>
      )}
    </button>
  );
}