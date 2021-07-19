import Link from 'next/link';

const Index = () => (
  <div tw="grid justify-center items-center h-screen space-y-20">
    <div tw="space-y-20">
      <Link href="/admin">
        <a>To Admin Page</a>
      </Link>
    </div>
  </div>
);

export default Index;
