import Link from 'next/link';

export default () => (
    <div>
        <ul>
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/about'><a>About</a></Link></li>

            {/* If this route is reloaded explicitly, then a 404 will be thrown. */}
            <li><Link href='/other/resource?id=1' as='/resource/1'><a>Resource</a></Link></li>
        </ul>
        <style jsx>{`
            ul {
                list-style: none;
                display: inline;
                padding: 0;
            }

            ul li {
                display: inline;
                margin-right: 1rem;
            }
        `}</style>
    </div>
)
