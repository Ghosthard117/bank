import { Plus } from 'lucide-react';
import CardUser from "./CardUser";
import Image from 'next/image';

export default function Newsletter() {
  return (
    <section>
      <div className="space-y-10">
        <h5 className="text-purple-700 font-semibold">🪄 30 days free trial</h5>
        <h1 className="capitalize text-7xl font-bold">The best payments experience</h1>
        <p className='text-slate-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          distinctio.
        </p>

        {/* SUBSCRIBE SECTION */}
        <div className="relative">
          <input
            type="text"
            className="border-2 border-slate-900 bg-transparent outline-none p-4 pr-36 w-full rounded-full"
            placeholder="example@mail.com"
          />
          <button
            type="button"
            className="absolute bg-slate-900 text-slate-50 top-0 right-0 h-full rounded-full px-6"
          >Subscribe
          </button>
        </div>
      </div>

      <div>
        <h5 className='font-bold mb-5'>Send money to</h5>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <CardUser className='bg-black text-white gap-5 pt-8'>
            <span className='relative before:absolute before:w-8 before:h-8 before:bg-white flex items-center justify-center before:rotate-45 before:rounded-lg'>
              <Plus className='text-black relative z-10' />
            </span>
            <h5 className='text-center'>Add New Contact</h5>
          </CardUser>
          <CardUser>
            <div className='relative w-12 h-12 rounded-xl'>
              <Image
                src='/person1.webp'
                alt='Image'
                fill
                loading='lazy'
                className='object-cover rounded-xl'
              />
            </div>
            <h5 className='text-center'>
              Nath <br /> Donald
            </h5>
          </CardUser>
          <CardUser>
            <div className='relative w-12 h-12 rounded-xl'>
              <Image
                src='/person2.webp'
                alt='Image'
                fill
                loading='lazy'
                className='object-cover rounded-xl'
              />
            </div>
            <h5 className='text-center'>
              Leahal <br /> Nolan
            </h5>
          </CardUser>
        </div>
      </div>
    </section>
  )
}