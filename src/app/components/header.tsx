import Link from 'next/link';

export function Header(){
  return(
    <header className='flex justify-between content-center header1'>
      <div className='font-bold text-2xl'>
        <Link href={'/'}>Poder360</Link>
      </div>

      <nav>
        <ul className='flex gap-4'>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/sobre'}>Sobre</Link>
          </li>
          <li>
            <Link href={'/contato'}>Contato</Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}