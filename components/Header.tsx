import Image from "next/image";
import Navbar from "./Navbar";
import { Wallet, Bell } from 'lucide-react';
import UIButton from "./ui/Button";

const ProfileImage = () => (
  <div className='relative w-8 h-8 rounded-full cursor-pointer'>
    <Image
      src='/profile.webp'
      alt='Profile Image'
      fill
      loading='lazy'
      blurDataURL='https://res.cloudinary.com/jotredev/image/upload/v1697568346/ElementumUI/hombres/onrie-ampliamente-esperando-sorpresa_rcgn7i.webp'
      className='object-cover rounded-full'
    />
  </div>
)

export default function Header() {
  return (
    <header
      className="hidden lg:block fixed left-0 top-0 w-full py-5 px-5 md:px-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <section>
          <h1 className='text-3xl font-medium'>Bank.c</h1>
        </section>
        <section>
          <Navbar />
        </section>
        <section>
          <ul className='flex items-center gap-6'>
            <li>
              <UIButton icon={<Wallet size={20} />} />
            </li>
            <li>
              <UIButton icon={<Bell size={20} />} notificationCount={2} />
            </li>
            <li>
              <ProfileImage />
            </li>
          </ul>
        </section>
      </div>
    </header>
  )
}