import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold">
        Bienvenue sur la page d&apos;accueil
      </h1>
      <Link href="/cart">Panier</Link>
    </main>
  );
}
