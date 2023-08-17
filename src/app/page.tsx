import Carrosel from '@/components/carrosel'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <header className='flex justify-around items-center mt-5'>
      <div className='flex gap-1 items-center'>
      <Image 
          src="/logo.svg" 
          width={50} 
          height={50}
          alt='Logo'
        />
        <p className='font-extrabold'>FLIGHT 360</p>
      </div>

      <ul className='flex gap-8 items-center'>
        <li>Shop</li>
        <li>About</li>
        <li>Explore</li>
      </ul>

      
      <ul className='flex gap-8 items-center'>
          <li>Login</li>
          <li>
          <Image 
          src="/iconoir.svg" 
          width={40} 
          height={40}
          alt='carrinho'
          />
          </li>
          <li>Menu</li>
        </ul>
    </header>
    <section>
      <div className='flex justify-center items-center'>
        <h1 className='flex flex-col py-40'>
          <p className='font-black text-5xl'>Get you hands on the most</p>
          
          <p className='text-5xl'>advanced <span className='font-black'> drones </span></p>
        </h1>
      </div>

      <section>
        <div>
              <p>Nemo enim ipsam voluptatem quia voluptas sit <br /> aspernatur aut odit aut fugit, sed quia <br /> consequuntur magni dolores eos qui ratione Ut <br /> enim ad minima veniam, quis nostrum <br /> exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi <br /> consequatur? Quis autem.</p>
              <div>
                  <button>
                    add to cart
                  </button>
                <div>
                    <button>Play</button>
                    <p>View Video</p>
                  </div>
                </div>
          </div> 
        </section>
        
    </section>
    </>
    )
}
