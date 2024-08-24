import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-black text-white py-2 text-center">
      <p>
        &copy; {year} Developed By{' '}
        <Link
          className="underline"
          href="http://github.com/Dev-Waqas232"
          target="_blank"
        >
          Dev-Waqas232
        </Link>
        <span> All Rights Reserved.</span>
      </p>
    </div>
  );
}
