import Link from 'next/link';

export default () => (
    <div>
        <Link href='/'><a data-testid='link-home'>Home</a></Link>
        <Link href='/about'><a data-testid='link-about'>About</a></Link>
        {/* If this route is reloaded explicitly, then a 404 will be thrown. */}
        <Link href='/other/resource?id=1' as='/resource/1'><a>Resource</a></Link>
        <style jsx>{`
            a {
                margin-right: 15px;
            }
        `}</style>
    </div>
)
