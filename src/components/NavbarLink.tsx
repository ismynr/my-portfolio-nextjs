import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  url: string
  name: string
  classes?: string
}

export default function NavbarLink({ ...props }: Props) {
  const { asPath, pathname } = useRouter();
  let activeClass = pathname == props.url ? 'bg-primary text-primary-content':''
  
  return (
    <Link href={props.url} passHref legacyBehavior>
      <a className={activeClass+' '+props.classes} href={props.url}>{props.name}</a>
    </Link>
  )
}