import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/eventizLogo.png"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <p className="font-semibold">2024 Eventiz. Tous Droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer