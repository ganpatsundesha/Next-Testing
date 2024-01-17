import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
    return (
        <main >
            <h1>hello World</h1>
            <Link href="/users">Go to Users</Link>
            <ProductCard />
        </main>
    )
}
