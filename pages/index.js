import Link from 'next/link';
import Tempo from './tempo';
function Home() {
    return <div>
        <h1>Home</h1>

        <Link href="/sobre">
        <a>Acessar a página sobre</a>
        </Link>
        
        </div>
}

export default Home